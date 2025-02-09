import React from 'react'
import girl from "../../public/images/glaze/girl.png"

const UserPersona = () => {
  return (
    <div>
      <div className="UserPersona py-10">
                      <div className="container">
                          <div className="main flex flex-col gap-10 md:gap-16">
                              {/* Heading */}
                              <h6 className="font-bold text-[#6A67D2] border-b-2 border-[#6A67D2] text-4xl max-w-max pb-3">
                                  User Persona
                              </h6>
      
                              {/* Main Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                                  {/* Image Section */}
                                  <div className="md:col-span-4">
                                      <img className="w-full h-auto rounded-lg shadow-lg" src={girl} alt="User Persona" />
                                  </div>
      
                                  {/* Text Content Section */}
                                  <div className="md:col-span-8 flex flex-col gap-10 text-white">
                                      {/* Bio Section */}
                                      <div className="flex flex-col gap-5">
                                          <h6 className="font-bold text-2xl md:text-3xl">Bio</h6>
                                          <p className="text-base md:text-lg">
                                              Sarah is a busy young professional who values self-care and staying up-to-date with the latest beauty trends.
                                              She leads a hectic lifestyle, juggling her career, social life, and personal wellness.
                                              Sarah is tech-savvy and relies on her smartphone for various aspects of her life, including shopping, entertainment, and health.
                                          </p>
                                      </div>
      
                                      {/* Pain Points & Goals Section */}
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                          {/* Pain Points */}
                                          <div className="flex flex-col gap-4">
                                              <h6 className="font-bold text-2xl md:text-3xl">Pain Points</h6>
                                              <ul className="list-disc pl-5 flex flex-col gap-3 text-base md:text-lg">
                                                  <li>Limited time for extensive beauty routines or browsing through numerous products.</li>
                                                  <li>Sarah may have specific skin concerns or sensitivities, making it challenging to find suitable products.</li>
                                                  <li>The beauty market is saturated, and Sarah may feel overwhelmed with the multitude of products available.</li>
                                              </ul>
                                          </div>
      
                                          {/* Goals */}
                                          <div className="flex flex-col gap-4">
                                              <h6 className="font-bold text-2xl md:text-3xl">Goals</h6>
                                              <ul className="list-disc pl-5 flex flex-col gap-3 text-base md:text-lg">
                                                  <li>Sarah is looking for a beauty app that streamlines her beauty routine.</li>
                                                  <li>She wants to stay current with beauty trends and discover new products or techniques easily.</li>
                                                  <li>Sarah appreciates personalized recommendations based on her skin type, tone, and preferences.</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
    </div>
  )
}

export default UserPersona
