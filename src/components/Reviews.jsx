import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <section>
        <div class="wrapper">
          <div class="box">
            <div class="quote">
              <img src="/images/quote.svg" alt="" srcset="" />
            </div>
            <div class="content">
              <p>
                Exceptional service from start to finish! The moving crew was
                punctual, professional, and handled our belongings with a lot of
                care. Highly recommend
              </p>
              <div class="reviews">
                <div class="reviews">
                  <i class="active star"></i>
                  <i class="active star"></i>
                  <i class="active star"></i>
                  <i class="active star"></i>
                  <i class="active star"></i>
                </div>
              </div>
            </div>
            <div class="user">
              <div class="image">
                <img src="/images/1.png" alt="" srcset="" />
              </div>
              <div class="details">
                <h3>Jessica partices</h3>
                <span>Creative Designer</span>
              </div>
              <div class="user-icon">...</div>
            </div>
          </div>

          <div class="box">
            <div class="quote">
              <img src="/images/quote.svg" alt="" srcset="" />
            </div>
            <div class="content">
              <p>
                Outstanding experience with this moving service! The team was
                efficient, organized, and went above and beyond to make our move
                smooth.
              </p>
              <div class="reviews">
                <i class="active star"></i>
                <i class="active star"></i>
                <i class="active star"></i>
                <i class="active star"></i>
                <i class="star"></i>
              </div>
            </div>
            <div class="user">
              <div class="image">
                <img src="/images/2.png" alt="" srcset="" />
              </div>
              <div class="details">
                <h3>Adam jonson</h3>
                <span>writer content</span>
              </div>
              <div class="user-icon">...</div>
            </div>
          </div>

          <div class="box">
            <div class="quote">
              <img src="/images/quote.svg" alt="" srcset="" />
            </div>
            <div class="content">
              <p>
                Couldn't be happier with Vanpires! From the initial
                contact to the final delivery, the team exhibited
                professionalism and expertise.
              </p>
              <div class="reviews">
                <i class="active star"></i>
                <i class="active star"></i>
                <i class="active star"></i>
                <i class="active star"></i>
                <i class="star"></i>
              </div>
            </div>
            <div class="user">
              <div class="image">
                <img src="/images/3.png" alt="" srcset="" />
              </div>
              <div class="details">
                <h3>Maya findish</h3>
                <span>hr manager</span>
              </div>
              <div class="user-icon">...</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
