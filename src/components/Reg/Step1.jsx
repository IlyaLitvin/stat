import React from "react";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { useHistory } from "react-router-dom";
import { useData } from "./DateContext";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  email: yup
    .string()
    .email("Should have corrent email")
    .required("email is a required field"),
  firstPass: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
  lastPass: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

const Step1 = () => {
  const { data, setValues } = useData();
  const { reg, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, email: data.email },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("/reg3");
    setValues(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={reg}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          errors={!!errors.firstName}
          helperText={errors?.firstName?.message}
          required
        />
        <Input
          ref={reg}
          id="email"
          type="text"
          label="Email"
          name="email"
          errors={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        <Input
          ref={reg}
          id="firstPass"
          type="text"
          label="firstPass"
          name="firstPass"
          errors={!!errors.firstPass}
          helperText={errors?.firstPass?.message}
          required
        />
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
};

export default Step1;
