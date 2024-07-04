import { FaFacebook, } from "react-icons/fa6";
import { TbMailHeart, } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsPersonFillAdd, BsPersonHeart } from "react-icons/bs";
import Lottie from "lottie-react";
import animationSignUp from '../../../public/SignUp Tree.json';
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';




const SignUp = () => {
      const { createUser, signInWithGoogle, signInWithFacebook } = useState();
      const [showPassword, setShowPassword] = useState(false);
      const [showPassword2 , setShowPassword2] = useState(false)
      const [isChecked, setIsChecked] = useState(false);
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();


      const onSubmit = (data) => {
            if (data.password !== data.confirmPassword) {
                  toast.error('Passwords Dose not match');
                  return;
            }
            console.log(data);
            handleSignUp(data);
            reset();
      };


      const handleCheckboxChange = () => {
            setIsChecked(!isChecked);
      };


      const handleSignUp = async (data) => {
            try {
                  const result = await createUser(data.email, data.password);
                  console.log(result);
                  toast.success('Signed up');
                  if (isChecked) {
                        localStorage.setItem('password', data.password);
                  } else {
                        localStorage.removeItem('password');
                  }
                  setPassword('');
                  setConfirmPassword('');
            } catch (error) {
                  console.error('Error signing up:', error);
                  toast.error('Sign up Failed');
            }
      };


      const togglePassword = () => {
            setShowPassword(!showPassword);
      };
      const toggleConfirmPassword = () => {
            setShowPassword2(!showPassword2);
      };

      const handleGoogleSignIn = async () => {

            try {
                  await signInWithGoogle();
                  toast.success(' Signed Up ')

            } catch (error) {
                  toast.error(error.message)
            }
      }


      const handleFacebookSignIn = async () => {
            try {
                  await signInWithFacebook();
                  toast.success(' Signed Up ')
            } catch (error) {
                  console.error("Error signing in with Facebook", error);
                  // Handle error
            }
      };

      return (
            <div>
                  <div className="py-[250px] md:py-56 md:h-[900px]  ">
                        <div className="container md:h-[670px] h-[920px] flex flex-col md:flex-row items-center justify-center ">
                              {/* left */}


                              <div className="bg-secondary  md:rounded-l-xl rounded-xl md:rounded-none md:h-[650px] h-[890px] w-96 flex items-center justify-center md:justify-start">
                                    <div className="text-center  mt-[228px]">
                                          <h2 className="text-3xl font-medium text-white mb-5">
                                                Connect With Us <br /> <span className="font-semibold text-4xl">  myStore💛</span>
                                          </h2>
                                          <div className="ml-24">
                                                <Lottie animationData={animationSignUp} style={{ height: '200%', width: '70%' }} />
                                          </div>
                                    </div>
                              </div>
                              {/* right */}

                              <div className="md:w-[47%] md:h-[650px] h-[950px]  md:my-20 my-36 md:-ml-5 bg-white md:rounded-l-xl rounded-xl  border md:border">
                                    <div className="md:p-[30px] p-5 space-y-4">
                                          <div className="px-2 space-y-3">
                                                <h2 className="font-bold text-4xl">Sign Up ✌️</h2>
                                                <p className="text-base font-normal">Create A New Account On myStore </p>
                                          </div>

                                          <form onSubmit={handleSubmit(onSubmit)} className="">
                                                {/* 1st */}
                                                <div className="flex md:flex-row flex-col gap-4 mb-6 justify-center items-center">
                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("firstName", { required: "First Name is required" })}
                                                                        aria-invalid={errors.firstName ? "true" : "false"}
                                                                        type="text"
                                                                        placeholder="First Name"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-secondary  active:border-secondary  disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <BsPersonHeart size={20} className="hover:text-secondary" />
                                                                  </span>
                                                                  {errors.firstName && (
                                                                        <p role="alert" className="absolute right-0 top-12 text-red-500">
                                                                              {errors.firstName.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("lastName", { required: "Last Name is required" })}
                                                                        aria-invalid={errors.lastName ? "true" : "false"}
                                                                        type="text"
                                                                        placeholder="Last Name"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-secondary  active:border-secondary  disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <BsPersonFillAdd size={20} className="hover:text-secondary" />
                                                                  </span>
                                                                  {errors.lastName && (
                                                                        <p role="alert" className="absolute right-0 top-12 text-red-500">
                                                                              {errors.lastName.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* 2nd */}
                                                <div className="flex md:flex-row flex-col gap-5 mb-6 justify-center items-center">
                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("email", { required: "Email is required" })}
                                                                        aria-invalid={errors.email ? "true" : "false"}
                                                                        type="email"
                                                                        placeholder="info@yourmail.com"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-secondary active:border-secondary disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <TbMailHeart size={20} className="hover:text-secondary" />
                                                                  </span>
                                                                  {errors.email && (
                                                                        <p role="alert" className="absolute right-0 top-12 text-red-500">
                                                                              {errors.email.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>

                                                      <div className="w-full">
                                                            <div className="relative text-dark-3">
                                                                  <PhoneInput
                                                                        country={'bd'}
                                                                        value={''} // you can set the initial value if you have one
                                                                        onChange={(phone) => setValue('phone', phone)}
                                                                        inputStyle={{
                                                                              width: '100%',
                                                                              height:'14%',
                                                                              marginTop: '10px',
                                                                              backgroundColor: 'transparent',
                                                                              borderRadius: '0.75rem', // 12px
                                                                              borderColor: '#3232',
                                                                           
                                                                              paddingTop: '14px',
                                                                              paddingBottom: '14px',
                                                                              paddingRight: '2rem', // adjust as needed
                                                                              paddingLeft: '2.9rem', // adjust as needed
                                                                              color: '#323231',
                                                                              outline: 'none',
                                                                              transition: 'border-color 0.3s ease',
                                                                              boxShadow:'inherit',
                                                                              hover: {
                                                                                    color: '#ed500c',
                                                                              },
                                                                        }}
                                                                        containerStyle={{
                                                                              width: '100%',
                                                                              position: 'relative',
                                                                             
                                                                        }}
                                                                        buttonStyle={{
                                                                              position: 'absolute',
                                                                              padding:'10',
                                                                              hover: {
                                                                                    color: '#ed500c',
                                                                              },
                                                                        }}
                                                                  />
                                                                  {errors.phone && (
                                                                        <p role="alert" className="absolute right-0 top-12 text-red-500">
                                                                              {errors.phone.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>

                                                </div>

                                                {/* 3rd */}
                                                <div className="flex md:flex-row flex-col gap-5 mb-6 justify-center items-center">
                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("password", { required: "Password is required" })}
                                                                        aria-invalid={errors.password ? "true" : "false"}
                                                                        type={showPassword ? 'text' : 'password'}
                                                                        value={password}
                                                                        onChange={(e) => setPassword(e.target.value)}
                                                                        placeholder="New Password"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-secondary active:border-secondary disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <RiLockPasswordLine size={20} className="hover:text-secondary" />
                                                                  </span>
                                                                  <span className="absolute top-[15px] right-4 cursor-pointer" onClick={togglePassword}>
                                                                        {showPassword ? <AiFillEye size={20} className="hover:text-secondary" /> : <AiFillEyeInvisible size={20} className="hover:text-secondary" />}
                                                                  </span>
                                                                  {errors.password && (
                                                                        <p role="alert" className="absolute right-0 -bottom-7 text-red-500">
                                                                              {errors.password.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                      <div className="w-full">
                                                            <div className='relative text-dark-3'>
                                                                  <input
                                                                        {...register("confirmPassword", { required: "Confirm Password is required" })}
                                                                        aria-invalid={errors.confirmPassword ? "true" : "false"}
                                                                        type={showPassword2 ? 'text' : 'password'}
                                                                        value={confirmPassword}
                                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                                        placeholder="Confirm Password"
                                                                        className="w-full mt-[3px] bg-transparent rounded-xl border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-secondary active:border-secondary disabled:cursor-default disabled:bg-gray-2"
                                                                  />
                                                                  <span className="absolute top-[15px] left-4">
                                                                        <RiLockPasswordLine size={20} className="hover:text-secondary" />
                                                                  </span>
                                                                  <span className="absolute top-[15px] right-4 cursor-pointer" onClick={toggleConfirmPassword}>
                                                                        {showPassword2 ? <AiFillEye size={20} className="hover:text-secondary" /> : <AiFillEyeInvisible size={20} className="hover:text-secondary" />}
                                                                  </span>
                                                                  {errors.confirmPassword && (
                                                                        <p role="alert" className="absolute right-0 -bottom-7 text-red-500">
                                                                              {errors.confirmPassword.message}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="flex mt-6 px-2 justify-start">
                                                      <div className="mt-2 mr-2">
                                                            <label className='flex cursor-pointer select-none items-center text-dark dark:text-white'>
                                                                  <div className='relative'>
                                                                        <input
                                                                              type='checkbox'
                                                                              checked={isChecked}
                                                                              onChange={handleCheckboxChange}
                                                                              className='sr-only'
                                                                        />
                                                                        <div className={`box border-secondary mr-2 flex h-4 w-4 items-center justify-center rounded-full border ${isChecked && 'bg-secondary'}`}>
                                                                              <span className='h-[10px] w-[10px] rounded-full bg-white dark:bg-dark'></span>
                                                                        </div>
                                                                  </div>
                                                                  <h2 className="text-base font-normal">Remember Me</h2>
                                                            </label>
                                                      </div>
                                                </div>


                                                <div className="flex items-center justify-center mt-6">
                                                      <button
                                                            type="submit"
                                                            className="bg-secondary gap-3 py-2 w-full font-medium text-white text-lg rounded-xl">
                                                            Sign Up
                                                      </button>
                                                </div>

                                                <div className="mt-6 text-center">
                                                      <Link to='/signIn'>
                                                            <span className="text-slate-400"> Already Have An Account</span>
                                                            <button className="rounded-full py-[6px] px-5 border cursor-pointer ml-2 hover:bg-secondary  hover:text-white shadow">
                                                                  Sign in
                                                            </button>
                                                      </Link>
                                                </div>
                                          </form>


                                          <div className="flex items-center justify-center px-8">
                                                <div className="flex-grow border-t border-slate-200"></div>
                                                <h3 className="px-4 text-center text-slate-400">Or</h3>
                                                <div className="flex-grow border-t border-slate-200"></div>
                                          </div>

                                          <div onClick={handleGoogleSignIn} className="md:flex gap-3 items-center justify-center">
                                                <div className="border cursor-pointer flex gap-3 items-center justify-center shadow bg-transparent py-3 px-4 font-medium rounded-full">
                                                      <FcGoogle size={20} />
                                                      Sign Up with Google
                                                </div>
                                                <div onClick={handleFacebookSignIn} className="mt-4 md:mt-0 border cursor-pointer flex gap-3 items-center justify-center shadow bg-transparent py-3 px-4 font-medium rounded-full">
                                                      <FaFacebook size={20} color="#3670f5" />
                                                      Sign Up with Facebook
                                                </div>
                                          </div>
                                    </div>
                              </div>


                        </div>
                  </div>

            </div>
      );
};

export default SignUp;