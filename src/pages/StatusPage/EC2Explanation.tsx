import React from "react";

const EC2Explanation: React.FC = () => (
  <>
    <h3>What is an AWS EC2 Instance?</h3>
    <p>
      An AWS EC2 (Elastic Compute Cloud) instance is a virtual server in the
      cloud that allows you to run applications. It’s like renting a computer in
      the cloud, providing flexibility to scale resources up or down as needed.
    </p>
    <h4>"The cloud"? ☁️</h4>
    <p>
      "The cloud" refers to servers that are accessed over the internet and
      store data remotely. It's not a computer in an actual cloud but in a data
      center, sadly 😅.
    </p>
    <h4>Why do you use an EC2?</h4>
    <p>
      An EC2 is a simple solution for hosting modern websites; a backend and
      frontend, for example. I've been using it to host some projects and also
      showcase my skills with Amazon Web Services.
    </p>
    <h4>
      Ok but why don't you just make your work and let the project run 24/7? 🤔
    </h4>
    <p>
      Unfortunately... I have to pay for the server. Since I'm not a millionaire
      (yet?) I can't afford to keep it running all the time. To give you an
      idea: small-scale projects can cost around $10/month, but it can go up to
      hundreds or thousands of dollars depending on the project's size and
      usage. I have paid between $10 and $50 for most of my projects.
    </p>
    <h4>So are you trying to save money?</h4>
    <p>
      Exactly! I love my projects but I started to feel like I was spending too
      much money to showcase them. At the same time, I needed to have them
      accessible; I am job seeking, after all. So I decided to create a system
      that would turn on when there's a visitor and turn off the server when
      it's no longer needed. This way, I can save money and have you visiting
      them! 🤝🏾
    </p>
    <h4>Nice! Can you tell more about this system?</h4>
    <p>
      Yes, thanks for asking! Basically, I have a Lambda function (a serverless
      functionality) that allows to manage the states of EC2 instances. When the
      project is offline, for example, the Lambda function can be triggered to
      start the EC2 instance of the project in this page. Automatically, the
      project will be turned off after a few minutes of inactivity.
    </p>
    <h4>That's cool! I am curious to understand more about this.</h4>
    <p>
      I'm glad you're interested! I'm planning to write a blog post about this
      system. I'll explain how it works, the technologies I used, and the
      challenges I faced. Stay tuned! 🫶🏾
    </p>
  </>
);

export default EC2Explanation;
