import React from "react";

const Education = () => {
    const educationData = [
        {
            university: "大学名称",
            degree: "学位名称",
            date: "日期",
        },
        {
            university: "大学名称",
            degree: "学位名称",
            date: "日期",
        },
    ];

    return (
        <div className="education">
            <h2>教育背景</h2>
            <div className="education-grid">
                {educationData.map((item, index) => (
                    <div className="education-item" key={index}>
                        <h3>{item.university}</h3>
                        <p>{item.degree}</p>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
            {/* 添加更多教育经历 */}
        </div>
    );
};

export default Education;

