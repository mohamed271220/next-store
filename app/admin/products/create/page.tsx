import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faker } from "@faker-js/faker";

import { createProductAction } from "@/utils/actions";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/form/Buttons";

const CreateProduct = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 20 });

  return (
    <section className="text-2xl font-semibold mb-8 capitalize">
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              name="name"
              type="text"
              label="Product Name"
              defaultValue={name}
            />
            <FormInput
              name="company"
              type="text"
              label="Company"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="Featured" />
          </div>
          <SubmitButton text="Create Product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProduct;
