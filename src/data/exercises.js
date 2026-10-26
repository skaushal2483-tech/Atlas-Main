
const exercises = [
  {
    id: 1,
    name: "Bench Press",
    category: "Chest",
    difficulty: "Intermediate",
    equipment: "Barbell",
    image: "/images/exercises/bench-press.jpg",
    primaryMuscle: "Chest",
    secondaryMuscles: ["Triceps", "Shoulders"],
    description: "A compound upper-body exercise for building chest strength and muscle.",
    instructions: [
      "Lie flat on the bench with your feet planted firmly.",
      "Grip the bar slightly wider than shoulder-width.",
      "Lower the bar under control toward your mid-chest.",
      "Press the bar upward until your arms are extended without locking your elbows aggressively."
    ],
    commonMistakes: [
      "Bouncing the bar off the chest.",
      "Flaring the elbows excessively.",
      "Lifting the hips off the bench."
    ],
    recommendedSets: 4,
    recommendedReps: "8–12"
  },
  {
    id: 2,
    name: "Push-Up",
    category: "Chest",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/images/exercises/push-up.jpg",
    primaryMuscle: "Chest",
    secondaryMuscles: ["Triceps", "Shoulders", "Core"],
    description: "A fundamental bodyweight movement that develops upper-body strength and core stability.",
    instructions: [
      "Start in a high plank with hands slightly wider than shoulder-width.",
      "Keep your body in a straight line.",
      "Lower your chest toward the floor by bending your elbows.",
      "Push back up to the starting position."
    ],
    commonMistakes: [
      "Allowing the hips to sag.",
      "Moving the head forward excessively.",
      "Using a partial range of motion."
    ],
    recommendedSets: 3,
    recommendedReps: "10–15"
  },
  {
    id: 3,
    name: "Incline Dumbbell Press",
    category: "Chest",
    difficulty: "Intermediate",
    equipment: "Dumbbells, Incline Bench",
    image: "/images/exercises/incline-dumbbell-press.jpg",
    primaryMuscle: "Upper Chest",
    secondaryMuscles: ["Triceps", "Shoulders"],
    description: "An angled pressing exercise emphasizing the upper portion of the chest.",
    instructions: [
      "Set the bench to a low incline.",
      "Hold dumbbells beside your upper chest.",
      "Press both dumbbells upward in a controlled motion.",
      "Lower them slowly to the starting position."
    ],
    commonMistakes: [
      "Using an excessively steep bench angle.",
      "Letting the dumbbells drift too far apart.",
      "Arching the lower back excessively."
    ],
    recommendedSets: 3,
    recommendedReps: "8–12"
  },
  {
    id: 4,
    name: "Dumbbell Fly",
    category: "Chest",
    difficulty: "Intermediate",
    equipment: "Dumbbells, Bench",
    image: "/images/exercises/dumbbell-fly.jpg",
    primaryMuscle: "Chest",
    secondaryMuscles: ["Shoulders"],
    description: "An isolation exercise that trains the chest through a controlled horizontal adduction movement.",
    instructions: [
      "Lie on a flat bench holding dumbbells above your chest.",
      "Maintain a slight bend in your elbows.",
      "Open your arms slowly until you feel a comfortable chest stretch.",
      "Bring the dumbbells back together above your chest."
    ],
    commonMistakes: [
      "Using excessive weight.",
      "Turning the movement into a press.",
      "Lowering the arms beyond a comfortable range."
    ],
    recommendedSets: 3,
    recommendedReps: "10–15"
  },
  {
    id: 5,
    name: "Cable Crossover",
    category: "Chest",
    difficulty: "Intermediate",
    equipment: "Cable Machine",
    image: "/images/exercises/cable-crossover.jpg",
    primaryMuscle: "Chest",
    secondaryMuscles: ["Shoulders"],
    description: "A cable-based chest isolation exercise that maintains tension throughout the movement.",
    instructions: [
      "Set the pulleys around shoulder height.",
      "Stand between the cables with one foot slightly forward.",
      "Bring your hands together in front of your chest.",
      "Return slowly while maintaining control."
    ],
    commonMistakes: [
      "Using momentum to move the handles.",
      "Overarching the lower back.",
      "Allowing the shoulders to roll forward excessively."
    ],
    recommendedSets: 3,
    recommendedReps: "12–15"
  },
  {
    id: 6,
    name: "Pull-Up",
    category: "Back",
    difficulty: "Advanced",
    equipment: "Pull-Up Bar",
    image: "/images/exercises/pull-up.jpg",
    primaryMuscle: "Lats",
    secondaryMuscles: ["Biceps", "Upper Back", "Core"],
    description: "A bodyweight pulling exercise that develops back strength and grip.",
    instructions: [
      "Grip the bar slightly wider than shoulder-width.",
      "Begin from a controlled hang.",
      "Pull yourself upward until your chin reaches bar height.",
      "Lower yourself slowly to the starting position."
    ],
    commonMistakes: [
      "Swinging the body excessively.",
      "Using only the arms without controlling the shoulder blades.",
      "Dropping rapidly from the top."
    ],
    recommendedSets: 3,
    recommendedReps: "6–10"
  },
  {
    id: 7,
    name: "Lat Pulldown",
    category: "Back",
    difficulty: "Beginner",
    equipment: "Cable Machine",
    image: "/images/exercises/lat-pulldown.jpg",
    primaryMuscle: "Lats",
    secondaryMuscles: ["Biceps", "Upper Back"],
    description: "A machine-based vertical pull that helps develop the latissimus dorsi.",
    instructions: [
      "Sit at the machine and secure your thighs under the pads.",
      "Grip the bar slightly wider than shoulder-width.",
      "Pull the bar toward your upper chest.",
      "Return the bar overhead under control."
    ],
    commonMistakes: [
      "Pulling the bar behind the neck.",
      "Leaning back excessively.",
      "Using momentum instead of controlled movement."
    ],
    recommendedSets: 3,
    recommendedReps: "10–12"
  },
  {
    id: 8,
    name: "Bent-Over Barbell Row",
    category: "Back",
    difficulty: "Intermediate",
    equipment: "Barbell",
    image: "/images/exercises/bent-over-row.jpg",
    primaryMuscle: "Upper Back",
    secondaryMuscles: ["Lats", "Biceps", "Lower Back"],
    description: "A compound pulling exercise for back thickness and posterior-chain strength.",
    instructions: [
      "Stand with feet hip-width apart and hold the barbell.",
      "Hinge at the hips while maintaining a neutral spine.",
      "Pull the bar toward your lower ribs.",
      "Lower it slowly without changing your torso position."
    ],
    commonMistakes: [
      "Rounding the lower back.",
      "Jerking the bar upward.",
      "Standing too upright during the row."
    ],
    recommendedSets: 4,
    recommendedReps: "8–12"
  },
  {
    id: 9,
    name: "Seated Cable Row",
    category: "Back",
    difficulty: "Beginner",
    equipment: "Cable Machine",
    image: "/images/exercises/seated-cable-row.jpg",
    primaryMuscle: "Mid Back",
    secondaryMuscles: ["Lats", "Biceps"],
    description: "A horizontal pulling movement that strengthens the mid-back and improves pulling control.",
    instructions: [
      "Sit upright with your feet supported.",
      "Hold the handle with your arms extended.",
      "Pull the handle toward your torso while keeping your elbows close.",
      "Extend your arms slowly without rounding your back."
    ],
    commonMistakes: [
      "Rocking the torso back and forth.",
      "Shrugging the shoulders.",
      "Rounding the back at the finish."
    ],
    recommendedSets: 3,
    recommendedReps: "10–12"
  },
  {
    id: 10,
    name: "Single-Arm Dumbbell Row",
    category: "Back",
    difficulty: "Beginner",
    equipment: "Dumbbell, Bench",
    image: "/images/exercises/single-arm-row.jpg",
    primaryMuscle: "Lats",
    secondaryMuscles: ["Biceps", "Upper Back"],
    description: "A unilateral pulling exercise that trains each side of the back independently.",
    instructions: [
      "Support one hand and knee on a bench.",
      "Hold a dumbbell with your free hand.",
      "Pull the dumbbell toward your hip.",
      "Lower it slowly and repeat before switching sides."
    ],
    commonMistakes: [
      "Rotating the torso excessively.",
      "Pulling the weight toward the shoulder instead of the hip.",
      "Using momentum."
    ],
    recommendedSets: 3,
    recommendedReps: "10–12 per side"
  },
  {
    id: 11,
    name: "Deadlift",
    category: "Legs",
    difficulty: "Advanced",
    equipment: "Barbell",
    image: "/images/exercises/deadlift.jpg",
    primaryMuscle: "Glutes",
    secondaryMuscles: ["Hamstrings", "Lower Back", "Traps"],
    description: "A compound hip-hinge movement that develops full-body strength and posterior-chain power.",
    instructions: [
      "Stand with the bar over the middle of your feet.",
      "Hinge at the hips and grip the bar.",
      "Brace your torso and push through the floor to stand.",
      "Lower the bar by hinging at the hips and bending your knees."
    ],
    commonMistakes: [
      "Rounding the back under load.",
      "Letting the bar drift away from the body.",
      "Hyperextending the back at the top."
    ],
    recommendedSets: 3,
    recommendedReps: "5–8"
  },
  {
    id: 12,
    name: "Barbell Back Squat",
    category: "Legs",
    difficulty: "Advanced",
    equipment: "Barbell, Squat Rack",
    image: "/images/exercises/back-squat.jpg",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: ["Glutes", "Hamstrings", "Core"],
    description: "A foundational compound exercise for lower-body strength and muscle development.",
    instructions: [
      "Position the bar securely across your upper back.",
      "Stand with feet around shoulder-width apart.",
      "Brace your core and squat to a comfortable depth.",
      "Drive through your feet to return to standing."
    ],
    commonMistakes: [
      "Allowing the knees to collapse inward.",
      "Losing a neutral spinal position.",
      "Using more depth than your mobility safely allows."
    ],
    recommendedSets: 4,
    recommendedReps: "6–10"
  },
  {
    id: 13,
    name: "Goblet Squat",
    category: "Legs",
    difficulty: "Beginner",
    equipment: "Dumbbell or Kettlebell",
    image: "/images/exercises/goblet-squat.jpg",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: ["Glutes", "Core"],
    description: "A beginner-friendly squat variation that builds leg strength and reinforces upright posture.",
    instructions: [
      "Hold a dumbbell vertically against your chest.",
      "Stand with feet slightly wider than hip-width.",
      "Squat while keeping your chest lifted.",
      "Push through your feet to stand."
    ],
    commonMistakes: [
      "Allowing the heels to lift.",
      "Letting the knees collapse inward.",
      "Rushing through the bottom position."
    ],
    recommendedSets: 3,
    recommendedReps: "10–12"
  },
  {
    id: 14,
    name: "Leg Press",
    category: "Legs",
    difficulty: "Beginner",
    equipment: "Leg Press Machine",
    image: "/images/exercises/leg-press.jpg",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: ["Glutes", "Hamstrings"],
    description: "A machine-based compound exercise for training the major lower-body muscles.",
    instructions: [
      "Sit against the backrest and place your feet on the platform.",
      "Release the safety handles.",
      "Lower the platform until your knees reach a comfortable depth.",
      "Press through your feet without forcefully locking your knees."
    ],
    commonMistakes: [
      "Allowing the lower back to round off the pad.",
      "Locking the knees forcefully.",
      "Lowering the platform beyond a controlled range."
    ],
    recommendedSets: 3,
    recommendedReps: "10–15"
  },
  {
    id: 15,
    name: "Walking Lunge",
    category: "Legs",
    difficulty: "Intermediate",
    equipment: "Bodyweight or Dumbbells",
    image: "/images/exercises/walking-lunge.jpg",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: ["Glutes", "Hamstrings", "Core"],
    description: "A dynamic unilateral exercise for leg strength, balance, and coordination.",
    instructions: [
      "Stand tall with your feet hip-width apart.",
      "Step forward and lower your back knee toward the floor.",
      "Keep your front foot planted and torso stable.",
      "Push through the front foot and step forward with the opposite leg."
    ],
    commonMistakes: [
      "Taking steps that are too short.",
      "Allowing the front knee to collapse inward.",
      "Losing balance by rushing."
    ],
    recommendedSets: 3,
    recommendedReps: "10–12 per leg"
  },
  {
    id: 16,
    name: "Romanian Deadlift",
    category: "Legs",
    difficulty: "Intermediate",
    equipment: "Barbell or Dumbbells",
    image: "/images/exercises/romanian-deadlift.jpg",
    primaryMuscle: "Hamstrings",
    secondaryMuscles: ["Glutes", "Lower Back"],
    description: "A hip-hinge exercise that emphasizes the hamstrings and glutes.",
    instructions: [
      "Stand tall holding the weight in front of your thighs.",
      "Keep your knees slightly bent and push your hips backward.",
      "Lower the weight along your legs while maintaining a neutral back.",
      "Drive your hips forward to return to standing."
    ],
    commonMistakes: [
      "Turning the movement into a squat.",
      "Rounding the back.",
      "Lowering the weight farther than flexibility allows."
    ],
    recommendedSets: 3,
    recommendedReps: "8–12"
  },
  {
    id: 17,
    name: "Leg Extension",
    category: "Legs",
    difficulty: "Beginner",
    equipment: "Leg Extension Machine",
    image: "/images/exercises/leg-extension.jpg",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: [],
    description: "An isolation exercise that targets the quadriceps at the front of the thigh.",
    instructions: [
      "Adjust the seat and shin pad to fit your body.",
      "Sit with your back supported.",
      "Extend your knees until your legs are nearly straight.",
      "Lower the weight slowly."
    ],
    commonMistakes: [
      "Using momentum to lift the weight.",
      "Setting the machine incorrectly.",
      "Dropping the weight during the lowering phase."
    ],
    recommendedSets: 3,
    recommendedReps: "12–15"
  },
  {
    id: 18,
    name: "Lying Leg Curl",
    category: "Legs",
    difficulty: "Beginner",
    equipment: "Leg Curl Machine",
    image: "/images/exercises/lying-leg-curl.jpg",
    primaryMuscle: "Hamstrings",
    secondaryMuscles: ["Calves"],
    description: "An isolation exercise that trains knee flexion and strengthens the hamstrings.",
    instructions: [
      "Lie face down and align your knees with the machine pivot.",
      "Position the pad just above your heels.",
      "Curl your heels toward your glutes.",
      "Lower the pad slowly to the starting position."
    ],
    commonMistakes: [
      "Lifting the hips off the bench.",
      "Using momentum.",
      "Allowing the weight stack to slam down."
    ],
    recommendedSets: 3,
    recommendedReps: "10–15"
  },
  {
    id: 19,
    name: "Standing Calf Raise",
    category: "Legs",
    difficulty: "Beginner",
    equipment: "Calf Raise Machine",
    image: "/images/exercises/standing-calf-raise.jpg",
    primaryMuscle: "Calves",
    secondaryMuscles: [],
    description: "A focused lower-leg exercise that strengthens the calf muscles.",
    instructions: [
      "Position your shoulders under the machine pads.",
      "Place the balls of your feet on the platform.",
      "Raise your heels as high as comfortable.",
      "Lower your heels slowly for a controlled stretch."
    ],
    commonMistakes: [
      "Bouncing at the bottom.",
      "Using a very short range of motion.",
      "Moving too quickly."
    ],
    recommendedSets: 3,
    recommendedReps: "12–20"
  },
  {
    id: 20,
    name: "Hip Thrust",
    category: "Legs",
    difficulty: "Intermediate",
    equipment: "Barbell, Bench",
    image: "/images/exercises/hip-thrust.jpg",
    primaryMuscle: "Glutes",
    secondaryMuscles: ["Hamstrings", "Core"],
    description: "A hip-extension exercise that emphasizes glute strength and development.",
    instructions: [
      "Rest your upper back against a sturdy bench.",
      "Position the weight across your hips with suitable padding.",
      "Drive through your feet and lift your hips.",
      "Pause briefly at the top, then lower with control."
    ],
    commonMistakes: [
      "Overarching the lower back at the top.",
      "Placing the bench in an unstable position.",
      "Using excessive weight before mastering the movement."
    ],
    recommendedSets: 3,
    recommendedReps: "8–12"
  },
  {
    id: 21,
    name: "Overhead Press",
    category: "Shoulders",
    difficulty: "Intermediate",
    equipment: "Barbell",
    image: "/images/exercises/overhead-press.jpg",
    primaryMuscle: "Shoulders",
    secondaryMuscles: ["Triceps", "Core"],
    description: "A compound pressing movement that develops shoulder strength and overhead stability.",
    instructions: [
      "Hold the bar at upper-chest height.",
      "Brace your core and keep your ribs stacked over your pelvis.",
      "Press the bar overhead along a controlled path.",
      "Lower the bar to the starting position."
    ],
    commonMistakes: [
      "Arching the lower back excessively.",
      "Pressing through pain or restricted range.",
      "Allowing the bar to drift far forward."
    ],
    recommendedSets: 3,
    recommendedReps: "6–10"
  },
  {
    id: 22,
    name: "Dumbbell Shoulder Press",
    category: "Shoulders",
    difficulty: "Beginner",
    equipment: "Dumbbells, Bench",
    image: "/images/exercises/dumbbell-shoulder-press.jpg",
    primaryMuscle: "Shoulders",
    secondaryMuscles: ["Triceps"],
    description: "A shoulder-focused pressing exercise with independent movement of each arm.",
    instructions: [
      "Sit upright with dumbbells at shoulder height.",
      "Keep your feet firmly planted.",
      "Press the dumbbells overhead.",
      "Lower them slowly to shoulder height."
    ],
    commonMistakes: [
      "Using momentum to press.",
      "Arching the lower back excessively.",
      "Lowering the weights too quickly."
    ],
    recommendedSets: 3,
    recommendedReps: "8–12"
  },
  {
    id: 23,
    name: "Dumbbell Lateral Raise",
    category: "Shoulders",
    difficulty: "Beginner",
    equipment: "Dumbbells",
    image: "/images/exercises/lateral-raise.jpg",
    primaryMuscle: "Side Deltoids",
    secondaryMuscles: ["Traps"],
    description: "An isolation exercise that emphasizes the side portion of the shoulder muscles.",
    instructions: [
      "Stand tall with dumbbells beside your thighs.",
      "Keep a slight bend in your elbows.",
      "Raise your arms outward to a comfortable height.",
      "Lower the dumbbells slowly."
    ],
    commonMistakes: [
      "Swinging the torso.",
      "Shrugging the shoulders excessively.",
      "Using weights that prevent controlled movement."
    ],
    recommendedSets: 3,
    recommendedReps: "12–15"
  },
  {
    id: 24,
    name: "Reverse Dumbbell Fly",
    category: "Shoulders",
    difficulty: "Intermediate",
    equipment: "Dumbbells",
    image: "/images/exercises/reverse-fly.jpg",
    primaryMuscle: "Rear Deltoids",
    secondaryMuscles: ["Upper Back"],
    description: "A shoulder isolation exercise that emphasizes the rear deltoids and upper back.",
    instructions: [
      "Hinge forward with a neutral spine.",
      "Hold the dumbbells beneath your shoulders.",
      "Raise your arms outward while keeping a slight elbow bend.",
      "Lower the weights slowly."
    ],
    commonMistakes: [
      "Using momentum.",
      "Shrugging excessively.",
      "Rounding the upper back."
    ],
    recommendedSets: 3,
    recommendedReps: "12–15"
  },
  {
    id: 25,
    name: "Face Pull",
    category: "Shoulders",
    difficulty: "Beginner",
    equipment: "Cable Machine, Rope",
    image: "/images/exercises/face-pull.jpg",
    primaryMuscle: "Rear Deltoids",
    secondaryMuscles: ["Traps", "Rotator Cuff"],
    description: "A cable exercise for the rear shoulders and upper-back muscles.",
    instructions: [
      "Attach a rope to a cable at upper-chest or face height.",
      "Grip both ends and step back until the cable is taut.",
      "Pull the rope toward your face with elbows moving outward.",
      "Return slowly while keeping control."
    ],
    commonMistakes: [
      "Leaning backward to move the weight.",
      "Using excessive load.",
      "Shrugging throughout the movement."
    ],
    recommendedSets: 3,
    recommendedReps: "12–15"
  },
  {
    id: 26,
    name: "Barbell Biceps Curl",
    category: "Arms",
    difficulty: "Beginner",
    equipment: "Barbell",
    image: "/images/exercises/barbell-curl.jpg",
    primaryMuscle: "Biceps",
    secondaryMuscles: ["Forearms"],
    description: "A classic arm exercise that trains elbow flexion and biceps strength.",
    instructions: [
      "Stand upright holding the bar with an underhand grip.",
      "Keep your elbows close to your torso.",
      "Curl the bar toward your shoulders.",
      "Lower the bar slowly without swinging."
    ],
    commonMistakes: [
      "Swinging the torso.",
      "Moving the elbows forward excessively.",
      "Dropping the bar during the lowering phase."
    ],
    recommendedSets: 3,
    recommendedReps: "10–12"
  },
  {
    id: 27,
    name: "Dumbbell Hammer Curl",
    category: "Arms",
    difficulty: "Beginner",
    equipment: "Dumbbells",
    image: "/images/exercises/hammer-curl.jpg",
    primaryMuscle: "Brachialis",
    secondaryMuscles: ["Biceps", "Forearms"],
    description: "A neutral-grip curl that targets the brachialis and forearm muscles alongside the biceps.",
    instructions: [
      "Stand with a dumbbell in each hand and palms facing inward.",
      "Keep your elbows close to your sides.",
      "Curl the dumbbells without rotating your wrists.",
      "Lower the weights slowly."
    ],
    commonMistakes: [
      "Swinging the weights.",
      "Allowing the elbows to drift forward.",
      "Using an uncontrolled lowering phase."
    ],
    recommendedSets: 3,
    recommendedReps: "10–12"
  },
  {
    id: 28,
    name: "Concentration Curl",
    category: "Arms",
    difficulty: "Beginner",
    equipment: "Dumbbell",
    image: "/images/exercises/concentration-curl.jpg",
    primaryMuscle: "Biceps",
    secondaryMuscles: ["Forearms"],
    description: "A single-arm curl variation that encourages strict technique and focused biceps work.",
    instructions: [
      "Sit on a bench with your feet planted.",
      "Rest your upper arm against the inside of your thigh.",
      "Curl the dumbbell toward your shoulder.",
      "Lower it slowly and repeat before switching arms."
    ],
    commonMistakes: [
      "Moving the upper arm away from the thigh.",
      "Rotating the torso to lift the weight.",
      "Using momentum."
    ],
    recommendedSets: 3,
    recommendedReps: "10–12 per arm"
  },
  {
    id: 29,
    name: "Triceps Pushdown",
    category: "Arms",
    difficulty: "Beginner",
    equipment: "Cable Machine",
    image: "/images/exercises/triceps-pushdown.jpg",
    primaryMuscle: "Triceps",
    secondaryMuscles: ["Forearms"],
    description: "A cable isolation exercise for strengthening the triceps.",
    instructions: [
      "Attach a bar or rope to a high cable pulley.",
      "Keep your elbows near your sides.",
      "Push the attachment downward until your arms are extended.",
      "Return slowly without letting your elbows drift excessively."
    ],
    commonMistakes: [
      "Using the shoulders to move the weight.",
      "Leaning heavily over the attachment.",
      "Allowing the elbows to flare outward."
    ],
    recommendedSets: 3,
    recommendedReps: "10–15"
  },
  {
    id: 30,
    name: "Overhead Triceps Extension",
    category: "Arms",
    difficulty: "Intermediate",
    equipment: "Dumbbell",
    image: "/images/exercises/overhead-triceps-extension.jpg",
    primaryMuscle: "Triceps",
    secondaryMuscles: ["Shoulders"],
    description: "An isolation movement that trains the triceps with the arms raised overhead.",
    instructions: [
      "Hold a dumbbell securely overhead.",
      "Keep your upper arms pointing upward.",
      "Bend your elbows to lower the weight behind your head.",
      "Extend your elbows to return to the starting position."
    ],
    commonMistakes: [
      "Flaring the elbows excessively.",
      "Arching the lower back.",
      "Using a weight that cannot be controlled safely."
    ],
    recommendedSets: 3,
    recommendedReps: "10–12"
  },
  {
    id: 31,
    name: "Close-Grip Bench Press",
    category: "Arms",
    difficulty: "Intermediate",
    equipment: "Barbell, Bench",
    image: "/images/exercises/close-grip-bench-press.jpg",
    primaryMuscle: "Triceps",
    secondaryMuscles: ["Chest", "Shoulders"],
    description: "A compound press variation that places greater emphasis on the triceps.",
    instructions: [
      "Lie on the bench and grip the bar around shoulder-width.",
      "Keep your wrists stacked over your forearms.",
      "Lower the bar under control toward the lower chest.",
      "Press upward while keeping your elbows in a comfortable position."
    ],
    commonMistakes: [
      "Using an excessively narrow grip.",
      "Bouncing the bar off the chest.",
      "Allowing the wrists to bend excessively."
    ],
    recommendedSets: 3,
    recommendedReps: "8–10"
  },
  {
    id: 32,
    name: "Parallel Bar Dip",
    category: "Arms",
    difficulty: "Advanced",
    equipment: "Dip Bars",
    image: "/images/exercises/dips.jpg",
    primaryMuscle: "Triceps",
    secondaryMuscles: ["Chest", "Shoulders"],
    description: "A bodyweight pushing exercise that trains the triceps and chest.",
    instructions: [
      "Grip the parallel bars and support your body.",
      "Lower yourself by bending your elbows within a comfortable range.",
      "Keep your shoulders controlled and avoid painful depth.",
      "Press back up to the starting position."
    ],
    commonMistakes: [
      "Dropping too deeply despite shoulder discomfort.",
      "Swinging the legs.",
      "Allowing the shoulders to lose control."
    ],
    recommendedSets: 3,
    recommendedReps: "6–10"
  },
  {
    id: 33,
    name: "Plank",
    category: "Core",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/images/exercises/plank.jpg",
    primaryMuscle: "Core",
    secondaryMuscles: ["Shoulders", "Glutes"],
    description: "An isometric exercise that develops trunk stability and body control.",
    instructions: [
      "Place your forearms on the floor with elbows beneath your shoulders.",
      "Extend your legs and support your body on your toes.",
      "Keep your head, torso, and hips aligned.",
      "Breathe steadily while holding the position."
    ],
    commonMistakes: [
      "Allowing the hips to sag.",
      "Raising the hips too high.",
      "Holding your breath."
    ],
    recommendedSets: 3,
    recommendedReps: "30–60 seconds"
  },
  {
    id: 34,
    name: "Bicycle Crunch",
    category: "Core",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/images/exercises/bicycle-crunch.jpg",
    primaryMuscle: "Abdominals",
    secondaryMuscles: ["Obliques"],
    description: "A dynamic abdominal exercise combining trunk flexion and rotation.",
    instructions: [
      "Lie on your back with your hands lightly supporting your head.",
      "Lift your shoulders and bring your knees into a tabletop position.",
      "Rotate your torso as you bring one elbow toward the opposite knee.",
      "Alternate sides with controlled movement."
    ],
    commonMistakes: [
      "Pulling on the neck.",
      "Moving too quickly.",
      "Rotating only the elbows rather than the torso."
    ],
    recommendedSets: 3,
    recommendedReps: "12–20 per side"
  },
  {
    id: 35,
    name: "Hanging Knee Raise",
    category: "Core",
    difficulty: "Intermediate",
    equipment: "Pull-Up Bar",
    image: "/images/exercises/hanging-knee-raise.jpg",
    primaryMuscle: "Abdominals",
    secondaryMuscles: ["Hip Flexors", "Forearms"],
    description: "A hanging core exercise that trains abdominal control and pelvic movement.",
    instructions: [
      "Hang from a secure bar with your shoulders controlled.",
      "Brace your core and raise your knees toward your torso.",
      "Pause briefly without swinging.",
      "Lower your legs slowly."
    ],
    commonMistakes: [
      "Swinging the body.",
      "Raising the knees using momentum.",
      "Dropping the legs quickly."
    ],
    recommendedSets: 3,
    recommendedReps: "10–15"
  },
  {
    id: 36,
    name: "Russian Twist",
    category: "Core",
    difficulty: "Intermediate",
    equipment: "Bodyweight or Dumbbell",
    image: "/images/exercises/russian-twist.jpg",
    primaryMuscle: "Obliques",
    secondaryMuscles: ["Abdominals"],
    description: "A rotational core exercise that challenges control through the torso.",
    instructions: [
      "Sit with your knees bent and torso upright.",
      "Lean back slightly while keeping your spine controlled.",
      "Rotate your torso from side to side.",
      "Use a light weight only if you can maintain good form."
    ],
    commonMistakes: [
      "Rounding the back excessively.",
      "Moving only the arms.",
      "Using momentum to rotate."
    ],
    recommendedSets: 3,
    recommendedReps: "12–16 per side"
  },
  {
    id: 37,
    name: "Dead Bug",
    category: "Core",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/images/exercises/dead-bug.jpg",
    primaryMuscle: "Deep Core",
    secondaryMuscles: ["Abdominals", "Hip Flexors"],
    description: "A controlled core stability drill that teaches coordination between the arms and legs.",
    instructions: [
      "Lie on your back with arms raised and knees bent at 90 degrees.",
      "Brace your core and keep your lower back gently supported against the floor.",
      "Extend the opposite arm and leg slowly.",
      "Return to the start and alternate sides."
    ],
    commonMistakes: [
      "Allowing the lower back to arch.",
      "Moving too quickly.",
      "Extending farther than you can control."
    ],
    recommendedSets: 3,
    recommendedReps: "8–12 per side"
  },
  {
    id: 38,
    name: "Mountain Climber",
    category: "Core",
    difficulty: "Intermediate",
    equipment: "Bodyweight",
    image: "/images/exercises/mountain-climber.jpg",
    primaryMuscle: "Core",
    secondaryMuscles: ["Shoulders", "Hip Flexors"],
    description: "A dynamic bodyweight drill that combines trunk stability with alternating knee drives.",
    instructions: [
      "Start in a high plank position.",
      "Keep your shoulders over your wrists.",
      "Drive one knee toward your chest.",
      "Alternate legs while maintaining a stable torso."
    ],
    commonMistakes: [
      "Bouncing the hips excessively.",
      "Allowing the shoulders to move behind the wrists.",
      "Sacrificing form for speed."
    ],
    recommendedSets: 3,
    recommendedReps: "30–45 seconds"
  },
  {
    id: 39,
    name: "Bird Dog",
    category: "Core",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/images/exercises/bird-dog.jpg",
    primaryMuscle: "Core",
    secondaryMuscles: ["Glutes", "Lower Back"],
    description: "A stability exercise that trains coordinated movement while keeping the trunk steady.",
    instructions: [
      "Begin on hands and knees.",
      "Brace your core and extend one arm and the opposite leg.",
      "Keep your hips level and avoid rotating your torso.",
      "Return to the start and switch sides."
    ],
    commonMistakes: [
      "Arching the lower back.",
      "Rotating the hips.",
      "Lifting the leg too high."
    ],
    recommendedSets: 3,
    recommendedReps: "8–12 per side"
  },
  {
    id: 40,
    name: "Ab Wheel Rollout",
    category: "Core",
    difficulty: "Advanced",
    equipment: "Ab Wheel",
    image: "/images/exercises/ab-wheel-rollout.jpg",
    primaryMuscle: "Abdominals",
    secondaryMuscles: ["Shoulders", "Lats"],
    description: "An advanced anti-extension exercise that challenges the abdominal muscles and trunk stability.",
    instructions: [
      "Kneel on a mat and grip the ab wheel.",
      "Brace your core before moving.",
      "Roll forward only as far as you can maintain a stable spine.",
      "Pull the wheel back toward your knees under control."
    ],
    commonMistakes: [
      "Allowing the lower back to sag.",
      "Rolling farther than you can control.",
      "Using momentum to return."
    ],
    recommendedSets: 3,
    recommendedReps: "6–10"
  },
  {
    id: 41,
    name: "Jumping Jack",
    category: "Cardio",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/images/exercises/jumping-jack.jpg",
    primaryMuscle: "Cardiovascular System",
    secondaryMuscles: ["Calves", "Shoulders"],
    description: "A simple full-body movement used to raise the heart rate and warm up.",
    instructions: [
      "Stand tall with your arms by your sides.",
      "Jump your feet apart while raising your arms overhead.",
      "Jump back to the starting position.",
      "Repeat at a pace you can maintain comfortably."
    ],
    commonMistakes: [
      "Landing with stiff knees.",
      "Moving too quickly before warming up.",
      "Ignoring discomfort in the ankles or knees."
    ],
    recommendedSets: 3,
    recommendedReps: "30–60 seconds"
  },
  {
    id: 42,
    name: "Burpee",
    category: "Cardio",
    difficulty: "Advanced",
    equipment: "Bodyweight",
    image: "/images/exercises/burpee.jpg",
    primaryMuscle: "Full Body",
    secondaryMuscles: ["Chest", "Quadriceps", "Core"],
    description: "A full-body conditioning movement combining a squat, plank transition, and optional jump.",
    instructions: [
      "Begin standing with your feet shoulder-width apart.",
      "Squat down and place your hands on the floor.",
      "Step or jump your feet back to a plank.",
      "Return to standing and add a jump if appropriate."
    ],
    commonMistakes: [
      "Allowing the hips to sag in the plank.",
      "Landing with stiff knees.",
      "Moving faster than your technique allows."
    ],
    recommendedSets: 3,
    recommendedReps: "8–12"
  },
  {
    id: 43,
    name: "High Knees",
    category: "Cardio",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/images/exercises/high-knees.jpg",
    primaryMuscle: "Hip Flexors",
    secondaryMuscles: ["Quadriceps", "Calves", "Core"],
    description: "A running-in-place drill that increases heart rate and develops coordination.",
    instructions: [
      "Stand tall with your feet hip-width apart.",
      "Jog in place while lifting your knees toward hip height as comfortable.",
      "Pump your arms naturally.",
      "Land softly and maintain an upright posture."
    ],
    commonMistakes: [
      "Leaning backward.",
      "Landing heavily.",
      "Starting at an unsustainable pace."
    ],
    recommendedSets: 3,
    recommendedReps: "20–40 seconds"
  },
  {
    id: 44,
    name: "Jump Squat",
    category: "Cardio",
    difficulty: "Intermediate",
    equipment: "Bodyweight",
    image: "/images/exercises/jump-squat.jpg",
    primaryMuscle: "Quadriceps",
    secondaryMuscles: ["Glutes", "Calves"],
    description: "A plyometric squat variation that develops lower-body power and conditioning.",
    instructions: [
      "Stand with your feet around shoulder-width apart.",
      "Lower into a controlled squat.",
      "Push through your feet to jump upward.",
      "Land softly and reset before the next repetition."
    ],
    commonMistakes: [
      "Landing with knees collapsing inward.",
      "Using excessive depth when fatigued.",
      "Continuing despite joint pain."
    ],
    recommendedSets: 3,
    recommendedReps: "6–10"
  },
  {
    id: 45,
    name: "High-Intensity Cycling",
    category: "Cardio",
    difficulty: "Intermediate",
    equipment: "Stationary Bike",
    image: "/images/exercises/stationary-bike.jpg",
    primaryMuscle: "Cardiovascular System",
    secondaryMuscles: ["Quadriceps", "Glutes", "Calves"],
    description: "A cycling interval exercise for cardiovascular conditioning with adjustable impact and resistance.",
    instructions: [
      "Adjust the seat so your knee remains slightly bent at the bottom of the pedal stroke.",
      "Begin with several minutes of easy cycling.",
      "Increase cadence or resistance for a short hard interval.",
      "Recover at an easier pace and repeat as appropriate."
    ],
    commonMistakes: [
      "Skipping the warm-up.",
      "Using resistance that disrupts smooth pedaling.",
      "Ignoring dizziness or unusual discomfort."
    ],
    recommendedSets: 5,
    recommendedReps: "30 seconds hard / 60 seconds easy"
  },
  {
    id: 46,
    name: "Jump Rope",
    category: "Cardio",
    difficulty: "Intermediate",
    equipment: "Jump Rope",
    image: "/images/exercises/jump-rope.jpg",
    primaryMuscle: "Calves",
    secondaryMuscles: ["Shoulders", "Forearms", "Cardiovascular System"],
    description: "A rhythmic conditioning exercise that develops coordination, footwork, and endurance.",
    instructions: [
      "Choose a rope length that suits your height.",
      "Keep your elbows close to your sides.",
      "Turn the rope with small wrist movements.",
      "Jump low and land softly on the balls of your feet."
    ],
    commonMistakes: [
      "Jumping too high.",
      "Using large arm circles.",
      "Increasing duration too quickly."
    ],
    recommendedSets: 3,
    recommendedReps: "45–60 seconds"
  },
  {
    id: 47,
    name: "Kettlebell Swing",
    category: "Full Body",
    difficulty: "Intermediate",
    equipment: "Kettlebell",
    image: "/images/exercises/kettlebell-swing.jpg",
    primaryMuscle: "Glutes",
    secondaryMuscles: ["Hamstrings", "Core", "Shoulders"],
    description: "A hip-hinge power movement that trains the posterior chain and cardiovascular conditioning.",
    instructions: [
      "Stand with the kettlebell slightly in front of you.",
      "Hinge at the hips and grip the handle.",
      "Hike the kettlebell between your legs and drive your hips forward.",
      "Allow the kettlebell to swing to chest height, then guide it back into the hinge."
    ],
    commonMistakes: [
      "Squatting instead of hinging.",
      "Lifting the kettlebell primarily with the arms.",
      "Rounding the back."
    ],
    recommendedSets: 3,
    recommendedReps: "10–15"
  },
  {
    id: 48,
    name: "Farmer's Carry",
    category: "Full Body",
    difficulty: "Intermediate",
    equipment: "Dumbbells or Kettlebells",
    image: "/images/exercises/farmers-carry.jpg",
    primaryMuscle: "Grip and Core",
    secondaryMuscles: ["Traps", "Forearms", "Shoulders"],
    description: "A loaded carry that develops grip strength, trunk stability, and whole-body control.",
    instructions: [
      "Pick up a pair of weights using a safe lifting position.",
      "Stand tall with your shoulders controlled.",
      "Walk forward with short, steady steps.",
      "Set the weights down carefully after the planned distance."
    ],
    commonMistakes: [
      "Leaning to one side.",
      "Shrugging excessively.",
      "Taking steps that are too long or unstable."
    ],
    recommendedSets: 3,
    recommendedReps: "30–45 seconds"
  },
  {
    id: 49,
    name: "Battle Rope Waves",
    category: "Full Body",
    difficulty: "Intermediate",
    equipment: "Battle Ropes",
    image: "/images/exercises/battle-ropes.jpg",
    primaryMuscle: "Shoulders",
    secondaryMuscles: ["Arms", "Core", "Cardiovascular System"],
    description: "A conditioning drill using repeated rope waves to challenge the upper body and cardiovascular system.",
    instructions: [
      "Stand with your feet stable and knees slightly bent.",
      "Hold one rope end in each hand.",
      "Alternate raising and lowering your arms to create waves.",
      "Maintain a steady rhythm while keeping your torso braced."
    ],
    commonMistakes: [
      "Using only the lower back to generate movement.",
      "Standing with locked knees.",
      "Starting with intervals that are too long."
    ],
    recommendedSets: 4,
    recommendedReps: "20–30 seconds"
  },
  {
    id: 50,
    name: "Turkish Get-Up",
    category: "Full Body",
    difficulty: "Advanced",
    equipment: "Kettlebell or Dumbbell",
    image: "/images/exercises/turkish-get-up.jpg",
    primaryMuscle: "Full Body",
    secondaryMuscles: ["Shoulders", "Core", "Glutes", "Legs"],
    description: "A multi-step movement that develops shoulder stability, coordination, and full-body control.",
    instructions: [
      "Begin lying on your back with a light weight held securely overhead.",
      "Follow the movement sequence to rise through a supported seated position and half-kneeling position.",
      "Stand while keeping the loaded arm stable overhead.",
      "Reverse the sequence slowly to return to the floor."
    ],
    commonMistakes: [
      "Starting with a weight that is too heavy.",
      "Losing control of the overhead arm.",
      "Rushing through the transition positions."
    ],
    recommendedSets: 2,
    recommendedReps: "3–5 per side"
  }
];

export default exercises;

