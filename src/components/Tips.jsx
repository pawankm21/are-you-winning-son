import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./css/Tips.css";
const TIPS = [
  {
    id: 0,
    messages: [
      "Breathing exercises: Great for acute stress because they work quickly.",
      "Cognitive reframing: Learn to change the way you look at the situation to manage your stress levels.",
      "Mini-meditation: A quick, 5-minute meditation technique can help you to calm down in the moment.",
      "Progressive muscle relaxation (PMR): Like breathing exercises, PMR will give you a moment to regroup and relax.",
    ],
  },
  {
    id: 1,
    messages: [
      "Cultivate supportive relationships: Having a solid support system is a crucial coping mechanism.",
      "Exercise regularly: Exercise and stress management are closely linked for several reasons.",
      "Listen to music: Music can act as a wonderful, stress-reducing backdrop to everyday tasks.",
      "Maintain a healthy diet: Fueling your body well can help with overall stress levels because your entire system will function better.",
      "Meditate regularly: While quick meditations are great for dealing with acute stress, a regular meditation practice will help build your overall resilience to stress.",
    ],
  },
  {
    id: 2,
    messages: [
      "Let music aid you: Music can help relax your mind and body.",
      "Practice mindfulness: Mindfulness can help keep you rooted in the present moment.",
      "Talk to a friend: Learn about the several different types of social support friends can offer you.",
      "Talk to a therapist: A therapist can help you identify the source of your emotional stress as well as which strategies and techniques may help you best combat your stress.",
      "Write in a journal: There are several different journaling strategies to try, all with benefits.",
    ],
  },
  {
    id: 3,
    messages: [
      "Get more enjoyment out of your current job: If you landed in a job you don't love, all is not lost. Learn how to make your job more fulfilling.",
      "Indulge in hobbies: Don't wait until your life calms down to engage in your hobbies.",
      "Make your weekends count: Learn how to bring some of your weekend into your work week for less stress.",
      "Maintain a sense of humor: Use laughter to bring joy into you day and increase your overall health.",
      "Take some time off: A little time away from the stresses of daily life can leave you feeling refreshed and better equipped to handle stress.",
    ],
  },
];

export default function Tips(props) {
  return (
    <div className="tips-position">
      <Card>
        <Card.Header>Do this</Card.Header>

        <ListGroup variant="flush">
          {TIPS[Math.floor(props.val / 10) - 1].messages.map((msg, idx) => {
            return (
              <ListGroup.Item key={idx}>
                <li>{msg}</li>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </div>
  );
}
