import React from "react";
import { Input } from "./Input";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { Button } from "./Button";
import { useData } from "./DateContext";

const schema = yup.object().shape({
  lastPass: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

export default function Step2() {
  const { data, setValues } = useData();
  const { reg, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
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
          id="lastPass"
          type="password"
          label="lastPass"
          name="lastPass"
          errors={!!errors.lastPass}
          helperText={errors?.lastPass?.message}
          required
        />
        <Button>Next</Button>
      </form>
    </div>
  );
}
