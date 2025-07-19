import React from "react";
import Header from "../Header";
import ReactDOM from 'react-dom/client';
import "./First.css";
import App from './App';
import Footer from "../Footer";
import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const First = () => {
  return (
    <div>
      <Header />

      
      <section style={{ justifyContent: "center" }}>
        <div className="hero-content">
          <h1>Abhyuday Art Classes</h1>
          <p>Unleash your creativity with professional art training</p>
          <link to="/Classes">
            <button
              style={{
                marginTop: "20px",
                padding: "14px 32px",
                fontSize: "20px",
                backgroundColor: "#2a3b4e",
                color: "#cce5fb",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "1px 1px 8px #222"
              }}
            >
              Explore Classes
            </button>
          </link>
        </div>
      </section>

      {/* Second Section */}
      <div className="second">
        <h1 style={{ fontSize: "50px" }}>Mastering the Basics</h1>
        <p
          style={{
            fontSize: "22px",
            textAlign: "center",
            maxWidth: "780px"
          }}
        >
          We provide expert coaching for government-certified Elementary and Intermediate Drawing Grade Exams. With a strong
          foundation in lines, shapes, shading, and creativity, students are guided step-by-step to score high and develop
          confidence in their artistic journey.
        </p>
      </div>

      <br />
      <br />
      <br />

      {/* Third Section */}
      <div id="third">
        {[
          {
            img: "drawing.png",
            title: "Creative Drawing",
            desc: "Our drawing classes introduce children and beginners to the basics of art—lines, shapes, forms, and imagination. We encourage artistic freedom while building a strong foundation in visual storytelling."
          },
          {
            img: "sketch.png",
            title: "Expressive Sketching",
            desc: "Sketching classes focus on shading, light, texture, and detailing. Students learn to sketch still life, nature, and human figures using techniques that enhance observation and realism."
          },
          {
            img: "https://cdn.pixabay.com/photo/2020/09/02/14/25/mehndi-5538442_1280.jpg",
            title: "Beautiful Mehendi Art",
            desc: "Our mehendi classes teach stunning Indian and Arabic designs perfect for festivals and events. Learners develop control, creativity, and confidence in creating intricate patterns on hands and paper."
          },
          {
            img: "rangoli.png",
            title: "Vibrant Rangoli Designs",
            desc: "Rangoli sessions offer both traditional and modern patterns. Students learn symmetry, color harmony, and festive design elements while enjoying a creative and joyful experience."
          }
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img src={item.img} alt="" width="270px" />
            <h1 id="pt">{item.title}</h1>
            <p id="picp">{item.desc}</p>
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* Fourth Section */}
      <div id="fourth">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h1 style={{ fontSize: "50px", color: "white" }}>Creative Corner</h1>
          <img src="/underline.png" alt="" width="300px" />
          <br />
          <p
            style={{
              fontSize: "22px",
              textAlign: "center",
              maxWidth: "650px",
              color: "#deecf6"
            }}
          >
            We guide budding artists step-by-step through Maharashtra's Elementary and Intermediate Government Drawing
            Grade Exams with creativity, discipline, and fun-filled practice sessions.
          </p>
        </div>

        <br />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "50px",
            flexWrap: "wrap"
          }}
        >
          {/* Elementary */}
          <div style={{ maxWidth: "350px", textAlign: "center" }}>
            <img
              src="https://artvillaacademy.com/wp-content/uploads/2025/04/a572a4ca03a3cea8d348c17523296c0e.jpg"
              alt="Elementary Drawing"
              width="100%"
            />
            <h1 id="pt1">Elementary Art Exam Class</h1>
            <p id="picp1">
              This beginner-level course is designed for students aiming to clear the Elementary Drawing
              Grade Exam conducted by the Government of Maharashtra. We focus on basic skills such as object drawing,
              design patterns, strokes, freehand drawing, and coloring. Our structured and supportive teaching style
              ensures that even young learners feel confident and prepared for the exam.
            </p>
            <link to="elementary-syllabus.pdf" target="_blank">
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#e4ebefb6",
                  color: "rgb(13, 38, 78)",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                View Syllabus
              </button>
            </link>
          </div>

          {/* Intermediate */}
          <div style={{ maxWidth: "350px", textAlign: "center" }}>
            <img
              src="https://i.ytimg.com/vi/gkLZeJaqAzM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDlIHGSenrEZCREjGUPfY9AZr3Oww"
              alt="Intermediate Drawing"
              width="100%"
            />
            <h1 id="pt1">Intermediate Art Exam Class</h1>
            <p id="picp1">
              The Intermediate Drawing Grade Exam is ideal for students who want to advance their skills and
              gain formal recognition. Our training includes in-depth practice in memory drawing, still life, human
              figures, design, and calligraphy. With personalized attention and regular mock tests, we help students
              excel with confidence and creativity.
            </p>
            <link to="intermediate-syllabus.pdf" target="_blank">
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#e4ebefb6",
                  color: "rgb(13, 38, 78)",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                View Syllabus
              </button>
            </link>
          </div>
        </div>
      </div>

      <br />

      {/* Logo Section */}
      <div id="fifth">
        <div>
          <img src="/logo2.png" width="200px" alt="Logo" />
        </div>
        <div></div>
      </div>

      <br />

      {/* Gallery */}
      <div id="eight">
        <h2 style={{ fontSize: "50px" }}>Student Artwork Gallery</h2>
        <img src="" alt="" />
        <p style={{ fontSize: "22px", maxWidth: "650px", textAlign: "center" }}>
          Take a look at the amazing work created by my talented students. From pencil sketches to vibrant color compositions —
          every piece reflects their learning and passion.
        </p>

        <br />
        <br />

        <div id="grid">
          {[
            "vr-p1.jpg",
            "vr-p2.jpg",
            "vr-p3.jpg",
            "vr-4.jpg",
            "5.png",
            "sketch.png",
            "7.jpg",
            "hr-p1.jpg"
          ].map((src, index) => (
            <img key={index} src={src} alt="" width="330px" />
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* Quote Section */}
      <div
        style={{
          fontSize: "16px",
          textAlign: "center",
          padding: "20px",
          backgroundImage: 'url("bg-blue.jpg")',
          backgroundAttachment: "fixed"
        }}
      >
        <p style={{ color: "#cce5fb" }}>
          “Every child is an artist. The problem is how to remain an artist once we grow up.” – Pablo Picasso❤️
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default First;
