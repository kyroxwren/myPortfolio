import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className='home-content'>
      <h1 className="mb-6 text-2xl font-semibold tracking-tighter ">
        Lebogang Tyosho
      </h1>
      <h3 className="mb-8 text-2xl font-semibold tracking-tighter ">
        Software Developer
      </h3>
      <p className="mb-4">
        {`My name is Lebogang Tyosho, a passionate Junior Developer and Data Analyst 
        with expertise in programming languages like Java, C#, JavaScript, Python, SQL, 
        and frameworks such as React, Django, and .NET.`}
      </p>
      <div className="my-12">
        <BlogPosts />
      </div>
    </section>
  )
}
