/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import NavBar from '../../components/NewDesignHome/NavBar'
import HomeFooter from '../../components/shared/HomeFooter'

function index() {
  return (
    <>
      <NavBar />
      <div className='p-16 bg-white'>
        <h1 className=' text-2xl font-extrabold my-4'>Cookie Policy for Trends Scads</h1>
        <p >This is the Cookie Policy for Trends Scads, accessible from https://www.trendscads.com/</p>
        <p className='pt-5'><strong>What Are Cookies</strong></p>
        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
        <p className='pt-5'><strong>How We Use Cookies</strong></p>
        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
        <p className='pt-5'><strong>Disabling Cookies</strong></p>
        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookies Policy Generator from CookiePolicyGenerator.com</a>.</p>
        <p className='pt-5'><strong>The Cookies We Set</strong></p>
        <ul>
          <li>
              <p>Site preferences cookies</p>
              <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
          </li>
        </ul>
        <p className='pt-5'><strong>Third Party Cookies</strong></p>
        <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
        <ul>
          <li>
              <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
              <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
          </li>
          <li>
              <p>Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.</p>
          </li>
          <li>
              <p>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</p>
          </li>
          <li>
              <p>As we sell products it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.</p>
          </li>
          <li>
              <p>The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.</p>
              <p>For more information on Google AdSense see the official Google AdSense privacy FAQ.</p>
          </li>
          <li>
              <p>We use adverts to offset the costs of running this site and provide funding for further development. The behavioural advertising cookies used by this site are designed to ensure that we provide you with the most relevant adverts where possible by anonymously tracking your interests and presenting similar things that may be of interest.</p>
          </li>
          <li>
              <p>Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.</p>
          </li>
        </ul>
        <p className='pt-5'><strong>More Information</strong></p>
        <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
        <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
        <ul>
          <li className=' font-bold'>Email: trendscads@gmail.com</li>
        </ul>
      </div>
      <HomeFooter />
    </>
  )
}

export default index