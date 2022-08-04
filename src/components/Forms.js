import React from 'react';
import {
  FormControl,
  FormLabel,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Button,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
export default function Forms() {
  const formik = useFormik({
    initialValues: {
      maxCalories: '100',
      minProtein: '0',
      dietType: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <Box
        margin={['25px 10px', '40px 300px']}
        as="form"
        onSubmit={formik.handleSubmit}
      >
        <FormControl>
          <FormLabel>Max calories</FormLabel>
          <NumberInput
            max={2000}
            min={100}
            step={100}
            id="maxCalories"
            name="maxCalories"
            type="maxCalories"
            onChange={value => formik.setFieldValue('maxCalories', value)}
            defaultValue="100"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Min protein</FormLabel>
          <NumberInput
            max={100}
            min={0}
            step={5}
            id="minProtein"
            name="minProtein"
            type="minProtein"
            onChange={value => formik.setFieldValue('minProtein', value)}
            defaultValue="0"
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Diet type:</FormLabel>
          <Select
            placeholder="N/A"
            id="dietType"
            name="dietType"
            type="dietType"
            onChange={formik.handleChange}
          >
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="ovo vegetarian">Ovo Vegetarian</option>
            <option value="lacto vegetarian">Lacto Vegetarian</option>
          </Select>
          <Button type="submit">Submit</Button>
        </FormControl>
      </Box>
    </div>
  );
}
