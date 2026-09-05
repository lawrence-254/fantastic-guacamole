import React from "react";
import Layout from "../components/layout/Layout";
import AboutUsParent from "../components/aboutUs/aboutUsParent/AboutUsParent";

const placeholderTeam = [
  {
    profilePic: "/images/team/behzad.png",
    position: "Designer",
    name: "Behzad Pashaie",
  },
  {
    profilePic: "/images/team/cassie.png",
    position: "Programmer",
    name: "Cassie Evans",
  },
  {
    profilePic: "/images/team/louis.png",
    position: "Marketing",
    name: "Louis Hoebregts",
  },
  {
    profilePic: "/images/team/patricia.png",
    position: "Administrative",
    name: "Patricia",
  },
  {
    profilePic: "/images/team/james.png",
    position: "CEO",
    name: "James Hoebregts",
  },
  {
    profilePic: "/images/team/jon.png",
    position: "Financial",
    name: "Jon Kantner",
  },
];

const aboutUsExplanation = {
  title: " We pay attention to your needs and do the best design.",
  paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
          facilisis magna. Dignissim diam quis enim lobortis scelerisque
          fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
          lectus sit amet est placerat in egestas erat.`,
};

const defaultCompanyAddress = {
  email: "Management@mega.news",
  phoneNumber: "+1(234) 567-8910",
  fax: "+1(234) 567-8910",
  address: "1234 Foxrun St.New Lenox, IL 123456",
  locationCoordinates: {
    latitudes: 25.5117,
    longitudes: -70.3493,
  },
};

const AboutUs = (
  teamMembers = placeholderTeam,
  aboutUs = aboutUsExplanation,
  companyAddress = defaultCompanyAddress
) => {
  return (
    <Layout>
      <AboutUsParent
        teamMembers={teamMembers}
        aboutUs={aboutUs}
        companyAddress={companyAddress}
      />
    </Layout>
  );
};

export default AboutUs;
