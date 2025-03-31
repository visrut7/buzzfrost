import { useState } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { Button } from "../Button";
import logo from "./buzzfrost-transparent.png";

// Define PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#0c2a59", // Dark blue background matching site
    color: "#ffffff",
    position: "relative",
  },
  section: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#a6c1ee",
    textAlign: "center",
    marginBottom: 20,
  },
  date: {
    fontSize: 12,
    color: "#a6c1ee",
    textAlign: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#a6c1ee",
    textAlign: "center",
    borderBottom: "1px solid #3e6db9",
    paddingBottom: 5,
  },
  content: {
    fontSize: 12,
    color: "#ffffff",
    marginBottom: 15,
    lineHeight: 1.5,
  },
  serviceTable: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#3e6db9",
    borderRadius: 5,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#3e6db9",
    minHeight: 30,
    alignItems: "center",
  },
  tableHeader: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  tableCell: {
    flex: 1,
    padding: 8,
    textAlign: "center",
    color: "#ffffff",
  },
  terms: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  },
  term: {
    fontSize: 10,
    color: "#ffffff",
    marginBottom: 8,
    lineHeight: 1.5,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 10,
    color: "#a6c1ee",
  },
});

// Define the PDF Document broken into three pages
const BusinessProposalDocument = () => (
  <Document>
    {/* Page 1 - Cover Page */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image src={logo} style={styles.logo} />
        <Text style={styles.title}>BUSINESS PROPOSAL</Text>
        <Text style={styles.subtitle}>Custom Software Solutions</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
      </View>
      <Text style={styles.footer}>
        Buzz Frost - Transforming complex ideas into elegant software solutions
      </Text>
    </Page>

    {/* Page 2 - Company Info & Deliverables */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>WHO WE ARE</Text>
        <Text style={styles.content}>
          Buzz Frost is a team of experienced developers with a strong technical background, specializing in delivering high-quality software solutions. 
          With over 3 years of experience, we focus on solving complex problems and effectively communicating with clients to achieve their business goals.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>PROJECT DELIVERABLES</Text>
        <Text style={styles.content}>
          Our comprehensive service offerings are tailored to meet your specific business needs. We provide end-to-end solutions from planning and design to development, testing, and ongoing maintenance.
        </Text>
        
        <View style={styles.serviceTable}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCell}>Service</Text>
            <Text style={styles.tableCell}>Description</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Custom Web Development</Text>
            <Text style={styles.tableCell}>Full-stack applications using Next.js, React, Angular, Nest.js, and Django</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Web Scraping & Automation</Text>
            <Text style={styles.tableCell}>Efficient web scraping using Python, BeautifulSoup, Selenium, and Playwright</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>MVP Development</Text>
            <Text style={styles.tableCell}>Rapid prototype development to get your product to market quickly</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Back-End Development</Text>
            <Text style={styles.tableCell}>Secure, scalable APIs and back-end systems</Text>
          </View>
        </View>
      </View>
      <Text style={styles.footer}>
        Buzz Frost - Transforming complex ideas into elegant software solutions
      </Text>
    </Page>

    {/* Page 3 - Process, Expertise & Terms */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>OUR PROCESS</Text>
        <Text style={styles.content}>
          We follow a systematic approach to ensure successful project delivery:
        </Text>
        <Text style={styles.content}>
          1. Initial Consultation & Requirements Gathering{"\n"}
          2. Project Planning & Architecture Design{"\n"}
          3. Development & Regular Progress Updates{"\n"}
          4. Quality Assurance & Testing{"\n"}
          5. Deployment & Launch{"\n"}
          6. Ongoing Support & Maintenance
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>OUR EXPERTISE</Text>
        <Text style={styles.content}>
          • Web Application Development{"\n"}
          • Next.js, React, TypeScript{"\n"}
          • Social Media Optimization{"\n"}
          • Web Scraping & Automation{"\n"}
          • Linux & Open-Source Projects{"\n"}
          • Cloud & Serverless Solutions
        </Text>
      </View>

      <View style={styles.terms}>
        <Text style={styles.heading}>TERMS & CONDITIONS</Text>
        <Text style={styles.term}>
          1. This proposal is valid for 14 days from the date of issue.
        </Text>
        <Text style={styles.term}>
          2. Project timeline will be established upon acceptance of the proposal.
        </Text>
        <Text style={styles.term}>
          3. Additional requirements or scope changes may affect the project timeline and cost.
        </Text>
        <Text style={styles.term}>
          4. The client will provide timely feedback to ensure project progress.
        </Text>
        <Text style={styles.term}>
          5. Payment terms will be discussed and agreed upon before project commencement.
        </Text>
        <Text style={styles.term}>
          6. Two rounds of revisions are included in the project scope.
        </Text>
        <Text style={styles.term}>
          7. Final deliverables will be provided upon receipt of final payment.
        </Text>
      </View>
      <Text style={styles.footer}>
        Contact us at: visrut@buzzfrost.com | www.buzzfrost.com
      </Text>
    </Page>
  </Document>
);

const BusinessProposalPage = () => {
  const [isClient, setIsClient] = useState(false);

  // React-PDF requires client-side rendering
  useState(() => {
    setIsClient(true);
  });

  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 max-w-6xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
          Business Proposal
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100 mb-8">
          Download our business proposal document to learn more about our services and how we can help your business grow.
        </p>
        
        {isClient && (
          <PDFDownloadLink 
            document={<BusinessProposalDocument />} 
            fileName="BuzzFrost_Business_Proposal.pdf"
            className="inline-block"
          >
            {({ loading }: { loading: boolean }) => (
              <Button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-800 shadow-md text-lg">
                {loading ? "Generating PDF..." : "Download Business Proposal"}
              </Button>
            )}
          </PDFDownloadLink>
        )}
      </header>
      
      <section className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-200">What's Inside</h2>
        <ul className="list-disc list-inside text-blue-100 space-y-2">
          <li>Company introduction and overview</li>
          <li>Detailed service offerings</li>
          <li>Our development process</li>
          <li>Areas of expertise</li>
          <li>Terms and conditions</li>
        </ul>
      </section>
    </div>
  );
};

export default BusinessProposalPage; 