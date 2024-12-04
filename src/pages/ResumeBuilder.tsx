import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';
import { useForm, useFieldArray } from 'react-hook-form';
import PDFDownloadButton from '../components/PDFDownloadButton';

const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const { register, control, watch } = useForm({
    defaultValues: {
      personal: {
        fullName: '',
        email: '',
        phone: '',
        website: '',
        github: '',
        linkedin: '',
      },
      experience: [{ title: '', company: '', period: '', description: '' }],
      education: [{ degree: '', school: '', year: '', description: '' }],
      skills: [{ name: '', level: 'Intermediate', category: '' }],
    },
  });

  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({
    control,
    name: 'experience',
  });

  const { fields: eduFields, append: appendEdu, remove: removeEdu } = useFieldArray({
    control,
    name: 'education',
  });

  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: 'skills',
  });


  const formData = watch();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar - Form Controls */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
            <div className="space-y-4">
              <button
                onClick={() => setActiveSection('personal')}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeSection === 'personal'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Personal Information
              </button>
              <button
                onClick={() => setActiveSection('experience')}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeSection === 'experience'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveSection('education')}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeSection === 'education'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveSection('skills')}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeSection === 'skills'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Skills
              </button>
            </div>
          </div>
        </div>

        {/* Middle - Form Fields */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
            {activeSection === 'personal' && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white mb-4">Personal Information</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input
                    {...register('personal.fullName')}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    {...register('personal.email')}
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
                  <input
                    {...register('personal.phone')}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Website</label>
                  <input
                    {...register('personal.website')}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">GitHub</label>
                  <input
                    {...register('personal.github')}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">LinkedIn</label>
                  <input
                    {...register('personal.linkedin')}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  />
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Experience</h2>
                  <button
                    onClick={() => appendExp({ title: '', company: '', period: '', description: '' })}
                    className="flex items-center text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add
                  </button>
                </div>
                {expFields.map((field, index) => (
                  <div key={field.id} className="mb-6 p-4 bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-medium">Experience {index + 1}</h3>
                      <button
                        onClick={() => removeExp(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                        <input
                          {...register(`experience.${index}.title`)}
                          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                        <input
                          {...register(`experience.${index}.company`)}
                          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Period</label>
                        <input
                          {...register(`experience.${index}.period`)}
                          placeholder="e.g., Jan 2020 - Present"
                          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                        <textarea
                          {...register(`experience.${index}.description`)}
                          rows={3}
                          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'education' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Education</h2>
                  <button
                    onClick={() => appendEdu({ degree: '', school: '', year: '', description: '' })}
                    className="flex items-center text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add
                  </button>
                </div>
                {eduFields.map((field, index) => (
                  <div key={field.id} className="mb-6 p-4 bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-medium">Education {index + 1}</h3>
                      <button
                        onClick={() => removeEdu(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Degree</label>
                        <input
                          {...register(`education.${index}.degree`)}
                          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">School</label>
                        <input
                          {...register(`education.${index}.school`)}
                          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Year</label>
                        <input
                          {...register(`education.${index}.year`)}
                          placeholder="e.g., 2018 - 2022"
                          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                        <textarea
                          {...register(`education.${index}.description`)}
                          rows={3}
                          className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-500 text-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'skills' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-white">Skills</h2>
                  <button
                    onClick={() => appendSkill({ name: '', level: 'Intermidiate' })}
                    className="flex items-center text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add
                  </button>
                </div>
                {skillFields.map((field, index) => (
                  <div key={field.id} className="mb-4 p-4 bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-white font-medium">Skill {index + 1}</h3>
                      <button
                        onClick={() => removeSkill(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
            <select
              {...register(`skills.${index}.category`)}
              className="w-full px-4 py-2 bg-gray-600 border rounded-md border-gray-500 text-white"
            >
              <option value="">Select Category</option>
              <option value="Programming Skills">Programming</option>
              <option value="Web Development Skills">Web Development</option>
              <option value="Tools and Technology">Tools and Technology</option>
              <option value="Data Science Skills">Data Science</option>
            </select>
          </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Skill Name</label>
                        <input
                          {...register(`skills.${index}.name`)}
                          className="w-full px-4 py-2 bg-gray-600 border rounded-md border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right - Preview */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Preview</h2>
              <PDFDownloadButton formData={formData} />
            </div>
            <div className="bg-white rounded-lg p-6">
              <h1 className="text-2xl text-gray-600 font-bold">{formData.personal.fullName}</h1>
              <div className="mt-2 text-gray-600">
                <p>{formData.personal.email}</p>
                <p>{formData.personal.phone}</p>
                <div className="flex space-x-4 mt-2">
                {formData.personal.website && (
                    <a href={formData.personal.website} className="text-blue-600 hover:underline">
                      Website
                    </a>
                  )}
                
                  {formData.personal.github && (
                    <a href={formData.personal.github} className="text-blue-600 hover:underline">
                      GitHub
                    </a>
                  )}
                  {formData.personal.linkedin && (
                    <a href={formData.personal.linkedin} className="text-blue-600 hover:underline">
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>

              {formData.experience.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl text-gray-600 font-semibold border-b-2 border-gray-200 pb-2 mb-4">
                    Experience
                  </h2>
                  {formData.experience.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="font-semibold text-gray-600">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                      <p className="mt-2 text-gray-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {formData.education.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl text-gray-600 font-semibold border-b-2 border-gray-200 pb-2 mb-4">
                    Education
                  </h2>
                  {formData.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-gray-600 font-semibold">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-gray-500 text-sm">{edu.year}</p>
                      <p className="text-gray-600 mt-2">{edu.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {formData.skills.length > 0 && (
  <div className="mt-6">
    <h2 className="text-gray-600 text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">
      Skills
    </h2>
    <div className="space-y-4">
      {['Programming Skills', 'Web Development Skills', 'Tools and Technology', 'Data Science Skills'].map((category) => {
        const categorySkills = formData.skills.filter((skill) => skill.category === category);
        return categorySkills.length > 0 ? (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-gray-600 rounded-md"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ) : null;
      })}
    </div>
  </div>
)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;