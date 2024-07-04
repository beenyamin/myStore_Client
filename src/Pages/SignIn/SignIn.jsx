import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbMailHeart } from "react-icons/tb";
import { Link } from "react-router-dom";

const SignIn = () => {

    const { SignIn, signInWithGoogle, signInWithFacebook, } = useState();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = async (data) => {
        try {
            const result = await SignIn(data.email, data.password);
            console.log(result);
            toast.success('Sign in Success');
            // Redirect or perform any action upon successful sign-in
        } catch (error) {
            toast.error(error.message)
        }
    }

    const onSubmit = (data) => {
        handleSignIn(data);
        reset();
    };

    // Google Sign In 

    const handleGoogleSignIn = async () => {

        try {
            await signInWithGoogle();
            toast.success('Google Sign In')

        } catch (error) {
            toast.error(error.message)
        }
    }


    const handleFacebookSignIn = async () => {
        try {
            await signInWithFacebook();
            // Handle successful sign in
        } catch (error) {
            console.error("Error signing in with Facebook", error);
            // Handle error
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto  w-full  md:py-56 py-10">

            <div className="container md:h-[750px] h-[890px] flex  items-center justify-center ">
                {/* left  */}
                <div className="md:w-[45%] w-full md:h-[90%] h-[80%]  rounded-xl border shadow ">

                    <div className="md:px-[95px] p-7 space-y-4">

                        <h2 className="font-bold text-3xl">Sign In 👌</h2>
                        <p className="text-base font-medium">Welcome Back Sign in Here</p>

                        <div onClick={handleGoogleSignIn} className="border cursor-pointer flex gap-3 items-center justify-center shadow bg-transparent py-3 font-medium rounded-full">
                            <FcGoogle size={20} />
                            Sign in with Google
                        </div>
                        <div onClick={handleFacebookSignIn} className="border cursor-pointer flex gap-3 items-center justify-center shadow bg-transparent py-3 px-6 font-medium rounded-full">
                            <FaFacebook size={20} color="#3670f5" />
                            Sign in with Facebook
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="flex-grow border-t border-slate-200"></div>
                            <h3 className="px-4 text-center text-slate-400">Or Sign In with Email</h3>
                            <div className="flex-grow border-t border-slate-200"></div>
                        </div>


                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="flex flex-col gap-5 mb-3">
                                <div>
                                    <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                                        Email
                                    </label>
                                    <div className='relative text-dark-3'>
                                        <input
                                            {...register("email", { required: "Email is required" })}
                                            aria-invalid={errors.email ? "true" : "false"}
                                            type="email"
                                            placeholder="info@yourmail.com"
                                            className="w-full  mt-[3px] bg-transparent rounded-full border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-secondary active:border-secondary disabled:cursor-default disabled:bg-gray-2"
                                        />
                                        <span className="absolute top-[15px] left-4">
                                            <TbMailHeart size={20} className="hover:text-secondary" />
                                        </span>
                                        {errors.email && (
                                            <p role="alert" className="absolute right-0 -top-8 text-red-600">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div>
                                    <label className='mb-[10px] block text-lg font-medium text-dark dark:text-white'>
                                        Password
                                    </label>
                                    <div className='relative text-dark-3'>
                                        <input
                                            {...register("password", { required: "Password is required" })}
                                            aria-invalid={errors.password ? "true" : "false"}
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Type your password"
                                            className="w-full mt-[3px] bg-transparent rounded-full border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-secondary active:border-secondary disabled:cursor-default disabled:bg-gray-2"
                                        />
                                        <span className="absolute top-[15px] left-4">
                                            <RiLockPasswordLine size={20} className="hover:text-secondary" />
                                        </span>
                                        <span className="absolute top-[15px] right-4 cursor-pointer" onClick={togglePassword}>
                                            {showPassword ? <AiFillEye size={20} className="hover:text-secondary]" /> : <AiFillEyeInvisible size={20} className="hover:text-[#0c4ced]" />}
                                        </span>
                                        {errors.password && (
                                            <p role="alert" className="absolute right-0 -top-8 text-red-600">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-3 px-2">
                                <div className="mt-2 mr-2">
                                    <label className='flex  cursor-pointer select-none items-center text-dark dark:text-white'>
                                        <div className='relative'>
                                            <input
                                                type='checkbox'
                                                className='sr-only'
                                            />
                                            <div className={`box border-secondary mr-2 flex h-4 w-4 items-center justify-center rounded-full border `}>
                                                <span className='h-[10px] w-[10px] rounded-full bg-white dark:bg-dark'></span>
                                            </div>
                                        </div>
                                        <h2 className="text-base font-normal">Remember Me </h2>
                                    </label>
                                </div>
                                <h2 className="text-end mt-2 text-base font-normal text-red-600 hover:underline cursor-pointer">
                                    Forget password?
                                </h2>
                            </div>

                            <button
                                type="submit"
                                className=" bg-secondary  text-white text-center mt-7  py-2  w-full font-medium text-lg rounded-full"
                            >
                                Sign in
                            </button>

                            <div className="mt-5 text-center">
                                <Link to='/signUp'><span className="text-slate-400"> Don't Have An Account</span> <button className="rounded-full py-[6px] px-5 border cursor-pointer ml-2 hover:bg-secondary hover:text-white shadow ">Sign up</button></Link>
                            </div>
                        </form>




                    </div>
                </div>



            </div>


        </div>
    );
};

export default SignIn;