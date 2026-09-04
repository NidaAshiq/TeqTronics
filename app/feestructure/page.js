"use client";

const courses = [
  {
    category: "Networking",
    course: "CCNA (200-301)",
    duration: "10 Weeks",
    schedule: "Weekend",
    regularFee: "PKR 20,000",
    discountedFee: "PKR 20,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Lab included",
  },
  {
    category: "Cyber Security",
    course: "Ethical Hacking (CEH Prep)",
    duration: "10 Weeks",
    schedule: "Regular",
    regularFee: "PKR 25,000",
    discountedFee: "PKR 25,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Practical labs",
  },
  {
    category: "Cloud",
    course: "AWS Cloud Practitioner",
    duration: "8 Weeks",
    schedule: "Regular",
    regularFee: "PKR 30,000",
    discountedFee: "PKR 30,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Free-tier guidance",
  },
  {
    category: "Software Development",
    course: "Full Stack Web Development",
    duration: "16 Weeks",
    schedule: "Regular",
    regularFee: "PKR 30,000",
    discountedFee: "PKR 30,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Capstone project",
  },
  {
    category: "Artificial Intelligence",
    course: "AI & Machine Learning",
    duration: "12 Weeks",
    schedule: "Regular",
    regularFee: "PKR 35,000",
    discountedFee: "PKR 35,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Portfolio focused",
  },
  {
    category: "Software Development",
    course: "WordPress Development",
    duration: "8 Weeks",
    schedule: "Regular",
    regularFee: "PKR 20,000",
    discountedFee: "PKR 20,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Practical projects",
  },
  {
    category: "Software Development",
    course: "Python Programming",
    duration: "12 Weeks",
    schedule: "Regular",
    regularFee: "PKR 35,000",
    discountedFee: "PKR 35,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Practical coding",
  },
  {
    category: "Digital Marketing",
    course: "SEO with AI",
    duration: "10 Weeks",
    schedule: "Regular",
    regularFee: "PKR 20,000",
    discountedFee: "PKR 20,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Practical SEO projects",
  },
  {
    category: "Digital Marketing",
    course: "Digital Marketing",
    duration: "10 Weeks",
    schedule: "Regular",
    regularFee: "PKR 20,000",
    discountedFee: "PKR 20,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Practical campaigns",
  },
  {
    category: "English Language",
    course: "IELTS",
    duration: "8 Weeks",
    schedule: "Regular",
    regularFee: "PKR 15,000",
    discountedFee: "PKR 15,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "IELTS preparation",
  },
  {
    category: "English Language",
    course: "Spoken English",
    duration: "8 Weeks",
    schedule: "Regular",
    regularFee: "PKR 10,000",
    discountedFee: "PKR 10,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Communication focused",
  },
  {
    category: "E-Commerce",
    course: "Shopify E-Commerce Development",
    duration: "8 Weeks",
    schedule: "Regular",
    regularFee: "PKR 20,000",
    discountedFee: "PKR 20,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Store development",
  },
  {
    category: "Media & Design",
    course: "Video Editing",
    duration: "10 Weeks",
    schedule: "Regular",
    regularFee: "PKR 20,000",
    discountedFee: "PKR 20,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Practical projects",
  },
  {
    category: "Media & Design",
    course: "Graphic Designing",
    duration: "10 Weeks",
    schedule: "Regular",
    regularFee: "PKR 20,000",
    discountedFee: "PKR 20,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Portfolio focused",
  },
  {
    category: "Office & Business Skills",
    course: "Office Management",
    duration: "12 Weeks",
    schedule: "Regular",
    regularFee: "PKR 10,000",
    discountedFee: "PKR 10,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Practical office skills",
  },
  {
    category: "Networking",
    course: "CCNP",
    duration: "14 Weeks",
    schedule: "Regular",
    regularFee: "PKR 35,000",
    discountedFee: "PKR 35,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Advanced networking labs",
  },
  {
    category: "Networking",
    course: "CCIE",
    duration: "12 Weeks",
    schedule: "Regular",
    regularFee: "PKR 208,242.45",
    discountedFee: "PKR 208,242.45",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Advanced practical labs",
  },
  {
    category: "Cyber Security",
    course: "Cyber Security",
    duration: "12 Weeks",
    schedule: "Regular",
    regularFee: "PKR 35,000",
    discountedFee: "PKR 35,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Cyber Security",
  },
  {
    category: "Database & Enterprise",
    course: "Oracle Database",
    duration: "12 Weeks",
    schedule: "Regular",
    regularFee: "PKR 35,000",
    discountedFee: "PKR 35,000",
    admission: "PKR 0",
    exam: "PKR 0",
    notes: "Database practicals",
  },
];

export default function FeeStructure() {
  return (
    <main className="w-full bg-white py-6">
      {/* Responsive table wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[1000px] table-fixed border-collapse">
          <thead>
            <tr className="bg-[#e3131b] text-white">
              <th className="w-[12%] px-3 py-4 text-left text-sm font-semibold">
                Category
              </th>

              <th className="w-[18%] px-3 py-4 text-left text-sm font-semibold">
                Course
              </th>

              <th className="w-[9%] px-3 py-4 text-left text-sm font-semibold">
                Duration
              </th>

              <th className="w-[8%] px-3 py-4 text-left text-sm font-semibold">
                Schedule
              </th>

              <th className="w-[11%] px-3 py-4 text-left text-sm font-semibold">
                Regular Fee
              </th>

              <th className="w-[13%] px-3 py-4 text-left text-sm font-semibold">
                Discounted Fee
              </th>

              <th className="w-[9%] px-3 py-4 text-left text-sm font-semibold">
                Admission
              </th>

              <th className="w-[7%] px-3 py-4 text-left text-sm font-semibold">
                Exam
              </th>

              <th className="w-[13%] px-3 py-4 text-left text-sm font-semibold">
                Notes
              </th>
            </tr>
          </thead>

          <tbody>
            {courses.map((item, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-white" : "bg-[#f5f6f8]"
                }
              >
                <td className="px-3 py-5 text-sm text-[#173b68]">
                  {item.category}
                </td>

                <td className="px-3 py-5 text-sm font-semibold text-black">
                  {item.course}
                </td>

                <td className="px-3 py-5 text-sm text-[#173b68]">
                  {item.duration}
                </td>

                <td className="px-3 py-5 text-sm text-[#173b68]">
                  {item.schedule}
                </td>

                <td className="px-3 py-5 text-sm text-[#173b68]">
                  {item.regularFee}
                </td>

                <td className="px-3 py-5 text-sm font-semibold text-[#e3131b]">
                  {item.discountedFee}
                </td>

                <td className="px-3 py-5 text-sm text-[#173b68]">
                  {item.admission}
                </td>

                <td className="px-3 py-5 text-sm text-[#173b68]">
                  {item.exam}
                </td>

                <td className="px-3 py-5 text-sm text-[#173b68]">
                  {item.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}