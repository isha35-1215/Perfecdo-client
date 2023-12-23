

const UserWhom = () => {
    const userTypes = [
      {
        title: 'Education and Trainings',
        description: 'As example, students can Manage assignments, projects, and study schedules. Educators can Plan lessons, assignments, and student assessments. Training Coordinators can Schedule training sessions, track participant progress, and manage resources.',
      },
      {
        title: 'Corporate Professionals',
        description: 'As example, project managers can Coordinate tasks, allocate resources, and monitor project progress. Team Leaders can assign tasks, track team performance, and ensure project timelines are met. Managers can Organize and delegate tasks within departments for improved efficiency. Sales Teams can Track leads, manage client interactions, and set follow-up tasks.',
      },
      {
        title: 'Creative professionals',
        description: 'As example, designers and artists can Manage design projects, track revisions, and meet client deadlines. Writers can Organize writing tasks, deadlines, and editorial processes. Content Creators can Plan content calendars, track production, and schedule releases.',
      },
      {
        title: 'Large Enterprises',
        description: 'As example, Human Resources can manage employee tasks, onboarding processes, and training schedules. IT Departments can Track software development tasks, bug fixes, and IT infrastructure projects. Cross-Functional Teams can Enhance collaboration among different departments for shared projects.',
      }
      // Add more user types as needed
    ];
  
    return (
      <section className=" py-10 px-36">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-blue-900 font-bold mb-9">Who Can Benefit from TaskifyHub?</h2>
  
          <div className="flex flex-wrap justify-center">
            {userTypes.map((userType, index) => (
              <div key={index} className="max-w-md mx-4 mb-6 rounded-lg p-6 shadow-2xl">
                <h3 className="text-xl font-bold mb-2">{userType.title}</h3>
                <p className="">{userType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default UserWhom;