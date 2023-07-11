import React from "react";
import { useSearchParams } from "react-router-dom";
import BlogHero from "./BlogHero";
import Footer from "../../Footer/Footer";
import BlogContent from "./BlogContent";
import BlogImg1 from "../../../images/LandingPage/Blog/blog2.jpg";

const LandingPageBlogs = () => {
  const newsData = [
    {
      heroImg: BlogImg1,
      heroHeading: "Behind Craftwork",
      title: "The Art and Heartache of Indian Handicrafts: How CraftIndika is Changing the Narrative.",
      introduction: "Indian handicrafts are a vivid tapestry of the country's rich cultural past, a tradition passed down through generations of artisans. From elaborate metalwork to delicately woven handlooms, these crafts reflect the heart and spirit of India. Behind this gorgeous exterior, however, are stories of effort and pain, stories that are as important to the art as the hands that make it. Today, we dig into the realm of Indian handicrafts, learning about its challenges and triumphs, as well as the transforming role of CraftIndika in this landscape.",
      caseStudy: [
        {
          heading: "The Survival Art: Indian Handicrafts",
          description: "Indian handicrafts, a broad category of arts and crafts, are famous globally for their distinctive patterns, craftsmanship, and cultural relevance. Textiles, ceramics, metalwork, woodwork, and other crafts are among them, each having its own set of techniques, traditions, and regional influences. Consider the handloom industry, which is an important part of Indian handicrafts. Hand-weaving threads into fabric demands a great deal of expertise and time. Despite the introduction of machinery, many rural communities continue to practice this art form, their nimble hands and feet moving in unison to produce gorgeous patterns. However, these craftspeople's survival is a daily battle. Many artisans are compelled to forsake their profession due to low earnings, a shortage of credit, and an invasion of cheap, mass-produced goods. This has an influence not just on their livelihood but also on the survival of these valuable skills."
        },
        {
          heading: "The Forgotten Artisans: Heartland Stories",
          description: "To really comprehend the plight of these artists, one must first listen to their experiences. Consider the story of Gadadhar, a potter from a small town in Rajasthan. His family has been sculpting clay into exquisite pots for generations, a talent he acquired at an early age. However, rising raw material costs and diminishing demand for handcrafted pots have made it impossible for him to make ends meet. His is a common story, echoing the tribulations of hundreds of craftspeople across India. Another moving story is that of Geeta, an Andhra Pradesh weaver. For decades, the region has been home to weavers like Geeta, who are known for their gorgeous handlooms. Despite her abilities and effort, Geeta earns just enough to support her family. Low salaries, combined with a shortage of finance, have driven her to the point of giving up her loom. Such stories are not exceptional incidents but rather reflect the harsh reality of many artists. Their struggle demonstrates their tenacity and everlasting passion for their craft."
        },
        {
          heading: "Uplifting the Artisan Community Through the CraftIndika Initiative",
          description: "Our Organization CraftIndika is making a huge difference in this desperate situation. Our objective is to enhance the artisan community by offering fair compensation, credit, research inputs, training, and a variety of other services. CraftIndika believes in the fair trade concept, which ensures that artists are fairly compensatedfor their efforts. This effort not only helps to improve their living situations, but it also instills pride and dignity in their trade. Access to financing is another key issue for craftspeople. CraftIndika solves this by making loans available to craftsmen, allowing them to invest in raw materials and tools without being burdened by excessive interest rates. Another important part of CraftIndika's work is research input. They provide craftsmen with vital insights into industry trends, materials, and techniques by conducting extensive research. CraftIndika is also making a significant impact in the field of education. They hold seminars and skill development programs to provide craftsmen with the skills and information they need to adapt to changing market needs. These programs also serve as a platform for artists to learn about new techniques, equipment, and materials, allowing them to improve their craft and expand their product line. In addition to these initiatives, CraftIndika promotes Indian handicrafts on a global scale. They help introduce these crafts to a global audience by showcasing the artisans' work in various exhibitions and trade fairs, thereby establishing a broader market for these items."
        },
        {
          heading: "The CraftIndika Difference in Action",
          description: "CraftIndika's projects have a positive impact on the lives of the artists they support. Consider the case of Manjula, a brassware artist from Uttar Pradesh. Manjula struggled to make a living before receiving assistance from CraftIndika due to low pay and a lack of financing. However, thanks to CraftIndika's fair pay program and financing facilities, she was able to invest in better equipment and raw materials. The training seminars helped her refine her techniques and create items that appealed to a wider clientele. Manjula now not only earns a respectable income but also takes pride in her work. Similarly, CraftIndika's initiatives have improved the lives of Gadadhar and Geeta, the potter and weaver mentioned earlier. Their earnings have significantly increased, and they now have access to financing that allows them to invest in their craft. CraftIndika's training and research inputs have also helped them hone their skills and adapt to market trends."
        }
      ],
      conclusion: [
        {
          heading: "The Way Forward: Preserving the Legacy of Indian Handicrafts",
          description: "While CraftIndika is making major contributions to the artisan community, there is still more work to be done. The future of Indian handicrafts depends on our collective efforts to support and cherish these craftsmen. This includes promoting fair trade practices, providing access to finance, and investing in research and training. It also requires a shift in mindset, where we recognize the value of handcrafted items and respect the talent and effort that goes into creating them. CraftIndika is a beacon of hope in this endeavor, but they are not alone. It is up to us, as art buyers and enthusiasts, to support these initiatives and help preserve India's rich heritage of handicrafts. After all, each work of art tells a story, and it is our responsibility to ensure that these stories are shared for generations to come. Ultimately, Indian handicrafts are more than just objects; they are a tribute to our cultural past and a reflection of the passion, skill, and perseverance of our craftsmen. CraftIndika's projects play a crucial role in preserving this legacy for future generations. Let us all come together to support these artisans, appreciate their craft, and safeguard the beautiful tapestry of Indian handicrafts."
        }
      ]
    }
  ];

  const [searchParams] = useSearchParams();
  const selectedPostIndex = parseInt(searchParams.get("q")) || 1;
  const data = newsData[selectedPostIndex - 1];

  return (
    <div>
      <BlogHero heroImg={data.heroImg} heroHeading={data.heroHeading} />
      <BlogContent data={data} postLength={newsData.length} currentPost={selectedPostIndex} />
      <Footer />
    </div>
  );
};

export default LandingPageBlogs;
