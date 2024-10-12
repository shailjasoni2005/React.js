import React from 'react'
// props (short for "properties") are a way to pass data from one component to another.
function Card({username,btnText="visit me"}) {  //we can give btnText it's default value so that in case user forget to pass value, this default value will pass on.
    console.log(username);
    
    return (
        
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://static.vecteezy.com/system/resources/thumbnails/008/969/361/small/multi-layers-gray-blue-dark-texture-3d-papercut-layers-in-gradient-banner-abstract-paper-cut-art-background-design-for-website-template-topography-map-concept-or-smooth-origami-paper-cut-vector.jpg" alt="" width="384" height="512"/>
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            {username}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, {btnText}
          </div>
        </figcaption>
      </div>
    </figure>
    )
}

export default Card
