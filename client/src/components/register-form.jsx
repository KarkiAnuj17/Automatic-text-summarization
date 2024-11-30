'use client'

import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Eye, EyeOff } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .required('Full name is required'),
  phoneNumber: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'Please select a valid gender')
    .required('Gender is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
})

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const initialValues = {
    fullName: '',
    phoneNumber: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const handleSubmit = (values, {
    setSubmitting
  }) => {
    console.log(values)
    toast({
      title: 'Registration Successful',
      description: 'You have successfully registered!',
    })
    setSubmitting(false)
  }

  return (
    (<div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-20 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 transform rotate-45 scale-150"></div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-purple-400 to-pink-500 mix-blend-multiply transform -rotate-45 scale-150"></div>
      </div>
      <div
        className="w-full max-w-md p-8 space-y-4 bg-white bg-opacity-90 rounded-lg shadow-xl backdrop-blur-sm relative z-10">
        <h1 className="text-3xl font-bold text-center text-indigo-700">Register</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-indigo-600">Full name</Label>
                <Field
                  as={Input}
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full mt-1 border-indigo-300 focus:border-indigo-500" />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Label htmlFor="phoneNumber" className="text-indigo-600">Phone number</Label>
                <Field
                  as={Input}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+1234567890"
                  className="w-full mt-1 border-indigo-300 focus:border-indigo-500" />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Label className="text-indigo-600">Gender</Label>
                <Field name="gender">
                  {({
                    field
                  }) => (
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 mt-1">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="font-normal text-gray-700">Male</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="font-normal text-gray-700">Female</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="font-normal text-gray-700">Other</Label>
                      </div>
                    </RadioGroup>
                  )}
                </Field>
                <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Label htmlFor="email" className="text-indigo-600">Email</Label>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="w-full mt-1 border-indigo-300 focus:border-indigo-500" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Label htmlFor="password" className="text-indigo-600">Password</Label>
                <div className="relative mt-1">
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="w-full border-indigo-300 focus:border-indigo-500" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-indigo-600"
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-indigo-400 text-sm mt-1">Password must be at least 6 characters long.</p>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-indigo-600">Confirm Password</Label>
                <div className="relative mt-1">
                  <Field
                    as={Input}
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    className="w-full border-indigo-300 focus:border-indigo-500" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-indigo-600"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1" />
              </div>

              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : 'Register'}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>)
  );
}

