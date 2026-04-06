import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import {
    ChevronLeft,
    Star,
    ShoppingCart,
    Heart,
    Truck,
    ShieldCheck,
    RotateCcw,
    ChevronRight
} from 'lucide-react';
import { useCart } from '../components/context/CartContext';

const ProductDetails = () => {

    const navigate = useNavigate();
    const product = useLoaderData();
    const { addToCart, cartItems, updateQuantity } = useCart();

    const productInCart = cartItems.find((p) => p.id == product.id)
    const isInCart = (!!productInCart)


    if (!product) return <div className="text-white p-20">Product not found...</div>;

    return (
        <div className="bg-bg min-h-screen text-white font-main  pb-12 px-4 md:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-muted text-xs mb-8 overflow-hidden whitespace-nowrap">
                <Link to="/shop" className="flex items-center gap-1 hover:text-white transition-colors">
                    <ChevronLeft size={14} /> Products
                </Link>
                <span>/</span>
                <span className="capitalize">{product.category}</span>
                <span>/</span>
                <span className="text-white truncate">{product.title}</span>
            </nav>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left: Product Image */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-square flex items-center justify-center p-12">
                    <img
                        src={product.thumbnail || product.images?.[0]}
                        alt={product.title}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Right: Product Info */}
                <div className="flex flex-col">
                    <span className="bg-primary/10 text-primary self-start px-3 py-1 rounded-xl border text-[10px] font-bold uppercase tracking-wider">
                        {product.category}
                    </span>

                    <h1 className="font-heading text-3xl font-bold my-2 leading-10.5">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    fill={i < Math.round(product.rating) ? "#c8f400" : "none"}
                                    className={i < Math.round(product.rating) ? "text-amber-400" : "text-white/20"}
                                />
                            ))}
                        </div>
                        <span className="text-white font-medium">{product.rating}</span>
                        <span className="text-muted text-sm">{product.reviews.length * 42} </span>
                    </div>

                    <div className="border-y border-border/30 py-4">
                        <span className="text-primary font-heading text-4xl font-bold tracking-tight">
                            ${product.price}
                        </span>
                    </div>

                    <p className="text-muted leading-relaxed my-3 text-sm md:text-base">
                        {product.description || "High-quality product curated specifically for the SkyMart collection. Perfect for professionals and daily enthusiasts alike."}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-4 ">
                        {
                            isInCart ?
                                (<div className='flex-1 border border-primary font-bold py-4 rounded-2xl flex items-center justify-between px-10 transition-all active:scale-95'>
                                    <div>
                                        <ShoppingCart size={24} />
                                    </div>
                                    <div className='flex justify-center gap-5 items-center'>
                                        <p
                                        onClick={() => updateQuantity(product.id, -1)}
                                        className='px-2  bg-primary rounded-sm text-black font-bold active:scale-90 transition-all duration-200 hover:bg-buttonHover cursor-pointer '>
                                        -
                                    </p>

                                    <p>{productInCart.quantity} </p>

                                    <p
                                        onClick={() => updateQuantity(product.id, 1)}
                                        className='px-2 bg-primary rounded-sm text-black font-bold active:scale-90 transition-all duration-200 hover:bg-buttonHover cursor-pointer '>
                                        +
                                    </p>
                                    </div>
                                </div>) :
                                (<button
                                    onClick={() => addToCart(product)}
                                    className="flex-1 bg-primary hover:bg-buttonHover text-black font-bold py-4 rounded-2xl flex cursor-pointer items-center justify-center gap-3 transition-all active:scale-95"
                                >
                                    <ShoppingCart size={20} /> Add to Cart
                                </button>)
                        }

                        <button className="p-4 border border-border/50 rounded-2xl hover:bg-white/5 transition-colors text-white/50 hover:text-white">
                            <Heart size={20} />
                        </button>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-3 gap-4 my-3.5">
                        <FeatureBox icon={<Truck size={18} />} label="Free Delivery" sub="On orders $50+" />
                        <FeatureBox icon={<ShieldCheck size={18} />} label="Secure Pay" sub="256-bit SSL" />
                        <FeatureBox icon={<RotateCcw size={18} />} label="Easy Returns" sub="30-day policy" />
                    </div>

                    {/* Navigation Button */}
                    <button
                        onClick={() => navigate(`/shop/${product.id + 1}`)}
                        className="w-full bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all">
                        Next <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const FeatureBox = ({ icon, label, sub }) => (
    <div className="border border-border/30 rounded-2xl p-4 flex flex-col items-center text-center gap-2">
        <div className="text-primary">{icon}</div>
        <div className="flex flex-col">
            <span className="text-[10px] font-bold text-white whitespace-nowrap">{label}</span>
            <span className="text-[8px] text-muted whitespace-nowrap">{sub}</span>
        </div>
    </div>
);

export default ProductDetails;