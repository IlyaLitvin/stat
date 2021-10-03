import React from "react";
import { Input } from "./Input";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "./Button";
import { useData } from "./DateContext";

const schema = yup.object().shape({
  code: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

export default function Step2() {
  const { data, setValues } = useData();
  const { reg, handleSubmit, errors } = useForm({
    defaultValues: { email: data.email },
    mode: "onBlur",
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("/reg2");
    setValues(data);
  };

  return (
    <div>
      <h1>step 2</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={reg}
          id="code"
          type="password"
          label="code"
          name="code"
          errors={!!errors.code}
          helperText={errors?.code?.message}
          required
        />
        <Button>Next</Button>
      </form>
    </div>
  );
}
