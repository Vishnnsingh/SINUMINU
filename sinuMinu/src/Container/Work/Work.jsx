import React from 'react'
import BlogSection from '../../Components/BlogSection/BlogSection'
import Vishal from "../../assets/Vishal.jpg"
import Logo from "../../assets/Logo.jpg"


export const blogs = [
  {
    date: 'Aug 16, 2024',
    category: 'Owner',
    title: 'Boost your conversion rate',
    description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
    author: 'Vishal',
    role: 'Co-Founder / CTO',
    image: Logo,
    authorImage: Vishal
  },
  {
    date: 'Aug 10, 2024',
    category: 'Developer',
    title: 'How to use seo to drive website',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    author: ' Er.Vishnu Singh',
    role: 'Software Developer Engineer',
    image: Logo,
    authorImage: Vishal
  },
  {
    date: 'Aug 12, 2024',
    category: 'Business',
    title: 'Improve your customer experience',
    description: 'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    author: 'Tom Cook',
    role: 'Director of Product',
    image: Logo,
    authorImage: Vishal
  }
];
const Work = () => {

  return (
    <BlogSection blogs={blogs} />
  )
}

export default Work
