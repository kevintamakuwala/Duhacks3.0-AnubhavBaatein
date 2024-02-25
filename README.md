### Project Aim:
In college, students often feel uncertain about the level of preparation needed for placement interviews. "Anubhav बांटें" aims to tackle this issue by providing a platform where students can learn from the experiences of alumni who have successfully navigated placement interviews.

### What problem we are solving:
<ul>
   <li>
      Relevance: Existing online platforms offer a plethora of interview experiences, but they often lack relevance for on-campus placements where companies may employ different approaches.
   </li>
   <li>
      Limited Connectivity: Many students may not have extensive connections with alumni, hindering access to valuable interview experiences tailored to their college's context.
   </li>
   <li>
      Solution: AnubhavBaatein bridges this gap by connecting students directly with alumni, providing them with firsthand, context-specific interview experiences crucial for on-campus placements.
   </li>
   <li>
      Enhanced Preparation: Through our platform, students gain access to absolute interview experiences shared by alumni, empowering them to prepare effectively and confidently for their upcoming interviews.
   </li>
</ul>


### How It Helps Students:
Imagine a place where students can access real stories and experiences shared by seniors who went through the same process. These stories are categorized based on the companies, job roles, and specific interview rounds. It's like having a guidebook tailored to the exact challenges faced during placement seasons.


## Tech Stack

- **Frontend:** React.js, Shadcn
- **Backend:** Spring Boot
- **Database:** MySQL
- **Authentication:** Firebase

## Setup

### Prerequisites

- Node.js and npm installed for frontend development.
- Java and Maven installed for backend development.
- MySQL installed and running locally or provide connection details in the application properties.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kevintamakuwala/Duhacks3.0-AnubhavBaatein.git
   ```

2. Navigate to the frontend directory and install dependencies:

   ```bash
   cd Duhacks3.0-AnubhavBaatein/frontend
   npm install
   ```

3. Navigate to the backend directory and build the Spring Boot application:

   ```bash
   cd backend
   mvn clean install
   ```

4. Configure the application by updating the `application.properties` file in the `backend` directory with your MySQL database details and other configurations.

   ```properties
   # Database Configuration
   spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

5. Run the backend application:

   ```bash
   java -jar target/anubhav-baantein-backend.jar
   ```

6. Run the frontend application:

   ```bash
   cd ../frontend
   npm start
   ```

7. Access the application in your browser at [http://localhost:3000](http://localhost:3000).
