import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
    const { title, price, thumbnail, category, rating } = product;

    // Logic: Round the decimal rating to the nearest whole number (e.g., 4.56 -> 5)
    const activeStars = Math.round(rating);

    return (
        <div className="product-card flex flex-col group bg-[#111] border border-white/5 rounded-2xl transition-all duration-400 hover:border-primary/50 hover:shadow-primary/50 shadow-sm cursor-pointer ">
            <div className='relative aspect-square bg-white overflow-hidden rounded-t-2xl py-10 px-2'>
                <img 
                    src={thumbnail} 
                    className='w-full h-full object-contain  group-hover:scale-110 transition-transform duration-500' 
                    alt={title} 
                />
                <span className='absolute top-3 left-3 badge bg-black/60 text-white/80 backdrop-blur-sm capitalize text-[10px] rounded-lg px-3 py-0.5'>
                    {category}
                </span>
            </div>

            <div className="p-4 flex flex-col flex-1 gap-2">
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-body">{category}</p>
                <h3 className="font-body font-medium text-white/85 text-sm leading-snug line-clamp-2 flex-1">{title}</h3>
                
                <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                        
                        {[...Array(5)].map((_, index) => (
                            <Star
                                key={index}
                                size={12}
                                // Fill the star if index is less than our rating
                                fill={index < activeStars ? "#fbbf24" : "none"} 
                                className={index < activeStars ? "text-amber-400" : "text-white/20"}
                            />
                        ))}
                    </div>
                    {/* Displaying actual numeric rating for clarity */}
                    <span className="text-white/30 text-[10px]">({rating})</span>
                </div>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/50">
                    <span className="font-heading font-bold text-primary text-lg">${price}</span>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-black
                        transition-all duration-200 active:scale-95
                        bg-primary hover:bg-[#e2ff66]">
                        <ShoppingCart size={14} />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;