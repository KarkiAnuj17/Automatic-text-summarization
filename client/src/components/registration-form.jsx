'use client'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios';

const RegistrationForm = () => {

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      gender: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'Full name must be at least 3 characters long')
        .required('Full name is required'),
      phoneNumber: Yup.number()
        .typeError('Phone number must be a number')
        .required('Phone number is required'),
      gender: Yup.string()
        .oneOf(['Male', 'Female', 'Other'], 'Invalid gender selection')
        .required('Gender is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Password is required'),
    }),
    onSubmit: values => {
      handleRegister(values)},
  })
  
  const handleRegister = async (values)=>{
    const {data}= await axios.post('http://localhost:9000/register', values);
    if(data) alert("registered successfully")
    };

  return (
    (<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">Sign up to get started with our service</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName} />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-sm text-red-500">{formik.errors.fullName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="1234567890"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber} />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <p className="text-sm text-red-500">{formik.errors.phoneNumber}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                name="gender"
                onValueChange={(value) => formik.setFieldValue('gender', value)}
                defaultValue={formik.values.gender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {formik.touched.gender && formik.errors.gender && (
                <p className="text-sm text-red-500">{formik.errors.gender}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />
              {formik.touched.email && formik.errors.email && (
                <p className="text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password} />
              {formik.touched.password && formik.errors.password && (
                <p className="text-sm text-red-500">{formik.errors.password}</p>
              )}
            </div>
            <Button type="submit" className="w-full" >
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-600">
          Already have an account? <a href="#" className="font-medium text-primary hover:underline">Sign in</a>
        </CardFooter>
      </Card>
    </div>)
  );
}

export default RegistrationForm

