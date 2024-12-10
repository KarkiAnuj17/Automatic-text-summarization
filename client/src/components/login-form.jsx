'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'

const LoginForm = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required'),
    }),
    onSubmit: values => {
      handlelogin(values)},
  })
  const handlelogin = async (values)=>{
    const {data}= await axios.post('http://localhost:9000/login', values);
    if(data) alert("registered successfully")
    };


  return (
    (<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  checked={formik.values.rememberMe}
                  onCheckedChange={(checked) => formik.setFieldValue('rememberMe', checked)} />
                <Label
                  htmlFor="rememberMe"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full" >
                Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-600">
          Don't have an account? <a href="#" className="font-medium text-primary hover:underline">Sign up</a>
        </CardFooter>
      </Card>
    </div>)
  );
}

export default LoginForm

