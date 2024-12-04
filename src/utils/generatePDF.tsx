import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#2563eb',
    borderBottom: 1,
    paddingBottom: 5,
  },
  contactInfo: {
    fontSize: 10,
    marginBottom: 5,
    color: '#4b5563',
  },
  sectionContent: {
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#4b5563',
  },
  itemPeriod: {
    fontSize: 10,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  itemDescription: {
    fontSize: 10,
    color: '#374151',
    marginTop: 5,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skillItem: {
    fontSize: 10,
    backgroundColor: '#f3f4f6',
    padding: '4 8',
    borderRadius: 4,
    color: '#374151',
  },
  links: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },
  link: {
    fontSize: 10,
    color: '#2563eb',
    textDecoration: 'underline',
  },
});

interface ResumeData {
  personal: {
    fullName: string;
    email: string;
    phone: string;
    website?: string;
    github?: string;
    linkedin?: string;
  };
  experience?: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  education?: Array<{
    degree: string;
    school: string;
    year: string;
    description: string;
  }>;
  skills?: Array<{
    name: string;
    level: string;
  }>;
}

interface ResumePDFProps {
  formData: ResumeData;
}

export const ResumePDF: React.FC<ResumePDFProps> = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{formData.personal.fullName}</Text>
        <Text style={styles.contactInfo}>{formData.personal.email}</Text>
        <Text style={styles.contactInfo}>{formData.personal.phone}</Text>
        {formData.personal.website && (
          <Text style={styles.contactInfo}>{formData.personal.website}</Text>
        )}
        <View style={styles.links}>
          {formData.personal.github && (
            <Text style={styles.link}>{formData.personal.github}</Text>
          )}
          {formData.personal.linkedin && (
            <Text style={styles.link}>{formData.personal.linkedin}</Text>
          )}
        </View>
      </View>

      {formData.experience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Professional Experience</Text>
          {formData.experience.map((exp, index) => (
            <View key={index} style={styles.sectionContent}>
              <Text style={styles.itemTitle}>{exp.title}</Text>
              <Text style={styles.itemSubtitle}>{exp.company}</Text>
              <Text style={styles.itemPeriod}>{exp.period}</Text>
              <Text style={styles.itemDescription}>{exp.description}</Text>
            </View>
          ))}
        </View>
      )}

      {formData.education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Education</Text>
          {formData.education.map((edu, index) => (
            <View key={index} style={styles.sectionContent}>
              <Text style={styles.itemTitle}>{edu.degree}</Text>
              <Text style={styles.itemSubtitle}>{edu.school}</Text>
              <Text style={styles.itemPeriod}>{edu.year}</Text>
              <Text style={styles.itemDescription}>{edu.description}</Text>
            </View>
          ))}
        </View>
      )}

      {formData.skills?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Skills</Text>
          <View style={styles.skills}>
            {formData.skills.map((skill, index) => (
              <Text key={index} style={styles.skillItem}>
                {skill.name} • {skill.level}
              </Text>
            ))}
          </View>
        </View>
      )}
    </Page>
  </Document>
);