import { ArrowRight, Eye, Lock, Mail, Zap } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

const LoginForm = () => {
    return (
        <div className='bg-card/60 border border-border/30 p-8 rounded-3xl shadow-md shadow-black '>
            <h2 className='font-heading font-bold text-2xl mb-1'>
                Sign in

            </h2>
            <p className='text-muted text-sm mb-8'>
                Enter your credentials to continue
            </p>

            <form className='space-y-4'>
                <div className="relative">
                    <Mail className='absolute left-3.5 top-1/2 -translate-y-1/2 text-muted/50 w-4' />
                    <input type="email" name="email" placeholder="Email address" className=" pl-10 rounded-xl border border-border/40 bg-white/5 w-full py-3 text-sm outline-primary" autocomplete="email" value=""></input>
                </div>
                <div className="relative">
                    <Lock className='absolute left-3.5 top-1/2 -translate-y-1/2 text-muted/50 w-4' />
                    <input
                        type="email"
                        name="email"
                        placeholder="Password"
                        className=" pl-10 rounded-xl border border-border/40 bg-white/5 w-full py-3 text-sm outline-primary " autocomplete="email" value=""></input>

                    <button className='absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-white/60 transition-colors'>
                        <Eye className='w-4' />
                    </button>
                </div>

                <button className='bg-primary w-full flex items-center justify-center gap-2 py-3.5 mt-2 font-heading font-bold rounded-2xl text-bg hover:bg-buttonHover cursor-pointer'>
                    Sign in
                    <ArrowRight className='w-5' />
                </button>

                <p className='text-center text-white/30 text-sm font-body mt-6'>
                    Don't have an account?
                    <NavLink className="text-primary hover:text-buttonHover font-semibold transition-colors" to="/register">Create one</NavLink>
                </p>
            </form>
        </div>
    )
}

export default LoginForm
