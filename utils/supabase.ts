import { createClient } from "@supabase/supabase-js";

const bucket = "Images-bucket";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: "3600",
    });

  if (error) {
    console.error("Supabase upload error:", error);
    throw new Error("Image upload failed");
  }

  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = async (imagePath: string) => {
  const imageName = imagePath.split("/").pop();
  if (!imageName) throw new Error("Invalid image path");
  return supabase.storage.from(bucket).remove([imageName]);
};