import React from "react";

const Blog = () => {
  const post = [
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*61yejeseirMolRKzT8MyJw.png",
      title: "DevOps in workspace",
      url: "https://gursimarsm.medium.com/devops-in-workspace-fa8111ffcc8a",
    },
    {
      img: "https://community-cdn-digitalocean-com.global.ssl.fastly.net/2Ppq95xcCVQhSGVRTp3Ux3SB",
      title: "Creating a Scalable Flask App with HarperDB",
      url: "https://medium.com/google-cloud/creating-a-scalable-flask-app-with-harperdb-and-deploying-on-google-cloud-a-step-by-step-guide-2e99e5f3df7f",
    },
    {
        img: "https://cdn.codersociety.com/uploads/run-serverless-kubernetes-pods-gcp-part1.png",
        title: "Serverless Kubernetes on Google cloud platform",
        url: "https://medium.com/google-cloud/serverless-kubernetes-on-google-cloud-platform-2e4c1ef28162",
      },
      {
        img: "https://www.chainalysis.com/wp-content/uploads/2022/02/bloggraphic-blockchains-01-1-1500x818.png",
        title: "The Blockchain Handbook",
        url: "https://faun.pub/the-blockchain-handbook-4045b3800be2",
      },
  ];

  return (
    <div name="blog" className=" h-auto w-full bg-[#0a192f]">
    <section className="bg-[#0a192f] text-gray-300 px-5 py-20"  >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
      <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Blogs</p>
              <p className='py-4 text-2xl'>Discover my concise and impactful blog collection</p>
          </div>

        
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10 ">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} className="h-[280px] w-[620px] rounded-lg"/>
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
    </div>
  );
};

export default Blog; 
