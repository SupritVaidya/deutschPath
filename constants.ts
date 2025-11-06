import { User, Course, ActivityType, CEFRLevel, UserProgressDB } from './types';

// This now acts as a user database table
export const MOCK_USERS_DB: Record<string, User> = {
  'user-1': {
    id: 'user-1',
    name: 'Alex Meier',
    email: 'alex.meier@example.com',
    password: 'password123', // In a real app, this would be hashed
    avatarUrl: 'https://picsum.photos/seed/alex/100/100',
    currentLevel: 'A1',
    goals: ['Travel to Germany', 'Speak with family'],
  },
   'user-2': {
    id: 'user-2',
    name: 'Ben Schmidt',
    email: 'ben.schmidt@example.com',
    password: 'password456',
    avatarUrl: 'https://picsum.photos/seed/ben/100/100',
    currentLevel: 'A2',
    goals: ['Work in a German company'],
  }
};

// This now acts as a template for courses, without user-specific progress
export const MOCK_COURSES: Course[] = [
  {
    id: 'a1',
    level: 'A1',
    title: 'German for Beginners',
    description: 'Start your German journey with the absolute basics, from greetings to ordering coffee.',
    progress: 0, // Default progress
    modules: [
      {
        id: 'a1m1',
        title: 'Module 1: First Steps',
        progress: 0,
        lessons: [
          {
            id: 'a1l1',
            title: 'Greetings & Introductions',
            estimatedTime: 25,
            isCompleted: false,
            activities: [
              {
                id: 'a1l1a1',
                type: ActivityType.Vocabulary,
                title: 'Common Greetings',
                content: 'Memorize these essential greetings and farewells for formal and informal situations.',
                vocabulary: [
                  { german: 'Hallo', english: 'Hello (informal)' },
                  { german: 'Guten Tag', english: 'Hello / Good day (formal)' },
                  { german: 'Guten Morgen', english: 'Good morning' },
                  { german: 'Guten Abend', english: 'Good evening' },
                  { german: 'Tschüss', english: 'Bye (informal)' },
                  { german: 'Auf Wiedersehen', english: 'Goodbye (formal)' },
                ],
              },
              {
                id: 'a1l1a2',
                type: ActivityType.Grammar,
                title: 'The Verb "sein" (to be)',
                content: 'The verb "sein" (to be) is one of the most important verbs in German. It is irregular. Let\'s practice its conjugation in the present tense.',
                questions: [
                    { id: 'a1l1a2q1', text: 'Ich ___ Alex.', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'bin' },
                    { id: 'a1l1a2q2', text: 'Du ___ müde.', options: ['bin', 'bist', 'ist', 'seid'], correctAnswer: 'bist' },
                    { id: 'a1l1a2q3', text: 'Er ___ aus Deutschland.', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'ist' },
                    { id: 'a1l1a2q4', text: 'Wir ___ Freunde.', options: ['sind', 'seid', 'ist', 'bin'], correctAnswer: 'sind' },
                    { id: 'a1l1a2q5', text: 'Ihr ___ schnell.', options: ['sind', 'seid', 'ist', 'bin'], correctAnswer: 'seid' },
                ]
              },
              {
                id: 'a1l1a3',
                type: ActivityType.Listening,
                title: 'Listen to an Introduction',
                content: 'Listen to Anna and Ben introduce themselves.',
                dialogue: [
                  { speaker: 'Anna', line: 'Hallo! Ich heiße Anna. Und du?' },
                  { speaker: 'Ben', line: 'Hallo Anna. Ich bin Ben. Woher kommst du?' },
                  { speaker: 'Anna', line: 'Ich komme aus Spanien. Und du?' },
                  { speaker: 'Ben', line: 'Ich komme aus Deutschland.' },
                ],
                 dialogueTranslation: [
                  { speaker: 'Anna', line: 'Hello! My name is Anna. And you?' },
                  { speaker: 'Ben', line: 'Hello Anna. I am Ben. Where do you come from?' },
                  { speaker: 'Anna', line: 'I come from Spain. And you?' },
                  { speaker: 'Ben', line: 'I come from Germany.' },
                ]
              },
              { id: 'a1l1a4', type: ActivityType.Conversation, title: 'Practice: Introduce Yourself', content: 'Now it\'s your turn! Practice introducing yourself to our AI tutor.' },
            ],
          },
          {
            id: 'a1l2',
            title: 'The Alphabet & Numbers',
            estimatedTime: 25,
            isCompleted: false,
            activities: [
              { id: 'a1l2a1', type: ActivityType.Listening, title: 'The German Alphabet', content: 'Listen to the pronunciation of each letter, including the Umlaute (ä, ö, ü) and ß.'},
              { id: 'a1l2a2', type: ActivityType.Vocabulary, title: 'Numbers 0-100', content: 'Learn to count to 100 in German. Pay attention to the reversed order for numbers above 20 (einundzwanzig).'},
              { id: 'a1l2a3', type: ActivityType.Conversation, title: 'Spell Your Name & Phone Number', content: 'Practice spelling your name and saying your phone number to the AI tutor.'}
            ]
          },
          {
            id: 'a1l2b',
            title: 'Basic Questions',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              { 
                id: 'a1l2b1', 
                type: ActivityType.Grammar, 
                title: 'W-Fragen (W-Questions)', 
                content: 'W-Fragen are questions that start with a "W" word. The verb always comes in the second position. Practice choosing the correct question word.',
                questions: [
                    { id: 'a1l2b1q1', text: '___ bist du? - Ich bin Maria.', options: ['Wer', 'Was', 'Wo', 'Wie'], correctAnswer: 'Wer' },
                    { id: 'a1l2b1q2', text: '___ wohnen Sie? - Ich wohne in Berlin.', options: ['Wer', 'Was', 'Wo', 'Wie'], correctAnswer: 'Wo' },
                    { id: 'a1l2b1q3', text: '___ ist das? - Das ist ein Buch.', options: ['Wer', 'Was', 'Woher', 'Wie'], correctAnswer: 'Was' },
                    { id: 'a1l2b1q4', text: '___ heißen Sie? - Ich heiße Schmidt.', options: ['Wer', 'Was', 'Wo', 'Wie'], correctAnswer: 'Wie' },
                ]
              },
              { id: 'a1l2b2', type: ActivityType.Vocabulary, title: 'Asking About Well-being', content: 'Learn how to ask "How are you?" formally (Wie geht es Ihnen?) and informally (Wie geht es dir?).'},
              { id: 'a1l2b3', type: ActivityType.Conversation, title: 'Asking Basic Questions', content: 'Practice asking and answering basic questions with the AI tutor.'}
            ]
          },
          {
            id: 'a1m1-test',
            title: 'Module 1 Test',
            estimatedTime: 15,
            isCompleted: false,
            activities: [
              {
                id: 'a1m1-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Hallo, ich heiße Maria. Ich bin 25 Jahre alt und komme aus Spanien. Ich wohne in Berlin. Ich lerne Deutsch. Mein Hobby ist Musik.`,
                questions: [
                  { id: 'q1', text: 'Wie heißt die Frau?', options: ['Anna', 'Maria', 'Julia', 'Sophie'], correctAnswer: 'Maria' },
                  { id: 'q2', text: 'Woher kommt sie?', options: ['Deutschland', 'Österreich', 'Spanien', 'Italien'], correctAnswer: 'Spanien' },
                  { id: 'q3', text: 'Wo wohnt sie?', options: ['Madrid', 'München', 'Berlin', 'Barcelona'], correctAnswer: 'Berlin' },
                ],
              },
              {
                id: 'a1m1-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Mann', line: 'Guten Tag. Ich bin Herr Schmidt.' },
                    { speaker: 'Frau', line: 'Guten Tag, Herr Schmidt. Mein Name ist Weber. Wie geht es Ihnen?' },
                    { speaker: 'Mann', line: 'Danke, gut. Und Ihnen?' },
                    { speaker: 'Frau', line: 'Auch gut, danke.' },
                ],
                questions: [
                    { id: 'q1', text: "What is the man's name?", options: ['Weber', 'Müller', 'Schmidt', 'Fischer'], correctAnswer: 'Schmidt' },
                    { id: 'q2', text: 'How is Mrs. Weber?', options: ['Good', 'Bad', 'So-so', 'Tired'], correctAnswer: 'Good' },
                ],
              },
              {
                id: 'a1m1-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Introduce yourself in two or three sentences. Write your name, where you are from, and where you live.',
              },
            ],
          }
        ],
      },
      {
        id: 'a1m2',
        title: 'Module 2: Talking About Yourself',
        progress: 0,
        lessons: [
            { id: 'a1l3', title: 'Family & Hobbies', estimatedTime: 30, isCompleted: false, activities: [{id: 'a1l3a1', type: ActivityType.Vocabulary, title: 'Family Members', content: 'Learn the words for family members.', vocabulary: [{german: 'die Familie', english: 'the family'}, {german: 'der Vater', english: 'the father'}, {german: 'die Mutter', english: 'the mother'}, {german: 'der Bruder', english: 'the brother'}, {german: 'die Schwester', english: 'the sister'}, {german: 'die Eltern', english: 'the parents'}, {german: 'das Kind', english: 'the child'}] }, {
                id: 'a1l3a2', 
                type: ActivityType.Grammar, 
                title: 'Possessive Articles (mein, dein)', 
                content: 'Possessive articles show ownership. They change their ending based on the gender and case of the noun. Practice "mein" (my) and "dein" (your).',
                questions: [
                    { id: 'a1l3a2q1', text: 'Das ist ___ Bruder (der Bruder).', options: ['mein', 'meine', 'meinen'], correctAnswer: 'mein' },
                    { id: 'a1l3a2q2', text: 'Ist das ___ Schwester (die Schwester)?', options: ['dein', 'deine', 'deinen'], correctAnswer: 'deine' },
                    { id: 'a1l3a2q3', text: 'Hier ist ___ Kind (das Kind).', options: ['mein', 'meine', 'meins'], correctAnswer: 'mein' },
                    { id: 'a1l3a2q4', text: 'Ich sehe ___ Vater (der Vater).', options: ['dein', 'deine', 'deinen'], correctAnswer: 'deinen' },
                ]
            },{id: 'a1l3a3', type: ActivityType.Conversation, title: 'Talk about your Hobbies', content: 'Tell the AI tutor about your favorite hobbies (meine Hobbys sind...).'}] },
            { id: 'a1l4', title: 'Telling Time & Daily Routines', estimatedTime: 30, isCompleted: false, activities: [{id: 'a1l4a1', type: ActivityType.Vocabulary, title: 'Telling Time', content: 'Learn how to ask for and tell the time (formal and informal).'}, {
                id: 'a1l4a2', 
                type: ActivityType.Grammar, 
                title: 'Separable Verbs', 
                content: 'Many German verbs have a separable prefix. In a simple present tense sentence, the prefix goes to the end. Practice forming sentences with separable verbs.',
                questions: [
                    { id: 'a1l4a2q1', text: 'Ich ___ um 7 Uhr ___. (aufstehen)', options: ['stehe / auf', 'auf / stehe', 'stehe auf / '], correctAnswer: 'stehe / auf' },
                    { id: 'a1l4a2q2', text: 'Der Zug ___ um 10 Uhr ___. (abfahren)', options: ['fahre / ab', 'fährt / ab', 'ab / fährt'], correctAnswer: 'fährt / ab' },
                    { id: 'a1l4a2q3', text: 'Wann ___ du ___? (anrufen)', options: ['rufst / an', 'an / rufst', 'rufe an / '], correctAnswer: 'rufst / an' },
                ]
            }, {id: 'a1l4a3', type: ActivityType.Writing, title: 'My Day', content: 'Write a few simple sentences about your daily routine.'}, {id: 'a1l4a4', type: ActivityType.Vocabulary, title: 'Days of the Week', content: 'Learn the days of the week from Montag to Sonntag.'}] },
            { id: 'a1l5', title: 'Modal Verbs (können, müssen, möchten)', estimatedTime: 25, isCompleted: false, activities: [{
                id: 'a1l5a1', 
                type: ActivityType.Grammar, 
                title: 'Using Modal Verbs', 
                content: 'Modal verbs change the meaning of another verb. The modal verb is conjugated and in the second position, and the main verb is in its infinitive form at the end of the sentence. Let\'s practice!',
                questions: [
                    { id: 'a1l5a1q1', text: 'Ich ___ gut schwimmen.', options: ['kann', 'können', 'kannst'], correctAnswer: 'kann' },
                    { id: 'a1l5a1q2', text: 'Du ___ heute arbeiten.', options: ['muss', 'musst', 'müssen'], correctAnswer: 'musst' },
                    { id: 'a1l5a1q3', text: 'Er ___ einen Kaffee trinken.', options: ['möchte', 'möchten', 'möchtest'], correctAnswer: 'möchte' },
                    { id: 'a1l5a1q4', text: 'Wir ___ ins Kino gehen.', options: ['kann', 'könnt', 'können'], correctAnswer: 'können' },
                ]
            }, {id: 'a1l5a2', type: ActivityType.Conversation, title: 'Making Plans', content: 'Practice making simple plans with the AI tutor using modal verbs. (e.g., "Ich möchte ins Kino gehen.")'}] },
            {
              id: 'a1m2-test',
              title: 'Module 2 Test',
              estimatedTime: 15,
              isCompleted: false,
              activities: [
                {
                  id: 'a1m2-test-reading',
                  type: ActivityType.Quiz,
                  title: 'Reading Comprehension',
                  content: `Das ist mein Bruder. Er heißt Tim. Er ist 20 Jahre alt. Seine Hobbys sind Fußball spielen und Musik hören. Er kann sehr gut Gitarre spielen.`,
                  questions: [
                    { id: 'q1', text: "Who is Tim?", options: ['My father', 'My brother', 'My son', 'My friend'], correctAnswer: 'My brother' },
                    { id: 'q2', text: "What can Tim do very well?", options: ['Sing', 'Play football', 'Play guitar', 'Listen to music'], correctAnswer: 'Play guitar' },
                  ],
                },
                {
                  id: 'a1m2-test-listening',
                  type: ActivityType.Quiz,
                  title: 'Listening Comprehension',
                  content: 'Listen to the dialogue and answer the questions.',
                  dialogue: [
                      { speaker: 'Person A', line: 'Was machst du am Samstag?' },
                      { speaker: 'Person B', line: 'Ich muss am Vormittag arbeiten. Aber am Nachmittag habe ich Zeit.' },
                      { speaker: 'Person A', line: 'Super! Möchtest du ins Kino gehen?' },
                      { speaker: 'Person B', line: 'Ja, gern! Um wie viel Uhr?' },
                  ],
                  questions: [
                      { id: 'q1', text: "What does Person B have to do on Saturday morning?", options: ['Go shopping', 'Sleep', 'Work', 'Clean'], correctAnswer: 'Work' },
                      { id: 'q2', text: "What do they want to do in the afternoon?", options: ['Go to a café', 'Go to the cinema', 'Go for a walk', 'Play sports'], correctAnswer: 'Go to the cinema' },
                  ],
                },
                {
                  id: 'a1m2-test-writing',
                  type: ActivityType.Writing,
                  title: 'Writing Task',
                  content: 'Write two sentences about your hobbies using "gern" or "mögen".',
                },
              ],
            }
        ],
      },
      {
        id: 'a1m3',
        title: 'Module 3: Food & Shopping',
        progress: 0,
        lessons: [
           {
            id: 'a1l6',
            title: 'Ordering Food & Drinks',
            estimatedTime: 25,
            isCompleted: false,
            activities: [
              { 
                id: 'a1l6a1', 
                type: ActivityType.Vocabulary, 
                title: 'In the Café', 
                content: 'Learn these words to order your favorite drink and snack.',
                vocabulary: [
                  { german: 'Kaffee', english: 'Coffee', article: 'der' },
                  { german: 'Tee', english: 'Tea', article: 'der' },
                  { german: 'Kuchen', english: 'Cake', article: 'der' },
                  { german: 'Wasser', english: 'Water', article: 'das' },
                  { german: 'Apfelsaft', english: 'Apple juice', article: 'der' },
                  { german: 'die Rechnung', english: 'the bill'},
                ],
              },
              { 
                id: 'a1l6a2', 
                type: ActivityType.Grammar, 
                title: 'The Accusative Case', 
                content: 'The accusative case is for the direct object. For masculine nouns, articles change: "der" becomes "den", "ein" becomes "einen". Feminine, neuter, and plural articles do not change. Practice choosing the correct article.',
                questions: [
                    { id: 'a1l6a2q1', text: 'Ich möchte ___ Kaffee (der).', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                    { id: 'a1l6a2q2', text: 'Er kauft ___ Apfel (der).', options: ['den', 'der', 'dem'], correctAnswer: 'den' },
                    { id: 'a1l6a2q3', text: 'Sie hat ___ Katze (die).', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                    { id: 'a1l6a2q4', text: 'Wir sehen ___ Haus (das).', options: ['das', 'den', 'dem'], correctAnswer: 'das' },
                ]
              },
              { id: 'a1l6a3', type: ActivityType.Conversation, title: 'Practice: Order a Coffee', content: 'Roleplay ordering a coffee and a piece of cake in a German café.' },
            ],
          },
          { id: 'a1l7', title: 'Shopping for Groceries', estimatedTime: 30, isCompleted: false, activities: [{id: 'a1l7a1', type: ActivityType.Vocabulary, title: 'At the Supermarket', content: 'Learn words for common grocery items and how to say how much you want.'}, {id: 'a1l7a2', type: ActivityType.Conversation, title: 'Practice Shopping', content: 'Roleplay a short shopping trip.'}, {
              id: 'a1l7a3', 
              type: ActivityType.Grammar, 
              title: 'Plural Nouns', 
              content: 'German has many ways to form plurals. It\'s best to learn the plural form with each new noun. Test your knowledge!',
              questions: [
                  { id: 'a1l7a3q1', text: 'der Apfel -> die ___', options: ['Äpfel', 'Apfeln', 'Apfels'], correctAnswer: 'Äpfel' },
                  { id: 'a1l7a3q2', text: 'die Frau -> die ___', options: ['Fraus', 'Frauen', 'Fraue'], correctAnswer: 'Frauen' },
                  { id: 'a1l7a3q3', text: 'das Auto -> die ___', options: ['Autos', 'Autoen', 'Auter'], correctAnswer: 'Autos' },
              ]
          }] },
           { id: 'a1l7b', title: 'Expressing Likes and Dislikes', estimatedTime: 20, isCompleted: false, activities: [{id: 'a1l7b1', type: ActivityType.Vocabulary, title: 'Using "gern"', content: 'Learn how to express that you like doing something using "gern" (e.g., "Ich schwimme gern.").'}, {
               id: 'a1l7b2', 
               type: ActivityType.Grammar, 
               title: 'The verb "mögen"', 
               content: 'Learn how to use "mögen" to say you like something or someone. Remember, it\'s irregular!',
               questions: [
                   { id: 'a1l7b2q1', text: 'Ich ___ Schokolade.', options: ['mag', 'magst', 'mögen'], correctAnswer: 'mag' },
                   { id: 'a1l7b2q2', text: '___ du Pizza?', options: ['Mag', 'Mags', 'Magst'], correctAnswer: 'Magst' },
                   { id: 'a1l7b2q3', text: 'Wir ___ den Sommer.', options: ['mag', 'mögt', 'mögen'], correctAnswer: 'mögen' },
               ]
            }, {id: 'a1l7b3', type: ActivityType.Conversation, title: 'What do you like?', content: 'Talk about the food, drinks, and activities you like and dislike.'}] },
           {
              id: 'a1m3-test',
              title: 'Module 3 Test',
              estimatedTime: 15,
              isCompleted: false,
              activities: [
                {
                  id: 'a1m3-test-reading',
                  type: ActivityType.Quiz,
                  title: 'Reading Comprehension',
                  content: `Auf dem Markt kaufe ich Obst und Gemüse. Ich kaufe einen Apfel, zwei Bananen und Tomaten. Ich mag Äpfel, aber ich mag keine Bananen. Das Gemüse ist für den Salat.`,
                  questions: [
                    { id: 'q1', text: "What do I buy at the market?", options: ['Bread and cheese', 'Fruit and vegetables', 'Meat and fish', 'Milk and eggs'], correctAnswer: 'Fruit and vegetables' },
                    { id: 'q2', text: "Which fruit do I NOT like?", options: ['Apples', 'Tomatoes', 'Bananas', 'Oranges'], correctAnswer: 'Bananas' },
                  ],
                },
                {
                  id: 'a1m3-test-listening',
                  type: ActivityType.Quiz,
                  title: 'Listening Comprehension',
                  content: 'Listen to the dialogue and answer the questions.',
                  dialogue: [
                      { speaker: 'Kellner', line: 'Guten Tag! Was möchten Sie bestellen?' },
                      { speaker: 'Gast', line: 'Ich hätte gern einen Kaffee und ein Stück Apfelkuchen.' },
                      { speaker: 'Kellner', line: 'Sehr gern. Kommt sofort.' },
                      { speaker: 'Gast', line: 'Danke.' },
                  ],
                  questions: [
                      { id: 'q1', text: "What does the guest order?", options: ['Tea and cake', 'Coffee and cake', 'Water and coffee', 'Juice and tea'], correctAnswer: 'Coffee and cake' },
                      { id: 'q2', text: "What kind of cake is it?", options: ['Chocolate cake', 'Cheesecake', 'Apple cake', 'Strawberry cake'], correctAnswer: 'Apple cake' },
                  ],
                },
                {
                  id: 'a1m3-test-writing',
                  type: ActivityType.Writing,
                  title: 'Writing Task',
                  content: 'Write two sentences. In the first, say what you would like to eat. In the second, say what you would like to drink.',
                },
              ],
            }
        ]
      },
      {
        id: 'a1m4',
        title: 'Module 4: Around Town',
        progress: 0,
        lessons: [
          { id: 'a1l8', title: 'My Apartment', estimatedTime: 25, isCompleted: false, activities: [{id: 'a1l8a1', type: ActivityType.Vocabulary, title: 'Rooms and Furniture', content: 'Learn words to describe your home.'}, {
              id: 'a1l8a2', 
              type: ActivityType.Grammar, 
              title: 'Prepositions with Dative (in, an, auf)', 
              content: 'When two-way prepositions describe a static location (answering "Wo?"), they take the dative case. The dative articles are: dem (m/n), der (f), den (pl).',
              questions: [
                  { id: 'a1l8a2q1', text: 'Das Buch liegt auf ___ Tisch (der).', options: ['den', 'dem', 'der'], correctAnswer: 'dem' },
                  { id: 'a1l8a2q2', text: 'Ich bin in ___ Schule (die).', options: ['den', 'dem', 'der'], correctAnswer: 'der' },
                  { id: 'a1l8a2q3', text: 'Das Bild hängt an ___ Wand (die).', options: ['den', 'dem', 'der'], correctAnswer: 'der' },
                  { id: 'a1l8a2q4', text: 'Wir sind in ___ Kino (das).', options: ['dem', 'den', 'im'], correctAnswer: 'im' },
              ]
          }]},
          { id: 'a1l9', title: 'Asking for Directions', estimatedTime: 30, isCompleted: false, activities: [{id: 'a1l9a1', type: ActivityType.Vocabulary, title: 'Directions', content: 'Learn phrases like "links", "rechts", "geradeaus".'}, {id: 'a1l9a2', type: ActivityType.Listening, title: 'Follow Directions', content: 'Listen to directions to a location.'}, {
              id: 'a1l9a3', 
              type: ActivityType.Grammar, 
              title: 'The Imperative', 
              content: 'The imperative is used for commands. Practice the different forms.',
              questions: [
                  { id: 'a1l9a3q1', text: '___ nach Hause! (gehen, informal "du")', options: ['Geh', 'Gehst', 'Gehen'], correctAnswer: 'Geh' },
                  { id: 'a1l9a3q2', text: '___ Sie bitte langsam! (sprechen, formal "Sie")', options: ['Sprech', 'Sprecht', 'Sprechen Sie'], correctAnswer: 'Sprechen Sie' },
                  { id: 'a1l9a3q3', text: '___ das Fenster zu! (machen, plural "ihr")', options: ['Mach', 'Macht', 'Machen'], correctAnswer: 'Macht' },
              ]
          }] },
          { id: 'a1l10', title: 'Talking about the Weather', estimatedTime: 20, isCompleted: false, activities: [{id: 'a1l10a1', type: ActivityType.Vocabulary, title: 'Weather words', content: 'Learn how to describe the weather, e.g. "Es ist sonnig.".'}, {id: 'a1l10a2', type: ActivityType.Conversation, title: 'Small Talk', content: 'Practice making small talk about the weather.'}]},
          { id: 'a1l10b', title: 'Public Transportation', estimatedTime: 25, isCompleted: false, activities: [{id: 'a1l10b1', type: ActivityType.Vocabulary, title: 'Transportation', content: 'Learn words for bus, train, subway, etc. (der Bus, die U-Bahn, der Zug).'}, {
              id: 'a1l10b2', 
              type: ActivityType.Grammar, 
              title: 'The Dative Case with "mit"', 
              content: 'The preposition "mit" (with, by) always takes the dative case. This means the noun that follows it must use the dative article.',
              questions: [
                  { id: 'a1l10b2q1', text: 'Ich fahre mit ___ Bus (der).', options: ['den', 'dem', 'der'], correctAnswer: 'dem' },
                  { id: 'a1l10b2q2', text: 'Er spricht mit ___ Frau (die).', options: ['den', 'dem', 'der'], correctAnswer: 'der' },
                  { id: 'a1l10b2q3', text: 'Wir spielen mit ___ Kindern (plural).', options: ['die', 'den', 'dem'], correctAnswer: 'den' },
              ]
          }, {id: 'a1l10b3', type: ActivityType.Conversation, title: 'Getting around the city', content: 'Practice asking how to get to a place and explaining which transport you take.'}]},
          {
            id: 'a1m4-test',
            title: 'Module 4 Test',
            estimatedTime: 15,
            isCompleted: false,
            activities: [
              {
                id: 'a1m4-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Entschuldigung, wie komme ich zum Bahnhof? Gehen Sie hier geradeaus und dann die zweite Straße links. Der Bahnhof ist auf der rechten Seite.`,
                questions: [
                  { id: 'q1', text: "Where does the person want to go?", options: ['To the post office', 'To the supermarket', 'To the train station', 'To the cinema'], correctAnswer: 'To the train station' },
                  { id: 'q2', text: "Which way should the person go?", options: ['First left, then right', 'Straight, then second right', 'Straight, then second left', 'Only straight'], correctAnswer: 'Straight, then second left' },
                ],
              },
              {
                id: 'a1m4-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Sprecher', line: 'Das Wetter heute: Am Vormittag ist es sonnig. Am Nachmittag kommen Wolken und es regnet. Die Temperatur ist 15 Grad.' },
                ],
                questions: [
                    { id: 'q1', text: "What is the weather like in the morning?", options: ['Rainy', 'Cloudy', 'Sunny', 'Windy'], correctAnswer: 'Sunny' },
                    { id: 'q2', text: "What happens in the afternoon?", options: ['It gets sunny', 'It snows', 'It gets windy', 'It rains'], correctAnswer: 'It rains' },
                ],
              },
              {
                id: 'a1m4-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write two sentences describing your apartment. Use prepositions like "in", "an", or "auf".',
              },
            ],
          }
        ]
      },
      {
        id: 'a1m5',
        title: 'Module 5: Final Checkpoint',
        progress: 0,
        lessons: [
          {
            id: 'a1-test',
            title: 'A1 Level Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'a1-quiz',
                type: ActivityType.Quiz,
                title: 'Test your A1 Knowledge',
                content: 'This quiz covers the key topics from the A1 course. Good luck!',
                questions: [
                  { id: 'q1', text: 'How do you formally say "Hello" in German?', options: ['Tschüss', 'Hallo', 'Guten Tag', 'Moin'], correctAnswer: 'Guten Tag' },
                  { id: 'q2', text: 'What does "Ich möchte einen Kaffee" mean?', options: ['I have a coffee', 'I would like a coffee', 'I am a coffee', 'Where is the coffee?'], correctAnswer: 'I would like a coffee' },
                  { id: 'q3', text: 'Which word means "Goodbye" (formal)?', options: ['Bis bald', 'Ciao', 'Tschüss', 'Auf Wiedersehen'], correctAnswer: 'Auf Wiedersehen' },
                  { id: 'q4', text: 'Choose the correct verb for "du": Du ___ Anna.', options: ['bin', 'ist', 'sind', 'bist'], correctAnswer: 'bist' },
                  { id: 'q5', text: 'Which sentence is correct?', options: ['Er aufsteht um 7 Uhr.', 'Er um 7 Uhr aufsteht.', 'Er steht um 7 Uhr auf.', 'Aufsteht er um 7 Uhr.'], correctAnswer: 'Er steht um 7 Uhr auf.' },
                  { id: 'q6', text: 'How do you ask "Where are you from?"', options: ['Wie heißen Sie?', 'Was ist das?', 'Woher kommen Sie?', 'Wann beginnt der Film?'], correctAnswer: 'Woher kommen Sie?' },
                  { id: 'q7', text: 'What is the correct article for "Mutter"?', options: ['der', 'die', 'das', 'den'], correctAnswer: 'die' },
                  { id: 'q8', text: 'How do you say "I can swim"?', options: ['Ich muss schwimmen.', 'Ich möchte schwimmen.', 'Ich kann schwimmen.', 'Ich schwimme gern.'], correctAnswer: 'Ich kann schwimmen.' },
                  { id: 'q9', text: 'Which preposition is used for location with "Kino"? "Ich bin ___ Kino."', options: ['in', 'im', 'auf', 'an'], correctAnswer: 'im' },
                  { id: 'q10', text: 'How do you say "25" in German?', options: ['fünfzigzwanzig', 'zwanzigfünf', 'fünfundzwanzig', 'zwei fünf'], correctAnswer: 'fünfundzwanzig' },
                ]
              }
            ]
          }
        ]
      }
    ],
  },
  {
    id: 'a2',
    level: 'A2',
    title: 'Elementary German',
    description: 'Build on your basic knowledge to handle simple, routine tasks and conversations.',
    progress: 0,
    modules: [
      {
        id: 'a2m1',
        title: 'Module 1: Past Tenses & Travel',
        progress: 0,
        lessons: [
          { id: 'a2l1', title: 'Talking About a Vacation (Perfekt)', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'a2l1a1', 
                type: ActivityType.Grammar, 
                title: 'The "Perfekt" Tense', 
                content: 'The Perfekt tense is used for the past in spoken German. It\'s formed with "haben" or "sein" + a past participle. Use "sein" for movement/change of state, "haben" for most others.',
                questions: [
                    { id: 'a2l1a1q1', text: 'Ich ___ Pizza gegessen.', options: ['habe', 'bin', 'hatte', 'war'], correctAnswer: 'habe' },
                    { id: 'a2l1a1q2', text: 'Wir ___ nach Berlin gefahren.', options: ['haben', 'sind', 'hatten', 'waren'], correctAnswer: 'sind' },
                    { id: 'a2l1a1q3', text: 'Hast du den Film ___? (sehen)', options: ['gesehen', 'gesah', 'siehst'], correctAnswer: 'gesehen' },
                    { id: 'a2l1a1q4', text: 'Er ist zu Hause ___. (bleiben)', options: ['geblieben', 'gebleibt', 'blieb'], correctAnswer: 'geblieben' },
                ]
              },
              {id: 'a2l1a2', type: ActivityType.Vocabulary, title: 'Vacation Words', content: 'Vocabulary for travel, holidays, and sightseeing.'},
              {id: 'a2l1a3', type: ActivityType.Conversation, title: 'Your Last Vacation', content: 'Tell the AI tutor about your last vacation using the Perfekt tense.'},
          ]},
          { id: 'a2l2', title: 'At the Train Station', estimatedTime: 25, isCompleted: false, activities: [
              {id: 'a2l2a1', type: ActivityType.Vocabulary, title: 'Train Travel', content: 'Learn words like "Gleis", "Fahrkarte", "Abfahrt", "Ankunft", and "Verspätung".'},
              {id: 'a2l2a2', type: ActivityType.Listening, title: 'Station Announcements', content: 'Listen to a typical train station announcement.'},
              {id: 'a2l2a3', type: ActivityType.Conversation, title: 'Buying a Ticket', content: 'Roleplay buying a train ticket to Hamburg.'},
          ]},
          { id: 'a2l3', title: 'Simple Past (Präteritum)', estimatedTime: 25, isCompleted: false, activities: [
              {
                id: 'a2l3a1', 
                type: ActivityType.Grammar, 
                title: 'Präteritum of sein/haben', 
                content: '"sein" and "haben" often use the Präteritum even in conversation. Practice their simple past forms.',
                questions: [
                    { id: 'a2l3a1q1', text: 'Gestern ___ ich im Kino.', options: ['war', 'bin', 'warst', 'gewesen'], correctAnswer: 'war' },
                    { id: 'a2l3a1q2', text: 'Wir ___ viel Spaß.', options: ['hatten', 'haben', 'hattet', 'gehabt'], correctAnswer: 'hatten' },
                    { id: 'a2l3a1q3', text: '___ du gestern zu Hause?', options: ['Warst', 'Bist', 'Waren', 'Hattest'], correctAnswer: 'Warst' },
                ]
              },
              {
                id: 'a2l3a2', 
                type: ActivityType.Grammar, 
                title: 'Präteritum of Modal Verbs', 
                content: 'Modal verbs also frequently use the Präteritum. Note that the umlaut from the present tense is often dropped.',
                questions: [
                    { id: 'a2l3a2q1', text: 'Ich ___ nicht schwimmen. (können)', options: ['konnte', 'könnte', 'kann'], correctAnswer: 'konnte' },
                    { id: 'a2l3a2q2', text: 'Er ___ zur Arbeit gehen. (müssen)', options: ['musste', 'müsste', 'muss'], correctAnswer: 'musste' },
                    { id: 'a2l3a2q3', text: 'Sie ___ den Film sehen. (wollen)', options: ['wollte', 'wöllte', 'will'], correctAnswer: 'wollte' },
                ]
              },
              {id: 'a2l3a3', type: ActivityType.Reading, title: 'A Postcard from the Past', content: 'Read a short postcard using "war" and "hatte".'},
          ]},
          { id: 'a2l3b', title: 'Booking a Hotel Room', estimatedTime: 25, isCompleted: false, activities: [
              {id: 'a2l3b1', type: ActivityType.Vocabulary, title: 'Hotel Vocabulary', content: 'Learn words like "Einzelzimmer", "Doppelzimmer", "Frühstück", "Reservierung".'},
              {id: 'a2l3b2', type: ActivityType.Conversation, title: 'Booking a Room', content: 'Roleplay a phone call to a hotel to book a room for the weekend.'},
          ]},
          {
            id: 'a2m1-test',
            title: 'Module 1 Test',
            estimatedTime: 15,
            isCompleted: false,
            activities: [
              {
                id: 'a2m1-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Letztes Jahr bin ich nach Italien geflogen. Das Wetter war super. Ich habe viel Pizza gegessen und bin im Meer geschwommen. Ich hatte ein schönes Hotelzimmer.`,
                questions: [
                  { id: 'q1', text: "Where did the person go on vacation?", options: ['Spain', 'France', 'Italy', 'Germany'], correctAnswer: 'Italy' },
                  { id: 'q2', text: "What did the person do?", options: ['Went hiking', 'Ate pizza and swam', 'Visited museums', 'Learned Italian'], correctAnswer: 'Ate pizza and swam' },
                ],
              },
              {
                id: 'a2m1-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Rezeptionist', line: 'Guten Tag, Hotel "Sonne". Wie kann ich Ihnen helfen?' },
                    { speaker: 'Gast', line: 'Guten Tag. Ich möchte ein Zimmer reservieren.' },
                    { speaker: 'Rezeptionist', line: 'Für wie viele Nächte?' },
                    { speaker: 'Gast', line: 'Für zwei Nächte, bitte.' },
                ],
                questions: [
                    { id: 'q1', text: "What does the guest want to do?", options: ['Cancel a reservation', 'Ask for directions', 'Book a room', 'Order room service'], correctAnswer: 'Book a room' },
                    { id: 'q2', text: "For how long does the guest want the room?", options: ['One night', 'Two nights', 'Three nights', 'A week'], correctAnswer: 'Two nights' },
                ],
              },
              {
                id: 'a2m1-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write two sentences about your last weekend using the Perfekt tense.',
              },
            ],
          }
        ]
      },
      {
        id: 'a2m2',
        title: 'Module 2: Daily Life & Appointments',
        progress: 0,
        lessons: [
          { id: 'a2l4', title: 'Describing Your Daily Routine', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'a2l4a1', type: ActivityType.Vocabulary, title: 'Daily Actions', content: 'Learn verbs for your daily routine, like "aufstehen", "frühstücken", "arbeiten".'},
              {
                id: 'a2l4a2', 
                type: ActivityType.Grammar, 
                title: 'Reflexive Verbs', 
                content: 'Reflexive verbs require a reflexive pronoun that matches the subject. Practice choosing the correct pronoun.',
                questions: [
                    { id: 'a2l4a2q1', text: 'Ich wasche ___.', options: ['mich', 'dich', 'sich', 'uns'], correctAnswer: 'mich' },
                    { id: 'a2l4a2q2', text: 'Er rasiert ___.', options: ['mich', 'dich', 'sich', 'euch'], correctAnswer: 'sich' },
                    { id: 'a2l4a2q3', text: 'Wir treffen ___ um 8 Uhr.', options: ['mich', 'sich', 'uns', 'euch'], correctAnswer: 'uns' },
                    { id: 'a2l4a2q4', text: 'Freust du ___?', options: ['mich', 'dich', 'sich', 'uns'], correctAnswer: 'dich' },
                ]
              },
              {id: 'a2l4a3', type: ActivityType.Conversation, title: 'Your Typical Day', content: 'Describe your daily routine to the AI tutor.'},
          ]},
          { id: 'a2l5', title: 'Making an Appointment', estimatedTime: 25, isCompleted: false, activities: [
              {id: 'a2l5a1', type: ActivityType.Vocabulary, title: 'Appointment Phrases', content: 'Learn how to say "Ich möchte einen Termin vereinbaren." and suggest times.'},
              {id: 'a2l5a2', type: ActivityType.Conversation, title: 'Doctor\'s Appointment', content: 'Roleplay calling a doctor\'s office to make an appointment.'},
          ]},
           { id: 'a2l6', title: 'Connectors (denn, weil, dass)', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'a2l6a1', 
                type: ActivityType.Grammar, 
                title: 'Giving Reasons (denn vs. weil)', 
                content: '"denn" (because) doesn\'t change word order. "weil" (because) is a subordinating conjunction and sends the verb to the end of the clause.',
                questions: [
                    { id: 'a2l6a1q1', text: 'Ich lerne Deutsch, ___ ich in Deutschland arbeiten will.', options: ['denn', 'weil'], correctAnswer: 'weil' },
                    { id: 'a2l6a1q2', text: 'Ich gehe nicht spazieren, ___ es regnet.', options: ['denn', 'weil'], correctAnswer: 'denn' },
                    { id: 'a2l6a1q3', text: 'Ich bin müde, weil ich schlecht ___.', options: ['geschlafen habe', 'habe geschlafen'], correctAnswer: 'geschlafen habe' },
                ]
              },
              {
                id: 'a2l6a2', 
                type: ActivityType.Grammar, 
                title: 'Subordinate Clauses with "dass"', 
                content: '"dass" (that) introduces a subordinate clause, sending the conjugated verb to the very end.',
                questions: [
                    { id: 'a2l6a2q1', text: 'Ich weiß, dass du ___ .', options: ['müde bist', 'bist müde'], correctAnswer: 'müde bist' },
                    { id: 'a2l6a2q2', text: 'Er denkt, dass das Wetter morgen gut ___ .', options: ['sein wird', 'wird sein'], correctAnswer: 'wird sein' },
                    { id: 'a2l6a2q3', text: 'Es ist wichtig, dass wir pünktlich ___ .', options: ['sind', 'sein'], correctAnswer: 'sind' },
                ]
              },
              {id: 'a2l6a3', type: ActivityType.Writing, title: 'Practice Sentences', content: 'Write sentences explaining why you are learning German.'},
          ]},
           { id: 'a2l6b', title: 'Household Chores', estimatedTime: 20, isCompleted: false, activities: [
              {id: 'a2l6b1', type: ActivityType.Vocabulary, title: 'Chores Vocabulary', content: 'Learn words for chores like "aufräumen", "staubsaugen", "den Müll rausbringen".'},
              {id: 'a2l6b2', type: ActivityType.Conversation, title: 'Sharing Chores', content: 'Discuss who does which chores in your household.'},
          ]},
          {
            id: 'a2m2-test',
            title: 'Module 2 Test',
            estimatedTime: 15,
            isCompleted: false,
            activities: [
              {
                id: 'a2m2-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Ich lerne Deutsch, weil ich in Deutschland arbeiten will. Ich finde, dass die deutsche Grammatik schwierig ist. Ich muss jeden Tag lernen, denn ich will die Sprache gut sprechen.`,
                questions: [
                  { id: 'q1', text: "Why is the person learning German?", options: ['For vacation', 'For work', 'For fun', 'To study'], correctAnswer: 'For work' },
                  { id: 'q2', text: "What does the person think about German grammar?", options: ['It is easy', 'It is interesting', 'It is difficult', 'It is boring'], correctAnswer: 'It is difficult' },
                ],
              },
              {
                id: 'a2m2-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Arztpraxis', line: 'Arztpraxis Dr. Krause, guten Tag.' },
                    { speaker: 'Patient', line: 'Guten Tag, mein Name ist Bauer. Ich möchte einen Termin vereinbaren.' },
                    { speaker: 'Arztpraxis', line: 'Haben Sie am Dienstag um 10 Uhr Zeit?' },
                    { speaker: 'Patient', line: 'Ja, das passt gut. Vielen Dank.' },
                ],
                questions: [
                    { id: 'q1', text: "Who is the patient calling?", options: ['A hotel', "A doctor's office", 'A restaurant', 'A friend'], correctAnswer: "A doctor's office" },
                    { id: 'q2', text: "When is the appointment?", options: ['Monday at 10', 'Tuesday at 11', 'Tuesday at 10', 'Wednesday at 9'], correctAnswer: 'Tuesday at 10' },
                ],
              },
              {
                id: 'a2m2-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a sentence with "weil" to explain why you like or dislike something.',
              },
            ],
          }
        ]
      },
       {
        id: 'a2m3',
        title: 'Module 3: People & Places',
        progress: 0,
        lessons: [
          { id: 'a2l7', title: 'Describing People & Things', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'a2l7a1', type: ActivityType.Vocabulary, title: 'Adjectives for Appearance & Personality', content: 'Learn words to describe what people look like and what they are like.'},
              {
                id: 'a2l7a2', 
                type: ActivityType.Grammar, 
                title: 'Adjective Endings', 
                content: 'When an adjective comes before a noun, it needs an ending. The ending depends on the article, gender, and case. Let\'s practice with Nominative and Accusative.',
                questions: [
                    { id: 'a2l7a2q1', text: 'Der ___ Mann ist nett. (gut)', options: ['gut', 'gute', 'guten'], correctAnswer: 'gute' },
                    { id: 'a2l7a2q2', text: 'Ich sehe einen ___ Hund. (klein)', options: ['klein', 'kleine', 'kleinen'], correctAnswer: 'kleinen' },
                    { id: 'a2l7a2q3', text: 'Das ist eine ___ Tasche. (neu)', options: ['neu', 'neue', 'neuen'], correctAnswer: 'neue' },
                    { id: 'a2l7a2q4', text: 'Er kauft das ___ Auto. (rot)', options: ['rot', 'rote', 'roten'], correctAnswer: 'rote' },
                ]
              },
              {id: 'a2l7a3', type: ActivityType.Writing, title: 'Describe a Friend', content: 'Write a short text describing a friend or family member.'},
          ]},
          { id: 'a2l8', title: 'Health & Seeing a Doctor', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'a2l8a1', type: ActivityType.Vocabulary, title: 'Body Parts & Sickness', content: 'Learn how to say what hurts (e.g., "Ich habe Kopfschmerzen.").'},
              {id: 'a2l8a2', type: ActivityType.Conversation, title: 'At the Doctor', content: 'Roleplay explaining your symptoms to a doctor.'},
              {
                id: 'a2l8a3', 
                type: ActivityType.Grammar, 
                title: 'The Imperative for Advice', 
                content: 'The formal imperative (using "Sie") is a polite way to give advice. The structure is Verb + Sie + ... .',
                questions: [
                    { id: 'a2l8a3q1', text: '___ Sie die Tabletten. (nehmen)', options: ['Nehmen', 'Nehmen Sie', 'Nimm'], correctAnswer: 'Nehmen Sie' },
                    { id: 'a2l8a3q2', text: '___ Sie viel Wasser. (trinken)', options: ['Trinken', 'Trink', 'Trinken Sie'], correctAnswer: 'Trinken Sie' },
                ]
              },
          ]},
          { id: 'a2l9', title: 'Clothing & Shopping', estimatedTime: 25, isCompleted: false, activities: [
              {id: 'a2l9a1', type: ActivityType.Vocabulary, title: 'Clothing Items', content: 'Learn words for different clothes.'},
              {
                id: 'a2l9a2', 
                type: ActivityType.Grammar, 
                title: 'Dative Personal Pronouns', 
                content: 'The dative case is for the indirect object. Verbs like "helfen" (to help) and "gefallen" (to be pleasing to) always take a dative object. Dative pronouns: mir, dir, ihm, ihr, uns, euch, ihnen/Ihnen.',
                questions: [
                    { id: 'a2l9a2q1', text: 'Kannst du ___ helfen?', options: ['ich', 'mich', 'mir'], correctAnswer: 'mir' },
                    { id: 'a2l9a2q2', text: 'Das Geschenk gefällt ___. (er)', options: ['ihn', 'ihm', 'sein'], correctAnswer: 'ihm' },
                    { id: 'a2l9a2q3', text: 'Ich danke ___. (Sie, formal)', options: ['Sie', 'Ihnen', 'Ihrer'], correctAnswer: 'Ihnen' },
                    { id: 'a2l9a2q4', text: 'Der Pullover passt ___. (sie)', options: ['sie', 'ihr', 'ihre'], correctAnswer: 'ihr' },
                ]
              },
          ]},
          { id: 'a2l9b', title: 'Holidays and Traditions', estimatedTime: 25, isCompleted: false, activities: [
              {id: 'a2l9b1', type: ActivityType.Vocabulary, title: 'German Holidays', content: 'Learn about major holidays in Germany like Weihnachten (Christmas) and Ostern (Easter).'},
              {id: 'a2l9b2', type: ActivityType.Reading, title: 'A German Christmas Market', content: 'Read a short text about a typical German Christmas market.'},
          ]},
          {
            id: 'a2m3-test',
            title: 'Module 3 Test',
            estimatedTime: 15,
            isCompleted: false,
            activities: [
              {
                id: 'a2m3-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Ich möchte einen neuen Pullover kaufen. Ich gehe in ein großes Geschäft in der Stadt. Der rote Pullover gefällt mir sehr gut. Er ist schön und nicht zu teuer.`,
                questions: [
                  { id: 'q1', text: "What does the person want to buy?", options: ['A t-shirt', 'A jacket', 'A sweater', 'Pants'], correctAnswer: 'A sweater' },
                  { id: 'q2', text: "Which sweater does the person like?", options: ['The blue one', 'The green one', 'The expensive one', 'The red one'], correctAnswer: 'The red one' },
                ],
              },
              {
                id: 'a2m3-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Arzt', line: 'Guten Tag. Was fehlt Ihnen denn?' },
                    { speaker: 'Patient', line: 'Guten Tag, Herr Doktor. Ich habe Kopfschmerzen und mein Hals tut weh.' },
                    { speaker: 'Arzt', line: 'Okay, bleiben Sie ein paar Tage im Bett und trinken Sie viel Tee.' },
                ],
                questions: [
                    { id: 'q1', text: "What are the patient's symptoms?", options: ['Stomach ache', 'Headache and sore throat', 'Back pain', 'Fever'], correctAnswer: 'Headache and sore throat' },
                    { id: 'q2', text: "What advice does the doctor give?", options: ['Go to work', 'Do sports', 'Stay in bed and drink tea', 'Take a walk'], correctAnswer: 'Stay in bed and drink tea' },
                ],
              },
              {
                id: 'a2m3-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Describe a piece of clothing you like using at least one adjective with the correct ending.',
              },
            ],
          }
        ]
      },
      {
        id: 'a2m4',
        title: 'Module 4: Housing & Celebrations',
        progress: 0,
        lessons: [
            { id: 'a2l10', title: 'Apartment Hunting', estimatedTime: 25, isCompleted: false, activities: [
              {id: 'a2l10a1', type: ActivityType.Vocabulary, title: 'Housing Vocabulary', content: 'Learn words like "die Miete", "die Wohnung", "der Balkon", "die Nebenkosten".'},
              {id: 'a2l10a2', type: ActivityType.Reading, title: 'Reading an Ad', content: 'Understand a typical German apartment rental advertisement.'},
          ]},
          { id: 'a2l11', title: 'Invitations & Celebrations', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'a2l11a1', type: ActivityType.Vocabulary, title: 'Party Time', content: 'Learn vocabulary related to birthdays and other celebrations.'},
              {
                id: 'a2l11a2', 
                type: ActivityType.Grammar, 
                title: 'Dative Prepositions', 
                content: 'These prepositions always take the dative case: mit, nach, aus, zu, von, bei. Practice using them.',
                questions: [
                    { id: 'a2l11a2q1', text: 'Ich komme ___ Spanien.', options: ['von', 'aus', 'nach'], correctAnswer: 'aus' },
                    { id: 'a2l11a2q2', text: 'Er fährt ___ dem (zum) Arzt.', options: ['zu', 'bei', 'nach'], correctAnswer: 'zu' },
                    { id: 'a2l11a2q3', text: 'Sie wohnt ___ ihren Eltern.', options: ['von', 'mit', 'bei'], correctAnswer: 'bei' },
                    { id: 'a2l11a2q4', text: 'Nach der Arbeit gehe ich ___ Hause.', options: ['zu', 'nach', 'aus'], correctAnswer: 'nach' },
                ]
              },
              {id: 'a2l11a3', type: ActivityType.Writing, title: 'Write an Invitation', content: 'Write a short email inviting a friend to your birthday party.'},
          ]},
          { id: 'a2l12', title: 'Comparative & Superlative', estimatedTime: 25, isCompleted: false, activities: [
              {
                id: 'a2l12a1', 
                type: ActivityType.Grammar, 
                title: 'Making Comparisons', 
                content: 'Form the comparative with "-er" and the superlative with "am ...-sten". Some adjectives get an umlaut. Use "als" (than) for comparisons.',
                questions: [
                    { id: 'a2l12a1q1', text: 'Berlin ist ___ als Hamburg. (groß)', options: ['größer', 'am größten', 'so groß'], correctAnswer: 'größer' },
                    { id: 'a2l12a1q2', text: 'Dieser Film ist ___ als der andere. (gut)', options: ['guter', 'besser', 'am besten'], correctAnswer: 'besser' },
                    { id: 'a2l12a1q3', text: 'Ich laufe schnell, aber du läufst ___.', options: ['schneller', 'am schnellsten', 'schnellsten'], correctAnswer: 'schneller' },
                    { id: 'a2l12a1q4', text: 'Von allen Städten finde ich Wien ___ . (schön)', options: ['schöner', 'am schönsten', 'schönsten'], correctAnswer: 'am schönsten' },
                ]
              },
              {id: 'a2l12a2', type: ActivityType.Conversation, title: 'Comparing Cities', content: 'Compare your hometown to another city you know.'},
          ]},
          { id: 'a2l12b', title: 'Giving Gifts & Thanking', estimatedTime: 20, isCompleted: false, activities: [
              {id: 'a2l12b1', type: ActivityType.Vocabulary, title: 'Gifts and Thanks', content: 'Learn phrases for giving a gift ("Das ist für dich.") and thanking someone ("Vielen Dank!").'},
              {id: 'a2l12b2', type: ActivityType.Conversation, title: 'Birthday Party Roleplay', content: 'Roleplay being at a birthday party, giving a gift, and congratulating the host.'},
          ]},
          {
            id: 'a2m4-test',
            title: 'Module 4 Test',
            estimatedTime: 15,
            isCompleted: false,
            activities: [
              {
                id: 'a2m4-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Liebe Anna, ich möchte dich zu meiner Geburtstagsparty einladen. Die Party ist am Samstag um 19 Uhr bei mir zu Hause. Es gibt Musik und gutes Essen. Ich freue mich auf dich! Viele Grüße, Tom.`,
                questions: [
                  { id: 'q1', text: "Who is inviting whom?", options: ['Anna invites Tom', 'Tom invites Anna', 'A friend invites Anna and Tom', 'It is not clear'], correctAnswer: 'Tom invites Anna' },
                  { id: 'q2', text: "Where is the party?", options: ["At Anna's house", "At Tom's house", 'In a restaurant', 'In a club'], correctAnswer: "At Tom's house" },
                ],
              },
              {
                id: 'a2m4-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Person A', line: 'Welche Stadt ist größer, Berlin oder München?' },
                    { speaker: 'Person B', line: 'Berlin ist größer als München. Aber ich finde München am schönsten.' },
                ],
                questions: [
                    { id: 'q1', text: "Which city is bigger?", options: ['Munich', 'Berlin', 'They are the same size', 'The speaker does not know'], correctAnswer: 'Berlin' },
                    { id: 'q2', text: "Which city does Person B find the most beautiful?", options: ['Berlin', 'Munich', 'Both', 'Neither'], correctAnswer: 'Munich' },
                ],
              },
              {
                id: 'a2m4-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a sentence with a dative preposition (e.g., mit, nach, zu, von).',
              },
            ],
          }
        ]
      },
      {
        id: 'a2m5',
        title: 'Module 5: Final Checkpoint',
        progress: 0,
        lessons: [
          {
            id: 'a2-test',
            title: 'A2 Level Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'a2-quiz',
                type: ActivityType.Quiz,
                title: 'Test your A2 Knowledge',
                content: 'This quiz covers A2 topics like past tenses and daily routines.',
                questions: [
                  { id: 'a2q1', text: 'Choose the correct Perfekt form: "Ich bin nach Hause..."', options: ['gehe', 'gegangen', 'ging', 'gehen'], correctAnswer: 'gegangen' },
                  { id: 'a2q2', text: 'Which sentence is correct? "Ich lerne Deutsch, ..."', options: ['weil ich es mag.', 'denn ich es mag.', 'deshalb ich es mag.', 'trotzdem ich es mag.'], correctAnswer: 'weil ich es mag.' },
                  { id: 'a2q3', text: 'Which sentence is in the simple past (Präteritum)?', options: ['Ich war müde.', 'Ich bin müde gewesen.', 'Ich bin müde.', 'Ich werde müde sein.'], correctAnswer: 'Ich war müde.' },
                  { id: 'a2q4', text: 'Choose the correct dative pronoun: "Der Film gefällt ___ nicht."', options: ['ich', 'mich', 'mir', 'mein'], correctAnswer: 'mir' },
                  { id: 'a2q5', text: 'Choose the correct comparative form: "Berlin ist ___ als Hamburg."', options: ['groß', 'größer', 'am größten', 'so groß'], correctAnswer: 'größer' },
                  { id: 'a2q6', text: 'Which of the following is a reflexive verb?', options: ['schlafen', 'essen', 'sich kämmen', 'lesen'], correctAnswer: 'sich kämmen' },
                  { id: 'a2q7', text: 'Complete the sentence with the correct adjective ending: "Ich habe ein___ neu___ Pullover."', options: ['en/en', 'e/e', 'er/en', 'en/e'], correctAnswer: 'en/en' },
                  { id: 'a2q8', text: 'Choose the correct preposition: "Er kommt ___ dem Kino."', options: ['von', 'in', 'aus', 'an'], correctAnswer: 'aus' },
                  { id: 'a2q9', text: 'Which sentence uses "dass" correctly?', options: ['Ich denke, dass du Recht hast.', 'Ich denke, dass hast du Recht.', 'Ich denke, du hast dass Recht.', 'Ich denke, dass du hast Recht.'], correctAnswer: 'Ich denke, dass du Recht hast.' },
                  { id: 'a2q10', text: 'How do you say "I had to work"?', options: ['Ich habe arbeiten gemusst.', 'Ich hatte arbeiten müssen.', 'Ich musste arbeiten.', 'Ich war arbeiten.'], correctAnswer: 'Ich musste arbeiten.' },
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'b1',
    level: 'B1',
    title: 'Intermediate German',
    description: 'Develop the skills to deal with most situations likely to arise whilst travelling.',
    progress: 0,
    modules: [
       {
        id: 'b1m1',
        title: 'Module 1: Experiences & Opinions',
        progress: 0,
        lessons: [
          { id: 'b1l1', title: 'Narrating Past Events (Präteritum)', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'b1l1a1', 
                type: ActivityType.Grammar, 
                title: 'The "Präteritum" Tense', 
                content: 'The Präteritum is used mainly in written German (novels, news) to describe the past. Practice the forms for strong (irregular) verbs.',
                questions: [
                    { id: 'b1l1a1q1', text: 'Als Kind ___ ich oft im Park. (spielen)', options: ['spielte', 'gespielt habe', 'spielte ich'], correctAnswer: 'spielte' },
                    { id: 'b1l1a1q2', text: 'Er ___ das Buch in einer Stunde. (lesen)', options: ['las', 'gelesen hat', 'liest'], correctAnswer: 'las' },
                    { id: 'b1l1a1q3', text: 'Wir ___ gestern ins Museum. (gehen)', options: ['gingen', 'gegangen sind', 'gehen'], correctAnswer: 'gingen' },
                    { id: 'b1l1a1q4', text: 'Sie ___ einen Apfel. (essen)', options: ['aß', 'gegessen hat', 'isst'], correctAnswer: 'aß' },
                ]
              },
              {id: 'b1l1a2', type: ActivityType.Conversation, title: 'A Memorable Day', content: 'Tell the AI tutor about a memorable day from your past using the Präteritum.'},
          ]},
          { id: 'b1l2', title: 'Connectors (weil, deshalb, obwohl, trotzdem)', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'b1l2a1', 
                type: ActivityType.Grammar, 
                title: 'Complex Connectors', 
                content: '"weil" & "obwohl" send the verb to the end. With "deshalb" & "trotzdem", the verb comes right after. Practice choosing the correct structure.',
                questions: [
                    { id: 'b1l2a1q1', text: 'Er lernt Deutsch, weil er in Berlin ___.', options: ['wohnt', 'wohnen'], correctAnswer: 'wohnt' },
                    { id: 'b1l2a1q2', text: 'Es regnet, deshalb ___ ich zu Hause.', options: ['bleibe', 'ich bleibe'], correctAnswer: 'bleibe' },
                    { id: 'b1l2a1q3', text: 'Sie geht spazieren, obwohl sie ___ ist.', options: ['müde', 'ist müde'], correctAnswer: 'müde' },
                    { id: 'b1l2a1q4', text: 'Er war krank, trotzdem ___ er zur Arbeit.', options: ['ist gegangen', 'gegangen ist'], correctAnswer: 'ist gegangen' },
                ]
              },
              {id: 'b1l2a2', type: ActivityType.Writing, title: 'Combine Sentences', content: 'Practice connecting ideas by combining sentences.'},
          ]},
          { id: 'b1l3', title: 'Debating a Topic', estimatedTime: 35, isCompleted: false, activities: [
              {id: 'b1l3a1', type: ActivityType.Vocabulary, title: 'Opinion Phrases', content: 'Learn phrases like "Meiner Meinung nach...", "Ich bin der Ansicht, dass...", "Einerseits..., andererseits...".'},
              {id: 'b1l3a2', type: ActivityType.Conversation, title: 'City vs. Countryside', content: 'Discuss the pros and cons of living in the city versus the countryside.'},
          ]},
          { id: 'b1l3b', title: 'Talking About Films and Books', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'b1l3b1', type: ActivityType.Vocabulary, title: 'Media Vocabulary', content: 'Learn words like "die Handlung" (plot), "der Hauptdarsteller" (main actor), "das Genre" (genre).'},
              {id: 'b1l3b2', type: ActivityType.Conversation, title: 'Your Favorite Film', content: 'Describe your favorite film or book, explaining the plot and why you like it.'},
          ]},
          {
            id: 'b1m1-test',
            title: 'Module 1 Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'b1m1-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Ich wohne lieber auf dem Land, obwohl es in der Stadt mehr Geschäfte gibt. Einerseits ist es auf dem Land ruhiger, andererseits braucht man immer ein Auto. Meiner Meinung nach sind die Vorteile aber größer als die Nachteile.`,
                questions: [
                  { id: 'q1', text: "Where does the author prefer to live?", options: ['In the city', 'In the countryside', 'In a small town', 'In an apartment'], correctAnswer: 'In the countryside' },
                  { id: 'q2', text: "What is a disadvantage of living in the countryside according to the text?", options: ['It is too quiet', 'There are no shops', 'You always need a car', 'The disadvantages are greater than the advantages'], correctAnswer: 'You always need a car' },
                ],
              },
              {
                id: 'b1m1-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Anna', line: 'Gestern las ich ein sehr gutes Buch. Es war ein Krimi.' },
                    { speaker: 'Ben', line: 'Ach ja? Ich sehe lieber Filme. Ich war am Wochenende im Kino und sah den neuen James-Bond-Film.' },
                    { speaker: 'Anna', line: 'Toll! Und wie war er?' },
                    { speaker: 'Ben', line: 'Er war spannend, obwohl die Handlung ein bisschen kompliziert war.' },
                ],
                questions: [
                    { id: 'q1', text: "What did Anna do yesterday?", options: ['She watched a film', 'She went to the cinema', 'She read a book', 'She wrote a story'], correctAnswer: 'She read a book' },
                    { id: 'q2', text: "What is Ben's opinion of the film?", options: ['It was exciting but complicated', 'It was boring and simple', 'It was funny and short', 'It was bad and too long'], correctAnswer: 'It was exciting but complicated' },
                ],
              },
              {
                id: 'b1m1-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a short paragraph giving your opinion on a topic (e.g., online shopping, public transport). Use a connector like "weil", "obwohl", or "deshalb".',
              },
            ],
          }
        ]
      },
      {
        id: 'b1m2',
        title: 'Module 2: Work & Career',
        progress: 0,
        lessons: [
          { id: 'b1l4', title: 'Writing a Formal Email', estimatedTime: 25, isCompleted: false, activities: [
              {id: 'b1l4a1', type: ActivityType.Vocabulary, title: 'Formal Language', content: 'Learn key phrases for formal emails, including salutations and closings ("Sehr geehrte Damen und Herren", "Mit freundlichen Grüßen").'},
              {id: 'b1l4a2', type: ActivityType.Writing, title: 'Write an Inquiry', content: 'Draft a formal email asking for information about a language course.'},
          ]},
          { id: 'b1l5', title: 'Understanding Job Adverts', estimatedTime: 25, isCompleted: false, activities: [
              {id: 'b1l5a1', type: ActivityType.Vocabulary, title: 'Job Applications', content: 'Learn words like "Bewerbung", "Lebenslauf", "Anforderungen", "Berufserfahrung".'},
              {id: 'b1l5a2', type: ActivityType.Reading, title: 'Analyze a Job Ad', content: 'Read a real job advertisement and identify the key requirements.'},
          ]},
          { id: 'b1l6', title: 'The Passive Voice (Passiv)', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'b1l6a1', 
                type: ActivityType.Grammar, 
                title: 'Forming the Passive', 
                content: 'The passive voice focuses on the action, not the person doing it. It\'s formed with "werden" + past participle. The agent can be added with "von" + dative.',
                questions: [
                    { id: 'b1l6a1q1', text: 'Das Auto ___ repariert.', options: ['wird', 'ist', 'hat'], correctAnswer: 'wird' },
                    { id: 'b1l6a1q2', text: 'Der Brief wurde von ___ geschrieben. (ich)', options: ['ich', 'mich', 'mir'], correctAnswer: 'mir' },
                    { id: 'b1l6a1q3', text: 'Die Fenster müssen ___ werden. (putzen)', options: ['geputzt', 'putzen', 'geputzen'], correctAnswer: 'geputzt' },
                ]
              },
              {id: 'b1l6a2', type: ActivityType.Writing, title: 'Active to Passive', content: 'Rewrite active sentences into the passive voice to describe a process.'},
          ]},
          { id: 'b1l6b', title: 'The Job Interview', estimatedTime: 35, isCompleted: false, activities: [
              {id: 'b1l6b1', type: ActivityType.Vocabulary, title: 'Interview Phrases', content: 'Learn vocabulary for a job interview, like "Stärken" (strengths), "Schwächen" (weaknesses).'},
              {id: 'b1l6b2', type: ActivityType.Conversation, title: 'Interview Roleplay', content: 'Practice answering common interview questions with the AI tutor.'},
          ]},
          {
            id: 'b1m2-test',
            title: 'Module 2 Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'b1m2-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Sehr geehrte Frau Meier, vielen Dank für Ihre Bewerbung. Wir haben Ihre Unterlagen erhalten und werden sie sorgfältig prüfen. Sie werden in den nächsten zwei Wochen von uns hören. Mit freundlichen Grüßen, Peter Schmidt.`,
                questions: [
                  { id: 'q1', text: "What kind of text is this?", options: ['An invitation', 'A job advertisement', 'A confirmation of receipt for an application', 'A complaint'], correctAnswer: 'A confirmation of receipt for an application' },
                  { id: 'q2', text: "When will Ms. Meier hear from the company?", options: ['Tomorrow', 'In two weeks', 'In a month', 'The text does not say'], correctAnswer: 'In two weeks' },
                ],
              },
              {
                id: 'b1m2-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Interviewer', line: 'Guten Tag. Bitte, nehmen Sie Platz. Erzählen Sie uns etwas über Ihre Berufserfahrung.' },
                    { speaker: 'Bewerber', line: 'Guten Tag. Ich habe fünf Jahre als Projektmanager gearbeitet. In dieser Zeit wurden viele Projekte erfolgreich von meinem Team abgeschlossen.' },
                ],
                questions: [
                    { id: 'q1', text: "What is the situation?", options: ['A meeting', 'A job interview', 'A presentation', 'A friendly chat'], correctAnswer: 'A job interview' },
                    { id: 'q2', text: "What does the applicant say about their projects?", options: ['He completed them alone', 'They were not successful', 'They were completed successfully by his team', 'He is starting new projects'], correctAnswer: 'They were completed successfully by his team' },
                ],
              },
              {
                id: 'b1m2-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a sentence in the passive voice (Passiv) to describe a process at work (e.g., "The report is written by...").',
              },
            ],
          }
        ]
      },
       {
        id: 'b1m3',
        title: 'Module 3: Future & Hypotheticals',
        progress: 0,
        lessons: [
          { id: 'b1l7', title: 'Future Tense (Futur I)', estimatedTime: 25, isCompleted: false, activities: [
              {
                id: 'b1l7a1', 
                type: ActivityType.Grammar, 
                title: 'Talking about the Future', 
                content: 'The Futur I is formed with "werden" + infinitive verb. It\'s used for predictions, assumptions, or firm plans. Note: for scheduled plans, Germans often use the present tense with a time expression.',
                questions: [
                    { id: 'b1l7a1q1', text: 'Es ___ morgen regnen.', options: ['wird', 'werde', 'wirst'], correctAnswer: 'wird' },
                    { id: 'b1l7a1q2', text: 'Ich ___ dich am Bahnhof abholen.', options: ['werde', 'wird', 'wirst'], correctAnswer: 'werde' },
                    { id: 'b1l7a1q3', text: 'Wir werden das Projekt bis Freitag ___.', options: ['beenden', 'beendet'], correctAnswer: 'beenden' },
                ]
              },
              {id: 'b1l7a2', type: ActivityType.Conversation, title: 'Your Future Plans', content: 'Discuss your plans for the next five years with the AI tutor.'},
          ]},
          { id: 'b1l8', title: 'Subjunctive II (Konjunktiv II)', estimatedTime: 35, isCompleted: false, activities: [
              {
                id: 'b1l8a1', 
                type: ActivityType.Grammar, 
                title: 'Wishes, Advice, Polite Requests', 
                content: 'Konjunktiv II is for hypotheticals. "könnte" (could), "sollte" (should), and "würde" + infinitive are common forms.',
                questions: [
                    { id: 'b1l8a1q1', text: 'Ich ___ gern einen Kaffee bestellen.', options: ['würde', 'werde', 'wäre'], correctAnswer: 'würde' },
                    { id: 'b1l8a1q2', text: 'Du ___ mehr lernen.', options: ['solltest', 'könntest', 'würdest'], correctAnswer: 'solltest' },
                    { id: 'b1l8a1q3', text: 'An deiner Stelle ___ ich das nicht tun.', options: ['würde', 'sollte', 'könnte'], correctAnswer: 'würde' },
                ]
              },
              {
                id: 'b1l8a2', 
                type: ActivityType.Grammar, 
                title: 'Forms of "haben" and "sein"', 
                content: '"haben" and "sein" have their own special Konjunktiv II forms: "hätte" (would have) and "wäre" (would be).',
                questions: [
                    { id: 'b1l8a2q1', text: 'Wenn ich Zeit ___, würde ich reisen.', options: ['hätte', 'wäre', 'habe'], correctAnswer: 'hätte' },
                    { id: 'b1l8a2q2', text: 'Ich ___ jetzt gern am Strand.', options: ['hätte', 'wäre', 'bin'], correctAnswer: 'wäre' },
                    { id: 'b1l8a2q3', text: 'Wenn ich du ___, würde ich das Angebot annehmen.', options: ['hätte', 'wäre', 'bin'], correctAnswer: 'wäre' },
                ]
              },
              {id: 'b1l8a3', type: ActivityType.Conversation, title: 'Giving Advice', content: 'Give advice to a friend in a roleplay scenario.'},
          ]},
          { id: 'b1l9', title: 'Genitive Case', estimatedTime: 25, isCompleted: false, activities: [
              {
                id: 'b1l9a1', 
                type: ActivityType.Grammar, 
                title: 'Showing Possession', 
                content: 'The genitive case expresses possession. Masculine/neuter articles are "des/eines" (+ noun ending -s/-es). Feminine/plural articles are "der/einer".',
                questions: [
                    { id: 'b1l9a1q1', text: 'Das ist das Auto ___ Vaters. (der)', options: ['des', 'dem', 'den'], correctAnswer: 'des' },
                    { id: 'b1l9a1q2', text: 'Die Farbe ___ Hauses ist weiß. (das)', options: ['des', 'dem', 'das'], correctAnswer: 'des' },
                    { id: 'b1l9a1q3', text: 'Die Tasche ___ Frau ist neu. (die)', options: ['der', 'die', 'den'], correctAnswer: 'der' },
                ]
              },
              {id: 'b1l9a2', type: ActivityType.Writing, title: 'Practice Possession', content: 'Write sentences using the genitive case.'},
          ]},
          { id: 'b1l9b', title: 'Conditional Sentences (Wenn-Sätze)', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'b1l9b1', 
                type: ActivityType.Grammar, 
                title: 'Real & Unreal Conditions', 
                content: 'Unreal or hypothetical conditions use "wenn" + Konjunktiv II. The structure is often: "Wenn" + subject + [Konjunktiv II form], main clause with "würde" + infinitive.',
                questions: [
                    { id: 'b1l9b1q1', text: 'Wenn ich Zeit habe, ___ ich dich.', options: ['besuche', 'würde besuchen'], correctAnswer: 'besuche' },
                    { id: 'b1l9b1q2', text: 'Wenn ich Zeit hätte, ___ ich dich besuchen.', options: ['besuche', 'würde'], correctAnswer: 'würde' },
                    { id: 'b1l9b1q3', text: 'Wenn er reich wäre, ___ er ein Haus kaufen.', options: ['würde', 'wird', 'hat'], correctAnswer: 'würde' },
                ]
              },
              {id: 'b1l9b2', type: ActivityType.Conversation, title: 'What would you do?', content: 'Answer hypothetical questions like "Was würdest du mit einer Million Euro machen?"'},
          ]},
          {
            id: 'b1m3-test',
            title: 'Module 3 Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'b1m3-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Wenn ich mehr Geld hätte, würde ich eine Weltreise machen. Ich würde viele Länder besuchen und neue Kulturen kennenlernen. Man sollte Träume haben, auch wenn sie nicht immer real sind.`,
                questions: [
                  { id: 'q1', text: "What is the condition for the world trip?", options: ['If I had more time', 'If I had more money', 'If I had a new job', 'If I were younger'], correctAnswer: 'If I had more money' },
                  { id: 'q2', text: "What is the sentence 'Wenn ich mehr Geld hätte...'?", options: ['A real condition', 'An unreal condition', 'A plan for the future', 'A past event'], correctAnswer: 'An unreal condition' },
                ],
              },
              {
                id: 'b1m3-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Person A', line: 'Nächstes Jahr werde ich nach Berlin ziehen und dort einen neuen Job anfangen.' },
                    { speaker: 'Person B', line: 'Das ist ja toll! Und was sind deine Pläne für die ferne Zukunft?' },
                    { speaker: 'Person A', line: 'Ich werde wahrscheinlich eine Familie gründen und ein Haus kaufen.' },
                ],
                questions: [
                    { id: 'q1', text: "What will Person A do next year?", options: ['Go on vacation', 'Buy a house', 'Start a new job in Berlin', 'Learn a new language'], correctAnswer: 'Start a new job in Berlin' },
                    { id: 'q2', text: "What is Person A's plan for the distant future?", options: ['Travel the world', 'Start a family and buy a house', 'Write a book', 'Open a company'], correctAnswer: 'Start a family and buy a house' },
                ],
              },
              {
                id: 'b1m3-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a sentence using the Konjunktiv II to give someone advice (e.g., "You should...").',
              },
            ],
          }
        ]
      },
      {
        id: 'b1m4',
        title: 'Module 4: Media & Environment',
        progress: 0,
        lessons: [
          { id: 'b1l10', title: 'Discussing Media Consumption', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'b1l10a1', type: ActivityType.Vocabulary, title: 'Media World', content: 'Learn vocabulary for different types of media (social media, news, podcasts, etc.).'},
              {id: 'b1l10a2', type: ActivityType.Conversation, title: 'Your Media Habits', content: 'Discuss your own media consumption habits and preferences.'},
          ]},
          { id: 'b1l11', title: 'Environmental Issues', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'b1l11a1', type: ActivityType.Vocabulary, title: 'Protecting the Planet', content: 'Learn vocabulary related to environmental problems and solutions.'},
              {id: 'b1l11a2', type: ActivityType.Reading, title: 'An Article on Sustainability', content: 'Read a short article about what individuals can do to be more environmentally friendly.'},
          ]},
          { id: 'b1l12', title: 'Relative Clauses', estimatedTime: 35, isCompleted: false, activities: [
              {
                id: 'b1l12a1', 
                type: ActivityType.Grammar, 
                title: 'Adding Information', 
                content: 'A relative clause gives more information about a noun. It starts with a relative pronoun (der, die, das, etc.) which agrees with the noun. The verb in a relative clause always goes to the end.',
                questions: [
                    { id: 'b1l12a1q1', text: 'Das ist der Mann, ___ in Berlin wohnt.', options: ['der', 'dem', 'den'], correctAnswer: 'der' },
                    { id: 'b1l12a1q2', text: 'Hier ist der Kuchen, ___ ich gebacken habe.', options: ['der', 'dem', 'den'], correctAnswer: 'den' },
                    { id: 'b1l12a1q3', text: 'Das ist die Frau, ___ ich helfe.', options: ['die', 'der', 'den'], correctAnswer: 'der' },
                    { id: 'b1l12a1q4', text: 'Wo ist das Buch, ___ auf dem Tisch lag?', options: ['das', 'dem', 'dessen'], correctAnswer: 'das' },
                ]
              },
              {id: 'b1l12a2', type: ActivityType.Writing, title: 'Describe a Place', content: 'Write a detailed description of your favorite place using relative clauses.'},
          ]},
           { id: 'b1l12b', title: 'The Digital World', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'b1l12b1', type: ActivityType.Vocabulary, title: 'Social Media & Internet', content: 'Learn terms like "einen Beitrag posten", "ein Profil erstellen", "online sein".'},
              {id: 'b1l12b2', type: ActivityType.Conversation, title: 'Pros and Cons of the Internet', content: 'Discuss the advantages and disadvantages of social media and the internet.'},
          ]},
          {
            id: 'b1m4-test',
            title: 'Module 4 Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'b1m4-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Umweltbewusst leben bedeutet, Müll zu trennen und weniger Plastik zu verwenden. Man kann auch Strom sparen und öfter mit dem Fahrrad fahren. Das ist gut für die Umwelt, die unter dem Klimawandel leidet.`,
                questions: [
                  { id: 'q1', text: "What is NOT mentioned as a way to live environmentally friendly?", options: ['Separating trash', 'Saving electricity', 'Using less plastic', 'Planting trees'], correctAnswer: 'Planting trees' },
                  { id: 'q2', text: "What suffers from climate change?", options: ['The economy', 'The environment', 'The city', 'The individual'], correctAnswer: 'The environment' },
                ],
              },
              {
                id: 'b1m4-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Moderator', line: 'Willkommen zu unserem Podcast. Heute sprechen wir über soziale Medien. Unser Gast ist Herr Dr. Bauer, ein Medienexperte.' },
                    { speaker: 'Dr. Bauer', line: 'Guten Tag. Soziale Medien sind ein Werkzeug, das viele Vorteile, aber auch Nachteile hat.' },
                ],
                questions: [
                    { id: 'q1', text: "What is the topic of the podcast?", options: ['The environment', 'Social media', 'Politics', 'Sports'], correctAnswer: 'Social media' },
                    { id: 'q2', text: "What does Dr. Bauer say about social media?", options: ['It only has advantages', 'It only has disadvantages', 'It is a tool with pros and cons', 'It is not important'], correctAnswer: 'It is a tool with pros and cons' },
                ],
              },
              {
                id: 'b1m4-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a sentence with a relative clause to describe your smartphone or computer.',
              },
            ],
          }
        ]
      },
      {
        id: 'b1m5',
        title: 'Module 5: Final Checkpoint',
        progress: 0,
        lessons: [
          {
            id: 'b1-test',
            title: 'B1 Level Test',
            estimatedTime: 25,
            isCompleted: false,
            activities: [
              {
                id: 'b1-quiz',
                type: ActivityType.Quiz,
                title: 'Test your B1 Knowledge',
                content: 'This quiz covers key B1 grammar and situational understanding.',
                questions: [
                  { id: 'b1q1', text: 'Choose the correct connector: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten will."', options: ['obwohl', 'trotzdem', 'weil', 'deshalb'], correctAnswer: 'weil' },
                  { id: 'b1q2', text: 'Which sentence is in the passive voice?', options: ['Der Brief wird geschrieben.', 'Er schreibt den Brief.', 'Er hat den Brief geschrieben.', 'Er wird den Brief schreiben.'], correctAnswer: 'Der Brief wird geschrieben.' },
                  { id: 'b1q3', text: 'How do you politely ask for something?', options: ['Ich will Wasser.', 'Geben Sie mir Wasser.', 'Ich hätte gern ein Wasser.', 'Ich nehme Wasser.'], correctAnswer: 'Ich hätte gern ein Wasser.' },
                  { id: 'b1q4', text: 'Complete the sentence: "Das ist der Film, ___ ich gestern gesehen habe."', options: ['der', 'dem', 'den', 'dessen'], correctAnswer: 'den' },
                  { id: 'b1q5', text: 'The genitive case is used to show...?', options: ['Possession', 'Indirect object', 'Direct object', 'Time'], correctAnswer: 'Possession' },
                  { id: 'b1q6', text: 'Choose the correct connector: "Es regnet, ___ gehe ich spazieren."', options: ['weil', 'obwohl', 'trotzdem', 'denn'], correctAnswer: 'trotzdem' },
                  { id: 'b1q7', text: 'Choose the correct form: "Wenn ich Zeit hätte, ___ ich dich besuchen."', options: ['werde', 'würde', 'wäre', 'hätte'], correctAnswer: 'würde' },
                  { id: 'b1q8', text: 'What does "deshalb" mean?', options: ['because', 'although', 'that\'s why / therefore', 'in spite of'], correctAnswer: 'that\'s why / therefore' },
                  { id: 'b1q9', text: 'Complete the sentence with the correct Genitive form: "Das ist das Haus mein___ Onkels."', options: ['-es', '-en', '-s', ''], correctAnswer: '-es' },
                  { id: 'b1q10', text: 'Which tense is "ich las"?', options: ['Präsens', 'Perfekt', 'Plusquamperfekt', 'Präteritum'], correctAnswer: 'Präteritum' },
                ]
              }
            ]
          }
        ]
      }
    ],
  },
   {
    id: 'b2',
    level: 'B2',
    title: 'Upper-Intermediate German',
    description: 'Interact with a degree of fluency and spontaneity that makes regular interaction with native speakers possible.',
    progress: 0,
    modules: [
       {
        id: 'b2m1',
        title: 'Module 1: Complex Topics & Nuances',
        progress: 0,
        lessons: [
          { id: 'b2l1', title: 'Understanding News Reports', estimatedTime: 35, isCompleted: false, activities: [
              {id: 'b2l1a1', type: ActivityType.Vocabulary, title: 'Media & Politics', content: 'Learn advanced vocabulary related to news, society, and politics.'},
              {id: 'b2l1a2', type: ActivityType.Listening, title: 'Listen to the News', content: 'Listen to a short, authentic news report and summarize the main points.'},
          ]},
          { id: 'b2l2', title: 'Advanced Subjunctive II (Konjunktiv II)', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'b2l2a1', 
                type: ActivityType.Grammar, 
                title: 'Unreal Past Conditions', 
                content: 'To talk about what "would have" happened differently in the past, use the Konjunktiv II Perfekt: "hätte" or "wäre" + past participle.',
                questions: [
                    { id: 'b2l2a1q1', text: 'Wenn ich mehr gelernt ___, ___ ich die Prüfung bestanden.', options: ['hätte / hätte', 'wäre / wäre', 'hätte / wäre'], correctAnswer: 'hätte / hätte' },
                    { id: 'b2l2a1q2', text: '___ er schneller gefahren, ___ er pünktlich angekommen.', options: ['Wäre / wäre', 'Hätte / wäre', 'Wäre / hätte'], correctAnswer: 'Wäre / wäre' },
                    { id: 'b2l2a1q3', text: 'Ich ___ dich angerufen, wenn ich dein Handy gefunden ___.', options: ['hätte / hätte', 'wäre / hätte', 'hätte / wäre'], correctAnswer: 'hätte / hätte' },
                ]
              },
              {id: 'b2l2a2', type: ActivityType.Conversation, title: 'What if...?', content: 'Discuss hypothetical past scenarios, e.g., "What would have happened if...?".'},
          ]},
          { id: 'b2l3', title: 'Arguing a Point and Defending an Opinion', estimatedTime: 40, isCompleted: false, activities: [
              {id: 'b2l3a1', type: ActivityType.Vocabulary, title: 'Debate Language', content: 'Learn phrases for agreeing, disagreeing, structuring an argument, and conceding a point.'},
              {id: 'b2l3a2', type: ActivityType.Conversation, title: 'Debate Club', content: 'Debate a complex topic, such as the pros and cons of social media.'},
          ]},
          { id: 'b2l3b', title: 'Idiomatic Expressions (Redewendungen)', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'b2l3b1', type: ActivityType.Vocabulary, title: 'Common Idioms', content: 'Learn common German idioms like "Tomaten auf den Augen haben" or "Ich verstehe nur Bahnhof".'},
              {id: 'b2l3b2', type: ActivityType.Conversation, title: 'Using Idioms', content: 'Try to use some of the learned idioms in a conversation with the AI tutor.'},
          ]},
          {
            id: 'b2m1-test',
            title: 'Module 1 Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'b2m1-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Die gestrige Debatte im Parlament über das neue Gesetz war sehr hitzig. Die Opposition kritisierte den Vorschlag der Regierung scharf. Hätte die Regierung die Experten früher konsultiert, wäre der Vorschlag vielleicht besser gewesen.`,
                questions: [
                  { id: 'q1', text: "What is the main topic of the text?", options: ['A new law', 'A parliamentary debate', 'A government proposal', 'All of the above'], correctAnswer: 'All of the above' },
                  { id: 'q2', text: "What does the sentence with 'Hätte...' express?", options: ['A future possibility', 'A real past event', 'An unreal past condition', 'A direct criticism'], correctAnswer: 'An unreal past condition' },
                ],
              },
              {
                id: 'b2m1-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Person A', line: 'Ich bin mit deinem Vorschlag nicht einverstanden. Du hast einen wichtigen Punkt außer Acht gelassen.' },
                    { speaker: 'Person B', line: 'Da bin ich anderer Meinung. Ich glaube, mein Argument ist stichhaltig. Aber ich sehe, woher du kommst.' },
                ],
                questions: [
                    { id: 'q1', text: "What is the general tone of the conversation?", options: ['Agreement', 'Disagreement', 'Confusion', 'Indifference'], correctAnswer: 'Disagreement' },
                    { id: 'q2', text: "What does 'stichhaltig' mean in this context?", options: ['Weak', 'Unimportant', 'Valid/Sound', 'New'], correctAnswer: 'Valid/Sound' },
                ],
              },
              {
                id: 'b2m1-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a sentence expressing a hypothetical past situation using the Konjunktiv II Perfekt (e.g., "If I had known that, ...").',
              },
            ],
          }
        ]
      },
      {
        id: 'b2m2',
        title: 'Module 2: Society & Culture',
        progress: 0,
        lessons: [
          { id: 'b2l4', title: 'Discussing Environmental Issues', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'b2l4a1', type: ActivityType.Vocabulary, title: 'The Environment', content: 'Learn advanced terms like "Klimawandel", "Nachhaltigkeit", "erneuerbare Energien".'},
              {id: 'b2l4a2', type: ActivityType.Conversation, title: 'Protecting Our Planet', content: 'Discuss environmental problems and potential solutions in detail.'},
          ]},
          { id: 'b2l5', title: 'Formal Presentations', estimatedTime: 35, isCompleted: false, activities: [
              {id: 'b2l5a1', type: ActivityType.Vocabulary, title: 'Presentation Phrases', content: 'Learn how to structure a presentation, from the introduction to the conclusion.'},
              {id: 'b2l5a2', type: ActivityType.Conversation, title: 'Practice Your Speech', content: 'Practice giving a short presentation on a topic of your choice.'},
          ]},
          { id: 'b2l6', title: 'Advanced Relative Clauses', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'b2l6a1', 
                type: ActivityType.Grammar, 
                title: 'Relative Clauses with Prepositions', 
                content: 'When a verb in a relative clause needs a preposition, it comes before the relative pronoun. For things, you can use wo-compounds (worüber, womit etc.).',
                questions: [
                    { id: 'b2l6a1q1', text: 'Das ist der Kollege, mit ___ ich arbeite.', options: ['der', 'dem', 'den'], correctAnswer: 'dem' },
                    { id: 'b2l6a1q2', text: 'Das ist das Thema, über ___ wir sprechen.', options: ['das', 'dem', 'dessen'], correctAnswer: 'das' },
                    { id: 'b2l6a1q3', text: 'Das ist das Thema, ___ wir sprechen.', options: ['worüber', 'über das', 'Beide sind korrekt'], correctAnswer: 'Beide sind korrekt' },
                    { id: 'b2l6a1q4', text: 'Zeig mir das Werkzeug, mit ___ du das repariert hast.', options: ['was', 'das', 'dem'], correctAnswer: 'dem' },
                ]
              },
              {id: 'b2l6a2', type: ActivityType.Writing, title: 'Sentence Building', content: 'Combine sentences using complex relative clauses.'},
          ]},
          { id: 'b2l6b', title: 'Social and Political Structures', estimatedTime: 35, isCompleted: false, activities: [
              {id: 'b2l6b1', type: ActivityType.Vocabulary, title: 'Politics in Germany', content: 'Learn about the German political system (Bundestag, Bundesrat, Kanzler/in).'},
              {id: 'b2l6b2', type: ActivityType.Reading, title: 'Reading about the German System', content: 'Read a text explaining the basics of the German healthcare or education system.'},
          ]},
          {
            id: 'b2m2-test',
            title: 'Module 2 Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'b2m2-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Das deutsche Bildungssystem, über das oft diskutiert wird, ist föderal organisiert. Das bedeutet, dass die Bundesländer für die Schulpolitik zuständig sind. Es gibt verschiedene Schularten, worüber sich Eltern gut informieren müssen.`,
                questions: [
                  { id: 'q1', text: "Who is responsible for school policy in Germany?", options: ['The federal government', 'The individual states', 'The cities', 'The schools themselves'], correctAnswer: 'The individual states' },
                  { id: 'q2', text: "What is the function of 'worüber' in the text?", options: ['It refers to the school types', 'It refers to the parents', 'It refers to the education system', 'It is a question'], correctAnswer: 'It refers to the school types' },
                ],
              },
              {
                id: 'b2m2-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Sprecher', line: 'In meiner Präsentation heute möchte ich über das Thema Nachhaltigkeit sprechen. Zuerst werde ich die Hauptprobleme erläutern und anschließend mögliche Lösungen vorstellen. Fassen wir am Ende die wichtigsten Punkte zusammen.' },
                ],
                questions: [
                    { id: 'q1', text: "What is the speaker doing?", options: ['Having a discussion', 'Giving a presentation', 'Reading a news report', 'Telling a story'], correctAnswer: 'Giving a presentation' },
                    { id: 'q2', text: "What will the speaker do after explaining the problems?", options: ['End the presentation', 'Ask questions', 'Present possible solutions', 'Summarize the main points'], correctAnswer: 'Present possible solutions' },
                ],
              },
              {
                id: 'b2m2-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a sentence with a relative clause and a preposition (e.g., "The topic about which we are speaking...").',
              },
            ],
          }
        ]
      },
      {
        id: 'b2m3',
        title: 'Module 3: Advanced Grammar & Style',
        progress: 0,
        lessons: [
           { id: 'b2l7', title: 'Nominalization', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'b2l7a1', 
                type: ActivityType.Grammar, 
                title: 'Turning Actions into Nouns', 
                content: 'Nominalization makes language more formal/academic. To nominalize a verb, capitalize its infinitive form (it becomes a neuter noun).',
                questions: [
                    { id: 'b2l7a1q1', text: '"Er liest gern." can be nominalized to: "___ macht ihm Spaß."', options: ['Das Lesen', 'Der Leser', 'Das Gelesene'], correctAnswer: 'Das Lesen' },
                    { id: 'b2l7a1q2', text: '"Man muss vorsichtig fahren." can be nominalized to: "___ ist wichtig."', options: ['Das Fahren', 'Die Fahrt', 'Der Fahrer'], correctAnswer: 'Das Fahren' },
                ]
              },
              {id: 'b2l7a2', type: ActivityType.Writing, title: 'Formal Writing Style', content: 'Rewrite sentences to sound more formal and academic using nominalization.'},
          ]},
           { id: 'b2l8', title: 'Subjunctive I (Konjunktiv I)', estimatedTime: 25, isCompleted: false, activities: [
              {
                id: 'b2l8a1', 
                type: ActivityType.Grammar, 
                title: 'Indirect Speech', 
                content: 'Konjunktiv I is used to report speech indirectly, mainly in news reports. It is formed from the infinitive stem + Konjunktiv endings (-e, -est, -e, -en, -et, -en).',
                questions: [
                    { id: 'b2l8a1q1', text: 'Direct: "Ich gehe." -> Indirect: "Er sagt, er ___."', options: ['gehe', 'ginge', 'geht'], correctAnswer: 'gehe' },
                    { id: 'b2l8a1q2', text: 'Direct: "Wir haben Zeit." -> Indirect: "Sie sagen, sie ___ Zeit."', options: ['hätten', 'haben', 'hätten'], correctAnswer: 'hätten' },
                    { id: 'b2l8a1q3', text: 'Direct: "Du bist krank." -> Indirect: "Er meint, ich ___ krank."', options: ['sei', 'wäre', 'bin'], correctAnswer: 'sei' },
                ]
              },
              {id: 'b2l8a2', type: ActivityType.Reading, title: 'Analyze a News Article', content: 'Read an article and identify all instances of indirect speech.'},
          ]},
           { id: 'b2l9', title: 'N-Declension', estimatedTime: 20, isCompleted: false, activities: [
              {
                id: 'b2l9a1', 
                type: ActivityType.Grammar, 
                title: 'Weak Masculine Nouns', 
                content: 'A small group of masculine nouns are "weak" and add an "-(e)n" ending in every case except the nominative singular.',
                questions: [
                    { id: 'b2l9a1q1', text: 'Ich sehe de_ Junge_.', options: ['n / n', 'n / s', 'm / n'], correctAnswer: 'n / n' },
                    { id: 'b2l9a1q2', text: 'Das ist das Buch des Kollege_.', options: ['n', 's', 'en'], correctAnswer: 'n' },
                    { id: 'b2l9a1q3', text: 'Er spricht mit dem Herr_.', options: ['n', 's', 'en'], correctAnswer: 'n' },
                ]
              },
              {id: 'b2l9a2', type: ActivityType.Writing, title: 'Practice with N-Declension', content: 'Fill in the blanks in sentences with the correct noun endings.'},
          ]},
           { id: 'b2l9b', title: 'Advanced Connectors', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'b2l9b1', 
                type: ActivityType.Grammar, 
                title: 'Double Connectors', 
                content: '"entweder...oder" (either...or), "sowohl...als auch" (both...and), "weder...noch" (neither...nor).',
                questions: [
                    { id: 'b2l9b1q1', text: 'Wir können ___ ins Kino ___ ins Theater gehen.', options: ['entweder / oder', 'sowohl / als auch', 'weder / noch'], correctAnswer: 'entweder / oder' },
                    { id: 'b2l9b1q2', text: 'Er mag ___ Fisch ___ Fleisch.', options: ['entweder / oder', 'sowohl / als auch', 'weder / noch'], correctAnswer: 'weder / noch' },
                    { id: 'b2l9b1q3', text: 'Sie spricht ___ Deutsch ___ auch Englisch.', options: ['entweder', 'sowohl', 'weder'], correctAnswer: 'sowohl' },
                ]
              },
              {
                id: 'b2l9b2', 
                type: ActivityType.Grammar, 
                title: 'Comparative Clauses with "je...desto"', 
                content: 'This structure shows a proportional relationship: Je + comparative ..., desto + comparative + verb ...',
                questions: [
                    { id: 'b2l9b2q1', text: '___ mehr man lernt, ___ besser spricht man.', options: ['Je / desto', 'Desto / je', 'Wenn / dann'], correctAnswer: 'Je / desto' },
                    { id: 'b2l9b2q2', text: 'Je länger er wartet, desto ___ wird er.', options: ['ungeduldiger', 'ungeduldig'], correctAnswer: 'ungeduldiger' },
                ]
              },
              {id: 'b2l9b3', type: ActivityType.Writing, title: 'Practice Advanced Sentences', content: 'Write sentences using the new advanced connectors.'},
          ]},
          {
            id: 'b2m3-test',
            title: 'Module 3 Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'b2m3-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Der Politiker sagte, er sei für das neue Gesetz. Er fügte hinzu, dass das Parlament bald darüber abstimmen werde. Dies ist ein Beispiel für die Verwendung des Konjunktiv I in der indirekten Rede. Je mehr man liest, desto öfter erkennt man diese Struktur.`,
                questions: [
                  { id: 'q1', text: "What is 'er sei für das neue Gesetz' an example of?", options: ['Direct speech', 'A question', 'Indirect speech', 'A command'], correctAnswer: 'Indirect speech' },
                  { id: 'q2', text: "What does 'Je mehr man liest, desto öfter erkennt man diese Struktur' mean?", options: ['The less you read, the less you see it.', 'If you read more, you will see it.', 'The more you read, the more often you recognize this structure.', 'Reading is more important than recognizing structures.'], correctAnswer: 'The more you read, the more often you recognize this structure.' },
                ],
              },
              {
                id: 'b2m3-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Person A', line: 'Ich habe mit dem neuen Kollegen gesprochen. Er ist sehr nett.' },
                    { speaker: 'Person B', line: 'Ja, das finde ich auch. Hast du dem Studenten auch geholfen?' },
                    { speaker: 'Person A', line: 'Ja, ich habe dem Studenten das System erklärt.' },
                ],
                questions: [
                    { id: 'q1', text: "Which two nouns in the dialogue use the N-declension?", options: ['Kollegen, System', 'Studenten, System', 'Kollegen, Studenten', 'Person, Kollegen'], correctAnswer: 'Kollegen, Studenten' },
                    { id: 'q2', text: "In what case is 'dem Studenten'?", options: ['Nominative', 'Accusative', 'Dative', 'Genitive'], correctAnswer: 'Dative' },
                ],
              },
              {
                id: 'b2m3-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a sentence using a double connector (e.g., "entweder...oder", "sowohl...als auch").',
              },
            ],
          }
        ]
      },
       {
        id: 'b2m4',
        title: 'Module 4: Work & Education',
        progress: 0,
        lessons: [
           { id: 'b2l10', title: 'The World of Work', estimatedTime: 30, isCompleted: false, activities: [
              {id: 'b2l10a1', type: ActivityType.Vocabulary, title: 'Job & Career', content: 'Learn advanced vocabulary related to the modern workplace, digitalization, and job market.'},
              {id: 'b2l10a2', type: ActivityType.Conversation, title: 'The Future of Work', content: 'Discuss how the world of work is changing.'},
          ]},
           { id: 'b2l11', title: 'The German Education System', estimatedTime: 25, isCompleted: false, activities: [
              {id: 'b2l11a1', type: ActivityType.Vocabulary, title: 'Education Vocabulary', content: 'Learn about the different types of schools and higher education in Germany.'},
              {id: 'b2l11a2', type: ActivityType.Reading, title: 'A University Website', content: 'Explore the website of a German university and understand the study programs offered.'},
          ]},
           { id: 'b2l12', title: 'Participles as Adjectives', estimatedTime: 30, isCompleted: false, activities: [
              {
                id: 'b2l12a1', 
                type: ActivityType.Grammar, 
                title: 'Describing with Participles', 
                content: 'Participles can be used as adjectives. Partizip I (verb + -d) has an active meaning (the barking dog). Partizip II (past participle) usually has a passive meaning (the stolen car).',
                questions: [
                    { id: 'b2l12a1q1', text: 'Der ___ Hund ist laut. (bellen)', options: ['bellende', 'gebellte', 'bellend'], correctAnswer: 'bellende' },
                    { id: 'b2l12a1q2', text: 'Das ___ Auto wurde gefunden. (stehlen)', options: ['stehlende', 'gestohlene', 'gestohlen'], correctAnswer: 'gestohlene' },
                    { id: 'b2l12a1q3', text: 'Die ___ Sonne scheint. (lachen)', options: ['lachende', 'gelachte', 'lachend'], correctAnswer: 'lachende' },
                    { id: 'b2l12a1q4', text: 'Bitte lies den ___ Text. (drucken)', options: ['druckende', 'gedruckte', 'gedrucken'], correctAnswer: 'gedruckte' },
                ]
              },
              {id: 'b2l12a2', type: ActivityType.Writing, title: 'Advanced Descriptions', content: 'Rewrite simple sentences using participial adjectives.'},
          ]},
           { id: 'b2l12b', title: 'Writing a CV and Cover Letter', estimatedTime: 35, isCompleted: false, activities: [
              {id: 'b2l12b1', type: ActivityType.Vocabulary, title: 'Application Vocabulary', content: 'Learn the key sections and phrases for a German CV (Lebenslauf) and cover letter (Anschreiben).'},
              {id: 'b2l12b2', type: ActivityType.Writing, title: 'Draft a Cover Letter', content: 'Write a short cover letter for a fictional job posting.'},
          ]},
          {
            id: 'b2m4-test',
            title: 'Module 4 Test',
            estimatedTime: 20,
            isCompleted: false,
            activities: [
              {
                id: 'b2m4-test-reading',
                type: ActivityType.Quiz,
                title: 'Reading Comprehension',
                content: `Für eine erfolgreiche Bewerbung ist ein gut geschriebener Lebenslauf entscheidend. Das an die Firma gesendete Anschreiben sollte ebenfalls fehlerfrei sein. Das die Aufmerksamkeit erregende Design kann auch helfen.`,
                questions: [
                  { id: 'q1', text: "What does 'das an die Firma gesendete Anschreiben' mean?", options: ['The company that sends the cover letter', 'The cover letter sent to the company', 'The sent company', 'The letter in the company'], correctAnswer: 'The cover letter sent to the company' },
                  { id: 'q2', text: "What type of participle is 'erregende' in 'das die Aufmerksamkeit erregende Design'?", options: ['Partizip II', 'Partizip I', 'It is not a participle', 'An infinitive'], correctAnswer: 'Partizip I' },
                ],
              },
              {
                id: 'b2m4-test-listening',
                type: ActivityType.Quiz,
                title: 'Listening Comprehension',
                content: 'Listen to the dialogue and answer the questions.',
                dialogue: [
                    { speaker: 'Professor', line: 'Willkommen zur Vorlesung über die Digitalisierung der Arbeitswelt. Ein wichtiges Thema ist das lebenslange Lernen.' },
                    { speaker: 'Studentin', line: 'Was bedeutet das genau? Bedeutet das, dass man sich ständig weiterbilden muss?' },
                    { speaker: 'Professor', line: 'Ganz genau. Die sich schnell verändernde Technologie erfordert eine kontinuierliche Anpassung.' },
                ],
                questions: [
                    { id: 'q1', text: "What is the topic of the lecture?", options: ['The German education system', 'The history of work', 'The digitalization of the working world', 'Student life'], correctAnswer: 'The digitalization of the working world' },
                    { id: 'q2', text: "What does the rapidly changing technology require?", options: ['Less education', 'No adaptation', 'Continuous adaptation', 'A new professor'], correctAnswer: 'Continuous adaptation' },
                ],
              },
              {
                id: 'b2m4-test-writing',
                type: ActivityType.Writing,
                title: 'Writing Task',
                content: 'Write a sentence that uses a participle as an adjective (e.g., "The singing bird...", "The written book...").',
              },
            ],
          }
        ]
      },
      {
        id: 'b2m5',
        title: 'Module 5: Final Checkpoint',
        progress: 0,
        lessons: [
          {
            id: 'b2-test',
            title: 'B2 Level Test',
            estimatedTime: 25,
            isCompleted: false,
            activities: [
              {
                id: 'b2-quiz',
                type: ActivityType.Quiz,
                title: 'Test your B2 Knowledge',
                content: 'This quiz covers advanced grammar and comprehension for B2.',
                questions: [
                  { id: 'b2q1', text: 'How do you express a hypothetical wish in the past?', options: ['Ich hätte das gemacht.', 'Ich würde das machen.', 'Ich habe das gemacht.', 'Ich machte das.'], correctAnswer: 'Ich hätte das gemacht.' },
                  { id: 'b2q2', text: 'Complete the sentence: "Das ist der Mann, ___ ich gestern geholfen habe."', options: ['der', 'dem', 'den', 'dessen'], correctAnswer: 'dem' },
                  { id: 'b2q3', text: 'The phrase "sowohl ... als auch" expresses:', options: ['A contrast', 'An addition (both... and)', 'A choice (either... or)', 'A negative condition'], correctAnswer: 'An addition (both... and)' },
                  { id: 'b2q4', text: 'Which word is an example of n-declension in the accusative case?', options: ['den Jungen', 'der Junge', 'dem Junge', 'des Jungen'], correctAnswer: 'den Jungen' },
                  { id: 'b2q5', text: 'How would you report "Er sagt: Ich bin müde" in indirect speech?', options: ['Er sagt, er sei müde.', 'Er sagt, er wäre müde.', 'Er sagt, er ist müde.', 'Er sagt, er war müde.'], correctAnswer: 'Er sagt, er sei müde.' },
                  { id: 'b2q6', text: 'What is the correct form for the participial adjective? "Das ... Auto ist rot."', options: ['gestohlene', 'stehlende', 'stehlen', 'gestohlen'], correctAnswer: 'gestohlene' },
                  { id: 'b2q7', text: 'Complete the sentence: "___ mehr du übst, ___ besser wirst du."', options: ['Je / desto', 'Wenn / dann', 'Sowohl / als auch', 'Entweder / oder'], correctAnswer: 'Je / desto' },
                  { id: 'b2q8', text: 'What is the nominalization of the verb "lernen"?', options: ['die Lernende', 'das Lernen', 'das Gelernte', 'lernend'], correctAnswer: 'das Lernen' },
                  { id: 'b2q9', text: 'Choose the correct form: "Er hat sich über das Geschenk gefreut, ___ er von seiner Freundin bekommen hat."', options: ['das', 'was', 'dem', 'dessen'], correctAnswer: 'das' },
                  { id: 'b2q10', text: 'Which of the following is NOT a weak masculine (n-declension) noun?', options: ['der Name', 'der Mensch', 'der Tisch', 'der Kunde'], correctAnswer: 'der Tisch' },
                ]
              }
            ]
          }
        ]
      }
    ],
  },
];

// This now acts as a user progress database table
export const MOCK_USER_PROGRESS_DB: UserProgressDB = {
    'user-1': {}, // Alex starts with no progress
    'user-2': {   // Ben has some progress
        'a1': {
            progress: 100,
            modules: {
                'a1m1': { progress: 100, lessons: { 'a1l1': { isCompleted: true }, 'a1l2': { isCompleted: true }, 'a1l2b': { isCompleted: true }, 'a1m1-test': { isCompleted: true } } },
                'a1m2': { progress: 100, lessons: { 'a1l3': { isCompleted: true }, 'a1l4': { isCompleted: true }, 'a1l5': { isCompleted: true }, 'a1m2-test': { isCompleted: true } } },
                'a1m3': { progress: 100, lessons: { 'a1l6': { isCompleted: true }, 'a1l7': { isCompleted: true }, 'a1l7b': { isCompleted: true }, 'a1m3-test': { isCompleted: true } } },
                'a1m4': { progress: 100, lessons: { 'a1l8': { isCompleted: true }, 'a1l9': { isCompleted: true }, 'a1l10': { isCompleted: true }, 'a1l10b': { isCompleted: true }, 'a1m4-test': { isCompleted: true } } },
                'a1m5': { progress: 100, lessons: { 'a1-test': { isCompleted: true } } },
            }
        },
        'a2': {
            progress: 16,
            modules: {
                'a2m1': { progress: 33, lessons: { 'a2l1': { isCompleted: true }, 'a2l2': { isCompleted: false }, 'a2l3': { isCompleted: false } } },
                'a2m2': { progress: 0, lessons: {} },
                'a2m3': { progress: 0, lessons: {} },
                'a2m4': { progress: 0, lessons: {} },
            }
        }
    }
};

// Function to generate a fresh progress object for a new user
export const generateInitialUserProgress = (): UserProgressDB => {
  const newProgress: UserProgressDB = {};
  Object.values(MOCK_USERS_DB).forEach(user => {
    newProgress[user.id] = {};
  });
  return newProgress;
};

//
// --- GOETHE-ZERTIFIKAT CONTENT (NEW) ---
// This is the new data structure for your exam-specific courses.
// We will populate the first A1 lesson as a "gold standard" template
// that you can copy and paste for the other 19 lessons.
//

export const GOETHE_DATA = {
  levels: [
    {
      level: 'G-A1' as CEFRLevel,
      title: 'Goethe-Zertifikat A1: Start Deutsch 1',
      description: 'Trainieren Sie für die A1-Prüfung mit 5 kompletten Modelltests, die alle Teile abdecken: Hören, Lesen, Schreiben und Sprechen.',
      lessons: [
        {
          id: 'g-a1-l1',
          title: 'Modelltest 1: Gesamte Prüfung',
          estimatedTime: 65,
          isCompleted: false,
          activities: [
            // --- HÖREN (20 Dialogues/Questions) ---
            {
              id: 'g-a1-l1-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören kurze Alltagsgespräche (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Entschuldigung, wo ist der Bahnhof?' },
                { speaker: 'Person A', line: 'Der Bahnhof? Gehen Sie hier geradeaus, dann die zweite Straße links. Da sehen Sie ihn schon.' },
                { speaker: 'Person B', line: 'Vielen Dank!' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2. Was kostet der Apfelsaft?' },
                { speaker: 'Kellner', line: 'Der Apfelsaft kostet 2,80 €.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3. Wann treffen wir uns?' },
                { speaker: 'Person A', line: 'Um 10 Uhr vor dem Kino?' },
                { speaker: 'Person B', line: '10 Uhr ist zu früh. Geht auch 11 Uhr?' },
                { speaker: 'Person A', line: 'Ja, 11 Uhr ist super.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4. Haben Sie Kinder?' },
                { speaker: 'Person A', line: 'Ja, einen Sohn und eine Tochter. Mein Sohn ist 8 und meine Tochter ist 5.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5. Brauchst du Hilfe?' },
                { speaker: 'Person B', line: 'Ja, bitte. Der Koffer ist so schwer.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6. Guten Tag, ich möchte einen Termin bei Dr. Müller.' },
                { speaker: 'Praxis', line: 'Geht es am Mittwochnachmittag um 15 Uhr?' },
                { speaker: 'Ansage', line: '---' },
                 { speaker: 'Ansage', line: 'Nummer 7. Wie ist das Wetter?' },
                { speaker: 'Person A', line: 'Es ist kalt und es regnet. Nimm einen Schirm mit.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 8. Was machst du am Wochenende?' },
                { speaker: 'Person B', line: 'Ich fahre zu meinen Eltern. Wir feiern den Geburtstag von meinem Vater.' },

              ],
              questions: [
                { id: 'g-a1h1q1', text: 'Wo ist der Bahnhof?', options: ['a) Die erste Straße links', 'b) Die zweite Straße rechts', 'c) Die zweite Straße links'], correctAnswer: 'c) Die zweite Straße links' },
                { id: 'g-a1h1q2', text: 'Was kostet der Apfelsaft?', options: ['a) 2,80 €', 'b) 3,80 €', 'c) 2,18 €'], correctAnswer: 'a) 2,80 €' },
                { id: 'g-a1h1q3', text: 'Wann treffen sie sich?', options: ['a) Um 10 Uhr', 'b) Um 11 Uhr', 'c) Um 15 Uhr'], correctAnswer: 'b) Um 11 Uhr' },
                { id: 'g-a1h1q4', text: 'Wie alt ist die Tochter?', options: ['a) 8 Jahre', 'b) 5 Jahre', 'c) 13 Jahre'], correctAnswer: 'b) 5 Jahre' },
                { id: 'g-a1h1q5', text: 'Warum braucht Person B Hilfe?', options: ['a) Der Koffer ist zu groß', 'b) Der Koffer ist zu schwer', 'c) Der Koffer ist neu'], correctAnswer: 'b) Der Koffer ist zu schwer' },
                { id: 'g-a1h1q6', text: 'Wann ist der Termin?', options: ['a) Mittwoch um 15 Uhr', 'b) Montag um 15 Uhr', 'c) Mittwoch um 13 Uhr'], correctAnswer: 'a) Mittwoch um 15 Uhr' },
                { id: 'g-a1h1q7', text: 'Wie ist das Wetter?', options: ['a) Kalt und sonnig', 'b) Kalt und regnerisch', 'c) Warm und windig'], correctAnswer: 'b) Kalt und regnerisch' },
                { id: 'g-a1h1q8', text: 'Was macht Person B am Wochenende?', options: ['a) Er besucht seinen Vater', 'b) Er feiert seinen Geburtstag', 'c) Er arbeitet'], correctAnswer: 'a) Er besucht seinen Vater' },
              ]
            },
            {
              id: 'g-a1-l1-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (6 Fragen)',
              content: 'Sie hören Durchsagen am Bahnhof oder im Supermarkt (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Ansage 1', line: 'Achtung, Gleis 3. Der Zug nach Hamburg, planmäßige Abfahrt 10:15 Uhr, fährt heute von Gleis 5 ab. Ich wiederhole: Der Zug nach Hamburg fährt von Gleis 5.' },
                { speaker: 'Ansage 2', line: 'Sehr geehrte Kunden, unser Sonderangebot heute: Frische Brötchen, 10 Stück nur 2,50 €. Nur bis 11 Uhr!' },
                { speaker: 'Ansage 3', line: 'Achtung, eine Durchsage für Herrn Meier. Herr Meier, bitte kommen Sie zur Information im Erdgeschoss. Ihr Sohn wartet dort auf Sie.' },
                { speaker: 'Ansage 4', line: 'Gleis 11. Der ICE 505 aus München, Ankunft 14:30 Uhr, hat 10 Minuten Verspätung.' },
                { speaker: 'Ansage 5', line: 'Sehr geehrte Fahrgäste, bitte beachten Sie: Das Rauchen ist im gesamten Bahnhof verboten.' },
                { speaker: 'Ansage 6', line: 'Liebe Kunden, das Parkhaus schließt heute um 20:00 Uhr. Bitte holen Sie Ihre Fahrzeuge rechtzeitig ab.' },
              ],
              questions: [
                { id: 'g-a1h2q1', text: 'Der Zug nach Hamburg fährt von Gleis 3 ab.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q2', text: 'Die Brötchen kosten 2,50 € den ganzen Tag.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q3', text: 'Herr Meier soll zu seinem Sohn gehen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' }, // Trick question: he should go to Information.
                { id: 'g-a1h2q4', text: 'Der Zug aus München kommt um 14:40 Uhr an.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1h2q5', text: 'Man darf im Bahnhof rauchen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q6', text: 'Das Parkhaus schließt um 20:00 Uhr.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a1-l1-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören Nachrichten auf dem Anrufbeantworter (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1.' },
                { speaker: 'Anrufbeantworter 1', line: 'Hallo Anna, hier ist Ben. Ich rufe wegen heute Abend an. Ich kann leider nicht um 19 Uhr. Geht es auch um 20 Uhr im Restaurant "Bella Italia"?' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2.' },
                { speaker: 'Anrufbeantworter 2', line: 'Guten Tag, Praxis Dr. Vogel. Sie haben morgen um 9 Uhr einen Termin. Leider ist Dr. Vogel krank. Können Sie bitte zurückrufen, um einen neuen Termin zu machen?' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3.' },
                { speaker: 'Anrufbeantworter 3', line: 'Hi, Mama, ich bins, Tim. Ich komme heute später nach Hause. Ich muss noch für die Schule lernen. Kaufst du bitte Brot ein?' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4.' },
                { speaker: 'Anrufbeantworter 4', line: 'Hallo Frau Schmidt, hier ist die Autowerkstatt. Ihr Auto ist fertig. Sie können es ab 16 Uhr abholen. Die Rechnung ist 120 €.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5.' },
                { speaker: 'Anrufbeantworter 5', line: 'Guten Tag, hier spricht Meier von der Wohnungsfirma. Ihre neue Wohnung ist fertig. Wir müssen über den Termin für die Schlüsselübergabe sprechen.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6.' },
                { speaker: 'Anrufbeantworter 6', line: 'Hallo Jan, hier ist Lisa. Danke für die Einladung zur Party. Ich komme gern, aber ich kann leider erst um 21 Uhr.' },

              ],
              questions: [
                { id: 'g-a1h3q1', text: 'Wann möchte Ben Anna treffen?', options: ['a) Um 19 Uhr', 'b) Um 20 Uhr', 'c) Er möchte sie nicht treffen'], correctAnswer: 'b) Um 20 Uhr' },
                { id: 'g-a1h3q2', text: 'Warum ruft die Praxis an?', options: ['a) Um den Termin zu bestätigen', 'b) Weil der Termin ausfällt', 'c) Um 9 Uhr anzurufen'], correctAnswer: 'b) Weil der Termin ausfällt' },
                { id: 'g-a1h3q3', text: 'Was soll die Mutter kaufen?', options: ['a) Milch', 'b) Ein Buch für die Schule', 'c) Brot'], correctAnswer: 'c) Brot' },
                { id: 'g-a1h3q4', text: 'Wann kann Frau Schmidt das Auto abholen?', options: ['a) Um 16 Uhr', 'b) Um 12 Uhr', 'c) Morgen früh'], correctAnswer: 'a) Um 16 Uhr' },
                { id: 'g-a1h3q5', text: 'Warum ruft Herr Meier an?', options: ['a) Wegen der Miete', 'b) Wegen der Wohnung', 'c) Wegen der Schlüssel'], correctAnswer: 'c) Wegen der Schlüssel' },
                { id: 'g-a1h3q6', text: 'Wann kommt Lisa zur Party?', options: ['a) Sie kommt nicht', 'b) Um 19 Uhr', 'c) Um 21 Uhr'], correctAnswer: 'c) Um 21 Uhr' },
              ]
            },

            // --- LESEN (Long reading + questions) ---
            {
              id: 'g-a1-l1-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1: E-Mails verstehen',
              content: 'Lesen Sie die beiden E-Mails und entscheiden Sie: Richtig oder Falsch.\n\n**E-Mail 1**\nLieber Jan,\nvielen Dank für deine Einladung. Ich komme gern zu deiner Party am Samstag. Ich habe eine Frage: Soll ich etwas mitbringen? Ich kann einen Salat oder einen Kuchen machen. Sag einfach Bescheid. Ich freue mich schon!\nBis Samstag!\nLiebe Grüße,\nMaria\n\n**E-Mail 2**\nHallo Frau Wagner,\nich schreibe Ihnen, weil ich am Montag nicht zum Deutschkurs kommen kann. Ich habe einen wichtigen Arzttermin. Ich mache die Hausaufgaben natürlich zu Hause. Können Sie mir bitte sagen, was wir im Kurs machen?\nVielen Dank und viele Grüße,\nCarlos Gomez',
              questions: [
                { id: 'g-a1r1q1', text: 'E-Mail 1: Maria kommt nicht zur Party.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r1q2', text: 'E-Mail 1: Maria möchte einen Salat mitbringen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1r1q3', text: 'E-Mail 2: Carlos ist krank.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r1q4', text: 'E-Mail 2: Carlos möchte wissen, was die Hausaufgaben sind.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-a1-l1-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2: Anzeigen lesen',
              content: 'Lesen Sie die Anzeigen. Welche Anzeige passt zu welcher Situation?\n\n**Situation 1:** Sie suchen eine Wohnung mit 3 Zimmern.\n**Situation 2:** Sie möchten am Abend einen Deutschkurs besuchen.\n\n**Anzeige A**\n**Wohnung zu vermieten!**\nSchöne 2-Zimmer-Wohnung im Zentrum. 50 qm, Balkon, Küche, Bad. Miete 450 € + Nebenkosten. Ab sofort frei. Tel: 0170 123456\n\n**Anzeige B**\n**Sprachschule "Dialog"**\nDeutsch lernen am Vormittag. Kurse A1-B1. Montag bis Freitag, 9:00 - 12:00 Uhr. Info-Abend: 1. März, 18:00 Uhr.\n\n**Anzeige C**\n**Große Wohnung für Familie!**\n3-Zimmer-Wohnung, 80 qm, in ruhiger Lage. Mit Garten. Ideal für eine Familie mit Kind. Miete 750 € + Nebenkosten. E-Mail: familie@wohnen.de\n\n**Anzeige D**\n**Abendkurse Deutsch**\nLernen Sie Deutsch nach der Arbeit. Kurse A2-B2. Dienstag und Donnerstag, 18:30 - 20:00 Uhr. Beginnen Sie jetzt! www.abendschule-deutsch.de',
              questions: [
                { id: 'g-a1r2q1', text: 'Situation 1: Wohnung mit 3 Zimmern.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige C' },
                { id: 'g-a1r2q2', text: 'Situation 2: Deutschkurs am Abend.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige D' },
              ]
            },
            {
              id: 'g-a1-l1-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3: Schilder und Notizen',
              content: 'Lesen Sie die Schilder und Notizen. Kreuzen Sie an: Richtig oder Falsch.\n\n**Text 1: Am Bahnhof**\nSehr geehrte Fahrgäste, der Aufzug zu Gleis 2 und 3 ist außer Betrieb. Bitte benutzen Sie die Treppe.\n\n**Text 2: Im Supermarkt**\nLiebe Kunden, an der Kasse 1 können Sie nur mit Karte bezahlen. Kein Bargeld.\n\n**Text 3: Im Treppenhaus**\nBitte keine Fahrräder im Hausflur abstellen. Benutzen Sie den Fahrradkeller.',
              questions: [
                { id: 'g-a1r3q1', text: 'Text 1: Man kann den Aufzug zu Gleis 2 und 3 benutzen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r3q2', text: 'Text 2: An Kasse 1 kann man mit Bargeld bezahlen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r3q3', text: 'Text 3: Man darf sein Fahrrad im Hausflur parken.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },

            // --- SCHREIBEN ---
            {
              id: 'g-a1-l1-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Formular ausfüllen',
              content: 'Ihr Freund Carlos möchte einen Sportkurs machen. Sie helfen ihm beim Ausfüllen des Formulars. Hier sind die Informationen:\nName: Carlos Sanchez\nGeboren: 5. Mai 1995 in Madrid\nWohnort: Hauptstraße 10, 10117 Berlin\nKurs: Fußball\nSprachen: Spanisch, Englisch, Deutsch (A1)\n\nFüllen Sie die 5 Felder im Formular aus.',
              // In a real app, you might render 5 text inputs.
              // For now, this is a prompt for the user to practice.
            },
            {
              id: 'g-a1-l1-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Kurze E-Mail',
              content: 'Schreiben Sie eine kurze E-Mail (ca. 30 Wörter).\n\nSie können am Samstag nicht zu Ihrer Freundin Anna kommen. Sie müssen arbeiten.\n- Entschuldigen Sie sich.\n- Sagen Sie, warum Sie nicht können.\n- Machen Sie einen neuen Vorschlag für ein Treffen (Sonntag?).',
            },

            // --- SPRECHEN ---
            {
              id: 'g-a1-l1-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Sich vorstellen',
              content: 'Stellen Sie sich vor. Sagen Sie: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobbys. Starten Sie die Konversationsübung, um dies zu üben.'
            },
            {
              id: 'g-a1-l1-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Fragen stellen (Thema: Einkaufen)',
              content: 'Sie bekommen eine Karte mit einem Wort, z.B. "Supermarkt". Stellen Sie Ihrem Partner eine Frage dazu (z.B. "Wo ist der nächste Supermarkt?"). Üben Sie, Fragen zu verschiedenen Themen zu stellen.'
            },
            {
              id: 'g-a1-l1-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Bitten formulieren (Thema: Im Büro)',
              content: 'Sie bekommen eine Karte mit einem Bild, z.B. eine offene Tür. Formulieren Sie eine Bitte (z.B. "Können Sie bitte die Tür schließen?"). Üben Sie, höfliche Bitten zu formulieren.'
            },
            
            // --- WÖRTSCHATZ (100+ Vocab) ---
            {
              id: 'g-a1-l1-v1',
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A1 (100+)',
              content: 'Wichtige Wörter für die A1-Prüfung, sortiert nach Themen.',
              vocabulary: [
                  // Sich vorstellen
                  { german: 'der Name', english: 'the name' },
                  { german: 'heißen', english: 'to be called' },
                  { german: 'der Vorname', english: 'the first name' },
                  { german: 'der Familienname', english: 'the family name' },
                  { german: 'kommen aus', english: 'to come from' },
                  { german: 'das Land', english: 'the country' },
                  { german: 'wohnen', english: 'to live' },
                  { german: 'der Wohnort', english: 'the place of residence' },
                  { german: 'sprechen', english: 'to speak' },
                  { german: 'die Sprache', english: 'the language' },
                  { german: 'der Beruf', english: 'the profession' },
                  { german: 'was sind Sie von Beruf?', english: 'what is your job?' },
                  { german: 'das Hobby', english: 'the hobby' },
                  { german: 'das Alter', english: 'the age' },
                  { german: 'alt', english: 'old' },
                  { german: 'buchstabieren', english: 'to spell' },
                  // Familie
                  { german: 'die Familie', english: 'the family' },
                  { german: 'die Mutter', english: 'the mother' },
                  { german: 'der Vater', english: 'the father' },
                  { german: 'die Eltern', english: 'the parents' },
                  { german: 'der Sohn', english: 'the son' },
                  { german: 'die Tochter', english: 'the daughter' },
                  { german: 'der Bruder', english: 'the brother' },
                  { german: 'die Schwester', english: 'the sister' },
                  { german: 'die Geschwister', english: 'the siblings' },
                  { german: 'der Großvater (Opa)', english: 'the grandfather (grandpa)' },
                  { german: 'die Großmutter (Oma)', english: 'the grandmother (grandma)' },
                  { german: 'die Großeltern', english: 'the grandparents' },
                  { german: 'verheiratet', english: 'married' },
                  { german: 'ledig', english: 'single' },
                  { german: 'das Kind', english: 'the child' },
                  // Essen & Trinken
                  { german: 'das Essen', english: 'the food' },
                  { german: 'das Trinken', english: 'the drink' },
                  { german: 'das Frühstück', english: 'the breakfast' },
                  { german: 'das Mittagessen', english: 'the lunch' },
                  { german: 'das Abendessen', english: 'the dinner' },
                  { german: 'essen', english: 'to eat' },
                  { german: 'trinken', english: 'to drink' },
                  { german: 'das Brot', english: 'the bread' },
                  { german: 'die Butter', english: 'the butter' },
                  { german: 'der Käse', english: 'the cheese' },
                  { german: 'die Wurst', english: 'the sausage' },
                  { german: 'das Obst', english: 'the fruit' },
                  { german: 'der Apfel', english: 'the apple' },
                  { german: 'die Banane', english: 'the banana' },
                  { german: 'das Gemüse', english: 'the vegetable' },
                  { german: 'die Tomate', english: 'the tomato' },
                  { german: 'die Kartoffel', english: 'the potato' },
                  { german: 'das Fleisch', english: 'the meat' },
                  { german: 'der Fisch', english: 'the fish' },
                  { german: 'das Wasser', english: 'the water' },
                  { german: 'der Saft', english: 'the juice' },
                  { german: 'der Kaffee', english: 'the coffee' },
                  { german: 'der Tee', english: 'the tea' },
                  { german: 'die Milch', english: 'the milk' },
                  { german: 'der Zucker', english: 'the sugar' },
                  { german: 'Hunger haben', english: 'to be hungry' },
                  { german: 'Durst haben', english: 'to be thirsty' },
                  { german: 'mögen', english: 'to like' },
                  // Einkaufen
                  { german: 'kaufen', english: 'to buy' },
                  { german: 'der Supermarkt', english: 'the supermarket' },
                  { german: 'der Markt', english: 'the market' },
                  { german: 'bezahlen', english: 'to pay' },
                  { german: 'der Preis', english: 'the price' },
                  { german: 'kosten', english: 'to cost' },
                  { german: 'das Geld', english: 'the money' },
                  { german: 'der Euro', english: 'the euro' },
                  { german: 'das Angebot', english: 'the special offer' },
                  { german: 'billig', english: 'cheap' },
                  { german: 'teuer', english: 'expensive' },
                  // Wohnen
                  { german: 'die Wohnung', english: 'the apartment' },
                  { german: 'das Haus', english: 'the house' },
                  { german: 'das Zimmer', english: 'the room' },
                  { german: 'die Küche', english: 'the kitchen' },
                  { german: 'das Bad / Badezimmer', english: 'the bathroom' },
                  { german: 'das Wohnzimmer', english: 'the living room' },
                  { german: 'das Schlafzimmer', english: 'the bedroom' },
                  { german: 'der Tisch', english: 'the table' },
                  { german: 'der Stuhl', english: 'the chair' },
                  { german: 'das Bett', english: 'the bed' },
                  { german: 'der Schrank', english: 'the cupboard' },
                  { german: 'das Sofa', english: 'the sofa' },
                  { german: 'der Balkon', english: 'the balcony' },
                  { german: 'der Garten', english: 'the garden' },
                  // Zeit & Kalender
                  { german: 'die Zeit', english: 'the time' },
                  { german: 'die Uhr', english: 'the clock' },
                  { german: 'Wie spät ist es?', english: 'What time is it?' },
                  { german: 'die Stunde', english: 'the hour' },
                  { german: 'die Minute', english: 'the minute' },
                  { german: 'der Tag', english: 'the day' },
                  { german: 'die Woche', english: 'the week' },
                  { german: 'der Monat', english: 'the month' },
                  { german: 'das Jahr', english: 'the year' },
                  { german: 'der Montag', english: 'Monday' },
                  { german: 'der Dienstag', english: 'Tuesday' },
                  { german: 'der Mittwoch', english: 'Wednesday' },
                  { german: 'der Donnerstag', english: 'Thursday' },
                  { german: 'der Freitag', english: 'Friday' },
                  { german: 'der Samstag', english: 'Saturday' },
                  { german: 'der Sonntag', english: 'Sunday' },
                  { german: 'das Wochenende', english: 'the weekend' },
                  { german: 'heute', english: 'today' },
                  { german: 'morgen', english: 'tomorrow' },
                  { german: 'gestern', english: 'yesterday' },
                  // Verkehr & Reisen
                  { german: 'der Bahnhof', english: 'the train station' },
                  { german: 'der Flughafen', english: 'the airport' },
                  { german: 'der Zug', english: 'the train' },
                  { german: 'der Bus', english: 'the bus' },
                  { german: 'die U-Bahn', english: 'the subway' },
                  { german: 'die S-Bahn', english: 'the suburban train' },
                  { german: 'das Auto', english: 'the car' },
                  { german: 'das Fahrrad', english: 'the bicycle' },
                  { german: 'fahren', english: 'to drive/travel' },
                  { german: 'fliegen', english: 'to fly' },
                  { german: 'gehen', english: 'to go/walk' },
                  { german: 'die Fahrkarte', english: 'the ticket' },
                  { german: 'das Gleis', english: 'the platform' },
                  { german: 'die Haltestelle', english: 'the bus/tram stop' },
                  { german: 'der Koffer', english: 'the suitcase' },
                  { german: 'der Urlaub', english: 'the vacation' },
                  { german: 'das Hotel', english: 'the hotel' },
                  // Fragewörter
                  { german: 'Wer?', english: 'Who?' },
                  { german: 'Was?', english: 'What?' },
                  { german: 'Wo?', english: 'Where? (location)' },
                  { german: 'Wohin?', english: 'Where to? (direction)' },
                  { german: 'Woher?', english: 'Where from?' },
                  { german: 'Wann?', english: 'When?' },
                  { german: 'Wie?', english: 'How?' },
                  { german: 'Warum?', english: 'Why?' },
                  { german: 'Wie viel?', english: 'How much?' },
                  { german: 'Wie viele?', english: 'How many?' },
                  // Sonstige
                  { german: 'bitte', english: 'please / you\'re welcome' },
                  { german: 'danke', english: 'thank you' },
                  { german: 'ja', english: 'yes' },
                  { german: 'nein', english: 'no' },
                  { german: 'Entschuldigung', english: 'excuse me' },
              ]
            },

            // --- GRAMMATIK (100+ Questions) ---
            {
              id: 'g-a1-l1-g1',
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A1 (100+)',
              content: 'Testen Sie Ihr Grammatikwissen für die A1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Personalpronomen & sein/haben
                { id: 'g-a1g1q001', text: 'Wie ___ Ihr Name?', options: ['ist', 'bin', 'sind'], correctAnswer: 'ist' },
                { id: 'g-a1g1q002', text: 'Ich ___ aus Italien.', options: ['komme', 'kommt', 'kommen'], correctAnswer: 'komme' },
                { id: 'g-a1g1q003', text: '___ alt bist du?', options: ['Wie', 'Was', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q004', text: 'Wir ___ Freunde.', options: ['ist', 'sind', 'bin'], correctAnswer: 'sind' },
                { id: 'g-a1g1q005', text: 'Er ___ ein Auto.', options: ['habe', 'hast', 'hat'], correctAnswer: 'hat' },
                { id: 'g-a1g1q006', text: '___ ihr müde?', options: ['Sind', 'Seid', 'Ist'], correctAnswer: 'Seid' },
                { id: 'g-a1g1q007', text: 'Was sind ___ von Beruf?', options: ['du', 'er', 'Sie'], correctAnswer: 'Sie' },
                { id: 'g-a1g1q008', text: 'Ich ___ einen Hund. (haben)', options: ['habe', 'hast', 'hat'], correctAnswer: 'habe' },
                { id: 'g-a1g1q009', text: 'Du ___ Student. (sein)', options: ['bin', 'bist', 'ist'], correctAnswer: 'bist' },
                { id: 'g-a1g1q010', text: 'Sie (pl.) ___ Kinder. (haben)', options: ['hat', 'habt', 'haben'], correctAnswer: 'haben' },
                // W-Fragen
                { id: 'g-a1g1q011', text: '___ sprichst du?', options: ['Was', 'Wer', 'Wo'], correctAnswer: 'Was' },
                { id: 'g-a1g1q012', text: '___ wohnt er?', options: ['Wo', 'Was', 'Wie'], correctAnswer: 'Wo' },
                { id: 'g-a1g1q013', text: '___ kommt der Zug an?', options: ['Wann', 'Wer', 'Was'], correctAnswer: 'Wann' },
                { id: 'g-a1g1q014', text: '___ kostet der Pullover?', options: ['Was', 'Wie viel', 'Wer'], correctAnswer: 'Wie viel' },
                { id: 'g-a1g1q015', text: '___ ist das? - Das ist mein Bruder.', options: ['Was', 'Wer', 'Wie'], correctAnswer: 'Wer' },
                { id: 'g-a1g1q016', text: '___ kommst du? - Aus Polen.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Woher' },
                { id: 'g-a1g1q017', text: '___ geht es Ihnen?', options: ['Was', 'Wie', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q018', text: '___ ist dein Hobby?', options: ['Was', 'Wer', 'Wann'], correctAnswer: 'Was' },
                { id: 'g-a1g1q019', text: '___ fährst du? - Nach Berlin.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Wohin' },
                { id: 'g-a1g1q020', text: '___ heißt du?', options: ['Wer', 'Wie', 'Was'], correctAnswer: 'Wie' },
                // Artikel: Nominativ
                { id: 'g-a1g1q021', text: 'Das ist ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q022', text: 'Das ist ___ Frau. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q023', text: 'Hier ist ___ Stift. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q024', text: 'Wo ist ___ Bahnhof?', options: ['der', 'die', 'das'], correctAnswer: 'der' },
                { id: 'g-a1g1q025', text: '___ Kind spielt.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Das' },
                { id: 'g-a1g1q026', text: '___ Tasche ist neu.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q027', text: 'Ist das ___ Auto? (neutral)', options: ['ein', 'eine', 'einer'], correctAnswer: 'ein' },
                { id: 'g-a1g1q028', text: '___ Sonne scheint.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q029', text: '___ Mann lacht.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Der' },
                { id: 'g-a1g1q030', text: 'Das sind ___ Bücher. (plural)', options: ['die', 'das', 'der'], correctAnswer: 'die' },
                // Artikel: Akkusativ
                { id: 'g-a1g1q031', text: 'Ich habe ___ Schwester. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q032', text: 'Er kauft ___ Apfel. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q033', text: 'Sie liest ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q034', text: 'Ich nehme ___ Bus zur Arbeit.', options: ['der', 'die', 'den'], correctAnswer: 'den' },
                { id: 'g-a1g1q035', text: 'Er findet ___ Schlüssel nicht.', options: ['der', 'den', 'dem'], correctAnswer: 'den' },
                { id: 'g-a1g1q036', text: 'Sie sucht ___ Brille.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q037', text: 'Wir brauchen ___ Auto.', options: ['der', 'die', 'das'], correctAnswer: 'das' },
                { id: 'g-a1g1q038', text: 'Ich esse ___ Banane.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q039', text: 'Er hat ___ Hund. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q040', text: 'Siehst du ___ Mann dort?', options: ['der', 'dem', 'den'], correctAnswer: 'den' },
                // Verben: Präsens
                { id: 'g-a1g1q041', text: 'Wir ___ gern Kaffee.', options: ['trinke', 'trinkt', 'trinken'], correctAnswer: 'trinken' },
                { id: 'g-a1ag1q042', text: 'Er ___ einen Brief.', options: ['schreibe', 'schreibst', 'schreibt'], correctAnswer: 'schreibt' },
                { id: 'g-a1g1q043', text: '___ (arbeiten) du heute?', options: ['Arbeitest', 'Arbeitet', 'Arbeite'], correctAnswer: 'Arbeitest' },
                { id: 'g-a1g1q044', text: 'Ihr ___ sehr nett.', options: ['sind', 'seid', 'ist'], correctAnswer: 'seid' },
                { id: 'g-a1g1q045', text: 'Die Kinder ___ im Garten.', options: ['spielt', 'spielen', 'spiele'], correctAnswer: 'spielen' },
                { id: 'g-a1g1q046', text: 'Ich ___ gern Musik.', options: ['höre', 'hörst', 'hört'], correctAnswer: 'höre' },
                { id: 'g-a1g1q047', text: 'Er ___ (heißen) Thomas.', options: ['heiße', 'heißt', 'heißen'], correctAnswer: 'heißt' },
                { id: 'g-a1g1q048', text: 'Ihr ___ (finden) den Weg.', options: ['finde', 'findet', 'finden'], correctAnswer: 'findet' },
                { id: 'g-a1g1q049', text: 'Frau Meier ___ in Berlin. (wohnen)', options: ['wohne', 'wohnst', 'wohnt'], correctAnswer: 'wohnt' },
                { id: 'g-a1g1q050', text: 'Du ___ sehr gut. (lernen)', options: ['lerne', 'lernst', 'lernt'], correctAnswer: 'lernst' },
                // Verben: Vokalwechsel
                { id: 'g-a1g1q051', text: 'Er ___ am Wochenende seine Freunde.', options: ['treffe', 'triffst', 'trifft'], correctAnswer: 'trifft' },
                { id: 'g-a1g1q052', text: '___ du Deutsch?', options: ['Sprechst', 'Sprichst', 'Sprecht'], correctAnswer: 'Sprichst' },
                { id: 'g-a1g1q053', text: 'Sie (she) ___ am Abend fern.', options: ['sehe', 'siehst', 'sieht'], correctAnswer: 'sieht' },
                { id: 'g-a1g1q054', text: 'Der Mann ___ dem Kind.', options: ['helft', 'hilft', 'helfe'], correctAnswer: 'hilft' },
                { id: 'g-a1g1q055', text: 'Du ___ zu schnell.', options: ['fährst', 'fährst', 'fahrt'], correctAnswer: 'fährst' },
                { id: 'g-a1g1q056', text: 'Er ___ ein Buch.', options: ['lest', 'liest', 'lese'], correctAnswer: 'liest' },
                { id: 'g-a1g1q057', text: 'Was ___ du heute? (essen)', options: ['isst', 'esst', 'esse'], correctAnswer: 'isst' },
                { id: 'g-a1g1q058', text: 'Er ___ den Ball. (nehmen)', options: ['nehmt', 'nimmst', 'nimmt'], correctAnswer: 'nimmt' },
                { id: 'g-a1g1q059', text: 'Der Vater ___ (schlafen) lange.', options: ['schläft', 'schläfst', 'schlafe'], correctAnswer: 'schläft' },
                { id: 'g-a1g1q060', text: '___ du gern? (lesen)', options: ['Liest', 'Lesst', 'Lese'], correctAnswer: 'Liest' },
                // Modalverben
                { id: 'g-a1g1q061', text: 'Ich kann ___ Deutsch sprechen.', options: ['gut', 'guten', 'gute'], correctAnswer: 'gut' },
                { id: 'g-a1g1q062', text: '___ du mir helfen?', options: ['Kannst', 'Kann', 'Können'], correctAnswer: 'Kannst' },
                { id: 'g-a1g1q063', text: 'Was möchten Sie ___?', options: ['trinken', 'trinkt', 'trinke'], correctAnswer: 'trinken' },
                { id: 'g-a1g1q064', text: 'Wir ___ heute nicht arbeiten.', options: ['muss', 'müssen', 'müsst'], correctAnswer: 'müssen' },
                { id: 'g-a1g1q065', text: 'Er ___ nicht schwimmen.', options: ['will', 'wollen', 'willst'], correctAnswer: 'will' },
                { id: 'g-a1g1q066', text: 'Ich ___ einen Kaffee trinken.', options: ['möchte', 'möchtest', 'möchten'], correctAnswer: 'möchte' },
                { id: 'g-a1g1q067', text: 'Ihr ___ leise sein!', options: ['muss', 'müsst', 'müssen'], correctAnswer: 'müsst' },
                { id: 'g-a1g1q068', text: 'Sie (she) ___ Auto fahren. (dürfen)', options: ['darf', 'darfst', 'dürfen'], correctAnswer: 'darf' },
                { id: 'g-a1g1q069', text: '___ ihr heute Abend kommen? (können)', options: ['Kann', 'Könnt', 'Können'], correctAnswer: 'Könnt' },
                { id: 'g-a1g1q070', text: 'Ich ___ das nicht. (wollen)', options: ['will', 'willst', 'wollen'], correctAnswer: 'will' },
                // Trennbare Verben
                { id: 'g-a1g1q071', text: 'Ich stehe um 7 Uhr ___ .', options: ['auf', 'an', 'zu'], correctAnswer: 'auf' },
                { id: 'g-a1g1q072', text: 'Wann fängt der Film ___?', options: ['an', 'auf', 'ein'], correctAnswer: 'an' },
                { id: 'g-a1g1q073', text: 'Er kauft im Supermarkt ___ .', options: ['an', 'ein', 'zu'], correctAnswer: 'ein' },
                { id: 'g-a1g1q074', text: 'Sie ruft ihre Freundin ___ .', options: ['an', 'auf', 'mit'], correctAnswer: 'an' },
                { id: 'g-a1g1q075', text: 'Bitte mach das Fenster ___!', options: ['an', 'auf', 'zu'], correctAnswer: 'zu' },
                { id: 'g-a1g1q076', text: 'Ich komme am Freitag ___ .', options: ['mit', 'an', 'ab'], correctAnswer: 'mit' },
                { id: 'g-a1g1q077', text: 'Er sieht am Abend ___ .', options: ['fern', 'an', 'weg'], correctAnswer: 'fern' },
                { id: 'g-a1g1q078', text: 'Der Unterricht fängt um 9 Uhr ___.', options: ['an', 'um', 'auf'], correctAnswer: 'an' },
                { id: 'g-a1g1q079', text: 'Kommst du ___? (mitkommen)', options: ['mit', 'an', 'zu'], correctAnswer: 'mit' },
                { id: 'g-a1g1q080', text: 'Wann stehst du ___? (aufstehen)', options: ['ab', 'an', 'auf'], correctAnswer: 'auf' },
                // Possessivartikel
                { id: 'g-a1g1q081', text: 'Das ist nicht ___ Auto. Das ist ihr Auto.', options: ['mein', 'meine', 'meinen'], correctAnswer: 'mein' },
                { id: 'g-a1g1q082', text: 'Was ist ___ Beruf? (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q083', text: 'Ich finde ___ Tasche schön. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1g1q084', text: 'Wo ist ___ Mann? (Sie, formal)', options: ['Ihr', 'Ihre', 'Ihren'], correctAnswer: 'Ihr' },
                { id: 'g-a1g1q085', text: 'Wir lieben ___ Kinder. (wir)', options: ['unser', 'unsere', 'unseren'], correctAnswer: 'unsere' },
                { id: 'g-a1g1q086', text: 'Er sucht ___ Schlüssel. (er)', options: ['sein', 'seine', 'seinen'], correctAnswer: 'seinen' },
                { id: 'g-a1g1q087', text: 'Das ist ___ Haus. (wir)', options: ['unser', 'unsere', 'unseres'], correctAnswer: 'unser' },
                { id: 'g-a1g1q088', text: 'Ich brauche ___ Buch. (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q089', text: 'Sie (she) liebt ___ Katze. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1g1q090', text: 'Das ist ___ (euer) Auto.', options: ['euer', 'eure', 'euren'], correctAnswer: 'euer' },
                // Negation (nicht / kein)
                { id: 'g-a1g1q091', text: 'Wir haben ___ Zeit.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'keine' },
                { id: 'g-a1g1q092', text: 'Ich habe ___ Hunger. (der)', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q093', text: 'Er ist ___ verheiratet.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q094', text: 'Das ist ___ Auto. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q095', text: 'Ich arbeite ___ .', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q096', text: 'Sie kauft ___ Brot.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q097', text: 'Ich trinke ___ Alkohol.', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q098', text: 'Der Film ist ___ gut.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q099', text: 'Das sind ___ meine Bücher.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q100', text: 'Er hat ___ Geld. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                // Akkusativ-Präpositionen
                { id: 'g-a1g1q101', text: 'Der Kaffee ist ___ dich.', options: ['für', 'mit', 'ohne'], correctAnswer: 'für' },
                { id: 'g-a1g1q102', text: 'Er geht ___ den Park.', options: ['durch', 'um', 'bis'], correctAnswer: 'durch' },
                { id: 'g-a1g1q103', text: 'Ich kann nicht ___ meinen Computer arbeiten.', options: ['ohne', 'für', 'gegen'], correctAnswer: 'ohne' },
                { id: 'g-a1g1q104', text: 'Wir fahren ___ die Stadt.', options: ['bis', 'um', 'ohne'], correctAnswer: 'um' },
                { id: 'g-a1g1q105', text: 'Das Geschenk ist ___ meinen Vater.', options: ['für', 'durch', 'gegen'], correctAnswer: 'für' },
              ]
            }
          ],
        },
        // --- Placeholder Lessons for A1 ---
        {
          id: 'g-a1-l2',
          title: 'Modelltest 2: Gesamte Prüfung',
          estimatedTime: 65,
          isCompleted: false,
          activities: [
            // --- HÖREN (20 Dialogues/Questions) ---
            {
              id: 'g-a1-l2-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören kurze Alltagsgespräche (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Entschuldigung, wie spät ist es?' },
                { speaker: 'Person A', line: 'Es ist gleich 14 Uhr. Genau, 13:50 Uhr.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2. Eine Fahrkarte nach Berlin, bitte.' },
                { speaker: 'Schalter', line: 'Einfach oder hin und zurück?' },
                { speaker: 'Person B', line: 'Hin und zurück, bitte.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3. Gehst du oft schwimmen?' },
                { speaker: 'Person A', line: 'Ja, jeden Samstag. Mein Bruder kommt oft mit.' },
                { speaker: 'Person B', line: 'Ich spiele lieber Fußball.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4. Was nimmst du?' },
                { speaker: 'Person A', line: 'Ich glaube, ich nehme die Pizza. Und du?' },
                { speaker: 'Person B', line: 'Ich nehme den Salat.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5. Guten Tag, ich brauche einen Termin.' },
                { speaker: 'Praxis', line: 'Geht es am Dienstag um 9 Uhr?' },
                { speaker: 'Person A', line: 'Ja, das passt gut. Vielen Dank.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6. Wo finde ich Zucker?' },
                { speaker: 'Verkäufer', line: 'Zucker ist in Gang 5, bei Mehl und Kaffee.' },
                { speaker: 'Ansage', line: '---' },
                 { speaker: 'Ansage', line: 'Nummer 7. Wie alt ist dein Bruder?' },
                { speaker: 'Person A', line: 'Markus? Er ist 22. Er studiert in München.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 8. Ach, das Wetter ist so schön heute!' },
                { speaker: 'Person B', line: 'Ja, 25 Grad und Sonne. Gehen wir in den Park?' },
              ],
              questions: [
                { id: 'g-a1h2q1', text: 'Wie spät ist es?', options: ['a) 14:00 Uhr', 'b) 13:50 Uhr', 'c) 14:10 Uhr'], correctAnswer: 'b) 13:50 Uhr' },
                { id: 'g-a1h2q2', text: 'Welche Fahrkarte kauft die Person?', options: ['a) Nur nach Berlin', 'b) Von Berlin zurück', 'c) Nach Berlin und zurück'], correctAnswer: 'c) Nach Berlin und zurück' },
                { id: 'g-a1h2q3', text: 'Was macht Person A am Samstag?', options: ['a) Er spielt Fußball', 'b) Er geht schwimmen', 'c) Er besucht seinen Bruder'], correctAnswer: 'b) Er geht schwimmen' },
                { id: 'g-a1h2q4', text: 'Was isst Person A?', options: ['a) Salat', 'b) Nichts', 'c) Pizza'], correctAnswer: 'c) Pizza' },
                { id: 'g-a1h2q5', text: 'Wann ist der Termin?', options: ['a) Dienstag um 9 Uhr', 'b) Dienstag um 19 Uhr', 'c) Donnerstag um 9 Uhr'], correctAnswer: 'a) Dienstag um 9 Uhr' },
                { id: 'g-a1h2q6', text: 'Wo ist der Zucker?', options: ['a) In Gang 2', 'b) Bei der Kasse', 'c) In Gang 5'], correctAnswer: 'c) In Gang 5' },
                { id: 'g-a1h2q7', text: 'Wie alt ist Markus?', options: ['a) 25', 'b) 20', 'c) 22'], correctAnswer: 'c) 22' },
                { id: 'g-a1h2q8', text: 'Wie ist das Wetter?', options: ['a) Es regnet', 'b) Es ist sonnig und warm', 'c) Es ist kalt'], correctAnswer: 'b) Es ist sonnig und warm' },
              ]
            },
            {
              id: 'g-a1-l2-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (6 Fragen)',
              content: 'Sie hören Durchsagen am Flughafen oder im Kaufhaus (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Ansage 1', line: 'Achtung, Passagiere des Fluges LH 220 nach Paris. Der Abflug ist nicht an Schalter B5, sondern an Schalter B12.' },
                { speaker: 'Ansage 2', line: 'Sehr geehrte Kunden, im 3. Stock finden Sie heute Damenmode mit 20% Rabatt. Besuchen Sie unsere Damenabteilung im 3. Stock.' },
                { speaker: 'Ansage 3', line: 'Gleis 5. Der Regionalexpress nach Nürnberg, Abfahrt 16:45 Uhr, fällt heute leider aus. Bitte nehmen Sie den Zug um 17:05 Uhr von Gleis 7.' },
                { speaker: 'Ansage 4', line: 'Liebe Besucher des Stadtmuseums, das Museum schließt in 15 Minuten, um 18 Uhr. Bitte kommen Sie langsam zum Ausgang.' },
                { speaker: 'Ansage 5', line: 'Ein Hinweis für die Eltern der kleinen Anna: Anna wartet am Eingang West auf Sie. Bitte holen Sie Ihr Kind am Eingang West ab.' },
                { speaker: 'Ansage 6', line: 'Herzlich willkommen in der Stadtbibliothek. Wir haben von Dienstag bis Samstag von 10 Uhr bis 19 Uhr geöffnet. Montags ist geschlossen.' },
              ],
              questions: [
                { id: 'g-a1h2q1_2', text: 'Der Flug nach Paris fliegt von Schalter B5 ab.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q2_2', text: 'Die Damenmode ist heute billiger.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1h2q3_2', text: 'Der Zug um 16:45 Uhr nach Nürnberg hat Verspätung.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q4_2', text: 'Das Museum schließt um 18:15 Uhr.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q5_2', text: 'Anna sucht ihre Eltern am Eingang West.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' }, // Sie wartet dort, die Eltern sollen sie holen.
                { id: 'g-a1h2q6_2', text: 'Die Bibliothek ist am Montag geöffnet.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-a1-l2-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören Nachrichten auf dem Anrufbeantworter (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1.' },
                { speaker: 'Anrufbeantworter 1', line: 'Hallo Tom, hier ist Julia. Danke für die Einladung am Samstag. Ich komme gern. Ich bringe einen Salat mit, okay? Bis dann!' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2.' },
                { speaker: 'Anrufbeantworter 2', line: 'Guten Tag, Herr Krause, hier ist die Autowelt. Ihr Wagen ist fertig. Sie können ihn morgen ab 9 Uhr abholen. Die Reparatur war billiger als gedacht, nur 85 Euro.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3.' },
                { speaker: 'Anrufbeantworter 3', line: 'Guten Tag, hier spricht Frau Wagner, die Lehrerin von Max. Ich rufe wegen dem Elternabend an. Er ist nicht am Montag, sondern am Dienstag, den 10. Mai, um 19 Uhr.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4.' },
                { speaker: 'Anrufbeantworter 4', line: 'Hallo Papa, ich bins, Leon. Mein Fußballtraining fällt heute aus, weil der Trainer krank ist. Kannst du mich bitte um 17 Uhr vom Sportplatz abholen?' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5.' },
                { speaker: 'Anrufbeantworter 5', line: 'Hi, Maria, hier ist Jan. Ich bin jetzt am Bahnhof, aber mein Zug hatte Verspätung. Ich warte auf dich vor der Information. Ruf mich an, wenn du da bist.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6.' },
                { speaker: 'Anrufbeantworter 6', line: 'Guten Tag, Herr Schmidt. Hier ist Ihr Vermieter, Müller. Der Handwerker kommt morgen zwischen 10 und 12 Uhr, um die Heizung zu reparieren. Bitte seien Sie zu Hause.' },

              ],
              questions: [
                { id: 'g-a1h3q1_2', text: 'Was bringt Julia mit?', options: ['a) Einen Kuchen', 'b) Getränke', 'c) Einen Salat'], correctAnswer: 'c) Einen Salat' },
                { id: 'g-a1h3q2_2', text: 'Was kostet die Reparatur?', options: ['a) 90 Euro', 'b) 85 Euro', 'c) 95 Euro'], correctAnswer: 'b) 85 Euro' },
                { id: 'g-a1h3q3_2', text: 'Wann ist der Elternabend?', options: ['a) Am Montag', 'b) Am 10. Mai', 'c) Um 10 Uhr'], correctAnswer: 'b) Am 10. Mai' },
                { id: 'g-a1h3q4_2', text: 'Warum fällt das Training aus?', options: ['a) Das Wetter ist schlecht', 'b) Der Trainer ist krank', 'c) Leon ist krank'], correctAnswer: 'b) Der Trainer ist krank' },
                { id: 'g-a1h3q5_2', text: 'Wo wartet Jan?', options: ['a) Im Zug', 'b) Vor dem Bahnhof', 'c) Vor der Information'], correctAnswer: 'c) Vor der Information' },
                { id: 'g-a1h3q6_2', text: 'Wann kommt der Handwerker?', options: ['a) Um 12 Uhr', 'b) Am Vormittag', 'c) Am Nachmittag'], correctAnswer: 'b) Am Vormittag' },
              ]
            },

            // --- LESEN (Long reading + questions) ---
            {
              id: 'g-a1-l2-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1: E-Mails verstehen',
              content: 'Lesen Sie die beiden E-Mails und entscheiden Sie: Richtig oder Falsch.\n\n**E-Mail 1**\nHallo Lena,\nwie gehts? Ich plane einen Ausflug am Samstag. Fahren wir zusammen an den See? Wir können schwimmen und ein Picknick machen. Das Wetter soll super werden. Ich kann dich um 11 Uhr abholen.\nSag bald Bescheid!\nLiebe Grüße,\nSophie\n\n**E-Mail 2**\nSehr geehrte Mieterinnen und Mieter,\nbitte beachten Sie: Ab nächster Woche (1. Juli) dürfen keine Fahrräder mehr im Hausflur stehen. Der Flur ist ein Fluchtweg. Bitte benutzen Sie den neuen Fahrradkeller.\nVielen Dank,\nIhre Hausverwaltung',
              questions: [
                { id: 'g-a1r1q1_2', text: 'E-Mail 1: Sophie möchte am Samstag arbeiten.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r1q2_2', text: 'E-Mail 1: Sophie will Lena um 11 Uhr treffen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1r1q3_2', text: 'E-Mail 2: Man darf ab dem 1. Juli Fahrräder im Flur parken.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r1q4_2', text: 'E-Mail 2: Es gibt einen neuen Platz für Fahrräder.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a1-l2-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2: Anzeigen lesen',
              content: 'Lesen Sie die Anzeigen. Welche Anzeige passt zu welcher Situation?\n\n**Situation 1:** Sie möchten heute Abend billig Pizza essen.\n**Situation 2:** Sie suchen ein gebrauchtes Fahrrad.\n\n**Anzeige A**\n**Pizzeria "Enzo"**\nHeute Abend: Große Pizza-Party! Jede Pizza nur 6,00 €. Auch zum Mitnehmen. 17-22 Uhr.\n\n**Anzeige B**\n**Fahrrad-Welt**\nDas neueste E-Bike! 100 Modelle. Nur Neu-Fahrräder. Wir beraten Sie gern. Täglich 10-18 Uhr. Teuer aber gut!\n\n**Anzeige C**\n**Restaurant "Zum goldenen Löwen"**\nUnser 5-Sterne-Menü für 80 €. Genießen Sie einen besonderen Abend. Nur mit Reservierung.\n\n**Anzeige D**\n**Online-Marktplatz**\nIch verkaufe mein altes Holland-Fahrrad. Es ist 5 Jahre alt, aber fährt noch super. Preis: 50 € (Verhandlungsbasis). Nur Abholung.',
              questions: [
                { id: 'g-a1r2q1_2', text: 'Situation 1: Billig Pizza essen.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige A' },
                { id: 'g-a1r2q2_2', text: 'Situation 2: Gebrauchtes Fahrrad.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige D' },
              ]
            },
            {
              id: 'g-a1-l2-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3: Schilder und Notizen',
              content: 'Lesen Sie die Schilder und Notizen. Kreuzen Sie an: Richtig oder Falsch.\n\n**Text 1: Im Park**\nGrillen im Park verboten! Bitte benutzen Sie die offiziellen Grillplätze am See.\n\n**Text 2: An der Arztpraxis**\nUnsere Sprechzeiten: Mo, Di, Do: 9-12 Uhr und 14-17 Uhr. Mi, Fr: 9-12 Uhr. Mittwochnachmittag geschlossen.\n\n**Text 3: In der Bibliothek**\nRuhe bitte! Telefonieren ist hier nicht erlaubt. Bitte stellen Sie Ihr Handy auf lautlos.',
              questions: [
                { id: 'g-a1r3q1_2', text: 'Text 1: Man darf überall im Park grillen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r3q2_2', text: 'Text 2: Man kann am Mittwochnachmittag zum Arzt gehen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r3q3_2', text: 'Text 3: Man soll in der Bibliothek leise sein.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },

            // --- SCHREIBEN ---
            {
              id: 'g-a1-l2-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Formular ausfüllen',
              content: 'Sie möchten einen Ausweis für die Stadtbibliothek. Füllen Sie das Formular mit Ihren Informationen aus.\n\n**Anmeldung Stadtbibliothek**\n1. Nachname: __________\n2. Vorname: __________\n3. Geburtsdatum: __________\n4. Adresse (Straße, Hausnr.): __________\n5. PLZ / Ort: __________\n\nSchreiben Sie Ihre persönlichen Antworten in ein Textfeld.',
            },
            {
              id: 'g-a1-l2-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Kurze E-Mail',
              content: 'Schreiben Sie eine kurze E-Mail (ca. 30 Wörter).\n\nSie möchten Ihren Freund Paul am Samstag ins Kino einladen.\n- Fragen Sie, ob er Zeit hat.\n- Sagen Sie, welchen Film Sie sehen möchten.\n- Schlagen Sie eine Uhrzeit vor.',
            },

            // --- SPRECHEN ---
            // The tasks are generic for A1, so we repeat the prompts.
            // The user's practice with the AI will be different.
            {
              id: 'g-a1-l2-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Sich vorstellen',
              content: 'Stellen Sie sich vor. Sagen Sie: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobbys. Starten Sie die Konversationsübung, um dies zu üben.'
            },
            {
              id: 'g-a1-l2-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Fragen stellen (Thema: Sport)',
              content: 'Sie bekommen eine Karte mit einem Wort, z.B. "Sport". Stellen Sie Ihrem Partner eine Frage dazu (z.B. "Machst du gern Sport?"). Üben Sie, Fragen zu verschiedenen Themen zu stellen.'
            },
            {
              id: 'g-a1-l2-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Bitten formulieren (Thema: In der Küche)',
              content: 'Sie bekommen eine Karte mit einem Bild, z.B. ein Glas Wasser. Formulieren Sie eine Bitte (z.B. "Kannst du mir bitte ein Glas Wasser geben?"). Üben Sie, höfliche Bitten zu formulieren.'
            },
            
            // --- WÖRTSCHATZ (100+ Vocab) ---
            // This list is comprehensive for the *entire* A1 level,
            // so we can reuse the same list from Modelltest 1.
            {
              id: 'g-a1-l2-v1',
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A1 (100+)',
              content: 'Wichtige Wörter für die A1-Prüfung, sortiert nach Themen.',
              vocabulary: [
                  // Sich vorstellen
                  { german: 'der Name', english: 'the name' },
                  { german: 'heißen', english: 'to be called' },
                  { german: 'der Vorname', english: 'the first name' },
                  { german: 'der Familienname', english: 'the family name' },
                  { german: 'kommen aus', english: 'to come from' },
                  { german: 'das Land', english: 'the country' },
                  { german: 'wohnen', english: 'to live' },
                  { german: 'der Wohnort', english: 'the place of residence' },
                  { german: 'sprechen', english: 'to speak' },
                  { german: 'die Sprache', english: 'the language' },
                  { german: 'der Beruf', english: 'the profession' },
                  { german: 'was sind Sie von Beruf?', english: 'what is your job?' },
                  { german: 'das Hobby', english: 'the hobby' },
                  { german: 'das Alter', english: 'the age' },
                  { german: 'alt', english: 'old' },
                  { german: 'buchstabieren', english: 'to spell' },
                  // Familie
                  { german: 'die Familie', english: 'the family' },
                  { german: 'die Mutter', english: 'the mother' },
                  { german: 'der Vater', english: 'the father' },
                  { german: 'die Eltern', english: 'the parents' },
                  { german: 'der Sohn', english: 'the son' },
                  { german: 'die Tochter', english: 'the daughter' },
                  { german: 'der Bruder', english: 'the brother' },
                  { german: 'die Schwester', english: 'the sister' },
                  { german: 'die Geschwister', english: 'the siblings' },
                  { german: 'der Großvater (Opa)', english: 'the grandfather (grandpa)' },
                  { german: 'die Großmutter (Oma)', english: 'the grandmother (grandma)' },
                  { german: 'die Großeltern', english: 'the grandparents' },
                  { german: 'verheiratet', english: 'married' },
                  { german: 'ledig', english: 'single' },
                  { german: 'das Kind', english: 'the child' },
                  // Essen & Trinken
                  { german: 'das Essen', english: 'the food' },
                  { german: 'das Trinken', english: 'the drink' },
                  { german: 'das Frühstück', english: 'the breakfast' },
                  { german: 'das Mittagessen', english: 'the lunch' },
                  { german: 'das Abendessen', english: 'the dinner' },
                  { german: 'essen', english: 'to eat' },
                  { german: 'trinken', english: 'to drink' },
                  { german: 'das Brot', english: 'the bread' },
                  { german: 'die Butter', english: 'the butter' },
                  { german: 'der Käse', english: 'the cheese' },
                  { german: 'die Wurst', english: 'the sausage' },
                  { german: 'das Obst', english: 'the fruit' },
                  { german: 'der Apfel', english: 'the apple' },
                  { german: 'die Banane', english: 'the banana' },
                  { german: 'das Gemüse', english: 'the vegetable' },
                  { german: 'die Tomate', english: 'the tomato' },
                  { german: 'die Kartoffel', english: 'the potato' },
                  { german: 'das Fleisch', english: 'the meat' },
                  { german: 'der Fisch', english: 'the fish' },
                  { german: 'das Wasser', english: 'the water' },
                  { german: 'der Saft', english: 'the juice' },
                  { german: 'der Kaffee', english: 'the coffee' },
                  { german: 'der Tee', english: 'the tea' },
                  { german: 'die Milch', english: 'the milk' },
                  { german: 'der Zucker', english: 'the sugar' },
                  { german: 'Hunger haben', english: 'to be hungry' },
                  { german: 'Durst haben', english: 'to be thirsty' },
                  { german: 'mögen', english: 'to like' },
                  // Einkaufen
                  { german: 'kaufen', english: 'to buy' },
                  { german: 'der Supermarkt', english: 'the supermarket' },
                  { german: 'der Markt', english: 'the market' },
                  { german: 'bezahlen', english: 'to pay' },
                  { german: 'der Preis', english: 'the price' },
                  { german: 'kosten', english: 'to cost' },
                  { german: 'das Geld', english: 'the money' },
                  { german: 'der Euro', english: 'the euro' },
                  { german: 'das Angebot', english: 'the special offer' },
                  { german: 'billig', english: 'cheap' },
                  { german: 'teuer', english: 'expensive' },
                  // Wohnen
                  { german: 'die Wohnung', english: 'the apartment' },
                  { german: 'das Haus', english: 'the house' },
                  { german: 'das Zimmer', english: 'the room' },
                  { german: 'die Küche', english: 'the kitchen' },
                  { german: 'das Bad / Badezimmer', english: 'the bathroom' },
                  { german: 'das Wohnzimmer', english: 'the living room' },
                  { german: 'das Schlafzimmer', english: 'the bedroom' },
                  { german: 'der Tisch', english: 'the table' },
                  { german: 'der Stuhl', english: 'the chair' },
                  { german: 'das Bett', english: 'the bed' },
                  { german: 'der Schrank', english: 'the cupboard' },
                  { german: 'das Sofa', english: 'the sofa' },
                  { german: 'der Balkon', english: 'the balcony' },
                  { german: 'der Garten', english: 'the garden' },
                  // Zeit & Kalender
                  { german: 'die Zeit', english: 'the time' },
                  { german: 'die Uhr', english: 'the clock' },
                  { german: 'Wie spät ist es?', english: 'What time is it?' },
                  { german: 'die Stunde', english: 'the hour' },
                  { german: 'die Minute', english: 'the minute' },
                  { german: 'der Tag', english: 'the day' },
                  { german: 'die Woche', english: 'the week' },
                  { german: 'der Monat', english: 'the month' },
                  { german: 'das Jahr', english: 'the year' },
                  { german: 'der Montag', english: 'Monday' },
                  { german: 'der Dienstag', english: 'Tuesday' },
                  { german: 'der Mittwoch', english: 'Wednesday' },
                  { german: 'der Donnerstag', english: 'Thursday' },
                  { german: 'der Freitag', english: 'Friday' },
                  { german: 'der Samstag', english: 'Saturday' },
                  { german: 'der Sonntag', english: 'Sunday' },
                  { german: 'das Wochenende', english: 'the weekend' },
                  { german: 'heute', english: 'today' },
                  { german: 'morgen', english: 'tomorrow' },
                  { german: 'gestern', english: 'yesterday' },
                  // Verkehr & Reisen
                  { german: 'der Bahnhof', english: 'the train station' },
                  { german: 'der Flughafen', english: 'the airport' },
                  { german: 'der Zug', english: 'the train' },
                  { german: 'der Bus', english: 'the bus' },
                  { german: 'die U-Bahn', english: 'the subway' },
                  { german: 'die S-Bahn', english: 'the suburban train' },
                  { german: 'das Auto', english: 'the car' },
                  { german: 'das Fahrrad', english: 'the bicycle' },
                  { german: 'fahren', english: 'to drive/travel' },
                  { german: 'fliegen', english: 'to fly' },
                  { german: 'gehen', english: 'to go/walk' },
                  { german: 'die Fahrkarte', english: 'the ticket' },
                  { german: 'das Gleis', english: 'the platform' },
                  { german: 'die Haltestelle', english: 'the bus/tram stop' },
                  { german: 'der Koffer', english: 'the suitcase' },
                  { german: 'der Urlaub', english: 'the vacation' },
                  { german: 'das Hotel', english: 'the hotel' },
                  // Fragewörter
                  { german: 'Wer?', english: 'Who?' },
                  { german: 'Was?', english: 'What?' },
                  { german: 'Wo?', english: 'Where? (location)' },
                  { german: 'Wohin?', english: 'Where to? (direction)' },
                  { german: 'Woher?', english: 'Where from?' },
                  { german: 'Wann?', english: 'When?' },
                  { german: 'Wie?', english: 'How?' },
                  { german: 'Warum?', english: 'Why?' },
                  { german: 'Wie viel?', english: 'How much?' },
                  { german: 'Wie viele?', english: 'How many?' },
                  // Sonstige
                  { german: 'bitte', english: 'please / you\'re welcome' },
                  { german: 'danke', english: 'thank you' },
                  { german: 'ja', english: 'yes' },
                  { german: 'nein', english: 'no' },
                  { german: 'Entschuldigung', english: 'excuse me' },
              ]
            },

            // --- GRAMMATIK (100+ Questions) ---
            // This grammar question bank is comprehensive for the *entire* A1 level.
            // It is designed to be reused for all A1 Modelltests.
            {
              id: 'g-a1-l2-g1',
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A1 (100+)',
              content: 'Testen Sie Ihr Grammatikwissen für die A1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Personalpronomen & sein/haben
                { id: 'g-a1g1q001', text: 'Wie ___ Ihr Name?', options: ['ist', 'bin', 'sind'], correctAnswer: 'ist' },
                { id: 'g-a1g1q002', text: 'Ich ___ aus Italien.', options: ['komme', 'kommt', 'kommen'], correctAnswer: 'komme' },
                { id: 'g-a1g1q003', text: '___ alt bist du?', options: ['Wie', 'Was', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q004', text: 'Wir ___ Freunde.', options: ['ist', 'sind', 'bin'], correctAnswer: 'sind' },
                { id: 'g-a1g1q005', text: 'Er ___ ein Auto.', options: ['habe', 'hast', 'hat'], correctAnswer: 'hat' },
                { id: 'g-a1g1q006', text: '___ ihr müde?', options: ['Sind', 'Seid', 'Ist'], correctAnswer: 'Seid' },
                { id: 'g-a1g1q007', text: 'Was sind ___ von Beruf?', options: ['du', 'er', 'Sie'], correctAnswer: 'Sie' },
                { id: 'g-a1g1q008', text: 'Ich ___ einen Hund. (haben)', options: ['habe', 'hast', 'hat'], correctAnswer: 'habe' },
                { id: 'g-a1g1q009', text: 'Du ___ Student. (sein)', options: ['bin', 'bist', 'ist'], correctAnswer: 'bist' },
                { id: 'g-a1g1q010', text: 'Sie (pl.) ___ Kinder. (haben)', options: ['hat', 'habt', 'haben'], correctAnswer: 'haben' },
                // W-Fragen
                { id: 'g-a1g1q011', text: '___ sprichst du?', options: ['Was', 'Wer', 'Wo'], correctAnswer: 'Was' },
                { id: 'g-a1g1q012', text: '___ wohnt er?', options: ['Wo', 'Was', 'Wie'], correctAnswer: 'Wo' },
                { id: 'g-a1g1q013', text: '___ kommt der Zug an?', options: ['Wann', 'Wer', 'Was'], correctAnswer: 'Wann' },
                { id: 'g-a1g1q014', text: '___ kostet der Pullover?', options: ['Was', 'Wie viel', 'Wer'], correctAnswer: 'Wie viel' },
                { id: 'g-a1g1q015', text: '___ ist das? - Das ist mein Bruder.', options: ['Was', 'Wer', 'Wie'], correctAnswer: 'Wer' },
                { id: 'g-a1g1q016', text: '___ kommst du? - Aus Polen.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Woher' },
                { id: 'g-a1g1q017', text: '___ geht es Ihnen?', options: ['Was', 'Wie', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q018', text: '___ ist dein Hobby?', options: ['Was', 'Wer', 'Wann'], correctAnswer: 'Was' },
                { id: 'g-a1g1q019', text: '___ fährst du? - Nach Berlin.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Wohin' },
                { id: 'g-a1g1q020', text: '___ heißt du?', options: ['Wer', 'Wie', 'Was'], correctAnswer: 'Wie' },
                // Artikel: Nominativ
                { id: 'g-a1g1q021', text: 'Das ist ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q022', text: 'Das ist ___ Frau. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q023', text: 'Hier ist ___ Stift. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q024', text: 'Wo ist ___ Bahnhof?', options: ['der', 'die', 'das'], correctAnswer: 'der' },
                { id: 'g-a1g1q025', text: '___ Kind spielt.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Das' },
                { id: 'g-a1g1q026', text: '___ Tasche ist neu.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q027', text: 'Ist das ___ Auto? (neutral)', options: ['ein', 'eine', 'einer'], correctAnswer: 'ein' },
                { id: 'g-a1g1q028', text: '___ Sonne scheint.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q029', text: '___ Mann lacht.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Der' },
                { id: 'g-a1g1q030', text: 'Das sind ___ Bücher. (plural)', options: ['die', 'das', 'der'], correctAnswer: 'die' },
                // Artikel: Akkusativ
                { id: 'g-a1g1q031', text: 'Ich habe ___ Schwester. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q032', text: 'Er kauft ___ Apfel. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q033', text: 'Sie liest ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q034', text: 'Ich nehme ___ Bus zur Arbeit.', options: ['der', 'die', 'den'], correctAnswer: 'den' },
                { id: 'g-a1g1q035', text: 'Er findet ___ Schlüssel nicht.', options: ['der', 'den', 'dem'], correctAnswer: 'den' },
                { id: 'g-a1g1q036', text: 'Sie sucht ___ Brille.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q037', text: 'Wir brauchen ___ Auto.', options: ['der', 'die', 'das'], correctAnswer: 'das' },
                { id: 'g-a1g1q038', text: 'Ich esse ___ Banane.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q039', text: 'Er hat ___ Hund. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q040', text: 'Siehst du ___ Mann dort?', options: ['der', 'dem', 'den'], correctAnswer: 'den' },
                // Verben: Präsens
                { id: 'g-a1g1q041', text: 'Wir ___ gern Kaffee.', options: ['trinke', 'trinkt', 'trinken'], correctAnswer: 'trinken' },
                { id: 'g-a1g1q042', text: 'Er ___ einen Brief.', options: ['schreibe', 'schreibst', 'schreibt'], correctAnswer: 'schreibt' },
                { id: 'g-a1g1q043', text: '___ (arbeiten) du heute?', options: ['Arbeitest', 'Arbeitet', 'Arbeite'], correctAnswer: 'Arbeitest' },
                { id: 'g-a1g1q044', text: 'Ihr ___ sehr nett.', options: ['sind', 'seid', 'ist'], correctAnswer: 'seid' },
                { id: 'g-a1f1q045', text: 'Die Kinder ___ im Garten.', options: ['spielt', 'spielen', 'spiele'], correctAnswer: 'spielen' },
                { id: 'g-a1g1q046', text: 'Ich ___ gern Musik.', options: ['höre', 'hörst', 'hört'], correctAnswer: 'höre' },
                { id: 'g-a1g1q047', text: 'Er ___ (heißen) Thomas.', options: ['heiße', 'heißt', 'heißen'], correctAnswer: 'heißt' },
                { id: 'g-a1g1q048', text: 'Ihr ___ (finden) den Weg.', options: ['finde', 'findet', 'finden'], correctAnswer: 'findet' },
                { id: 'g-a1g1q049', text: 'Frau Meier ___ in Berlin. (wohnen)', options: ['wohne', 'wohnst', 'wohnt'], correctAnswer: 'wohnt' },
                { id: 'g-a1g1q050', text: 'Du ___ sehr gut. (lernen)', options: ['lerne', 'lernst', 'lernt'], correctAnswer: 'lernst' },
                // Verben: Vokalwechsel
                { id: 'g-a1g1q051', text: 'Er ___ am Wochenende seine Freunde.', options: ['treffe', 'triffst', 'trifft'], correctAnswer: 'trifft' },
                { id: 'g-a1g1q052', text: '___ du Deutsch?', options: ['Sprechst', 'Sprichst', 'Sprecht'], correctAnswer: 'Sprichst' },
                { id: 'g-a1g1q053', text: 'Sie (she) ___ am Abend fern.', options: ['sehe', 'siehst', 'sieht'], correctAnswer: 'sieht' },
                { id: 'g-a1g1q054', text: 'Der Mann ___ dem Kind.', options: ['helft', 'hilft', 'helfe'], correctAnswer: 'hilft' },
                { id: 'g-a1g1q055', text: 'Du ___ zu schnell.', options: ['fährst', 'fährst', 'fahrt'], correctAnswer: 'fährst' },
                { id: 'g-a1g1q056', text: 'Er ___ ein Buch.', options: ['lest', 'liest', 'lese'], correctAnswer: 'liest' },
                { id: 'g-a1g1q057', text: 'Was ___ du heute? (essen)', options: ['isst', 'esst', 'esse'], correctAnswer: 'isst' },
                { id: 'g-a1g1q058', text: 'Er ___ den Ball. (nehmen)', options: ['nehmt', 'nimmst', 'nimmt'], correctAnswer: 'nimmt' },
                { id: 'g-a1g1q059', text: 'Der Vater ___ (schlafen) lange.', options: ['schläft', 'schläfst', 'schlafe'], correctAnswer: 'schläft' },
                { id: 'g-a1g1q060', text: '___ du gern? (lesen)', options: ['Liest', 'Lesst', 'Lese'], correctAnswer: 'Liest' },
                // Modalverben
                { id: 'g-a1g1q061', text: 'Ich kann ___ Deutsch sprechen.', options: ['gut', 'guten', 'gute'], correctAnswer: 'gut' },
                { id: 'g-a1g1q062', text: '___ du mir helfen?', options: ['Kannst', 'Kann', 'Können'], correctAnswer: 'Kannst' },
                { id: 'g-a1g1q063', text: 'Was möchten Sie ___?', options: ['trinken', 'trinkt', 'trinke'], correctAnswer: 'trinken' },
                { id: 'g-a1g1q064', text: 'Wir ___ heute nicht arbeiten.', options: ['muss', 'müssen', 'müsst'], correctAnswer: 'müssen' },
                { id: 'g-a1g1q065', text: 'Er ___ nicht schwimmen.', options: ['will', 'wollen', 'willst'], correctAnswer: 'will' },
                { id: 'g-a1g1q066', text: 'Ich ___ einen Kaffee trinken.', options: ['möchte', 'möchtest', 'möchten'], correctAnswer: 'möchte' },
                { id: 'g-a1g1q067', text: 'Ihr ___ leise sein!', options: ['muss', 'müsst', 'müssen'], correctAnswer: 'müsst' },
                { id: 'g-a1g1q068', text: 'Sie (she) ___ Auto fahren. (dürfen)', options: ['darf', 'darfst', 'dürfen'], correctAnswer: 'darf' },
                { id: 'g-a1g1q069', text: '___ ihr heute Abend kommen? (können)', options: ['Kann', 'Könnt', 'Können'], correctAnswer: 'Könnt' },
                { id: 'g-a1g1q070', text: 'Ich ___ das nicht. (wollen)', options: ['will', 'willst', 'wollen'], correctAnswer: 'will' },
                // Trennbare Verben
                { id: 'g-a1g1q071', text: 'Ich stehe um 7 Uhr ___ .', options: ['auf', 'an', 'zu'], correctAnswer: 'auf' },
                { id: 'g-a1g1q072', text: 'Wann fängt der Film ___?', options: ['an', 'auf', 'ein'], correctAnswer: 'an' },
                { id: 'g-a1g1q073', text: 'Er kauft im Supermarkt ___ .', options: ['an', 'ein', 'zu'], correctAnswer: 'ein' },
                { id: 'g-a1g1q074', text: 'Sie ruft ihre Freundin ___ .', options: ['an', 'auf', 'mit'], correctAnswer: 'an' },
                { id: 'g-a1g1q075', text: 'Bitte mach das Fenster ___!', options: ['an', 'auf', 'zu'], correctAnswer: 'zu' },
                { id: 'g-a1g1q076', text: 'Ich komme am Freitag ___ .', options: ['mit', 'an', 'ab'], correctAnswer: 'mit' },
                { id: 'g-a1g1q077', text: 'Er sieht am Abend ___ .', options: ['fern', 'an', 'weg'], correctAnswer: 'fern' },
                { id: 'g-a1g1q078', text: 'Der Unterricht fängt um 9 Uhr ___.', options: ['an', 'um', 'auf'], correctAnswer: 'an' },
                { id: 'g-a1g1q079', text: 'Kommst du ___? (mitkommen)', options: ['mit', 'an', 'zu'], correctAnswer: 'mit' },
                { id: 'g-a1g1q080', text: 'Wann stehst du ___? (aufstehen)', options: ['ab', 'an', 'auf'], correctAnswer: 'auf' },
                // Possessivartikel
                { id: 'g-a1g1q081', text: 'Das ist nicht ___ Auto. Das ist ihr Auto.', options: ['mein', 'meine', 'meinen'], correctAnswer: 'mein' },
                { id: 'g-a1g1q082', text: 'Was ist ___ Beruf? (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q083', text: 'Ich finde ___ Tasche schön. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1g1q084', text: 'Wo ist ___ Mann? (Sie, formal)', options: ['Ihr', 'Ihre', 'Ihren'], correctAnswer: 'Ihr' },
                { id: 'g-a1g1q085', text: 'Wir lieben ___ Kinder. (wir)', options: ['unser', 'unsere', 'unseren'], correctAnswer: 'unsere' },
                { id: 'g-a1g1q086', text: 'Er sucht ___ Schlüssel. (er)', options: ['sein', 'seine', 'seinen'], correctAnswer: 'seinen' },
                { id: 'g-a1g1q087', text: 'Das ist ___ Haus. (wir)', options: ['unser', 'unsere', 'unseres'], correctAnswer: 'unser' },
                { id: 'g-a1g1q088', text: 'Ich brauche ___ Buch. (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q089', text: 'Sie (she) liebt ___ Katze. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1g1q090', text: 'Das ist ___ (euer) Auto.', options: ['euer', 'eure', 'euren'], correctAnswer: 'euer' },
                // Negation (nicht / kein)
                { id: 'g-a1g1q091', text: 'Wir haben ___ Zeit.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'keine' },
                { id: 'g-a1g1q092', text: 'Ich habe ___ Hunger. (der)', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q093', text: 'Er ist ___ verheiratet.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q094', text: 'Das ist ___ Auto. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q095', text: 'Ich arbeite ___ .', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q096', text: 'Sie kauft ___ Brot.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q097', text: 'Ich trinke ___ Alkohol.', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q098', text: 'Der Film ist ___ gut.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q099', text: 'Das sind ___ meine Bücher.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q100', text: 'Er hat ___ Geld. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                // Akkusativ-Präpositionen
                { id: 'g-a1g1q101', text: 'Der Kaffee ist ___ dich.', options: ['für', 'mit', 'ohne'], correctAnswer: 'für' },
                { id: 'g-a1g1q102', text: 'Er geht ___ den Park.', options: ['durch', 'um', 'bis'], correctAnswer: 'durch' },
                { id: 'g-a1g1q103', text: 'Ich kann nicht ___ meinen Computer arbeiten.', options: ['ohne', 'für', 'gegen'], correctAnswer: 'ohne' },
                { id: 'g-a1g1q104', text: 'Wir fahren ___ die Stadt.', options: ['bis', 'um', 'ohne'], correctAnswer: 'um' },
                { id: 'g-a1g1q105', text: 'Das Geschenk ist ___ meinen Vater.', options: ['für', 'durch', 'gegen'], correctAnswer: 'für' },
              ]
            }
          ],
        },
//
// --- END OF g-a1-l2 ---
        // ... (Your existing MOCK_USERS_DB, MOCK_COURSES, and GOETHE_DATA) ...
// ... (Inside GOETHE_DATA.levels[0].lessons) ...
//
// You already have g-a1-l1 and g-a1-l2.
//
// REPLACE the g-a1-l3 placeholder with this new object:
//
        {
          id: 'g-a1-l3',
          title: 'Modelltest 3: Gesamte Prüfung',
          estimatedTime: 65,
          isCompleted: false,
          activities: [
            // --- HÖREN (20 Dialogues/Questions) ---
            {
              id: 'g-a1-l3-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören kurze Alltagsgespräche (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Was möchten Sie trinken?' },
                { speaker: 'Person A', line: 'Ich nehme einen Tee, bitte.' },
                { speaker: 'Kellner', line: 'Mit Milch oder Zitrone?' },
                { speaker: 'Person A', line: 'Mit Zitrone, danke.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2. Wo ist mein Handy?' },
                { speaker: 'Person B', line: 'Ich glaube, es ist in der Küche, auf dem Tisch.' },
                { speaker: 'Person A', line: 'Nein, da ist es nicht. Ah, hier, in meiner Tasche.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3. Wann fährt der nächste Bus ins Zentrum?' },
                { speaker: 'Person A', line: 'Der nächste Bus? In 10 Minuten. Um 15:40 Uhr.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4. Was machen wir heute Abend?' },
                { speaker: 'Person B', line: 'Ich bin müde. Ich möchte zu Hause bleiben und einen Film sehen.' },
                { speaker: 'Person A', line: 'Gute Idee. Ich mache Popcorn.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5. Kaufen wir noch Brot?' },
                { speaker: 'Person A', line: 'Nein, wir haben noch Brot. Aber wir brauchen Milch.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6. Wie ist dein neuer Job?' },
                { speaker: 'Person B', line: 'Sehr interessant, aber auch viel Arbeit. Die Kollegen sind sehr nett.' },
                { speaker: 'Ansage', line: '---' },
                 { speaker: 'Ansage', line: 'Nummer 7. Sprechen Sie Spanisch?' },
                { speaker: 'Person A', line: 'Nein, ich spreche nur Deutsch und Englisch. Aber meine Frau spricht Spanisch.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 8. Wo warst du im Urlaub?' },
                { speaker: 'Person B', line: 'Ich war in Italien, in Rom. Es war fantastisch.' },
              ],
              questions: [
                { id: 'g-a1h3q1', text: 'Wie trinkt die Person ihren Tee?', options: ['a) Mit Milch', 'b) Mit Zucker', 'c) Mit Zitrone'], correctAnswer: 'c) Mit Zitrone' },
                { id: 'g-a1h3q2', text: 'Wo ist das Handy?', options: ['a) Auf dem Tisch', 'b) In der Tasche', 'c) In der Küche'], correctAnswer: 'b) In der Tasche' },
                { id: 'g-a1h3q3', text: 'Wann fährt der Bus?', options: ['a) Um 15:10 Uhr', 'b) Um 15:40 Uhr', 'c) Um 16:10 Uhr'], correctAnswer: 'b) Um 15:40 Uhr' },
                { id: 'g-a1h3q4', text: 'Was machen sie heute Abend?', options: ['a) Sie gehen tanzen', 'b) Sie sehen einen Film', 'c) Sie kochen Popcorn'], correctAnswer: 'b) Sie sehen einen Film' },
                { id: 'g-a1h3q5', text: 'Was brauchen sie?', options: ['a) Brot', 'b) Milch', 'c) Brot und Milch'], correctAnswer: 'b) Milch' },
                { id: 'g-a1h3q6', text: 'Wie ist der neue Job?', options: ['a) Langweilig, aber einfach', 'b) Interessant und die Kollegen sind nett', 'c) Die Kollegen sind nicht nett'], correctAnswer: 'b) Interessant und die Kollegen sind nett' },
                { id: 'g-a1h3q7', text: 'Welche Sprachen spricht die Person?', options: ['a) Spanisch und Deutsch', 'b) Deutsch und Englisch', 'c) Englisch und Spanisch'], correctAnswer: 'b) Deutsch und Englisch' },
                { id: 'g-a1h3q8', text: 'Wo war die Person im Urlaub?', options: ['a) In Spanien', 'b) In Rom', 'c) Zu Hause'], correctAnswer: 'b) In Rom' },
              ]
            },
            {
              id: 'g-a1-l3-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (6 Fragen)',
              content: 'Sie hören Durchsagen am Telefon oder im Radio (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Ansage 1', line: 'Willkommen bei der Wettervorhersage. Heute bleibt es im Norden kalt, mit starkem Wind. Im Süden scheint die Sonne bei 20 Grad.' },
                { speaker: 'Ansage 2', line: 'Und hier eine Verkehrsmeldung: Auf der A8, Stau zwischen München und Stuttgart. 10 Kilometer Stau wegen einer Baustelle.' },
                { speaker: 'Ansage 3', line: 'Sie sind verbunden mit dem Kino "Central". Unser Film "Sonne und Meer" um 20 Uhr ist heute leider ausverkauft.' },
                { speaker: 'Ansage 4', line: 'Hier ist die Polizei. In der Hauptstraße ist ein Unfall passiert. Bitte fahren Sie langsam oder umfahren Sie das Gebiet.' },
                { speaker: 'Ansage 5', line: 'Liebe Kunden, unser Geschäft schließt heute wegen einer internen Feier bereits um 17 Uhr. Morgen sind wir wieder wie gewohnt für Sie da.' },
                { speaker: 'Ansage 6', line: 'Gleis 1. Die S-Bahn Linie 1 nach Bonn fährt ein. Vorsicht an der Bahnsteigkante.' },
              ],
              questions: [
                { id: 'g-a1h2q1_3', text: 'Im Süden ist es kalt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q2_3', text: 'Auf der A8 gibt es einen Stau.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1h2q3_3', text: 'Es gibt noch Karten für den Film um 20 Uhr.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q4_3', text: 'In der Hauptstraße ist ein Unfall.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1h2q5_3', text: 'Das Geschäft ist heute länger geöffnet.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q6_3', text: 'Die S-Bahn nach Bonn fährt von Gleis 1 ab.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a1-l3-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören Nachrichten auf dem Anrufbeantworter (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1.' },
                { speaker: 'Anrufbeantworter 1', line: 'Hallo Anna, hier ist David. Ich bin jetzt im Supermarkt. Wir wollten doch Grillen. Fehlt noch etwas? Ich kaufe Würstchen und Salat. Brauchen wir auch Getränke?' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2.' },
                { speaker: 'Anrufbeantworter 2', line: 'Guten Tag, Frau Becker. Hier ist die Schule von Leo. Leo hat Bauchschmerzen. Können Sie ihn bitte vom Sekretariat abholen?' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3.' },
                { speaker: 'Anrufbeantworter 3', line: 'Hi, es ist Jan. Mein Auto ist kaputt. Ich kann dich leider nicht vom Bahnhof abholen. Nimm bitte ein Taxi, ich bezahle es dann. Tut mir leid!' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4.' },
                { speaker: 'Anrufbeantworter 4', line: 'Guten Tag, hier Fitness-Studio "Fit & Fun". Ihre neue Mitgliedskarte ist da. Sie können die Karte ab morgen an der Rezeption abholen.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5.' },
                { speaker: 'Anrufbeantworter 5', line: 'Hallo Frau Schneider, hier ist die Post. Ein Paket für Sie ist angekommen. Sie waren nicht zu Hause. Sie können das Paket ab 16 Uhr in der Postfiliale, Bahnhofstraße 5, abholen.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6.' },
                { speaker: 'Anrufbeantworter 6', line: 'Hallo Alex, hier ist Mama. Ich habe deine Schlüssel in der Küche gefunden. Sie liegen auf dem Tisch. Ich lasse sie dort. Vergiss sie nicht!' },
              ],
              questions: [
                { id: 'g-a1h3q1_3', text: 'Was möchte David wissen?', options: ['a) Ob sie grillen wollen.', 'b) Ob er Getränke kaufen soll.', 'c) Wo der Supermarkt ist.'], correctAnswer: 'b) Ob er Getränke kaufen soll.' },
                { id: 'g-a1h3q2_3', text: 'Warum ruft die Schule an?', options: ['a) Leo braucht Geld.', 'b) Leo ist krank.', 'c) Leo hat das Sekretariat angerufen.'], correctAnswer: 'b) Leo ist krank.' },
                { id: 'g-a1h3q3_3', text: 'Wie soll die Person vom Bahnhof kommen?', options: ['a) Sie soll auf Jan warten.', 'b) Sie soll den Bus nehmen.', 'c) Sie soll ein Taxi nehmen.'], correctAnswer: 'c) Sie soll ein Taxi nehmen.' },
                { id: 'g-a1h3q4_3', text: 'Was kann die Person morgen abholen?', options: ['a) Einen Fitnessplan', 'b) Eine Mitgliedskarte', 'c) Geld von der Rezeption'], correctAnswer: 'b) Eine Mitgliedskarte' },
                { id: 'g-a1h3q5_3', text: 'Wo ist das Paket?', options: ['a) Bei Frau Schneider', 'b) In der Bahnhofstraße 5', 'c) Es kommt morgen'], correctAnswer: 'b) In der Bahnhofstraße 5' },
                { id: 'g-a1h3q6_3', text: 'Wo sind die Schlüssel?', options: ['a) Alex hat sie.', 'b) Auf dem Küchentisch.', 'c) Die Mutter hat sie.'], correctAnswer: 'b) Auf dem Küchentisch.' },
              ]
            },

            // --- LESEN (Long reading + questions) ---
            {
              id: 'g-a1-l3-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1: E-Mails verstehen',
              content: 'Lesen Sie die beiden E-Mails und entscheiden Sie: Richtig oder Falsch.\n\n**E-Mail 1**\nLiebe Frau Wagner,\nich kann am Donnerstag leider nicht zum Deutschkurs kommen. Ich habe einen wichtigen Arzttermin. Können Sie mir bitte die Hausaufgaben per E-Mail schicken? Das wäre sehr nett.\nViele Grüße,\nCarlos Gomez\n\n**E-Mail 2**\nHallo zusammen,\nich organisiere eine kleine Party für Annas Abschied. Sie geht ja für ein Jahr nach Australien. Die Party ist am Freitag, 20 Uhr, im Büro. Wir möchten ein Geschenk kaufen. Wer gibt etwas? Bitte tragt euch in die Liste in der Küche ein.\nViele Grüße,\nSabine',
              questions: [
                { id: 'g-a1r1q1_3', text: 'E-Mail 1: Carlos kommt am Donnerstag nicht.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1r1q2_3', text: 'E-Mail 1: Carlos möchte keine Hausaufgaben machen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r1q3_3', text: 'E-Mail 2: Anna macht eine Party.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r1q4_3', text: 'E-Mail 2: Die Kollegen sammeln Geld für ein Geschenk.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a1-l3-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2: Anzeigen lesen',
              content: 'Lesen Sie die Anzeigen. Welche Anzeige passt zu welcher Situation?\n\n**Situation 1:** Sie möchten am Wochenende Möbel kaufen.\n**Situation 2:** Sie möchten in Ihrer Freizeit Sport machen, am liebsten tanzen.\n\n**Anzeige A**\n**Sportverein Mitte**\nWir bieten Fußball, Handball und Volleyball. Training Mo-Fr 18-21 Uhr. Keine Tanzkurse.\n\n**Anzeige B**\n**Möbelhaus "Wohn-Welt"**\nGroßer Sonntagsverkauf! Diesen Sonntag von 13-18 Uhr geöffnet. Sofas, Tische, Stühle - alles 20% billiger!\n\n**Anzeige C**\n**Tanzschule "Swing"**\nNeue Kurse! Salsa, Tango, Hip-Hop. Für Anfänger und Profis. Kurse jeden Abend und am Wochenende. Melden Sie sich jetzt an!\n\n**Anzeige D**\n**Antiquitäten am Markt**\nAlte Möbel, Lampen und Bilder. Wir kaufen und verkaufen. Geöffnet Mo-Fr 10-18 Uhr. Samstag und Sonntag geschlossen.',
              questions: [
                { id: 'g-a1r2q1_3', text: 'Situation 1: Möbel am Wochenende kaufen.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige B' },
                { id: 'g-a1r2q2_3', text: 'Situation 2: Tanzen lernen.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige C' },
              ]
            },
            {
              id: 'g-a1-l3-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3: Schilder und Notizen',
              content: 'Lesen Sie die Schilder und Notizen. Kreuzen Sie an: Richtig oder Falsch.\n\n**Text 1: Am Schwimmbad**\nLiebe Gäste, das Springen vom Beckenrand ist verboten. Bitte benutzen Sie das Sprungbrett.\n\n**Text 2: Im Supermarkt**\nAngebot der Woche: 1 Kasten Wasser (12 Flaschen) für nur 4,99 €. Nur solange der Vorrat reicht.\n\n**Text 3: Notiz im Büro**\nKollegen, die Kaffeemaschine ist kaputt. Ein Techniker kommt morgen. Bitte holt euren Kaffee heute im Café unten.',
              questions: [
                { id: 'g-a1r3q1_3', text: 'Text 1: Man darf nicht ins Wasser springen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' }, // Trick: Man darf, aber nur vom Sprungbrett.
                { id: 'g-a1r3q2_3', text: 'Text 2: Das Wasser-Angebot ist zeitlich begrenzt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1r3q3_3', text: 'Text 3: Man kann heute keinen Kaffee im Büro kochen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },

            // --- SCHREIBEN ---
            {
              id: 'g-a1-l3-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Formular ausfüllen',
              content: 'Sie sind bei einem Freund, Paul, in Deutschland zu Besuch. Er meldet Sie für einen Tag bei seiner Sportversicherung an. Füllen Sie das Formular aus.\n\n**Besucher-Sportversicherung "Aktiv"**\n1. Familienname: __________\n2. Vorname: __________\n3. Geburtsland: __________\n4. Datum des Besuchs: __________\n5. Name des Mitglieds (Ihr Freund): Paul Schmidt\n\nSchreiben Sie Ihre persönlichen Antworten in ein Textfeld.',
            },
            {
              id: 'g-a1-l3-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Kurze SMS/Nachricht',
              content: 'Schreiben Sie eine kurze Nachricht (ca. 30 Wörter).\n\nIhr Auto ist kaputt. Sie kommen 30 Minuten zu spät zur Arbeit. Schreiben Sie Ihrem Chef, Herrn Meier.\n- Entschuldigen Sie sich.\n- Sagen Sie, warum Sie zu spät kommen.\n- Sagen Sie, wann Sie im Büro sind.',
            },

            // --- SPRECHEN ---
            {
              id: 'g-a1-l3-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Sich vorstellen',
              content: 'Stellen Sie sich vor. Sagen Sie: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobbys. Starten Sie die Konversationsübung, um dies zu üben.'
            },
            {
              id: 'g-a1-l3-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Fragen stellen (Thema: Wohnung)',
              content: 'Sie bekommen eine Karte mit einem Wort, z.B. "Wohnung". Stellen Sie Ihrem Partner eine Frage dazu (z.B. "Wie groß ist deine Wohnung?"). Üben Sie, Fragen zu verschiedenen Themen zu stellen.'
            },
            {
              id: 'g-a1-l3-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Bitten formulieren (Thema: Im Deutschkurs)',
              content: 'Sie bekommen eine Karte mit einem Bild, z.B. ein Stift. Formulieren Sie eine Bitte (z.B. "Kannst du mir bitte einen Stift leihen?"). Üben Sie, höfliche Bitten zu formulieren.'
            },
            
            // --- WÖRTSCHATZ (100+ Vocab) ---
            {
              id: 'g-a1-l3-v1',
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A1 (100+)',
              content: 'Wichtige Wörter für die A1-Prüfung, sortiert nach Themen.',
              vocabulary: [
                  // Sich vorstellen
                  { german: 'der Name', english: 'the name' },
                  { german: 'heißen', english: 'to be called' },
                  { german: 'der Vorname', english: 'the first name' },
                  { german: 'der Familienname', english: 'the family name' },
                  { german: 'kommen aus', english: 'to come from' },
                  { german: 'das Land', english: 'the country' },
                  { german: 'wohnen', english: 'to live' },
                  { german: 'der Wohnort', english: 'the place of residence' },
                  { german: 'sprechen', english: 'to speak' },
                  { german: 'die Sprache', english: 'the language' },
                  { german: 'der Beruf', english: 'the profession' },
                  { german: 'was sind Sie von Beruf?', english: 'what is your job?' },
                  { german: 'das Hobby', english: 'the hobby' },
                  { german: 'das Alter', english: 'the age' },
                  { german: 'alt', english: 'old' },
                  { german: 'buchstabieren', english: 'to spell' },
                  // Familie
                  { german: 'die Familie', english: 'the family' },
                  { german: 'die Mutter', english: 'the mother' },
                  { german: 'der Vater', english: 'the father' },
                  { german: 'die Eltern', english: 'the parents' },
                  { german: 'der Sohn', english: 'the son' },
                  { german: 'die Tochter', english: 'the daughter' },
                  { german: 'der Bruder', english: 'the brother' },
                  { german: 'die Schwester', english: 'the sister' },
                  { german: 'die Geschwister', english: 'the siblings' },
                  { german: 'der Großvater (Opa)', english: 'the grandfather (grandpa)' },
                  { german: 'die Großmutter (Oma)', english: 'the grandmother (grandma)' },
                  { german: 'die Großeltern', english: 'the grandparents' },
                  { german: 'verheiratet', english: 'married' },
                  { german: 'ledig', english: 'single' },
                  { german: 'das Kind', english: 'the child' },
                  // Essen & Trinken
                  { german: 'das Essen', english: 'the food' },
                  { german: 'das Trinken', english: 'the drink' },
                  { german: 'das Frühstück', english: 'the breakfast' },
                  { german: 'das Mittagessen', english: 'the lunch' },
                  { german: 'das Abendessen', english: 'the dinner' },
                  { german: 'essen', english: 'to eat' },
                  { german: 'trinken', english: 'to drink' },
                  { german: 'das Brot', english: 'the bread' },
                  { german: 'die Butter', english: 'the butter' },
                  { german: 'der Käse', english: 'the cheese' },
                  { german: 'die Wurst', english: 'the sausage' },
                  { german: 'das Obst', english: 'the fruit' },
                  { german: 'der Apfel', english: 'the apple' },
                  { german: 'die Banane', english: 'the banana' },
                  { german: 'das Gemüse', english: 'the vegetable' },
                  { german: 'die Tomate', english: 'the tomato' },
                  { german: 'die Kartoffel', english: 'the potato' },
                  { german: 'das Fleisch', english: 'the meat' },
                  { german: 'der Fisch', english: 'the fish' },
                  { german: 'das Wasser', english: 'the water' },
                  { german: 'der Saft', english: 'the juice' },
                  { german: 'der Kaffee', english: 'the coffee' },
                  { german: 'der Tee', english: 'the tea' },
                  { german: 'die Milch', english: 'the milk' },
                  { german: 'der Zucker', english: 'the sugar' },
                  { german: 'Hunger haben', english: 'to be hungry' },
                  { german: 'Durst haben', english: 'to be thirsty' },
                  { german: 'mögen', english: 'to like' },
                  // Einkaufen
                  { german: 'kaufen', english: 'to buy' },
                  { german: 'der Supermarkt', english: 'the supermarket' },
                  { german: 'der Markt', english: 'the market' },
                  { german: 'bezahlen', english: 'to pay' },
                  { german: 'der Preis', english: 'the price' },
                  { german: 'kosten', english: 'to cost' },
                  { german: 'das Geld', english: 'the money' },
                  { german: 'der Euro', english: 'the euro' },
                  { german: 'das Angebot', english: 'the special offer' },
                  { german: 'billig', english: 'cheap' },
                  { german: 'teuer', english: 'expensive' },
                  // Wohnen
                  { german: 'die Wohnung', english: 'the apartment' },
                  { german: 'das Haus', english: 'the house' },
                  { german: 'das Zimmer', english: 'the room' },
                  { german: 'die Küche', english: 'the kitchen' },
                  { german: 'das Bad / Badezimmer', english: 'the bathroom' },
                  { german: 'das Wohnzimmer', english: 'the living room' },
                  { german: 'das Schlafzimmer', english: 'the bedroom' },
                  { german: 'der Tisch', english: 'the table' },
                  { german: 'der Stuhl', english: 'the chair' },
                  { german: 'das Bett', english: 'the bed' },
                  { german: 'der Schrank', english: 'the cupboard' },
                  { german: 'das Sofa', english: 'the sofa' },
                  { german: 'der Balkon', english: 'the balcony' },
                  { german: 'der Garten', english: 'the garden' },
                  // Zeit & Kalender
                  { german: 'die Zeit', english: 'the time' },
                  { german: 'die Uhr', english: 'the clock' },
                  { german: 'Wie spät ist es?', english: 'What time is it?' },
                  { german: 'die Stunde', english: 'the hour' },
                  { german: 'die Minute', english: 'the minute' },
                  { german: 'der Tag', english: 'the day' },
                  { german: 'die Woche', english: 'the week' },
                  { german: 'der Monat', english: 'the month' },
                  { german: 'das Jahr', english: 'the year' },
                  { german: 'der Montag', english: 'Monday' },
                  { german: 'der Dienstag', english: 'Tuesday' },
                  { german: 'der Mittwoch', english: 'Wednesday' },
                  { german: 'der Donnerstag', english: 'Thursday' },
                  { german: 'der Freitag', english: 'Friday' },
                  { german: 'der Samstag', english: 'Saturday' },
                  { german: 'der Sonntag', english: 'Sunday' },
                  { german: 'das Wochenende', english: 'the weekend' },
                  { german: 'heute', english: 'today' },
                  { german: 'morgen', english: 'tomorrow' },
                  { german: 'gestern', english: 'yesterday' },
                  // Verkehr & Reisen
                  { german: 'der Bahnhof', english: 'the train station' },
                  { german: 'der Flughafen', english: 'the airport' },
                  { german: 'der Zug', english: 'the train' },
                  { german: 'der Bus', english: 'the bus' },
                  { german: 'die U-Bahn', english: 'the subway' },
                  { german: 'die S-Bahn', english: 'the suburban train' },
                  { german: 'das Auto', english: 'the car' },
                  { german: 'das Fahrrad', english: 'the bicycle' },
                  { german: 'fahren', english: 'to drive/travel' },
                  { german: 'fliegen', english: 'to fly' },
                  { german: 'gehen', english: 'to go/walk' },
                  { german: 'die Fahrkarte', english: 'the ticket' },
                  { german: 'das Gleis', english: 'the platform' },
                  { german: 'die Haltestelle', english: 'the bus/tram stop' },
                  { german: 'der Koffer', english: 'the suitcase' },
                  { german: 'der Urlaub', english: 'the vacation' },
                  { german: 'das Hotel', english: 'the hotel' },
                  // Fragewörter
                  { german: 'Wer?', english: 'Who?' },
                  { german: 'Was?', english: 'What?' },
                  { german: 'Wo?', english: 'Where? (location)' },
                  { german: 'Wohin?', english: 'Where to? (direction)' },
                  { german: 'Woher?', english: 'Where from?' },
                  { german: 'Wann?', english: 'When?' },
                  { german: 'Wie?', english: 'How?' },
                  { german: 'Warum?', english: 'Why?' },
                  { german: 'Wie viel?', english: 'How much?' },
                  { german: 'Wie viele?', english: 'How many?' },
                  // Sonstige
                  { german: 'bitte', english: 'please / you\'re welcome' },
                  { german: 'danke', english: 'thank you' },
                  { german: 'ja', english: 'yes' },
                  { german: 'nein', english: 'no' },
                  { german: 'Entschuldigung', english: 'excuse me' },
              ]
            },

            // --- GRAMMATIK (100+ Questions) ---
            {
              id: 'g-a1-l3-g1',
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A1 (100+)',
              content: 'Testen Sie Ihr Grammatikwissen für die A1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Personalpronomen & sein/haben
                { id: 'g-a1g1q001', text: 'Wie ___ Ihr Name?', options: ['ist', 'bin', 'sind'], correctAnswer: 'ist' },
                { id: 'g-a1g1q002', text: 'Ich ___ aus Italien.', options: ['komme', 'kommt', 'kommen'], correctAnswer: 'komme' },
                { id: 'g-a1g1q003', text: '___ alt bist du?', options: ['Wie', 'Was', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q004', text: 'Wir ___ Freunde.', options: ['ist', 'sind', 'bin'], correctAnswer: 'sind' },
                { id: 'g-a1g1q005', text: 'Er ___ ein Auto.', options: ['habe', 'hast', 'hat'], correctAnswer: 'hat' },
                { id: 'g-a1g1q006', text: '___ ihr müde?', options: ['Sind', 'Seid', 'Ist'], correctAnswer: 'Seid' },
                { id: 'g-a1g1q007', text: 'Was sind ___ von Beruf?', options: ['du', 'er', 'Sie'], correctAnswer: 'Sie' },
                { id: 'g-a1g1q008', text: 'Ich ___ einen Hund. (haben)', options: ['habe', 'hast', 'hat'], correctAnswer: 'habe' },
                { id: 'g-a1g1q009', text: 'Du ___ Student. (sein)', options: ['bin', 'bist', 'ist'], correctAnswer: 'bist' },
                { id: 'g-a1g1q010', text: 'Sie (pl.) ___ Kinder. (haben)', options: ['hat', 'habt', 'haben'], correctAnswer: 'haben' },
                // W-Fragen
                { id: 'g-a1g1q011', text: '___ sprichst du?', options: ['Was', 'Wer', 'Wo'], correctAnswer: 'Was' },
                { id: 'g-a1g1q012', text: '___ wohnt er?', options: ['Wo', 'Was', 'Wie'], correctAnswer: 'Wo' },
                { id: 'g-a1g1q013', text: '___ kommt der Zug an?', options: ['Wann', 'Wer', 'Was'], correctAnswer: 'Wann' },
                { id: 'g-a1g1q014', text: '___ kostet der Pullover?', options: ['Was', 'Wie viel', 'Wer'], correctAnswer: 'Wie viel' },
                { id: 'g-a1g1q015', text: '___ ist das? - Das ist mein Bruder.', options: ['Was', 'Wer', 'Wie'], correctAnswer: 'Wer' },
                { id: 'g-a1g1q016', text: '___ kommst du? - Aus Polen.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Woher' },
                { id: 'g-a1g1q017', text: '___ geht es Ihnen?', options: ['Was', 'Wie', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q018', text: '___ ist dein Hobby?', options: ['Was', 'Wer', 'Wann'], correctAnswer: 'Was' },
                { id: 'g-a1g1q019', text: '___ fährst du? - Nach Berlin.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Wohin' },
                { id: 'g-a1g1q020', text: '___ heißt du?', options: ['Wer', 'Wie', 'Was'], correctAnswer: 'Wie' },
                // Artikel: Nominativ
                { id: 'g-a1g1q021', text: 'Das ist ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q022', text: 'Das ist ___ Frau. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q023', text: 'Hier ist ___ Stift. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q024', text: 'Wo ist ___ Bahnhof?', options: ['der', 'die', 'das'], correctAnswer: 'der' },
                { id: 'g-a1g1q025', text: '___ Kind spielt.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Das' },
                { id: 'g-a1g1q026', text: '___ Tasche ist neu.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q027', text: 'Ist das ___ Auto? (neutral)', options: ['ein', 'eine', 'einer'], correctAnswer: 'ein' },
                { id: 'g-a1g1q028', text: '___ Sonne scheint.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q029', text: '___ Mann lacht.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Der' },
                { id: 'g-a1g1q030', text: 'Das sind ___ Bücher. (plural)', options: ['die', 'das', 'der'], correctAnswer: 'die' },
                // Artikel: Akkusativ
                { id: 'g-a1g1q031', text: 'Ich habe ___ Schwester. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q032', text: 'Er kauft ___ Apfel. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q033', text: 'Sie liest ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q034', text: 'Ich nehme ___ Bus zur Arbeit.', options: ['der', 'die', 'den'], correctAnswer: 'den' },
                { id: 'g-a1g1q035', text: 'Er findet ___ Schlüssel nicht.', options: ['der', 'den', 'dem'], correctAnswer: 'den' },
                { id: 'g-a1g1q036', text: 'Sie sucht ___ Brille.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q037', text: 'Wir brauchen ___ Auto.', options: ['der', 'die', 'das'], correctAnswer: 'das' },
                { id: 'g-a1g1q038', text: 'Ich esse ___ Banane.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q039', text: 'Er hat ___ Hund. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q040', text: 'Siehst du ___ Mann dort?', options: ['der', 'dem', 'den'], correctAnswer: 'den' },
                // Verben: Präsens
                { id: 'g-a1g1q041', text: 'Wir ___ gern Kaffee.', options: ['trinke', 'trinkt', 'trinken'], correctAnswer: 'trinken' },
                { id: 'g-a1g1q042', text: 'Er ___ einen Brief.', options: ['schreibe', 'schreibst', 'schreibt'], correctAnswer: 'schreibt' },
                { id: 'g-a1g1q043', text: '___ (arbeiten) du heute?', options: ['Arbeitest', 'Arbeitet', 'Arbeite'], correctAnswer: 'Arbeitest' },
                { id: 'g-a1g1q044', text: 'Ihr ___ sehr nett.', options: ['sind', 'seid', 'ist'], correctAnswer: 'seid' },
                { id: 'g-a1f1q045', text: 'Die Kinder ___ im Garten.', options: ['spielt', 'spielen', 'spiele'], correctAnswer: 'spielen' },
                { id: 'g-a1g1q046', text: 'Ich ___ gern Musik.', options: ['höre', 'hörst', 'hört'], correctAnswer: 'höre' },
                { id: 'g-a1g1q047', text: 'Er ___ (heißen) Thomas.', options: ['heiße', 'heißt', 'heißen'], correctAnswer: 'heißt' },
                { id: 'g-a1g1q048', text: 'Ihr ___ (finden) den Weg.', options: ['finde', 'findet', 'finden'], correctAnswer: 'findet' },
                { id: 'g-a1G1q049', text: 'Frau Meier ___ in Berlin. (wohnen)', options: ['wohne', 'wohnst', 'wohnt'], correctAnswer: 'wohnt' },
                { id: 'g-a1g1q050', text: 'Du ___ sehr gut. (lernen)', options: ['lerne', 'lernst', 'lernt'], correctAnswer: 'lernst' },
                // Verben: Vokalwechsel
                { id: 'g-a1g1q051', text: 'Er ___ am Wochenende seine Freunde.', options: ['treffe', 'triffst', 'trifft'], correctAnswer: 'trifft' },
                { id: 'g-a1g1q052', text: '___ du Deutsch?', options: ['Sprechst', 'Sprichst', 'Sprecht'], correctAnswer: 'Sprichst' },
                { id: 'g-a1g1q053', text: 'Sie (she) ___ am Abend fern.', options: ['sehe', 'siehst', 'sieht'], correctAnswer: 'sieht' },
                { id: 'g-a1g1q054', text: 'Der Mann ___ dem Kind.', options: ['helft', 'hilft', 'helfe'], correctAnswer: 'hilft' },
                { id: 'g-a1g1q055', text: 'Du ___ zu schnell.', options: ['fährst', 'fährst', 'fahrt'], correctAnswer: 'fährst' },
                { id: 'g-a1g1q056', text: 'Er ___ ein Buch.', options: ['lest', 'liest', 'lese'], correctAnswer: 'liest' },
                { id: 'g-a1g1q057', text: 'Was ___ du heute? (essen)', options: ['isst', 'esst', 'esse'], correctAnswer: 'isst' },
                { id: 'g-a1g1q058', text: 'Er ___ den Ball. (nehmen)', options: ['nehmt', 'nimmst', 'nimmt'], correctAnswer: 'nimmt' },
                { id: 'g-a1g1q059', text: 'Der Vater ___ (schlafen) lange.', options: ['schläft', 'schläfst', 'schlafe'], correctAnswer: 'schläft' },
                { id: 'g-a1g1q060', text: '___ du gern? (lesen)', options: ['Liest', 'Lesst', 'Lese'], correctAnswer: 'Liest' },
                // Modalverben
                { id: 'g-a1g1q061', text: 'Ich kann ___ Deutsch sprechen.', options: ['gut', 'guten', 'gute'], correctAnswer: 'gut' },
                { id: 'g-a1g1q062', text: '___ du mir helfen?', options: ['Kannst', 'Kann', 'Können'], correctAnswer: 'Kannst' },
                { id: 'g-a1g1q063', text: 'Was möchten Sie ___?', options: ['trinken', 'trinkt', 'trinke'], correctAnswer: 'trinken' },
                { id: 'g-a1g1q064', text: 'Wir ___ heute nicht arbeiten.', options: ['muss', 'müssen', 'müsst'], correctAnswer: 'müssen' },
                { id: 'g-a1g1q065', text: 'Er ___ nicht schwimmen.', options: ['will', 'wollen', 'willst'], correctAnswer: 'will' },
                { id: 'g-a1g1q066', text: 'Ich ___ einen Kaffee trinken.', options: ['möchte', 'möchtest', 'möchten'], correctAnswer: 'möchte' },
                { id: 'g-a1g1q067', text: 'Ihr ___ leise sein!', options: ['muss', 'müsst', 'müssen'], correctAnswer: 'müsst' },
                { id: 'g-a1g1q068', text: 'Sie (she) ___ Auto fahren. (dürfen)', options: ['darf', 'darfst', 'dürfen'], correctAnswer: 'darf' },
                { id: 'g-a1g1q069', text: '___ ihr heute Abend kommen? (können)', options: ['Kann', 'Könnt', 'Können'], correctAnswer: 'Könnt' },
                { id: 'g-a1g1q070', text: 'Ich ___ das nicht. (wollen)', options: ['will', 'willst', 'wollen'], correctAnswer: 'will' },
                // Trennbare Verben
                { id: 'g-a1g1q071', text: 'Ich stehe um 7 Uhr ___ .', options: ['auf', 'an', 'zu'], correctAnswer: 'auf' },
                { id: 'g-a1g1q072', text: 'Wann fängt der Film ___?', options: ['an', 'auf', 'ein'], correctAnswer: 'an' },
                { id: 'g-a1g1q073', text: 'Er kauft im Supermarkt ___ .', options: ['an', 'ein', 'zu'], correctAnswer: 'ein' },
                { id: 'g-a1g1q074', text: 'Sie ruft ihre Freundin ___ .', options: ['an', 'auf', 'mit'], correctAnswer: 'an' },
                { id: 'g-a1g1q075', text: 'Bitte mach das Fenster ___!', options: ['an', 'auf', 'zu'], correctAnswer: 'zu' },
                { id: 'g-a1g1q076', text: 'Ich komme am Freitag ___ .', options: ['mit', 'an', 'ab'], correctAnswer: 'mit' },
                { id: 'g-a1g1q077', text: 'Er sieht am Abend ___ .', options: ['fern', 'an', 'weg'], correctAnswer: 'fern' },
                { id: 'g-a1g1q078', text: 'Der Unterricht fängt um 9 Uhr ___.', options: ['an', 'um', 'auf'], correctAnswer: 'an' },
                { id: 'g-a1g1q079', text: 'Kommst du ___? (mitkommen)', options: ['mit', 'an', 'zu'], correctAnswer: 'mit' },
                { id: 'g-a1g1q080', text: 'Wann stehst du ___? (aufstehen)', options: ['ab', 'an', 'auf'], correctAnswer: 'auf' },
                // Possessivartikel
                { id: 'g-a1g1q081', text: 'Das ist nicht ___ Auto. Das ist ihr Auto.', options: ['mein', 'meine', 'meinen'], correctAnswer: 'mein' },
                { id: 'g-a1g1q082', text: 'Was ist ___ Beruf? (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q083', text: 'Ich finde ___ Tasche schön. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1G1q084', text: 'Wo ist ___ Mann? (Sie, formal)', options: ['Ihr', 'Ihre', 'Ihren'], correctAnswer: 'Ihr' },
                { id: 'g-a1g1q085', text: 'Wir lieben ___ Kinder. (wir)', options: ['unser', 'unsere', 'unseren'], correctAnswer: 'unsere' },
                { id: 'g-a1g1q086', text: 'Er sucht ___ Schlüssel. (er)', options: ['sein', 'seine', 'seinen'], correctAnswer: 'seinen' },
                { id: 'g-a1g1q087', text: 'Das ist ___ Haus. (wir)', options: ['unser', 'unsere', 'unseres'], correctAnswer: 'unser' },
                { id: 'g-a1g1q088', text: 'Ich brauche ___ Buch. (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q089', text: 'Sie (she) liebt ___ Katze. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1g1q090', text: 'Das ist ___ (euer) Auto.', options: ['euer', 'eure', 'euren'], correctAnswer: 'euer' },
                // Negation (nicht / kein)
                { id: 'g-a1g1q091', text: 'Wir haben ___ Zeit.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'keine' },
                { id: 'g-a1g1q092', text: 'Ich habe ___ Hunger. (der)', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q093', text: 'Er ist ___ verheiratet.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q094', text: 'Das ist ___ Auto. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q095', text: 'Ich arbeite ___ .', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q096', text: 'Sie kauft ___ Brot.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q097', text: 'Ich trinke ___ Alkohol.', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q098', text: 'Der Film ist ___ gut.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q099', text: 'Das sind ___ meine Bücher.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q100', text: 'Er hat ___ Geld. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                // Akkusativ-Präpositionen
                { id: 'g-a1g1q101', text: 'Der Kaffee ist ___ dich.', options: ['für', 'mit', 'ohne'], correctAnswer: 'für' },
                { id: 'g-a1g1q102', text: 'Er geht ___ den Park.', options: ['durch', 'um', 'bis'], correctAnswer: 'durch' },
                { id: 'g-a1g1q103', text: 'Ich kann nicht ___ meinen Computer arbeiten.', options: ['ohne', 'für', 'gegen'], correctAnswer: 'ohne' },
                { id: 'g-a1g1q104', text: 'Wir fahren ___ die Stadt.', options: ['bis', 'um', 'ohne'], correctAnswer: 'um' },
                { id: 'g-a1g1q105', text: 'Das Geschenk ist ___ meinen Vater.', options: ['für', 'durch', 'gegen'], correctAnswer: 'für' },
              ]
            }
          ],
        },
//
// --- END OF g-a1-l3 ---
//
// ... (The rest of your GOETHE_DATA file, including the placeholders for g-a1-l4, g-a1-l5, etc.) ...
//

        
        {
          id: 'g-a1-l4',
          title: 'Modelltest 4: Gesamte Prüfung',
          estimatedTime: 65,
          isCompleted: false,
          activities: [
            // --- HÖREN (20 Dialogues/Questions) ---
            {
              id: 'g-a1-l4-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören kurze Alltagsgespräche (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Guten Tag, was darf es sein?' },
                { speaker: 'Person A', line: 'Ich hätte gern 500 Gramm Tomaten und ein Kilo Äpfel.' },
                { speaker: 'Kellner', line: 'Sonst noch etwas?' },
                { speaker: 'Person A', line: 'Nein, danke. Das ist alles.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2. Wie komme ich zum Alexanderplatz?' },
                { speaker: 'Person B', line: 'Nehmen Sie die U-Bahn, Linie 2. Das sind nur drei Stationen.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3. Ich habe Kopfschmerzen.' },
                { speaker: 'Person A', line: 'Oh, du Armer. Nimm doch eine Tablette und trink ein Glas Wasser.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4. Wann fliegst du nach Spanien?' },
                { speaker: 'Person B', line: 'Am Freitag. Mein Flug geht schon um 6 Uhr morgens.' },
                { speaker: 'Person A', line: 'Oh, so früh!' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5. Wie schmeckt der Kuchen?' },
                { speaker: 'Person A', line: 'Hm, super! Er ist sehr lecker. Hast du ihn selbst gebacken?' },
                { speaker: 'Person B', line: 'Ja, das Rezept ist von meiner Oma.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6. Ist das deine Jacke?' },
                { speaker: 'Person B', line: 'Nein, meine Jacke ist blau. Diese hier ist schwarz.' },
                { speaker: 'Ansage', line: '---' },
                 { speaker: 'Ansage', line: 'Nummer 7. Wie lange dauert der Film?' },
                { speaker: 'Person A', line: 'Ich glaube, zwei Stunden. Von 20 Uhr bis 22 Uhr.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 8. Wo ist Herr Schmidt?' },
                { speaker: 'Person B', line: 'Er ist in einer Besprechung. Er kommt um 11 Uhr zurück.' },
              ],
              questions: [
                { id: 'g-a1h4q1', text: 'Was kauft die Person?', options: ['a) 500g Äpfel und 1kg Tomaten', 'b) 500g Tomaten und 1kg Äpfel', 'c) Nur Tomaten'], correctAnswer: 'b) 500g Tomaten und 1kg Äpfel' },
                { id: 'g-a1h4q2', text: 'Wie kommt man zum Alexanderplatz?', options: ['a) Mit der U-Bahn', 'b) Mit dem Bus', 'c) Zu Fuß'], correctAnswer: 'a) Mit der U-Bahn' },
                { id: 'g-a1h4q3', text: 'Was soll die Person tun?', options: ['a) Zum Arzt gehen', 'b) Schlafen gehen', 'c) Eine Tablette nehmen'], correctAnswer: 'c) Eine Tablette nehmen' },
                { id: 'g-a1h4q4', text: 'Wann fliegt die Person?', options: ['a) Um 6 Uhr abends', 'b) Am Samstagmorgen', 'c) Um 6 Uhr morgens'], correctAnswer: 'c) Um 6 Uhr morgens' },
                { id: 'g-a1h4q5', text: 'Von wem ist das Rezept?', options: ['a) Von Person A', 'b) Von der Mutter', 'c) Von der Großmutter'], correctAnswer: 'c) Von der Großmutter' },
                { id: 'g-a1h4q6', text: 'Welche Farbe hat die Jacke der Person?', options: ['a) Schwarz', 'b) Blau', 'c) Es ist keine Jacke'], correctAnswer: 'b) Blau' },
                { id: 'g-a1h4q7', text: 'Wie lange dauert der Film?', options: ['a) 2 Stunden', 'b) 3 Stunden', 'c) 20 Stunden'], correctAnswer: 'a) 2 Stunden' },
                { id: 'g-a1h4q8', text: 'Wann ist Herr Schmidt zurück?', options: ['a) Um 10 Uhr', 'b) Um 11 Uhr', 'c) Er ist schon da'], correctAnswer: 'b) Um 11 Uhr' },
              ]
            },
            {
              id: 'g-a1-l4-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (6 Fragen)',
              content: 'Sie hören Durchsagen in der Bahn oder im Radio (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Ansage 1', line: 'Nächster Halt: Hauptbahnhof. Endstation. Bitte alle aussteigen. Übergang zur U-Bahn und S-Bahn.' },
                { speaker: 'Ansage 2', line: 'Achtung, eine Information für die Passagiere nach Frankfurt. Der Flug LH 405 hat 30 Minuten Verspätung. Neuer Abflug um 12:00 Uhr.' },
                { speaker: 'Ansage 3', line: 'Sehr geehrte Kunden, willkommen bei Möbel-Kraft. Heute haben wir ein besonderes Angebot: Alle Sofas 25% billiger! Nur heute!' },
                { speaker: 'Ansage 4', line: 'Und nun das Wetter: Am Nachmittag Regen und starke Gewitter im Westen. Im Osten bleibt es trocken.' },
                { speaker: 'Ansage 5', line: 'Verehrte Fahrgäste, in Kürze erreichen wir Köln Hauptbahnhof. Der Speisewagen befindet sich in der Mitte des Zuges.' },
                { speaker: 'Ansage 6', line: 'Liebe Besucher, die Vorstellung im Planetarium beginnt in 5 Minuten. Bitte nehmen Sie Ihre Plätze ein.' },
              ],
              questions: [
                { id: 'g-a1h2q1_4', text: 'Man kann am Hauptbahnhof in die S-Bahn umsteigen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1h2q2_4', text: 'Der Flug nach Frankfurt fliegt früher ab.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q3_4', text: 'Die Sofas sind diese Woche 25% billiger.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q4_4', text: 'Im Westen regnet es.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1h2q5_4', text: 'Man kann im Zug essen gehen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1h2q6_4', text: 'Die Vorstellung beginnt in 15 Minuten.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-a1-l4-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören Nachrichten auf dem Anrufbeantworter (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1.' },
                { speaker: 'Anrufbeantworter 1', line: 'Hallo Maria, hier ist Anna. Ich rufe wegen Samstag an. Ich kann leider nicht mit ins Kino kommen, ich muss arbeiten. Gehen wir am Sonntag?' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2.' },
                { speaker: 'Anrufbeantworter 2', line: 'Guten Tag, hier ist die Bibliothek. Das Buch "Deutsch lernen" ist da. Sie können es ab heute abholen. Bitte bringen Sie Ihren Ausweis mit.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3.' },
                { speaker: 'Anrufbeantworter 3', line: 'Hi Papa, hier ist Lisa. Ich bin noch bei Sandra. Wir machen Hausaufgaben. Ich komme um 18 Uhr zum Abendessen. Kannst du bitte Mama sagen?' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4.' },
                { speaker: 'Anrufbeantworter 4', line: 'Guten Tag, Herr Weiß. Hier ist die Firma "Sauber". Der Handwerker kann morgen nicht um 10 Uhr kommen. Geht es auch um 14 Uhr?' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5.' },
                { speaker: 'Anrufbeantworter 5', line: 'Hallo Frau Richter, hier ist das Reisebüro. Wir haben ein tolles Angebot für Sie für einen Urlaub in der Türkei. Bitte rufen Sie uns zurück.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6.' },
                { speaker: 'Anrufbeantworter 6', line: 'Hallo Tom, hier ist Ben. Mein Drucker ist kaputt. Kann ich heute Abend zu dir kommen und 5 Seiten drucken? Es ist für die Uni. Danke!' },
              ],
              questions: [
                { id: 'g-a1h3q1_4', text: 'Warum ruft Anna an?', options: ['a) Sie will am Samstag ins Kino.', 'b) Sie schlägt Sonntag für das Kino vor.', 'c) Sie will am Samstag arbeiten.'], correctAnswer: 'b) Sie schlägt Sonntag für das Kino vor.' },
                { id: 'g-a1h3q2_4', text: 'Was soll die Person mitbringen?', options: ['a) Das Buch "Deutsch lernen"', 'b) Einen Ausweis', 'c) Geld'], correctAnswer: 'b) Einen Ausweis' },
                { id: 'g-a1h3q3_4', text: 'Wann kommt Lisa nach Hause?', options: ['a) Um 16 Uhr', 'b) Um 18 Uhr', 'c) Sie macht keine Hausaufgaben'], correctAnswer: 'b) Um 18 Uhr' },
                { id: 'g-a1h3q4_4', text: 'Wann soll der Handwerker kommen?', options: ['a) Um 10 Uhr', 'b) Um 14 Uhr', 'c) Er kommt nicht'], correctAnswer: 'b) Um 14 Uhr' },
                { id: 'g-a1h3q5_4', text: 'Warum ruft das Reisebüro an?', options: ['a) Wegen einer Rechnung', 'b) Wegen eines Urlaubsangebots', 'c) Wegen der Türkei'], correctAnswer: 'b) Wegen eines Urlaubsangebots' },
                { id: 'g-a1h3q6_4', text: 'Was möchte Ben?', options: ['a) Er möchte Toms Drucker reparieren.', 'b) Er möchte etwas ausdrucken.', 'c) Er möchte zur Uni gehen.'], correctAnswer: 'b) Er möchte etwas ausdrucken.' },
              ]
            },

            // --- LESEN (Long reading + questions) ---
            {
              id: 'g-a1-l4-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1: E-Mails verstehen',
              content: 'Lesen Sie die beiden E-Mails und entscheiden Sie: Richtig oder Falsch.\n\n**E-Mail 1**\nHallo Jan,\nbist du am Wochenende in der Stadt? Ich möchte am Samstag mein neues Auto abholen. Es ist in der Werkstatt in der Goethestraße. Kannst du vielleicht mitkommen? Danach können wir einen Kaffee trinken.\nViele Grüße,\nTim\n\n**E-Mail 2**\nLiebe Kursteilnehmer,\nnächste Woche, am Montag, den 12.08., fällt der Deutschkurs leider aus. Der Raum ist wegen einer Veranstaltung belegt. Der Kurs findet stattdessen am Dienstag, den 13.08., zur gleichen Zeit statt.\nViele Grüße,\nIhr Sekretariat',
              questions: [
                { id: 'g-a1r1q1_4', text: 'E-Mail 1: Tim möchte ein neues Auto kaufen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r1q2_4', text: 'E-Mail 1: Tim möchte Jan am Samstag treffen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1r1q3_4', text: 'E-Mail 2: Der Deutschkurs findet am 12.08. nicht statt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1r1q4_4', text: 'E-Mail 2: Der Kurs findet am Dienstag zu einer neuen Zeit statt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-a1-l4-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2: Anzeigen lesen',
              content: 'Lesen Sie die Anzeigen. Welche Anzeige passt zu welcher Situation?\n\n**Situation 1:** Sie suchen eine kleine, billige Wohnung für sich allein.\n**Situation 2:** Sie möchten Deutsch lernen, haben aber nur abends Zeit.\n\n**Anzeige A**\n**Wohnungsmarkt**\nGroße Familienwohnung! 5 Zimmer, 120 qm, Garten, Balkon. Sehr ruhig. 1500 € Kaltmiete. Ab sofort.\n\n**Anzeige B**\n**Sprachschule "Dialog"**\nDeutsch-Intensivkurse. A1-C1. Jeden Tag von 9-13 Uhr. 4 Wochen nur 450 €.\n\n**Anzeige C**\n**Wohnung zu vermieten**\nSchönes 1-Zimmer-Appartement, 30 qm, mit kleiner Küche und Bad. Ideal für Studenten. Nur 350 € warm. Ab 1. September.\n\n**Anzeige D**\n**Abendkurse Deutsch**\nLernen Sie Deutsch nach der Arbeit! Unsere Kurse: Mo & Mi, 18:30 - 20:30 Uhr. Alle Niveaus. Start: 1. Oktober.',
              questions: [
                { id: 'g-a1r2q1_4', text: 'Situation 1: Kleine, billige Wohnung.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige C' },
                { id: 'g-a1r2q2_4', text: 'Situation 2: Deutschkurs am Abend.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige D' },
              ]
            },
            {
              id: 'g-a1-l4-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3: Schilder und Notizen',
              content: 'Lesen Sie die Schilder und Notizen. Kreuzen Sie an: Richtig oder Falsch.\n\n**Text 1: Im Bus**\nBitte keine Speisen und Getränke im Bus. Das Essen und Trinken ist verboten.\n\n**Text 2: Am Bahnhof**\nGleis 7: Bitte nicht einsteigen! Dieser Zug fährt in die Reparatur und nicht nach Hamburg.\n\n**Text 3: Notiz im Supermarkt**\nLiebe Kunden, von 14 bis 15 Uhr ist Kasse 3 wegen einer Pause geschlossen. Bitte benutzen Sie Kasse 1 und 2.',
              questions: [
                { id: 'g-a1r3q1_4', text: 'Text 1: Man darf im Bus essen und trinken.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r3q2_4', text: 'Text 2: Der Zug auf Gleis 7 fährt nach Hamburg.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r3q3_4', text: 'Text 3: Kasse 3 ist um 14:30 Uhr geöffnet.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },

            // --- SCHREIBEN ---
            {
              id: 'g-a1-l4-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Formular ausfüllen',
              content: 'Sie möchten sich in einer neuen Stadt anmelden (Anmeldung). Füllen Sie das Formular im Bürgeramt aus.\n\n**Anmeldung bei der Meldebehörde**\n1. Familienname: __________\n2. Vorname: __________\n3. Geburtsdatum: __________\n4. Alte Adresse (Straße, Hausnr., PLZ, Ort): __________\n5. Neue Adresse (Straße, Hausnr., PLZ, Ort): __________\n\nSchreiben Sie Ihre persönlichen Antworten in ein Textfeld.',
            },
            {
              id: 'g-a1-l4-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Kurze E-Mail',
              content: 'Schreiben Sie eine kurze E-Mail (ca. 30 Wörter).\n\nSie hatten einen Termin bei Ihrem Friseur, "Haar-Studio", aber Sie waren krank und konnten nicht kommen.\n- Entschuldigen Sie sich.\n- Sagen Sie, warum Sie nicht da waren (krank).\n- Bitten Sie um einen neuen Termin für nächste Woche.',
            },

            // --- SPRECHEN ---
            {
              id: 'g-a1-l4-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Sich vorstellen',
              content: 'Stellen Sie sich vor. Sagen Sie: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobbys. Starten Sie die Konversationsübung, um dies zu üben.'
            },
            {
              id: 'g-a1-l4-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Fragen stellen (Thema: Reisen)',
              content: 'Sie bekommen eine Karte mit einem Wort, z.B. "Urlaub". Stellen Sie Ihrem Partner eine Frage dazu (z.B. "Wohin fährst du gern in den Urlaub?"). Üben Sie, Fragen zu verschiedenen Themen zu stellen.'
            },
            {
              id: 'g-a1-l4-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Bitten formulieren (Thema: Im Hotel)',
              content: 'Sie bekommen eine Karte mit einem Bild, z.B. ein Handtuch. Formulieren Sie eine Bitte (z.B. "Können Sie mir bitte ein Handtuch bringen?"). Üben Sie, höfliche Bitten zu formulieren.'
            },
            
            // --- WÖRTSCHATZ (100+ Vocab) ---
            {
              id: 'g-a1-l4-v1',
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A1 (100+)',
              content: 'Wichtige Wörter für die A1-Prüfung, sortiert nach Themen.',
              vocabulary: [
                  // Sich vorstellen
                  { german: 'der Name', english: 'the name' },
                  { german: 'heißen', english: 'to be called' },
                  { german: 'der Vorname', english: 'the first name' },
                  { german: 'der Familienname', english: 'the family name' },
                  { german: 'kommen aus', english: 'to come from' },
                  { german: 'das Land', english: 'the country' },
                  { german: 'wohnen', english: 'to live' },
                  { german: 'der Wohnort', english: 'the place of residence' },
                  { german: 'sprechen', english: 'to speak' },
                  { german: 'die Sprache', english: 'the language' },
                  { german: 'der Beruf', english: 'the profession' },
                  { german: 'was sind Sie von Beruf?', english: 'what is your job?' },
                  { german: 'das Hobby', english: 'the hobby' },
                  { german: 'das Alter', english: 'the age' },
                  { german: 'alt', english: 'old' },
                  { german: 'buchstabieren', english: 'to spell' },
                  // Familie
                  { german: 'die Familie', english: 'the family' },
                  { german: 'die Mutter', english: 'the mother' },
                  { german: 'der Vater', english: 'the father' },
                  { german: 'die Eltern', english: 'the parents' },
                  { german: 'der Sohn', english: 'the son' },
                  { german: 'die Tochter', english: 'the daughter' },
                  { german: 'der Bruder', english: 'the brother' },
                  { german: 'die Schwester', english: 'the sister' },
                  { german: 'die Geschwister', english: 'the siblings' },
                  { german: 'der Großvater (Opa)', english: 'the grandfather (grandpa)' },
                  { german: 'die Großmutter (Oma)', english: 'the grandmother (grandma)' },
                  { german: 'die Großeltern', english: 'the grandparents' },
                  { german: 'verheiratet', english: 'married' },
                  { german: 'ledig', english: 'single' },
                  { german: 'das Kind', english: 'the child' },
                  // Essen & Trinken
                  { german: 'das Essen', english: 'the food' },
                  { german: 'das Trinken', english: 'the drink' },
                  { german: 'das Frühstück', english: 'the breakfast' },
                  { german: 'das Mittagessen', english: 'the lunch' },
                  { german: 'das Abendessen', english: 'the dinner' },
                  { german: 'essen', english: 'to eat' },
                  { german: 'trinken', english: 'to drink' },
                  { german: 'das Brot', english: 'the bread' },
                  { german: 'die Butter', english: 'the butter' },
                  { german: 'der Käse', english: 'the cheese' },
                  { german: 'die Wurst', english: 'the sausage' },
                  { german: 'das Obst', english: 'the fruit' },
                  { german: 'der Apfel', english: 'the apple' },
                  { german: 'die Banane', english: 'the banana' },
                  { german: 'das Gemüse', english: 'the vegetable' },
                  { german: 'die Tomate', english: 'the tomato' },
                  { german: 'die Kartoffel', english: 'the potato' },
                  { german: 'das Fleisch', english: 'the meat' },
                  { german: 'der Fisch', english: 'the fish' },
                  { german: 'das Wasser', english: 'the water' },
                  { german: 'der Saft', english: 'the juice' },
                  { german: 'der Kaffee', english: 'the coffee' },
                  { german: 'der Tee', english: 'the tea' },
                  { german: 'die Milch', english: 'the milk' },
                  { german: 'der Zucker', english: 'the sugar' },
                  { german: 'Hunger haben', english: 'to be hungry' },
                  { german: 'Durst haben', english: 'to be thirsty' },
                  { german: 'mögen', english: 'to like' },
                  // Einkaufen
                  { german: 'kaufen', english: 'to buy' },
                  { german: 'der Supermarkt', english: 'the supermarket' },
                  { german: 'der Markt', english: 'the market' },
                  { german: 'bezahlen', english: 'to pay' },
                  { german: 'der Preis', english: 'the price' },
                  { german: 'kosten', english: 'to cost' },
                  { german: 'das Geld', english: 'the money' },
                  { german: 'der Euro', english: 'the euro' },
                  { german: 'das Angebot', english: 'the special offer' },
                  { german: 'billig', english: 'cheap' },
                  { german: 'teuer', english: 'expensive' },
                  // Wohnen
                  { german: 'die Wohnung', english: 'the apartment' },
                  { german: 'das Haus', english: 'the house' },
                  { german: 'das Zimmer', english: 'the room' },
                  { german: 'die Küche', english: 'the kitchen' },
                  { german: 'das Bad / Badezimmer', english: 'the bathroom' },
                  { german: 'das Wohnzimmer', english: 'the living room' },
                  { german: 'das Schlafzimmer', english: 'the bedroom' },
                  { german: 'der Tisch', english: 'the table' },
                  { german: 'der Stuhl', english: 'the chair' },
                  { german: 'das Bett', english: 'the bed' },
                  { german: 'der Schrank', english: 'the cupboard' },
                  { german: 'das Sofa', english: 'the sofa' },
                  { german: 'der Balkon', english: 'the balcony' },
                  { german: 'der Garten', english: 'the garden' },
                  // Zeit & Kalender
                  { german: 'die Zeit', english: 'the time' },
                  { german: 'die Uhr', english: 'the clock' },
                  { german: 'Wie spät ist es?', english: 'What time is it?' },
                  { german: 'die Stunde', english: 'the hour' },
                  { german: 'die Minute', english: 'the minute' },
                  { german: 'der Tag', english: 'the day' },
                  { german: 'die Woche', english: 'the week' },
                  { german: 'der Monat', english: 'the month' },
                  { german: 'das Jahr', english: 'the year' },
                  { german: 'der Montag', english: 'Monday' },
                  { german: 'der Dienstag', english: 'Tuesday' },
                  { german: 'der Mittwoch', english: 'Wednesday' },
                  { german: 'der Donnerstag', english: 'Thursday' },
                  { german: 'der Freitag', english: 'Friday' },
                  { german: 'der Samstag', english: 'Saturday' },
                  { german: 'der Sonntag', english: 'Sunday' },
                  { german: 'das Wochenende', english: 'the weekend' },
                  { german: 'heute', english: 'today' },
                  { german: 'morgen', english: 'tomorrow' },
                  { german: 'gestern', english: 'yesterday' },
                  // Verkehr & Reisen
                  { german: 'der Bahnhof', english: 'the train station' },
                  { german: 'der Flughafen', english: 'the airport' },
                  { german: 'der Zug', english: 'the train' },
                  { german: 'der Bus', english: 'the bus' },
                  { german: 'die U-Bahn', english: 'the subway' },
                  { german: 'die S-Bahn', english: 'the suburban train' },
                  { german: 'das Auto', english: 'the car' },
                  { german: 'das Fahrrad', english: 'the bicycle' },
                  { german: 'fahren', english: 'to drive/travel' },
                  { german: 'fliegen', english: 'to fly' },
                  { german: 'gehen', english: 'to go/walk' },
                  { german: 'die Fahrkarte', english: 'the ticket' },
                  { german: 'das Gleis', english: 'the platform' },
                  { german: 'die Haltestelle', english: 'the bus/tram stop' },
                  { german: 'der Koffer', english: 'the suitcase' },
                  { german: 'der Urlaub', english: 'the vacation' },
                  { german: 'das Hotel', english: 'the hotel' },
                  // Fragewörter
                  { german: 'Wer?', english: 'Who?' },
                  { german: 'Was?', english: 'What?' },
                  { german: 'Wo?', english: 'Where? (location)' },
                  { german: 'Wohin?', english: 'Where to? (direction)' },
                  { german: 'Woher?', english: 'Where from?' },
                  { german: 'Wann?', english: 'When?' },
                  { german: 'Wie?', english: 'How?' },
                  { german: 'Warum?', english: 'Why?' },
                  { german: 'Wie viel?', english: 'How much?' },
                  { german: 'Wie viele?', english: 'How many?' },
                  // Sonstige
                  { german: 'bitte', english: 'please / you\'re welcome' },
                  { german: 'danke', english: 'thank you' },
                  { german: 'ja', english: 'yes' },
                  { german: 'nein', english: 'no' },
                  { german: 'Entschuldigung', english: 'excuse me' },
              ]
            },

            // --- GRAMMATIK (100+ Questions) ---
            {
              id: 'g-a1-l4-g1',
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A1 (100+)',
              content: 'Testen Sie Ihr Grammatikwissen für die A1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Personalpronomen & sein/haben
                { id: 'g-a1g1q001', text: 'Wie ___ Ihr Name?', options: ['ist', 'bin', 'sind'], correctAnswer: 'ist' },
                { id: 'g-a1g1q002', text: 'Ich ___ aus Italien.', options: ['komme', 'kommt', 'kommen'], correctAnswer: 'komme' },
                { id: 'g-a1g1q003', text: '___ alt bist du?', options: ['Wie', 'Was', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q004', text: 'Wir ___ Freunde.', options: ['ist', 'sind', 'bin'], correctAnswer: 'sind' },
                { id: 'g-a1g1q005', text: 'Er ___ ein Auto.', options: ['habe', 'hast', 'hat'], correctAnswer: 'hat' },
                { id: 'g-a1g1q006', text: '___ ihr müde?', options: ['Sind', 'Seid', 'Ist'], correctAnswer: 'Seid' },
                { id: 'g-a1g1q007', text: 'Was sind ___ von Beruf?', options: ['du', 'er', 'Sie'], correctAnswer: 'Sie' },
                { id: 'g-a1g1q008', text: 'Ich ___ einen Hund. (haben)', options: ['habe', 'hast', 'hat'], correctAnswer: 'habe' },
                { id: 'g-a1g1q009', text: 'Du ___ Student. (sein)', options: ['bin', 'bist', 'ist'], correctAnswer: 'bist' },
                { id: 'g-a1g1q010', text: 'Sie (pl.) ___ Kinder. (haben)', options: ['hat', 'habt', 'haben'], correctAnswer: 'haben' },
                // W-Fragen
                { id: 'g-a1g1q011', text: '___ sprichst du?', options: ['Was', 'Wer', 'Wo'], correctAnswer: 'Was' },
                { id: 'g-a1g1q012', text: '___ wohnt er?', options: ['Wo', 'Was', 'Wie'], correctAnswer: 'Wo' },
                { id: 'g-a1g1q013', text: '___ kommt der Zug an?', options: ['Wann', 'Wer', 'Was'], correctAnswer: 'Wann' },
                { id: 'g-a1g1q014', text: '___ kostet der Pullover?', options: ['Was', 'Wie viel', 'Wer'], correctAnswer: 'Wie viel' },
                { id: 'g-a1g1q015', text: '___ ist das? - Das ist mein Bruder.', options: ['Was', 'Wer', 'Wie'], correctAnswer: 'Wer' },
                { id: 'g-a1g1q016', text: '___ kommst du? - Aus Polen.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Woher' },
                { id: 'g-a1g1q017', text: '___ geht es Ihnen?', options: ['Was', 'Wie', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q018', text: '___ ist dein Hobby?', options: ['Was', 'Wer', 'Wann'], correctAnswer: 'Was' },
                { id: 'g-a1g1q019', text: '___ fährst du? - Nach Berlin.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Wohin' },
                { id: 'g-a1g1q020', text: '___ heißt du?', options: ['Wer', 'Wie', 'Was'], correctAnswer: 'Wie' },
                // Artikel: Nominativ
                { id: 'g-a1g1q021', text: 'Das ist ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q022', text: 'Das ist ___ Frau. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q023', text: 'Hier ist ___ Stift. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q024', text: 'Wo ist ___ Bahnhof?', options: ['der', 'die', 'das'], correctAnswer: 'der' },
                { id: 'g-a1g1q025', text: '___ Kind spielt.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Das' },
                { id: 'g-a1g1q026', text: '___ Tasche ist neu.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q027', text: 'Ist das ___ Auto? (neutral)', options: ['ein', 'eine', 'einer'], correctAnswer: 'ein' },
                { id: 'g-a1g1q028', text: '___ Sonne scheint.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q029', text: '___ Mann lacht.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Der' },
                { id: 'g-a1g1q030', text: 'Das sind ___ Bücher. (plural)', options: ['die', 'das', 'der'], correctAnswer: 'die' },
                // Artikel: Akkusativ
                { id: 'g-a1g1q031', text: 'Ich habe ___ Schwester. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q032', text: 'Er kauft ___ Apfel. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q033', text: 'Sie liest ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q034', text: 'Ich nehme ___ Bus zur Arbeit.', options: ['der', 'die', 'den'], correctAnswer: 'den' },
                { id: 'g-a1g1q035', text: 'Er findet ___ Schlüssel nicht.', options: ['der', 'den', 'dem'], correctAnswer: 'den' },
                { id: 'g-a1g1q036', text: 'Sie sucht ___ Brille.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q037', text: 'Wir brauchen ___ Auto.', options: ['der', 'die', 'das'], correctAnswer: 'das' },
                { id: 'g-a1g1q038', text: 'Ich esse ___ Banane.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q039', text: 'Er hat ___ Hund. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q040', text: 'Siehst du ___ Mann dort?', options: ['der', 'dem', 'den'], correctAnswer: 'den' },
                // Verben: Präsens
                { id: 'g-a1g1q041', text: 'Wir ___ gern Kaffee.', options: ['trinke', 'trinkt', 'trinken'], correctAnswer: 'trinken' },
                { id: 'g-a1g1q042', text: 'Er ___ einen Brief.', options: ['schreibe', 'schreibst', 'schreibt'], correctAnswer: 'schreibt' },
                { id: 'g-a1g1q043', text: '___ (arbeiten) du heute?', options: ['Arbeitest', 'Arbeitet', 'Arbeite'], correctAnswer: 'Arbeitest' },
                { id: 'g-a1g1q044', text: 'Ihr ___ sehr nett.', options: ['sind', 'seid', 'ist'], correctAnswer: 'seid' },
                { id: 'g-a1f1q045', text: 'Die Kinder ___ im Garten.', options: ['spielt', 'spielen', 'spiele'], correctAnswer: 'spielen' },
                { id: 'g-a1g1q046', text: 'Ich ___ gern Musik.', options: ['höre', 'hörst', 'hört'], correctAnswer: 'höre' },
                { id: 'g-a1g1q047', text: 'Er ___ (heißen) Thomas.', options: ['heiße', 'heißt', 'heißen'], correctAnswer: 'heißt' },
                { id: 'g-a1g1q048', text: 'Ihr ___ (finden) den Weg.', options: ['finde', 'findet', 'finden'], correctAnswer: 'findet' },
                { id: 'g-a1G1q049', text: 'Frau Meier ___ in Berlin. (wohnen)', options: ['wohne', 'wohnst', 'wohnt'], correctAnswer: 'wohnt' },
                { id: 'g-a1g1q050', text: 'Du ___ sehr gut. (lernen)', options: ['lerne', 'lernst', 'lernt'], correctAnswer: 'lernst' },
                // Verben: Vokalwechsel
                { id: 'g-a1g1q051', text: 'Er ___ am Wochenende seine Freunde.', options: ['treffe', 'triffst', 'trifft'], correctAnswer: 'trifft' },
                { id: 'g-a1g1q052', text: '___ du Deutsch?', options: ['Sprechst', 'Sprichst', 'Sprecht'], correctAnswer: 'Sprichst' },
                { id: 'g-a1g1q053', text: 'Sie (she) ___ am Abend fern.', options: ['sehe', 'siehst', 'sieht'], correctAnswer: 'sieht' },
                { id: 'g-a1g1q054', text: 'Der Mann ___ dem Kind.', options: ['helft', 'hilft', 'helfe'], correctAnswer: 'hilft' },
                { id: 'g-a1g1q055', text: 'Du ___ zu schnell.', options: ['fährst', 'fährst', 'fahrt'], correctAnswer: 'fährst' },
                { id: 'g-a1g1q056', text: 'Er ___ ein Buch.', options: ['lest', 'liest', 'lese'], correctAnswer: 'liest' },
                { id: 'g-a1g1q057', text: 'Was ___ du heute? (essen)', options: ['isst', 'esst', 'esse'], correctAnswer: 'isst' },
                { id: 'g-a1g1q058', text: 'Er ___ den Ball. (nehmen)', options: ['nehmt', 'nimmst', 'nimmt'], correctAnswer: 'nimmt' },
                { id: 'g-a1g1q059', text: 'Der Vater ___ (schlafen) lange.', options: ['schläft', 'schläfst', 'schlafe'], correctAnswer: 'schläft' },
                { id: 'g-a1g1q060', text: '___ du gern? (lesen)', options: ['Liest', 'Lesst', 'Lese'], correctAnswer: 'Liest' },
                // Modalverben
                { id: 'g-a1g1q061', text: 'Ich kann ___ Deutsch sprechen.', options: ['gut', 'guten', 'gute'], correctAnswer: 'gut' },
                { id: 'g-a1g1q062', text: '___ du mir helfen?', options: ['Kannst', 'Kann', 'Können'], correctAnswer: 'Kannst' },
                { id: 'g-a1g1q063', text: 'Was möchten Sie ___?', options: ['trinken', 'trinkt', 'trinke'], correctAnswer: 'trinken' },
                { id: 'g-a1g1q064', text: 'Wir ___ heute nicht arbeiten.', options: ['muss', 'müssen', 'müsst'], correctAnswer: 'müssen' },
                { id: 'g-a1g1q065', text: 'Er ___ nicht schwimmen.', options: ['will', 'wollen', 'willst'], correctAnswer: 'will' },
                { id: 'g-a1g1q066', text: 'Ich ___ einen Kaffee trinken.', options: ['möchte', 'möchtest', 'möchten'], correctAnswer: 'möchte' },
                { id: 'g-a1g1q067', text: 'Ihr ___ leise sein!', options: ['muss', 'müsst', 'müssen'], correctAnswer: 'müsst' },
                { id: 'g-a1g1q068', text: 'Sie (she) ___ Auto fahren. (dürfen)', options: ['darf', 'darfst', 'dürfen'], correctAnswer: 'darf' },
                { id: 'g-a1g1q069', text: '___ ihr heute Abend kommen? (können)', options: ['Kann', 'Könnt', 'Können'], correctAnswer: 'Könnt' },
                { id: 'g-a1g1q070', text: 'Ich ___ das nicht. (wollen)', options: ['will', 'willst', 'wollen'], correctAnswer: 'will' },
                // Trennbare Verben
                { id: 'g-a1g1q071', text: 'Ich stehe um 7 Uhr ___ .', options: ['auf', 'an', 'zu'], correctAnswer: 'auf' },
                { id: 'g-a1g1q072', text: 'Wann fängt der Film ___?', options: ['an', 'auf', 'ein'], correctAnswer: 'an' },
                { id: 'g-a1g1q073', text: 'Er kauft im Supermarkt ___ .', options: ['an', 'ein', 'zu'], correctAnswer: 'ein' },
                { id: 'g-a1g1q074', text: 'Sie ruft ihre Freundin ___ .', options: ['an', 'auf', 'mit'], correctAnswer: 'an' },
                { id: 'g-a1g1q075', text: 'Bitte mach das Fenster ___!', options: ['an', 'auf', 'zu'], correctAnswer: 'zu' },
                { id: 'g-a1g1q076', text: 'Ich komme am Freitag ___ .', options: ['mit', 'an', 'ab'], correctAnswer: 'mit' },
                { id: 'g-a1g1q077', text: 'Er sieht am Abend ___ .', options: ['fern', 'an', 'weg'], correctAnswer: 'fern' },
                { id: 'g-a1g1q078', text: 'Der Unterricht fängt um 9 Uhr ___.', options: ['an', 'um', 'auf'], correctAnswer: 'an' },
                { id: 'g-a1g1q079', text: 'Kommst du ___? (mitkommen)', options: ['mit', 'an', 'zu'], correctAnswer: 'mit' },
                { id: 'g-a1g1q080', text: 'Wann stehst du ___? (aufstehen)', options: ['ab', 'an', 'auf'], correctAnswer: 'auf' },
                // Possessivartikel
                { id: 'g-a1g1q081', text: 'Das ist nicht ___ Auto. Das ist ihr Auto.', options: ['mein', 'meine', 'meinen'], correctAnswer: 'mein' },
                { id: 'g-a1g1q082', text: 'Was ist ___ Beruf? (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q083', text: 'Ich finde ___ Tasche schön. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1G1q084', text: 'Wo ist ___ Mann? (Sie, formal)', options: ['Ihr', 'Ihre', 'Ihren'], correctAnswer: 'Ihr' },
                { id: 'g-a1g1q085', text: 'Wir lieben ___ Kinder. (wir)', options: ['unser', 'unsere', 'unseren'], correctAnswer: 'unsere' },
                { id: 'g-a1g1q086', text: 'Er sucht ___ Schlüssel. (er)', options: ['sein', 'seine', 'seinen'], correctAnswer: 'seinen' },
                { id: 'g-a1g1q087', text: 'Das ist ___ Haus. (wir)', options: ['unser', 'unsere', 'unseres'], correctAnswer: 'unser' },
                { id: 'g-a1g1q088', text: 'Ich brauche ___ Buch. (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q089', text: 'Sie (she) liebt ___ Katze. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1g1q090', text: 'Das ist ___ (euer) Auto.', options: ['euer', 'eure', 'euren'], correctAnswer: 'euer' },
                // Negation (nicht / kein)
                { id: 'g-a1g1q091', text: 'Wir haben ___ Zeit.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'keine' },
                { id: 'g-a1g1q092', text: 'Ich habe ___ Hunger. (der)', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q093', text: 'Er ist ___ verheiratet.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q094', text: 'Das ist ___ Auto. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q095', text: 'Ich arbeite ___ .', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q096', text: 'Sie kauft ___ Brot.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q097', text: 'Ich trinke ___ Alkohol.', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q098', text: 'Der Film ist ___ gut.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q099', text: 'Das sind ___ meine Bücher.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q100', text: 'Er hat ___ Geld. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                // Akkusativ-Präpositionen
                { id: 'g-a1g1q101', text: 'Der Kaffee ist ___ dich.', options: ['für', 'mit', 'ohne'], correctAnswer: 'für' },
                { id: 'g-a1g1q102', text: 'Er geht ___ den Park.', options: ['durch', 'um', 'bis'], correctAnswer: 'durch' },
                { id: 'g-a1g1q103', text: 'Ich kann nicht ___ meinen Computer arbeiten.', options: ['ohne', 'für', 'gegen'], correctAnswer: 'ohne' },
                { id: 'g-a1g1q104', text: 'Wir fahren ___ die Stadt.', options: ['bis', 'um', 'ohne'], correctAnswer: 'um' },
                { id: 'g-a1g1q105', text: 'Das Geschenk ist ___ meinen Vater.', options: ['für', 'durch', 'gegen'], correctAnswer: 'für' },
              ]
            }
          ],
        },
//
// --- END OF g-a1-l4 ---
                {
          id: 'g-a1-l5',
          title: 'Modelltest 5: Gesamte Prüfung',
          estimatedTime: 65,
          isCompleted: false,
          activities: [
            // --- HÖREN (20 Dialogues/Questions) ---
            {
              id: 'g-a1-l5-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören kurze Alltagsgespräche (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Entschuldigung, wo finde ich die Post?' },
                { speaker: 'Person A', line: 'Die Post ist am Marktplatz, direkt neben der Bank.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2. Nehmen Sie Zucker in den Kaffee?' },
                { speaker: 'Person B', line: 'Nein, danke. Aber ein bisschen Milch, bitte.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3. Wann beginnt der Deutschkurs?' },
                { speaker: 'Person A', line: 'Immer montags und mittwochs um 18 Uhr.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4. Was ist dein Beruf, Thomas?' },
                { speaker: 'Person B', line: 'Ich bin Ingenieur. Ich arbeite bei Siemens.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5. Es ist so kalt heute!' },
                { speaker: 'Person A', line: 'Ja, nur 5 Grad. Ich ziehe meinen dicken Pullover an.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6. Fahren wir mit dem Auto oder mit dem Bus?' },
                { speaker: 'Person B', line: 'Lieber mit dem Bus. Ich möchte keinen Parkplatz suchen.' },
                { speaker: 'Ansage', line: '---' },
                 { speaker: 'Ansage', line: 'Nummer 7. Hast du meine E-Mail bekommen?' },
                { speaker: 'Person A', line: 'Ja, danke. Ich antworte dir heute Abend.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 8. Woher kommst du?' },
                { speaker: 'Person B', line: 'Ich komme aus der Türkei, aus Istanbul.' },
              ],
              questions: [
                { id: 'g-a1h5q1', text: 'Wo ist die Post?', options: ['a) Neben der Schule', 'b) Neben der Bank', 'c) Am Bahnhof'], correctAnswer: 'b) Neben der Bank' },
                { id: 'g-a1h5q2', text: 'Was möchte die Person im Kaffee?', options: ['a) Zucker', 'b) Nichts', 'c) Milch'], correctAnswer: 'c) Milch' },
                { id: 'g-a1h5q3', text: 'Wann ist der Deutschkurs?', options: ['a) Montag und Mittwoch um 18 Uhr', 'b) Dienstag und Donnerstag um 18 Uhr', 'c) Jeden Tag um 18 Uhr'], correctAnswer: 'a) Montag und Mittwoch um 18 Uhr' },
                { id: 'g-a1h5q4', text: 'Was ist Thomas von Beruf?', options: ['a) Er ist Student', 'b) Er ist Lehrer', 'c) Er ist Ingenieur'], correctAnswer: 'c) Er ist Ingenieur' },
                { id: 'g-a1h5q5', text: 'Wie ist das Wetter?', options: ['a) 15 Grad', 'b) Kalt', 'c) Warm'], correctAnswer: 'b) Kalt' },
                { id: 'g-a1h5q6', text: 'Warum fahren sie mit dem Bus?', options: ['a) Es ist billiger', 'b) Es ist schneller', 'c) Sie wollen keinen Parkplatz suchen'], correctAnswer: 'c) Sie wollen keinen Parkplatz suchen' },
                { id: 'g-a1h5q7', text: 'Wann antwortet die Person?', options: ['a) Jetzt sofort', 'b) Heute Abend', 'c) Morgen'], correctAnswer: 'b) Heute Abend' },
                { id: 'g-a1h5q8', text: 'Woher kommt die Person?', options: ['a) Aus Spanien', 'b) Aus der Türkei', 'c) Aus Berlin'], correctAnswer: 'b) Aus der Türkei' },
              ]
            },
            {
              id: 'g-a1-l5-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (6 Fragen)',
              content: 'Sie hören Durchsagen im Kaufhaus oder am Flughafen (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Ansage 1', line: 'Liebe Kunden, besuchen Sie unsere Lebensmittelabteilung im Untergeschoss. Heute im Angebot: Italienische Pasta, 500 Gramm, nur 99 Cent.' },
                { speaker: 'Ansage 2', line: 'Achtung, Passagiere des Fluges BA 205 nach London. Der Abflugsteig hat sich geändert. Der Flug geht jetzt von Steig A15, nicht von Steig A12.' },
                { speaker: 'Ansage 3', line: 'Sehr geehrte Fahrgäste, der Regionalzug nach Leipzig, Abfahrt 11:30 Uhr, hat ca. 20 Minuten Verspätung. Er fährt auf Gleis 4.' },
                { speaker: 'Ansage 4', line: 'Liebe Eltern, der kleine Leo sucht seine Mutter. Leo wartet am Service-Center im 2. Stock. Bitte holen Sie Ihr Kind dort ab.' },
                { speaker: 'Ansage 5', line: 'Sehr geehrte Kunden, unser Restaurant schließt in 10 Minuten. Wir bitten Sie, zur Kasse zu gehen.' },
                { speaker: 'Ansage 6', line: 'Willkommen zur Stadtrundfahrt. Der Bus hält als Nächstes am Brandenburger Tor. Sie haben dort 30 Minuten Zeit für Fotos.' },
              ],
              questions: [
                { id: 'g-a1h2q1_5', text: 'Die Pasta kostet 1,99 Euro.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q2_5', text: 'Der Flug nach London fliegt von Steig A15.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1h2q3_5', text: 'Der Zug nach Leipzig kommt 20 Minuten zu früh.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q4_5', text: 'Leo ist im 2. Stock.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1h2q5_5', text: 'Das Restaurant ist noch 1 Stunde geöffnet.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1h2q6_5', text: 'Der Bus hält für 30 Minuten am Brandenburger Tor.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a1-l5-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören Nachrichten auf dem Anrufbeantworter (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1.' },
                { speaker: 'Anrufbeantworter 1', line: 'Hallo Frank, hier ist Sarah. Ich bin jetzt im Supermarkt. Wir wollten doch Pizza machen. Fehlt noch Käse? Tomaten und Schinken habe ich schon. Ruf mich schnell zurück!' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 2.' },
                { speaker: 'Anrufbeantworter 2', line: 'Guten Tag, Herr Müller. Hier ist Ihre Bank. Ihre neue Bankkarte ist da. Sie können die Karte ab morgen in der Filiale abholen. Bitte bringen Sie Ihren Personalausweis mit.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 3.' },
                { speaker: 'Anrufbeantworter 3', line: 'Hallo Maria, hier ist dein Bruder. Ich komme heute später. Mein Zug ist kaputt. Ich nehme den nächsten Zug um 19:30 Uhr. Sei nicht böse!' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 4.' },
                { speaker: 'Anrufbeantworter 4', line: 'Guten Tag, Frau Schmidt. Hier ist die Schule. Ihre Tochter Anna ist heute nicht zum Unterricht gekommen. Ist sie krank? Bitte rufen Sie uns im Sekretariat an.' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 5.' },
                { speaker: 'Anrufbeantworter 5', line: 'Hallo Jan, hier ist Tom. Wo bleibst du? Wir warten im Restaurant "Sonne" auf dich. Das Essen ist schon bestellt. Wir sind im Raucherbereich. Beeil dich!' },
                { speaker: 'Ansage', line: '---' },
                { speaker: 'Ansage', line: 'Nummer 6.' },
                { speaker: 'Anrufbeantworter 6', line: 'Hallo Frau Meier, hier ist die Reparatur-Firma. Der Techniker kann morgen zwischen 14 und 16 Uhr kommen, um Ihre Waschmaschine zu reparieren. Passt Ihnen das?' },
              ],
              questions: [
                { id: 'g-a1h3q1_5', text: 'Was soll Frank tun?', options: ['a) Pizza kaufen', 'b) Anrufen und sagen, ob Käse fehlt', 'c) Tomaten kaufen'], correctAnswer: 'b) Anrufen und sagen, ob Käse fehlt' },
                { id: 'g-a1h3q2_5', text: 'Was soll Herr Müller mitbringen?', options: ['a) Seine alte Bankkarte', 'b) Seinen Personalausweis', 'c) Geld'], correctAnswer: 'b) Seinen Personalausweis' },
                { id: 'g-a1h3q3_5', text: 'Warum kommt der Bruder später?', options: ['a) Er hat verschlafen', 'b) Er ist im Stau', 'c) Sein Zug ist kaputt'], correctAnswer: 'c) Sein Zug ist kaputt' },
                { id: 'g-a1h3q4_5', text: 'Warum ruft die Schule an?', options: ['a) Anna ist krank', 'b) Anna war nicht in der Schule', 'c) Anna ruft Frau Schmidt an'], correctAnswer: 'b) Anna war nicht in der Schule' },
                { id: 'g-a1h3q5_5', text: 'Wo wartet Tom?', options: ['a) Im Raucherbereich des Restaurants', 'b) Vor dem Restaurant "Sonne"', 'c) Im Nichtraucherbereich'], correctAnswer: 'a) Im Raucherbereich des Restaurants' },
                { id: 'g-a1h3q6_5', text: 'Wann kommt der Techniker?', options: ['a) Um 14 Uhr', 'b) Um 16 Uhr', 'c) Am Nachmittag'], correctAnswer: 'c) Am Nachmittag' },
              ]
            },

            // --- LESEN (Long reading + questions) ---
            {
              id: 'g-a1-l5-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1: E-Mails verstehen',
              content: 'Lesen Sie die beiden E-Mails und entscheiden Sie: Richtig oder Falsch.\n\n**E-Mail 1**\nHallo Maria,\nleider kann ich am Freitag nicht zu deiner Party kommen. Ich muss am Samstag eine Prüfung schreiben und muss viel lernen. Das tut mir sehr leid. Ich hoffe, ihr habt viel Spaß! Wir können uns ja nächste Woche treffen.\nLiebe Grüße,\nLena\n\n**E-Mail 2**\nSehr geehrter Herr Schmidt,\nvielen Dank für Ihre E-Mail. Wir schicken Ihnen gern den Katalog für unsere Sprachkurse. Leider haben wir Ihre Adresse nicht. Können Sie uns bitte Ihre Straße und Hausnummer schicken?\nMit freundlichen Grüßen,\nIhr "Sprach-Team"',
              questions: [
                { id: 'g-a1r1q1_5', text: 'E-Mail 1: Lena kommt nicht zur Party, weil sie krank ist.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r1q2_5', text: 'E-Mail 1: Lena möchte Maria nächste Woche treffen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1r1q3_5', text: 'E-Mail 2: Herr Schmidt bekommt den Katalog nicht.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' }, // Er bekommt ihn, wenn er die Adresse schickt.
                { id: 'g-a1r1q4_5', text: 'E-Mail 2: Das "Sprach-Team" braucht die Adresse von Herrn Schmidt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a1-l5-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2: Anzeigen lesen',
              content: 'Lesen Sie die Anzeigen. Welche Anzeige passt zu welcher Situation?\n\n**Situation 1:** Sie suchen eine Arbeit am Wochenende. Sie sind Student.\n**Situation 2:** Sie möchten einen Hund kaufen.\n\n**Anzeige A**\n**Tierheim Berlin**\nWir haben viele liebe Katzen, Hunde und kleine Tiere, die ein neues Zuhause suchen. Besuchen Sie uns! Täglich 14-17 Uhr.\n\n**Anzeige B**\n**Café "Sonnenschein"**\nWir suchen Aushilfe (m/w/d) für Service am Samstag und Sonntag (12-18 Uhr). Perfekt für Studenten. Gute Bezahlung. Rufen Sie an!\n\n**Anzeige C**\n**Hundezüchter "Vom Park"**\nWir verkaufen süße Hundebabys. Golden Retriever. Mit Papieren. Sehr teuer. Nur für Profis.\n\n**Anzeige D**\n**Job-Börse**\nProgrammierer (Vollzeit) für Startup gesucht. 40 Stunden/Woche. Ab sofort. Gutes Gehalt. Mindestens 3 Jahre Erfahrung.',
              questions: [
                { id: 'g-a1r2q1_5', text: 'Situation 1: Arbeit am Wochenende.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige B' },
                { id: 'g-a1r2q2_5', text: 'Situation 2: Hund kaufen.', options: ['Anzeige A', 'Anzeige B', 'Anzeige C', 'Anzeige D'], correctAnswer: 'Anzeige A' }, // 'kaufen' is tricky, but Tierheim is the A1-appropriate answer vs. 'Züchter'.
              ]
            },
            {
              id: 'g-a1-l5-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3: Schilder und Notizen',
              content: 'Lesen Sie die Schilder und Notizen. Kreuzen Sie an: Richtig oder Falsch.\n\n**Text 1: An der Tür**\nAußer Betrieb. Der Aufzug ist kaputt. Bitte die Treppe benutzen.\n\n**Text 2: Im Zug**\nRuhebereich. Bitte nicht laut sprechen und nicht telefonieren. Danke.\n\n**Text 3: Am Kino**\nAm Dienstag ist Kinotag! Alle Filme nur 6 €. (Außer an Feiertagen).',
              questions: [
                { id: 'g-a1r3q1_5', text: 'Text 1: Der Aufzug funktioniert nicht.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a1r3q2_5', text: 'Text 2: Man darf hier leise telefonieren.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a1r3q3_5', text: 'Text 3: Am Dienstag kosten die Filme immer 6 €.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' }, // Nicht an Feiertagen.
              ]
            },

            // --- SCHREIBEN ---
            {
              id: 'g-a1-l5-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Formular ausfüllen',
              content: 'Sie sind in einem Hotel und möchten am nächsten Tag einen Ausflug nach Potsdam buchen. Füllen Sie das Formular an der Rezeption aus.\n\n**Anmeldung Ausflug: Potsdam**\n1. Datum des Ausflugs: __________ (Morgen)\n2. Name, Vorname: __________\n3. Zimmernummer: __________\n4. Anzahl Personen: __________\n5. Möchten Sie ein Lunchpaket? (Ja/Nein): __________\n\nSchreiben Sie Ihre persönlichen Antworten in ein Textfeld.',
            },
            {
              id: 'g-a1-l5-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Kurze E-Mail',
              content: 'Schreiben Sie eine kurze E-Mail (ca. 30 Wörter).\n\nSie haben am Freitag Geburtstag und möchten eine kleine Party machen. Laden Sie Ihren Freund Alex ein.\n- Sagen Sie, wann (Freitag, 19 Uhr) und wo (bei Ihnen zu Hause) die Party ist.\n- Bitten Sie ihn, Bescheid zu sagen, ob er kommt.',
            },

            // --- SPRECHEN ---
            {
              id: 'g-a1-l5-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Sich vorstellen',
              content: 'Stellen Sie sich vor. Sagen Sie: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobbys. Starten Sie die Konversationsübung, um dies zu üben.'
            },
            {
              id: 'g-a1-l5-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Fragen stellen (Thema: Essen & Trinken)',
              content: 'Sie bekommen eine Karte mit einem Wort, z.B. "Lieblingsessen". Stellen Sie Ihrem Partner eine Frage dazu (z.B. "Was ist dein Lieblingsessen?"). Üben Sie, Fragen zu verschiedenen Themen zu stellen.'
            },
            {
              id: 'g-a1-l5-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Bitten formulieren (Thema: Im Restaurant)',
              content: 'Sie bekommen eine Karte mit einem Bild, z.B. eine Speisekarte. Formulieren Sie eine Bitte (z.B. "Können Sie mir bitte die Speisekarte bringen?"). Üben Sie, höfliche Bitten zu formulieren.'
            },
            
            // --- WÖRTSCHATZ (100+ Vocab) ---
            {
              id: 'g-a1-l5-v1',
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A1 (100+)',
              content: 'Wichtige Wörter für die A1-Prüfung, sortiert nach Themen.',
              vocabulary: [
                  // Sich vorstellen
                  { german: 'der Name', english: 'the name' },
                  { german: 'heißen', english: 'to be called' },
                  { german: 'der Vorname', english: 'the first name' },
                  { german: 'der Familienname', english: 'the family name' },
                  { german: 'kommen aus', english: 'to come from' },
                  { german: 'das Land', english: 'the country' },
                  { german: 'wohnen', english: 'to live' },
                  { german: 'der Wohnort', english: 'the place of residence' },
                  { german: 'sprechen', english: 'to speak' },
                  { german: 'die Sprache', english: 'the language' },
                  { german: 'der Beruf', english: 'the profession' },
                  { german: 'was sind Sie von Beruf?', english: 'what is your job?' },
                  { german: 'das Hobby', english: 'the hobby' },
                  { german: 'das Alter', english: 'the age' },
                  { german: 'alt', english: 'old' },
                  { german: 'buchstabieren', english: 'to spell' },
                  // Familie
                  { german: 'die Familie', english: 'the family' },
                  { german: 'die Mutter', english: 'the mother' },
                  { german: 'der Vater', english: 'the father' },
                  { german: 'die Eltern', english: 'the parents' },
                  { german: 'der Sohn', english: 'the son' },
                  { german: 'die Tochter', english: 'the daughter' },
                  { german: 'der Bruder', english: 'the brother' },
                  { german: 'die Schwester', english: 'the sister' },
                  { german: 'die Geschwister', english: 'the siblings' },
                  { german: 'der Großvater (Opa)', english: 'the grandfather (grandpa)' },
                  { german: 'die Großmutter (Oma)', english: 'the grandmother (grandma)' },
                  { german: 'die Großeltern', english: 'the grandparents' },
                  { german: 'verheiratet', english: 'married' },
                  { german: 'ledig', english: 'single' },
                  { german: 'das Kind', english: 'the child' },
                  // Essen & Trinken
                  { german: 'das Essen', english: 'the food' },
                  { german: 'das Trinken', english: 'the drink' },
                  { german: 'das Frühstück', english: 'the breakfast' },
                  { german: 'das Mittagessen', english: 'the lunch' },
                  { german: 'das Abendessen', english: 'the dinner' },
                  { german: 'essen', english: 'to eat' },
                  { german: 'trinken', english: 'to drink' },
                  { german: 'das Brot', english: 'the bread' },
                  { german: 'die Butter', english: 'the butter' },
                  { german: 'der Käse', english: 'the cheese' },
                  { german: 'die Wurst', english: 'the sausage' },
                  { german: 'das Obst', english: 'the fruit' },
                  { german: 'der Apfel', english: 'the apple' },
                  { german: 'die Banane', english: 'the banana' },
                  { german: 'das Gemüse', english: 'the vegetable' },
                  { german: 'die Tomate', english: 'the tomato' },
                  { german: 'die Kartoffel', english: 'the potato' },
                  { german: 'das Fleisch', english: 'the meat' },
                  { german: 'der Fisch', english: 'the fish' },
                  { german: 'das Wasser', english: 'the water' },
                  { german: 'der Saft', english: 'the juice' },
                  { german: 'der Kaffee', english: 'the coffee' },
                  { german: 'der Tee', english: 'the tea' },
                  { german: 'die Milch', english: 'the milk' },
                  { german: 'der Zucker', english: 'the sugar' },
                  { german: 'Hunger haben', english: 'to be hungry' },
                  { german: 'Durst haben', english: 'to be thirsty' },
                  { german: 'mögen', english: 'to like' },
                  // Einkaufen
                  { german: 'kaufen', english: 'to buy' },
                  { german: 'der Supermarkt', english: 'the supermarket' },
                  { german: 'der Markt', english: 'the market' },
                  { german: 'bezahlen', english: 'to pay' },
                  { german: 'der Preis', english: 'the price' },
                  { german: 'kosten', english: 'to cost' },
                  { german: 'das Geld', english: 'the money' },
                  { german: 'der Euro', english: 'the euro' },
                  { german: 'das Angebot', english: 'the special offer' },
                  { german: 'billig', english: 'cheap' },
                  { german: 'teuer', english: 'expensive' },
                  // Wohnen
                  { german: 'die Wohnung', english: 'the apartment' },
                  { german: 'das Haus', english: 'the house' },
                  { german: 'das Zimmer', english: 'the room' },
                  { german: 'die Küche', english: 'the kitchen' },
                  { german: 'das Bad / Badezimmer', english: 'the bathroom' },
                  { german: 'das Wohnzimmer', english: 'the living room' },
                  { german: 'das Schlafzimmer', english: 'the bedroom' },
                  { german: 'der Tisch', english: 'the table' },
                  { german: 'der Stuhl', english: 'the chair' },
                  { german: 'das Bett', english: 'the bed' },
                  { german: 'der Schrank', english: 'the cupboard' },
                  { german: 'das Sofa', english: 'the sofa' },
                  { german: 'der Balkon', english: 'the balcony' },
                  { german: 'der Garten', english: 'the garden' },
                  // Zeit & Kalender
                  { german: 'die Zeit', english: 'the time' },
                  { german: 'die Uhr', english: 'the clock' },
                  { german: 'Wie spät ist es?', english: 'What time is it?' },
                  { german: 'die Stunde', english: 'the hour' },
                  { german: 'die Minute', english: 'the minute' },
                  { german: 'der Tag', english: 'the day' },
                  { german: 'die Woche', english: 'the week' },
                  { german: 'der Monat', english: 'the month' },
                  { german: 'das Jahr', english: 'the year' },
                  { german: 'der Montag', english: 'Monday' },
                  { german: 'der Dienstag', english: 'Tuesday' },
                  { german: 'der Mittwoch', english: 'Wednesday' },
                  { german: 'der Donnerstag', english: 'Thursday' },
                  { german: 'der Freitag', english: 'Friday' },
                  { german: 'der Samstag', english: 'Saturday' },
                  { german: 'der Sonntag', english: 'Sunday' },
                  { german: 'das Wochenende', english: 'the weekend' },
                  { german: 'heute', english: 'today' },
                  { german: 'morgen', english: 'tomorrow' },
                  { german: 'gestern', english: 'yesterday' },
                  // Verkehr & Reisen
                  { german: 'der Bahnhof', english: 'the train station' },
                  { german: 'der Flughafen', english: 'the airport' },
                  { german: 'der Zug', english: 'the train' },
                  { german: 'der Bus', english: 'the bus' },
                  { german: 'die U-Bahn', english: 'the subway' },
                  { german: 'die S-Bahn', english: 'the suburban train' },
                  { german: 'das Auto', english: 'the car' },
                  { german: 'das Fahrrad', english: 'the bicycle' },
                  { german: 'fahren', english: 'to drive/travel' },
                  { german: 'fliegen', english: 'to fly' },
                  { german: 'gehen', english: 'to go/walk' },
                  { german: 'die Fahrkarte', english: 'the ticket' },
                  { german: 'das Gleis', english: 'the platform' },
                  { german: 'die Haltestelle', english: 'the bus/tram stop' },
                  { german: 'der Koffer', english: 'the suitcase' },
                  { german: 'der Urlaub', english: 'the vacation' },
                  { german: 'das Hotel', english: 'the hotel' },
                  // Fragewörter
                  { german: 'Wer?', english: 'Who?' },
                  { german: 'Was?', english: 'What?' },
                  { german: 'Wo?', english: 'Where? (location)' },
                  { german: 'Wohin?', english: 'Where to? (direction)' },
                  { german: 'Woher?', english: 'Where from?' },
                  { german: 'Wann?', english: 'When?' },
                  { german: 'Wie?', english: 'How?' },
                  { german: 'Warum?', english: 'Why?' },
                  { german: 'Wie viel?', english: 'How much?' },
                  { german: 'Wie viele?', english: 'How many?' },
                  // Sonstige
                  { german: 'bitte', english: 'please / you\'re welcome' },
                  { german: 'danke', english: 'thank you' },
                  { german: 'ja', english: 'yes' },
                  { german: 'nein', english: 'no' },
                  { german: 'Entschuldigung', english: 'excuse me' },
              ]
            },

            // --- GRAMMATIK (100+ Questions) ---
            {
              id: 'g-a1-l5-g1',
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A1 (100+)',
              content: 'Testen Sie Ihr Grammatikwissen für die A1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Personalpronomen & sein/haben
                { id: 'g-a1g1q001', text: 'Wie ___ Ihr Name?', options: ['ist', 'bin', 'sind'], correctAnswer: 'ist' },
                { id: 'g-a1g1q002', text: 'Ich ___ aus Italien.', options: ['komme', 'kommt', 'kommen'], correctAnswer: 'komme' },
                { id: 'g-a1g1q003', text: '___ alt bist du?', options: ['Wie', 'Was', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q004', text: 'Wir ___ Freunde.', options: ['ist', 'sind', 'bin'], correctAnswer: 'sind' },
                { id: 'g-a1g1q005', text: 'Er ___ ein Auto.', options: ['habe', 'hast', 'hat'], correctAnswer: 'hat' },
                { id: 'g-a1g1q006', text: '___ ihr müde?', options: ['Sind', 'Seid', 'Ist'], correctAnswer: 'Seid' },
                { id: 'g-a1g1q007', text: 'Was sind ___ von Beruf?', options: ['du', 'er', 'Sie'], correctAnswer: 'Sie' },
                { id: 'g-a1g1q008', text: 'Ich ___ einen Hund. (haben)', options: ['habe', 'hast', 'hat'], correctAnswer: 'habe' },
                { id: 'g-a1g1q009', text: 'Du ___ Student. (sein)', options: ['bin', 'bist', 'ist'], correctAnswer: 'bist' },
                { id: 'g-a1g1q010', text: 'Sie (pl.) ___ Kinder. (haben)', options: ['hat', 'habt', 'haben'], correctAnswer: 'haben' },
                // W-Fragen
                { id: 'g-a1g1q011', text: '___ sprichst du?', options: ['Was', 'Wer', 'Wo'], correctAnswer: 'Was' },
                { id: 'g-a1g1q012', text: '___ wohnt er?', options: ['Wo', 'Was', 'Wie'], correctAnswer: 'Wo' },
                { id: 'g-a1g1q013', text: '___ kommt der Zug an?', options: ['Wann', 'Wer', 'Was'], correctAnswer: 'Wann' },
                { id: 'g-a1g1q014', text: '___ kostet der Pullover?', options: ['Was', 'Wie viel', 'Wer'], correctAnswer: 'Wie viel' },
                { id: 'g-a1g1q015', text: '___ ist das? - Das ist mein Bruder.', options: ['Was', 'Wer', 'Wie'], correctAnswer: 'Wer' },
                { id: 'g-a1g1q016', text: '___ kommst du? - Aus Polen.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Woher' },
                { id: 'g-a1g1q017', text: '___ geht es Ihnen?', options: ['Was', 'Wie', 'Wo'], correctAnswer: 'Wie' },
                { id: 'g-a1g1q018', text: '___ ist dein Hobby?', options: ['Was', 'Wer', 'Wann'], correctAnswer: 'Was' },
                { id: 'g-a1g1q019', text: '___ fährst du? - Nach Berlin.', options: ['Wo', 'Wohin', 'Woher'], correctAnswer: 'Wohin' },
                { id: 'g-a1g1q020', text: '___ heißt du?', options: ['Wer', 'Wie', 'Was'], correctAnswer: 'Wie' },
                // Artikel: Nominativ
                { id: 'g-a1g1q021', text: 'Das ist ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q022', text: 'Das ist ___ Frau. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q023', text: 'Hier ist ___ Stift. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q024', text: 'Wo ist ___ Bahnhof?', options: ['der', 'die', 'das'], correctAnswer: 'der' },
                { id: 'g-a1g1q025', text: '___ Kind spielt.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Das' },
                { id: 'g-a1g1q026', text: '___ Tasche ist neu.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q027', text: 'Ist das ___ Auto? (neutral)', options: ['ein', 'eine', 'einer'], correctAnswer: 'ein' },
                { id: 'g-a1g1q028', text: '___ Sonne scheint.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Die' },
                { id: 'g-a1g1q029', text: '___ Mann lacht.', options: ['Der', 'Die', 'Das'], correctAnswer: 'Der' },
                { id: 'g-a1g1q030', text: 'Das sind ___ Bücher. (plural)', options: ['die', 'das', 'der'], correctAnswer: 'die' },
                // Artikel: Akkusativ
                { id: 'g-a1g1q031', text: 'Ich habe ___ Schwester. (feminine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'eine' },
                { id: 'g-a1g1q032', text: 'Er kauft ___ Apfel. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q033', text: 'Sie liest ___ Buch. (neutral)', options: ['ein', 'eine', 'einen'], correctAnswer: 'ein' },
                { id: 'g-a1g1q034', text: 'Ich nehme ___ Bus zur Arbeit.', options: ['der', 'die', 'den'], correctAnswer: 'den' },
                { id: 'g-a1g1q035', text: 'Er findet ___ Schlüssel nicht.', options: ['der', 'den', 'dem'], correctAnswer: 'den' },
                { id: 'g-a1g1q036', text: 'Sie sucht ___ Brille.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q037', text: 'Wir brauchen ___ Auto.', options: ['der', 'die', 'das'], correctAnswer: 'das' },
                { id: 'g-a1g1q038', text: 'Ich esse ___ Banane.', options: ['der', 'die', 'das'], correctAnswer: 'die' },
                { id: 'g-a1g1q039', text: 'Er hat ___ Hund. (masculine)', options: ['ein', 'eine', 'einen'], correctAnswer: 'einen' },
                { id: 'g-a1g1q040', text: 'Siehst du ___ Mann dort?', options: ['der', 'dem', 'den'], correctAnswer: 'den' },
                // Verben: Präsens
                { id: 'g-a1g1q041', text: 'Wir ___ gern Kaffee.', options: ['trinke', 'trinkt', 'trinken'], correctAnswer: 'trinken' },
                { id: 'g-a1g1q042', text: 'Er ___ einen Brief.', options: ['schreibe', 'schreibst', 'schreibt'], correctAnswer: 'schreibt' },
                { id: 'g-a1g1q043', text: '___ (arbeiten) du heute?', options: ['Arbeitest', 'Arbeitet', 'Arbeite'], correctAnswer: 'Arbeitest' },
                { id: 'g-a1g1q044', text: 'Ihr ___ sehr nett.', options: ['sind', 'seid', 'ist'], correctAnswer: 'seid' },
                { id: 'g-a1f1q045', text: 'Die Kinder ___ im Garten.', options: ['spielt', 'spielen', 'spiele'], correctAnswer: 'spielen' },
                { id: 'g-a1g1q046', text: 'Ich ___ gern Musik.', options: ['höre', 'hörst', 'hört'], correctAnswer: 'höre' },
                { id: 'g-a1g1q047', text: 'Er ___ (heißen) Thomas.', options: ['heiße', 'heißt', 'heißen'], correctAnswer: 'heißt' },
                { id: 'g-a1g1q048', text: 'Ihr ___ (finden) den Weg.', options: ['finde', 'findet', 'finden'], correctAnswer: 'findet' },
                { id: 'g-a1G1q049', text: 'Frau Meier ___ in Berlin. (wohnen)', options: ['wohne', 'wohnst', 'wohnt'], correctAnswer: 'wohnt' },
                { id: 'g-a1g1q050', text: 'Du ___ sehr gut. (lernen)', options: ['lerne', 'lernst', 'lernt'], correctAnswer: 'lernst' },
                // Verben: Vokalwechsel
                { id: 'g-a1g1q051', text: 'Er ___ am Wochenende seine Freunde.', options: ['treffe', 'triffst', 'trifft'], correctAnswer: 'trifft' },
                { id: 'g-a1g1q052', text: '___ du Deutsch?', options: ['Sprechst', 'Sprichst', 'Sprecht'], correctAnswer: 'Sprichst' },
                { id: 'g-a1g1q053', text: 'Sie (she) ___ am Abend fern.', options: ['sehe', 'siehst', 'sieht'], correctAnswer: 'sieht' },
                { id: 'g-a1g1q054', text: 'Der Mann ___ dem Kind.', options: ['helft', 'hilft', 'helfe'], correctAnswer: 'hilft' },
                { id: 'g-a1g1q055', text: 'Du ___ zu schnell.', options: ['fährst', 'fährst', 'fahrt'], correctAnswer: 'fährst' },
                { id: 'g-a1g1q056', text: 'Er ___ ein Buch.', options: ['lest', 'liest', 'lese'], correctAnswer: 'liest' },
                { id: 'g-a1g1q057', text: 'Was ___ du heute? (essen)', options: ['isst', 'esst', 'esse'], correctAnswer: 'isst' },
                { id: 'g-a1g1q058', text: 'Er ___ den Ball. (nehmen)', options: ['nehmt', 'nimmst', 'nimmt'], correctAnswer: 'nimmt' },
                { id: 'g-a1g1q059', text: 'Der Vater ___ (schlafen) lange.', options: ['schläft', 'schläfst', 'schlafe'], correctAnswer: 'schläft' },
                { id: 'g-a1g1q060', text: '___ du gern? (lesen)', options: ['Liest', 'Lesst', 'Lese'], correctAnswer: 'Liest' },
                // Modalverben
                { id: 'g-a1g1q061', text: 'Ich kann ___ Deutsch sprechen.', options: ['gut', 'guten', 'gute'], correctAnswer: 'gut' },
                { id: 'g-a1g1q062', text: '___ du mir helfen?', options: ['Kannst', 'Kann', 'Können'], correctAnswer: 'Kannst' },
                { id: 'g-a1g1q063', text: 'Was möchten Sie ___?', options: ['trinken', 'trinkt', 'trinke'], correctAnswer: 'trinken' },
                { id: 'g-a1g1q064', text: 'Wir ___ heute nicht arbeiten.', options: ['muss', 'müssen', 'müsst'], correctAnswer: 'müssen' },
                { id: 'g-a1g1q065', text: 'Er ___ nicht schwimmen.', options: ['will', 'wollen', 'willst'], correctAnswer: 'will' },
                { id: 'g-a1g1q066', text: 'Ich ___ einen Kaffee trinken.', options: ['möchte', 'möchtest', 'möchten'], correctAnswer: 'möchte' },
                { id: 'g-a1g1q067', text: 'Ihr ___ leise sein!', options: ['muss', 'müsst', 'müssen'], correctAnswer: 'müsst' },
                { id: 'g-a1g1q068', text: 'Sie (she) ___ Auto fahren. (dürfen)', options: ['darf', 'darfst', 'dürfen'], correctAnswer: 'darf' },
                { id: 'g-a1g1q069', text: '___ ihr heute Abend kommen? (können)', options: ['Kann', 'Könnt', 'Können'], correctAnswer: 'Könnt' },
                { id: 'g-a1g1q070', text: 'Ich ___ das nicht. (wollen)', options: ['will', 'willst', 'wollen'], correctAnswer: 'will' },
                // Trennbare Verben
                { id: 'g-a1g1q071', text: 'Ich stehe um 7 Uhr ___ .', options: ['auf', 'an', 'zu'], correctAnswer: 'auf' },
                { id: 'g-a1g1q072', text: 'Wann fängt der Film ___?', options: ['an', 'auf', 'ein'], correctAnswer: 'an' },
                { id: 'g-a1g1q073', text: 'Er kauft im Supermarkt ___ .', options: ['an', 'ein', 'zu'], correctAnswer: 'ein' },
                { id: 'g-a1g1q074', text: 'Sie ruft ihre Freundin ___ .', options: ['an', 'auf', 'mit'], correctAnswer: 'an' },
                { id: 'g-a1g1q075', text: 'Bitte mach das Fenster ___!', options: ['an', 'auf', 'zu'], correctAnswer: 'zu' },
                { id: 'g-a1g1q076', text: 'Ich komme am Freitag ___ .', options: ['mit', 'an', 'ab'], correctAnswer: 'mit' },
                { id: 'g-a1g1q077', text: 'Er sieht am Abend ___ .', options: ['fern', 'an', 'weg'], correctAnswer: 'fern' },
                { id: 'g-a1g1q078', text: 'Der Unterricht fängt um 9 Uhr ___.', options: ['an', 'um', 'auf'], correctAnswer: 'an' },
                { id: 'g-a1g1q079', text: 'Kommst du ___? (mitkommen)', options: ['mit', 'an', 'zu'], correctAnswer: 'mit' },
                { id: 'g-a1g1q080', text: 'Wann stehst du ___? (aufstehen)', options: ['ab', 'an', 'auf'], correctAnswer: 'auf' },
                // Possessivartikel
                { id: 'g-a1ag1q081', text: 'Das ist nicht ___ Auto. Das ist ihr Auto.', options: ['mein', 'meine', 'meinen'], correctAnswer: 'mein' },
                { id: 'g-a1g1q082', text: 'Was ist ___ Beruf? (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q083', text: 'Ich finde ___ Tasche schön. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1G1q084', text: 'Wo ist ___ Mann? (Sie, formal)', options: ['Ihr', 'Ihre', 'Ihren'], correctAnswer: 'Ihr' },
                { id: 'g-a1g1q085', text: 'Wir lieben ___ Kinder. (wir)', options: ['unser', 'unsere', 'unseren'], correctAnswer: 'unsere' },
                { id: 'g-a1g1q086', text: 'Er sucht ___ Schlüssel. (er)', options: ['sein', 'seine', 'seinen'], correctAnswer: 'seinen' },
                { id: 'g-a1g1q087', text: 'Das ist ___ Haus. (wir)', options: ['unser', 'unsere', 'unseres'], correctAnswer: 'unser' },
                { id: 'g-a1g1q088', text: 'Ich brauche ___ Buch. (du)', options: ['dein', 'deine', 'deinen'], correctAnswer: 'dein' },
                { id: 'g-a1g1q089', text: 'Sie (she) liebt ___ Katze. (sie, her)', options: ['ihr', 'ihre', 'ihren'], correctAnswer: 'ihre' },
                { id: 'g-a1g1q090', text: 'Das ist ___ (euer) Auto.', options: ['euer', 'eure', 'euren'], correctAnswer: 'euer' },
                // Negation (nicht / kein)
                { id: 'g-a1g1q091', text: 'Wir haben ___ Zeit.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'keine' },
                { id: 'g-a1g1q092', text: 'Ich habe ___ Hunger. (der)', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q093', text: 'Er ist ___ verheiratet.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q094', text: 'Das ist ___ Auto. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q095', text: 'Ich arbeite ___ .', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q096', text: 'Sie kauft ___ Brot.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                { id: 'g-a1g1q097', text: 'Ich trinke ___ Alkohol.', options: ['nicht', 'kein', 'keinen'], correctAnswer: 'keinen' },
                { id: 'g-a1g1q098', text: 'Der Film ist ___ gut.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q099', text: 'Das sind ___ meine Bücher.', options: ['nicht', 'kein', 'keine'], correctAnswer: 'nicht' },
                { id: 'g-a1g1q100', text: 'Er hat ___ Geld. (das)', options: ['nicht', 'kein', 'keine'], correctAnswer: 'kein' },
                // Akkusativ-Präpositionen
                { id: 'g-a1g1q101', text: 'Der Kaffee ist ___ dich.', options: ['für', 'mit', 'ohne'], correctAnswer: 'für' },
                { id: 'g-a1g1q102', text: 'Er geht ___ den Park.', options: ['durch', 'um', 'bis'], correctAnswer: 'durch' },
                { id: 'g-a1g1q103', text: 'Ich kann nicht ___ meinen Computer arbeiten.', options: ['ohne', 'für', 'gegen'], correctAnswer: 'ohne' },
                { id: 'g-a1g1q104', text: 'Wir fahren ___ die Stadt.', options: ['bis', 'um', 'ohne'], correctAnswer: 'um' },
                { id: 'g-a1g1q105', text: 'Das Geschenk ist ___ meinen Vater.', options: ['für', 'durch', 'gegen'], correctAnswer: 'für' },
              ]
            }
          ],
        },
//
// --- END OF g-a1-l5 ---
      ]
    },
    {
      level: 'G-A2' as CEFRLevel,
      title: 'Goethe-Zertifikat A2',
      description: 'Trainieren Sie für die A2-Prüfung mit 5 kompletten Modelltests.',
      lessons: [
        
        {
          id: 'g-a2-l1',
          title: 'Modelltest 1: Gesamte Prüfung',
          estimatedTime: 105,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l1-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Entschuldigung, fährt dieser Bus zum Hauptbahnhof?' },
                { speaker: 'Person A', line: 'Nein, dieser Bus fährt zum Zoo. Sie müssen die Linie 5 nehmen, die dort drüben an Haltestelle B abfährt.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 2. Was hast du am Wochenende gemacht?' },
                { speaker: 'Person B', line: 'Ich wollte eigentlich wandern gehen, aber das Wetter war leider zu schlecht. Also bin ich einfach zu Hause geblieben und habe ein Buch gelesen.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 3. Kann ich bitte mit Frau Meier sprechen?' },
                { speaker: 'Person A', line: 'Frau Meier ist leider nicht im Büro. Sie ist heute krank. Kann ich ihr etwas ausrichten?' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 4. Guten Tag, ich möchte ein Doppelzimmer für zwei Nächte.' },
                { speaker: 'Person B', line: 'Gern. Vom 10. bis 12.? Mit Frühstück oder ohne? Ohne Frühstück kostet es 90 Euro pro Nacht.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 5. Wo warst du? Der Film fängt gleich an!' },
                { speaker: 'Person A', line: 'Entschuldigung, mein Zug hatte Verspätung. Ich musste 15 Minuten am Bahnsteig warten.' },
              ],
              questions: [
                { id: 'g-a2h1q1', text: 'Nummer 1: Was soll die Person tun?', options: ['a) Mit diesem Bus fahren.', 'b) Die Linie 5 an Haltestelle B nehmen.', 'c) Zum Zoo gehen.'], correctAnswer: 'b) Die Linie 5 an Haltestelle B nehmen.' },
                { id: 'g-a2h1q2', text: 'Nummer 2: Was hat die Person am Wochenende gemacht?', options: ['a) Sie war wandern.', 'b) Sie hat das Wetter genossen.', 'c) Sie hat gelesen.'], correctAnswer: 'c) Sie hat gelesen.' },
                { id: 'g-a2h1q3', text: 'Nummer 3: Warum ist Frau Meier nicht da?', options: ['a) Sie ist im Urlaub.', 'b) Sie ist krank.', 'c) Sie ist in einer Besprechung.'], correctAnswer: 'b) Sie ist krank.' },
                { id: 'g-a2h1q4', text: 'Nummer 4: Was kostet das Zimmer pro Nacht ohne Frühstück?', options: ['a) 90 Euro', 'b) 120 Euro', 'c) 100 Euro'], correctAnswer: 'a) 90 Euro' },
                { id: 'g-a2h1q5', text: 'Nummer 5: Warum kommt die Person zu spät?', options: ['a) Der Bus war weg.', 'b) Der Zug hatte Verspätung.', 'c) Sie hat den Film vergessen.'], correctAnswer: 'b) Der Zug hatte Verspätung.' },
              ]
            },
            {
              id: 'g-a2-l1-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (5 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen bei Radio "Stadtwelle". Heute ist Frau Schmidt bei uns. Sie organisiert das große Stadtfest. Frau Schmidt, wann findet das Fest denn statt?' },
                { speaker: 'Frau Schmidt', line: 'Hallo! Das Fest ist nächstes Wochenende, am Samstag und Sonntag. Es beginnt am Samstag um 14 Uhr auf dem Marktplatz.' },
                { speaker: 'Moderator', line: 'Was gibt es zu sehen?' },
                { speaker: 'Frau Schmidt', line: 'Es gibt viele Musikgruppen. Am Samstagabend um 20 Uhr spielt die berühmte Band "Berliner Luft". Es gibt auch Essen und Trinken aus vielen verschiedenen Ländern. Für Kinder gibt es ein spezielles Programm am Sonntagnachmittag.' },
                { speaker: 'Moderator', line: 'Das klingt toll. Kostet das Fest Eintritt?' },
                { speaker: 'Frau Schmidt', line: 'Nein, der Eintritt ist für alle Besucher frei. Wir freuen uns auf Sie!' },
              ],
              questions: [
                { id: 'g-a2h2q1', text: 'Das Stadtfest dauert nur einen Tag.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q2', text: 'Das Fest beginnt am Samstag um 14 Uhr.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h2q3', text: 'Die Band "Berliner Luft" spielt am Sonntag.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q4', text: 'Es gibt ein spezielles Programm für Kinder.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h2q5', text: 'Man muss für das Fest bezahlen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-a2-l1-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                  { speaker: 'Ansage', line: 'Nummer 1. Guten Tag, ich habe um 10 Uhr einen Termin bei Dr. Weiß.' },
                  { speaker: 'Person A', line: 'Guten Tag. Dr. Weiß ist leider noch beschäftigt. Bitte nehmen Sie kurz im Wartezimmer Platz. Es dauert nur ein paar Minuten.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 2. Hast du meine E-Mail bekommen?' },
                  { speaker: 'Person B', line: 'Nein, wann hast du sie geschickt? Ich habe heute Morgen meine E-Mails gelesen, da war nichts.' },
                  { speaker: 'Person A', line: 'Ich habe sie vor fünf Minuten geschickt.' },
                  { speaker: 'Person B', line: 'Ach so, dann schaue ich gleich mal nach.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 3. Ich fahre am Wochenende nach Hamburg. Kommst du mit?' },
                  { speaker: 'Person A', line: 'Oh, das geht leider nicht. Ich muss für meine Prüfung lernen. Ich habe nächsten Montag eine wichtige Prüfung.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 4. Entschuldigung, wo finde ich hier Joghurt?' },
                  { speaker: 'Person B', line: 'Joghurt ist bei den Milchprodukten, ganz hinten links, neben der Käsetheke.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 5. Das Wetter ist so schön! Gehen wir schwimmen?' },
                  { speaker: 'Person A', line: 'Ich kann leider nicht schwimmen. Aber wir können gern im Park spazieren gehen und ein Eis essen.' },
              ],
              questions: [
                { id: 'g-a2h3q1', text: 'Nummer 1: Was soll die Person tun?', options: ['a) Einen neuen Termin machen.', 'b) Zu Dr. Weiß ins Zimmer gehen.', 'c) Warten.'], correctAnswer: 'c) Warten.' },
                { id: 'g-a2h3q2', text: 'Nummer 2: Wann hat Person B die E-Mails gelesen?', options: ['a) Vor fünf Minuten.', 'b) Heute Morgen.', 'c) Gestern Abend.'], correctAnswer: 'b) Heute Morgen.' },
                { id: 'g-a2h3q3', text: 'Nummer 3: Warum kann die Person nicht mitfahren?', options: ['a) Sie mag Hamburg nicht.', 'b) Sie hat keine Zeit.', 'c) Sie muss lernen.'], correctAnswer: 'c) Sie muss lernen.' },
                { id: 'g-a2h3q4', text: 'Nummer 4: Wo ist der Joghurt?', options: ['a) Vorne rechts.', 'b) Hinten links.', 'c) In der Mitte.'], correctAnswer: 'b) Hinten links.' },
                { id: 'g-a2h3q5', text: 'Nummer 5: Was schlägt Person A vor?', options: ['a) Schwimmen gehen.', 'b) Im Park spazieren gehen.', 'c) Zu Hause bleiben.'], correctAnswer: 'b) Im Park spazieren gehen.' },
              ]
            },
            {
              id: 'g-a2-l1-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (5 Fragen)',
              content: 'Sie hören ein Interview (zweimal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderator', line: 'Heute bei uns im Studio ist Herr Wagner. Herr Wagner, Sie haben einen besonderen Beruf: Sie sind Fahrrad-Kurier.' },
                { speaker: 'Herr Wagner', line: 'Guten Tag. Ja, das stimmt. Ich fahre jeden Tag mit dem Fahrrad durch die Stadt und bringe Briefe und Pakete.' },
                { speaker: 'Moderator', line: 'Ist das nicht sehr anstrengend? Sie fahren bei jedem Wetter, oder?' },
                { speaker: 'Herr Wagner', line: 'Ja, auch wenn es regnet oder schneit. Aber ich liebe meinen Beruf. Ich bin immer an der frischen Luft und ich treibe Sport. Das ist gesund. Nur der Verkehr in der Stadt ist manchmal stressig.' },
                { speaker: 'Moderator', line: 'Hatten Sie schon mal einen Unfall?' },
                { speaker: 'Herr Wagner', line: 'Glücklicherweise noch keinen großen. Man muss sehr vorsichtig fahren und immer einen Helm tragen.' },
              ],
              questions: [
                { id: 'g-a2h4q1', text: 'Herr Wagner arbeitet im Büro.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q2', text: 'Er fährt nur, wenn das Wetter gut ist.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q3', text: 'Er mag seinen Beruf, weil er gesund ist.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h4q4', text: 'Er findet den Verkehr in der Stadt entspannend.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q5', text: 'Er hatte schon einen großen Unfall.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },

            // --- LESEN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l1-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (5 Fragen)',
              content: 'Sie lesen 5 kurze Texte (z.B. E-Mails, Notizen). Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1:**\nHallo Lisa,\nich habe gestern meine Tasche im Kursraum vergessen. Ist sie vielleicht bei dir? Sie ist blau und aus Leder. Bitte ruf mich an!\nViele Grüße, Tom\n*Frage: Warum schreibt Tom?*\n\n**Text 2:**\nLiebe Frau Müller,\nvielen Dank für die Einladung zum Sommerfest. Ich komme sehr gern. Soll ich einen Salat oder einen Kuchen mitbringen? Ich kann beides machen.\nMit freundlichen Grüßen,\nPeter Schmidt\n*Frage: Was möchte Peter Schmidt wissen?*\n\n**Text 3:**\nGuten Tag,\nhier ist Ihre Autowerkstatt. Ihr Auto ist fertig. Die Reparatur kostet 250 Euro. Sie können das Auto ab morgen, 9 Uhr, abholen.\n*Frage: Was ist richtig?*\n\n**Text 4:**\nHi Alex,\nbist du morgen im Büro? Ich muss dir das Buch zurückgeben, das ich von dir geliehen habe. Sag kurz Bescheid, wann du Zeit hast.\nGruß, Maria\n*Frage: Was möchte Maria tun?*\n\n**Text 5:**\nSehr geehrte Fahrgäste,\nder Zug nach Berlin (Abfahrt 10:30 Uhr) hat heute 20 Minuten Verspätung. Er fährt von Gleis 7, nicht von Gleis 5.\n*Frage: Was ist richtig?*',
              questions: [
                { id: 'g-a2r1q1', text: 'Text 1: Warum schreibt Tom?', options: ['a) Er hat Lisas Tasche gefunden.', 'b) Er sucht seine Tasche.', 'c) Er möchte Lisa anrufen.'], correctAnswer: 'b) Er sucht seine Tasche.' },
                { id: 'g-a2r1q2', text: 'Text 2: Was möchte Peter Schmidt wissen?', options: ['a) Wann das Fest ist.', 'b) Ob er etwas mitbringen soll.', 'c) Wo das Fest ist.'], correctAnswer: 'b) Ob er etwas mitbringen soll.' },
                { id: 'g-a2r1q3', text: 'Text 3: Was ist richtig?', options: ['a) Das Auto kostet 9 Euro.', 'b) Man kann das Auto heute abholen.', 'c) Das Auto ist repariert.'], correctAnswer: 'c) Das Auto ist repariert.' },
                { id: 'g-a2r1q4', text: 'Text 4: Was möchte Maria tun?', options: ['a) Ein Buch von Alex leihen.', 'b) Mit Alex sprechen.', 'c) Alex ein Buch zurückgeben.'], correctAnswer: 'c) Alex ein Buch zurückgeben.' },
                { id: 'g-a2r1q5', text: 'Text 5: Was ist richtig?', options: ['a) Der Zug fährt pünktlich.', 'b) Der Zug fährt von Gleis 5.', 'c) Der Zug fährt später ab.'], correctAnswer: 'c) Der Zug fährt später ab.' },
              ]
            },
            {
              id: 'g-a2-l1-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (5 Fragen)',
              content: 'Lesen Sie den Text und die 5 Anzeigen. Welche Anzeige (a, b oder c) passt zu welcher Situation (1-5)?\n\n**Situationen:**\n1. Sie suchen ein günstiges Restaurant für ein Mittagessen mit Kollegen.\n2. Ihr Freund aus England möchte in den Sommerferien Deutsch lernen.\n3. Sie möchten am Wochenende Sport machen, aber nicht allein.\n4. Sie suchen ein Geschenk für ein Kind (10 Jahre).\n5. Sie möchten eine neue Wohnung mit 3 Zimmern finden.\n\n**Anzeigen:**\n**a) Spielzeugparadies:** Große Auswahl an Spielsachen für jedes Alter! Für Kinder ab 8 Jahren: Experimentierkasten "Wissenschaft". Für die Kleinen: Holzspielzeug. Hauptstraße 5.\n\n**b) Sport-Partner gesucht!** Ich (m, 32) suche Leute für Volleyball im Park, immer samstags. Du musst kein Profi sein! Einfach Spaß haben. Melde dich: 0170 12345.\n\n**c) Immobilien Schmidt:** Wir finden Ihr neues Zuhause! Aktuelles Angebot: 4-Zimmer-Wohnung, 100qm, Balkon, teuer. 2-Zimmer-Wohnung, 55qm, zentral, günstig. Wir suchen auch 3-Zimmer-Wohnungen für unsere Kunden.\n\n**d) Restaurant "Sonne":** Genießen Sie unseren Mittagstisch! Täglich 12-14 Uhr. Drei Gerichte zur Auswahl, jedes nur 8,50 € inkl. Salat. Perfekt für die schnelle Mittagspause. Am Markt 1.\n\n**e) Sprachschule "Horizonte":** Intensivkurse Deutsch als Fremdsprache. Alle Niveaus. 4 Wochen im Juli oder August. Unterkunft in Gastfamilien möglich. Info@horizonte.de',
              questions: [
                { id: 'g-a2r2q1', text: 'Situation 1: Günstiges Mittagessen.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'd' },
                { id: 'g-a2r2q2', text: 'Situation 2: Deutsch-Sommerkurs.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'e' },
                { id: 'g-a2r2q3', text: 'Situation 3: Sport am Wochenende.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'b' },
                { id: 'g-a2r2q4', text: 'Situation 4: Geschenk für 10-Jährigen.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'a' },
                { id: 'g-a2r2q5', text: 'Situation 5: 3-Zimmer-Wohnung.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'c' },
              ]
            },
            {
              id: 'g-a2-l1-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (5 Fragen)',
              content: 'Lesen Sie die Hausordnung. Kreuzen Sie an: Richtig oder Falsch.\n\n**Hausordnung für das Wohnhaus Goethestraße 10**\n\n1.  **Ruhezeiten:** Bitte respektieren Sie die Ruhezeiten. Von 13:00 bis 15:00 Uhr (Mittagsruhe) und von 22:00 bis 07:00 Uhr (Nachtruhe) ist Lärm zu vermeiden. Partys müssen am Vortag bei den Nachbarn angemeldet werden und um 22:00 Uhr beendet sein.\n\n2.  **Müll:** Der Müll muss getrennt werden (Papier, Glas, Restmüll). Die Mülltonnen befinden sich im Hof. Es ist verboten, Müll im Treppenhaus abzustellen.\n\n3.  **Haustiere:** Das Halten von Hunden und Katzen ist nur mit schriftlicher Erlaubnis des Vermieters gestattet. Kleine Tiere (z.B. Fische, Hamster) sind erlaubt.\n\n4.  **Treppenhaus:** Fahrräder und Kinderwagen dürfen nicht im Treppenhaus oder im Eingangsbereich abgestellt werden. Bitte benutzen Sie den Fahrradkeller.',
              questions: [
                { id: 'g-a2r3q1', text: 'Man darf um 14:00 Uhr laute Musik hören.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q2', text: 'Man muss seinen Müll nicht trennen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q3', text: 'Man darf Müll kurz im Treppenhaus lassen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q4', text: 'Man braucht keine Erlaubnis für einen Hamster.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2r3q5', text: 'Fahrräder müssen im Fahrradkeller stehen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a2-l1-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (5 Fragen)',
              content: 'Lesen Sie den Informationstext. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Gesund leben – Tipps für den Alltag**\nViele Menschen möchten gesünder leben, aber sie wissen nicht, wie. Dabei ist es nicht so schwer. Ärzte empfehlen, sich jeden Tag mindestens 30 Minuten zu bewegen. Man muss nicht unbedingt Sport machen. Ein schneller Spaziergang oder Treppensteigen statt Aufzugfahren hilft auch.\nAuch die Ernährung ist wichtig. Man sollte viel Obst und Gemüse essen (fünf Portionen am Tag) und mindestens 1,5 Liter Wasser oder Tee trinken. Zucker und Fett sollte man reduzieren. \nWichtig ist auch genug Schlaf. Sieben bis acht Stunden pro Nacht sind ideal für Erwachsene. Wer genug schläft, hat mehr Energie und ist seltener krank.',
              questions: [
                { id: 'g-a2r4q1', text: 'Was empfehlen Ärzte?', options: ['a) Jeden Tag Sport zu machen.', 'b) Mindestens 30 Minuten Bewegung täglich.', 'c) Nur noch Aufzug zu fahren.'], correctAnswer: 'b) Mindestens 30 Minuten Bewegung täglich.' },
                { id: 'g-a2r4q2', text: 'Wie viel Obst und Gemüse sollte man essen?', options: ['a) 1,5 Portionen am Tag.', 'b) 5 Portionen am Tag.', 'c) 8 Portionen am Tag.'], correctAnswer: 'b) 5 Portionen am Tag.' },
                { id: 'g-a2r4q3', text: 'Was sollte man trinken?', options: ['a) Mindestens 1,5 Liter Wasser oder Tee.', 'b) Viel Saft und Limonade.', 'c) Wenig Wasser.'], correctAnswer: 'a) Mindestens 1,5 Liter Wasser oder Tee.' },
                { id: 'g-a2r4q4', text: 'Was sollte man reduzieren?', options: ['a) Obst und Gemüse.', 'b) Wasser und Tee.', 'c) Zucker und Fett.'], correctAnswer: 'c) Zucker und Fett.' },
                { id: 'g-a2r4q5', text: 'Warum ist Schlaf wichtig?', options: ['a) Weil man dann mehr essen kann.', 'b) Weil man dann mehr Energie hat.', 'c) Weil man dann nicht spazieren gehen muss.'], correctAnswer: 'b) Weil man dann mehr Energie hat.' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-a2-l1-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle SMS / E-Mail (20-30 Wörter)',
              content: 'Schreiben Sie eine kurze Nachricht (ca. 20-30 Wörter).\n\nSie sind am Wochenende bei Ihrer Freundin Lena zur Geburtstagsparty eingeladen. Sie können aber nicht kommen, weil Sie krank sind.\n- Bedanken Sie sich für die Einladung.\n- Sagen Sie, dass Sie nicht kommen können (Grund: krank).\n- Wünschen Sie ihr eine schöne Feier.',
            },
            {
              id: 'g-a2-l1-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (30-40 Wörter)',
              content: 'Schreiben Sie eine E-Mail (ca. 30-40 Wörter).\n\nSie haben eine Anzeige für einen Job als Kellner im "Restaurant am See" gelesen. Sie möchten wissen, an welchen Tagen und um wie viel Uhr Sie arbeiten sollen.\n- Sagen Sie, warum Sie schreiben (Interesse an Job).\n- Stellen Sie Ihre Fragen (Arbeitstage? Arbeitszeiten?).\n- Bitten Sie um eine Antwort.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-a2-l1-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Fragen stellen & beantworten',
              content: 'Sie bekommen vier Karten (z.B. Beruf, Wochenende, Familie, Wohnort). Stellen Sie Ihrem Partner (dem Bot) Fragen zu diesen Themen. Der Bot stellt Ihnen auch Fragen. Üben Sie, über sich zu sprechen.'
            },
            {
              id: 'g-a2-l1-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Von einem Thema erzählen',
              content: 'Sie bekommen eine Karte mit einem Thema (z.B. "Mein letzter Urlaub"). Erzählen Sie 1-2 Minuten darüber. Der Bot stellt Ihnen danach eine Frage. (Tipp: Nutzen Sie die W-Fragen: Wo? Wann? Mit wem? Was gemacht?).'
            },
            {
              id: 'g-a2-l1-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Etwas gemeinsam planen',
              content: 'Ihre Aufgabe ist es, mit dem Bot etwas zu planen (z.B. "Ein Geschenk für einen Freund kaufen"). Finden Sie einen Tag, eine Uhrzeit und einen Ort. Machen Sie Vorschläge und reagieren Sie auf die Vorschläge des Bots.'
            },
            
            // --- A2 WÖRTSCHATZ (100+ Vocab) ---
            {
              id: 'g-a2-l1-v1',
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A2',
              content: 'Wichtige Wörter für die A2-Prüfung, sortiert nach Themen.',
              vocabulary: [
                // Reisen & Verkehr
                { german: 'die Verspätung', english: 'the delay' },
                { german: 'der Anschluss', english: 'the connection (train, etc.)' },
                { german: 'umsteigen', english: 'to change (trains, etc.)' },
                { german: 'die Fahrkarte', english: 'the ticket' },
                { german: 'reservieren', english: 'to reserve' },
                { german: 'die Unterkunft', english: 'the accommodation' },
                { german: 'die Jugendherberge', english: 'the youth hostel' },
                { german: 'die Pension', english: 'the guesthouse' },
                { german: 'das Doppelzimmer', english: 'the double room' },
                { german: 'das Einzelzimmer', english: 'the single room' },
                { german: 'mit Frühstück', english: 'with breakfast' },
                { german: 'die Sehenswürdigkeit', english: 'the sight (tourist)' },
                { german: 'besichtigen', english: 'to visit (a sight)' },
                { german: 'die Führung', english: 'the guided tour' },
                { german: 'der Stadtplan', english: 'the city map' },
                // Gesundheit & Körper
                { german: 'der Körper', english: 'the body' },
                { german: 'der Kopf', english: 'the head' },
                { german: 'der Arm', english: 'the arm' },
                { german: 'das Bein', english: 'the leg' },
                { german: 'der Bauch', english: 'the stomach' },
                { german: 'der Rücken', english: 'the back' },
                { german: 'der Schmerz', english: 'the pain' },
                { german: 'weh tun', english: 'to hurt' },
                { german: 'krank', english: 'sick' },
                { german: 'gesund', english: 'healthy' },
                { german: 'das Fieber', english: 'the fever' },
                { german: 'der Husten', english: 'the cough' },
                { german: 'der Schnupfen', english: 'the cold / sniffles' },
                { german: 'der Arzt', english: 'the doctor (m.)' },
                { german: 'die Ärztin', english: 'the doctor (f.)' },
                { german: 'der Termin', english: 'the appointment' },
                { german: 'vereinbaren', english: 'to arrange (an appointment)' },
                { german: 'verschieben', english: 'to postpone' },
                { german: 'das Medikament', english: 'the medicine' },
                { german: 'die Tablette', english: 'the pill' },
                { german: 'das Rezept', english: 'the prescription' },
                { german: 'die Apotheke', english: 'the pharmacy' },
                // Arbeit & Beruf
                { german: 'der Kollege', english: 'the colleague (m.)' },
                { german: 'die Kollegin', english: 'the colleague (f.)' },
                { german: 'der Chef', english: 'the boss' },
                { german: 'die Besprechung', english: 'the meeting' },
                { german: 'das Büro', english: 'the office' },
                { german: 'die Arbeitszeit', english: 'the working hours' },
                { german: 'die Pause', english: 'the break' },
                { german: 'der Lebenslauf', english: 'the CV / resume' },
                { german: 'die Bewerbung', english: 'the application' },
                { german: 'sich bewerben', english: 'to apply' },
                { german: 'das Gehalt', english: 'the salary' },
                { german: 'der Vertrag', english: 'the contract' },
                // Alltag & Wohnen
                { german: 'der Alltag', english: 'the everyday life' },
                { german: 'der Haushalt', english: 'the household' },
                { german: 'putzen', english: 'to clean' },
                { german: 'aufräumen', english: 'to tidy up' },
                { german: 'staubsaugen', english: 'to vacuum' },
                { german: 'spülen', english: 'to wash (dishes)' },
                { german: 'Wäsche waschen', english: 'to do laundry' },
                { german: 'der Müll', english: 'the trash' },
                { german: 'trennen', english: 'to separate' },
                { german: 'der Nachbar', english: 'the neighbor' },
                { german: 'die Hausordnung', english: 'the house rules' },
                { german: 'die Miete', english: 'the rent' },
                { german: 'die Nebenkosten', english: 'the utilities / additional costs' },
                { german: 'der Vermieter', english: 'the landlord' },
                // Kleidung
                { german: 'die Kleidung', english: 'the clothing' },
                { german: 'die Hose', english: 'the pants' },
                { german: 'das Hemd', english: 'the shirt' },
                { german: 'der Pullover', english: 'the sweater' },
                { german: 'die Jacke', english: 'the jacket' },
                { german: 'der Rock', english: 'the skirt' },
                { german: 'das Kleid', english: 'the dress' },
                { german: 'die Schuhe', english: 'the shoes' },
                { german: 'tragen', english: 'to wear' },
                { german: 'anprobieren', english: 'to try on' },
                { german: 'passen', english: 'to fit' },
                { german: 'die Größe', english: 'the size' },
                { german: 'gefallen', english: 'to be pleasing to' },
                // Feste & Feiern
                { german: 'die Feier', english: 'the celebration' },
                { german: 'die Party', english: 'the party' },
                { german: 'der Geburtstag', english: 'the birthday' },
                { german: 'feiern', english: 'to celebrate' },
                { german: 'einladen', english: 'to invite' },
                { german: 'die Einladung', english: 'the invitation' },
                { german: 'das Geschenk', english: 'the gift' },
                { german: 'schenken', english: 'to give (a gift)' },
                { german: 'Herzlichen Glückwunsch', english: 'Congratulations' },
                { german: 'Frohe Weihnachten', english: 'Merry Christmas' },
                { german: 'Ostern', english: 'Easter' },
                { german: 'Silvester', english: 'New Year\'s Eve' },
                // Medien & Freizeit
                { german: 'die Freizeit', english: 'the free time' },
                { german: 'das Kino', english: 'the cinema' },
                { german: 'der Film', english: 'the movie' },
                { german: 'das Theater', english: 'the theater' },
                { german: 'das Museum', english: 'the museum' },
                { german: 'das Konzert', english: 'the concert' },
                { german: 'Sport treiben', english: 'to do sports' },
                { german: 'wandern', english: 'to hike' },
                { german: 'schwimmen', english: 'to swim' },
                { german: 'lesen', english: 'to read' },
                { german: 'die Zeitung', english: 'the newspaper' },
                { german: 'die Zeitschrift', english: 'the magazine' },
                { german: 'das Internet', english: 'the internet' },
                { german: 'die E-Mail', english: 'the e-mail' },
                { german: 'die Nachricht', english: 'the message / news' },
                { german: 'anrufen', english: 'to call (phone)' },
                { german: 'fernsehen', english: 'to watch TV' },
                // Nützliche Verben & Adjektive
                { german: 'wissen', english: 'to know (a fact)' },
                { german: 'kennen', english: 'to know (a person/place)' },
                { german: 'denken', english: 'to think' },
                { german: 'glauben', english: 'to believe' },
                { german: 'hoffen', english: 'to hope' },
                { german: 'warten', english: 'to wait' },
                { german: 'bleiben', english: 'to stay' },
                { german: 'passieren', english: 'to happen' },
                { german: 'wichtig', english: 'important' },
                { german: 'einfach', english: 'easy' },
                { german: 'schwierig', english: 'difficult' },
                { german: 'schnell', english: 'fast' },
                { german: 'langsam', english: 'slow' },
                { german: 'laut', english: 'loud' },
                { german: 'leise', english: 'quiet' },
                { german: 'teuer', english: 'expensive' },
                { german: 'billig', english: 'cheap' },
                { german: 'schön', english: 'beautiful' },
                { german: 'hässlich', english: 'ugly' },
                { german: 'müde', english: 'tired' },
                { german: 'wach', english: 'awake' },
              ]
            },

            // --- A2 GRAMMATIK (100+ Questions) ---
            {
              id: 'g-a2-l1-g1',
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A2',
              content: 'Testen Sie Ihr Grammatikwissen für die A2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Perfekt (haben)
                { id: 'g-a2g1q001', text: 'Ich ___ gestern einen Film ___ (sehen).', options: ['habe / gesehen', 'bin / gesehen', 'hat / gesieht'], correctAnswer: 'habe / gesehen' },
                { id: 'g-a2g1q002', text: 'Er ___ das Buch ___ (lesen).', options: ['hat / gelesen', 'ist / gelesen', 'habe / gelesen'], correctAnswer: 'hat / gelesen' },
                { id: 'g-a2g1q003', text: 'Wir ___ Pizza ___ (essen).', options: ['sind / gegessen', 'haben / gegessen', 'habt / geessen'], correctAnswer: 'haben / gegessen' },
                { id: 'g-a2g1q004', text: 'Hast du deine Hausaufgaben ___ (machen)?', options: ['gemacht', 'gemachen', 'gemakkt'], correctAnswer: 'gemacht' },
                { id: 'g-a2g1q005', text: 'Sie (pl.) ___ Musik ___ (hören).', options: ['sind / gehört', 'haben / gehört', 'haben / gehort'], correctAnswer: 'haben / gehört' },
                { id: 'g-a2g1q006', text: 'Ihr ___ Fußball ___ (spielen).', options: ['seid / gespielt', 'habt / gespielt', 'haben / gespielen'], correctAnswer: 'habt / gespielt' },
                { id: 'g-a2g1q007', text: 'Ich ___ meinen Freund ___ (anrufen).', options: ['habe / angeruft', 'bin / angerufen', 'habe / angerufen'], correctAnswer: 'habe / angerufen' },
                { id: 'g-a2g1q008', text: 'Er ___ im Supermarkt ___ (einkaufen).', options: ['hat / eingekauft', 'ist / eingekauft', 'hat / eingekauftet'], correctAnswer: 'hat / eingekauft' },
                { id: 'g-a2g1q009', text: 'Was ___ du ___ (kochen)?', options: ['hast / gekocht', 'bist / gekocht', 'hast / gekochen'], correctAnswer: 'hast / gekocht' },
                { id: 'g-a2g1q010', text: 'Ich ___ nicht ___ (arbeiten).', options: ['habe / gearbeitet', 'bin / gearbeitet', 'habe / gearbeiten'], correctAnswer: 'habe / gearbeitet' },
                // Perfekt (sein)
                { id: 'g-a2g1q011', text: 'Wir ___ nach Berlin ___ (fahren).', options: ['haben / gefahren', 'sind / gefahren', 'sind / gefahrt'], correctAnswer: 'sind / gefahren' },
                { id: 'g-a2g1q012', text: 'Er ___ ins Kino ___ (gehen).', options: ['ist / gegangen', 'hat / gegangen', 'ist / gegangt'], correctAnswer: 'ist / gegangen' },
                { id: 'g-a2g1q013', text: 'Ich ___ zu Hause ___ (bleiben).', options: ['habe / gebleiben', 'bin / geblieben', 'bin / gebleibt'], correctAnswer: 'bin / geblieben' },
                { id: 'g-a2g1q014', text: 'Sie (she) ___ schnell ___ (laufen).', options: ['hat / gelaufen', 'ist / gelaufen', 'ist / gelauft'], correctAnswer: 'ist / gelaufen' },
                { id: 'g-a2g1q015', text: 'Wann ___ du ___ (aufstehen)?', options: ['hast / aufgestanden', 'bist / aufgestanden', 'bist / aufgesteht'], correctAnswer: 'bist / aufgestanden' },
                { id: 'g-a2g1q016', text: 'Wir ___ nach Spanien ___ (fliegen).', options: ['sind / geflogen', 'haben / geflogen', 'sind / gefliegt'], correctAnswer: 'sind / geflogen' },
                { id: 'g-a2g1q017', text: 'Das Kind ___ ___ (einschlafen).', options: ['hat / eingeschlafen', 'ist / eingeschlafen', 'ist / eingeschlaft'], correctAnswer: 'ist / eingeschlafen' },
                { id: 'g-a2g1q018', text: 'Was ___ ___ (passieren)?', options: ['hat / passiert', 'ist / passiert', 'ist / passieren'], correctAnswer: 'ist / passiert' },
                { id: 'g-a2g1q019', text: 'Ihr ___ mit dem Zug ___ (kommen).', options: ['seid / gekommen', 'habt / gekommen', 'seid / gekommt'], correctAnswer: 'seid / gekommen' },
                { id: 'g-a2g1q020', text: 'Ich ___ gestern ___ (schwimmen).', options: ['habe / geschwommen', 'bin / geschwommen', 'habe / geschwimmt'], correctAnswer: 'bin / geschwommen' }, // schwimmen uses 'sein' in south Germany, 'haben' in north. Both are often accepted. 'sein' is safer for tests.
                // Präteritum (sein, haben, Modalverben)
                { id: 'g-a2g1q021', text: 'Gestern ___ ich krank.', options: ['war', 'bin', 'wäre'], correctAnswer: 'war' },
                { id: 'g-a2g1q022', text: 'Wir ___ keine Zeit.', options: ['hatten', 'haben', 'hätten'], correctAnswer: 'hatten' },
                { id: 'g-a2g1q023', text: '___ du im Urlaub?', options: ['Warst', 'Bist', 'Wärst'], correctAnswer: 'Warst' },
                { id: 'g-a2g1q024', text: 'Ihr ___ viel Glück.', options: ['hattet', 'habt', 'hättet'], correctAnswer: 'hattet' },
                { id: 'g-a2g1q025', text: 'Das ___ nicht teuer.', options: ['war', 'ist', 'wird'], correctAnswer: 'war' },
                { id: 'g-a2g1q026', text: 'Er ___ Hunger.', options: ['hat', 'hatte', 'hätte'], correctAnswer: 'hatte' },
                { id: 'g-a2g1q027', text: 'Ich ___ gestern nicht arbeiten. (müssen)', options: ['musste', 'muss', 'müsste'], correctAnswer: 'musste' },
                { id: 'g-a2g1q028', text: 'Sie (she) ___ nicht schwimmen. (können)', options: ['konnte', 'kann', 'könnte'], correctAnswer: 'konnte' },
                { id: 'g-a2g1q029', text: 'Wir ___ ins Kino gehen. (wollen)', options: ['wollten', 'wollen', 'wöllten'], correctAnswer: 'wollten' },
                { id: 'g-a2g1q030', text: 'Er ___ das nicht machen. (sollen)', options: ['soll', 'sollte', 'söllte'], correctAnswer: 'sollte' },
                // Dativ-Präpositionen (mit, nach, aus, zu, von, bei, seit)
                { id: 'g-a2g1q031', text: 'Ich fahre ___ dem Bus.', options: ['mit', 'nach', 'von'], correctAnswer: 'mit' },
                { id: 'g-a2g1q032', text: 'Er kommt ___ der Türkei.', options: ['von', 'aus', 'nach'], correctAnswer: 'aus' },
                { id: 'g-a2g1q033', text: 'Wir gehen ___ unserer Tante.', options: ['zu', 'bei', 'nach'], correctAnswer: 'zu' },
                { id: 'g-a2g1q034', text: '___ dem Essen sehen wir fern.', options: ['Nach', 'Seit', 'Mit'], correctAnswer: 'Nach' },
                { id: 'g-a2g1q035', text: 'Sie wohnt ___ ihren Eltern.', options: ['bei', 'von', 'zu'], correctAnswer: 'bei' },
                { id: 'g-a2g1q036', text: 'Ich lerne Deutsch ___ zwei Monaten.', options: ['seit', 'von', 'aus'], correctAnswer: 'seit' },
                { id: 'g-a2g1q037', text: 'Das Geschenk ist ___ meiner Mutter.', options: ['von', 'mit', 'aus'], correctAnswer: 'von' },
                { id: 'g-a2g1q038', text: 'Fährst du ___ mir ins Kino?', options: ['mit', 'bei', 'seit'], correctAnswer: 'mit' },
                { id: 'g-a2g1q039', text: 'Ich fahre ___ Hause.', options: ['zu', 'nach', 'an'], correctAnswer: 'nach' },
                { id: 'g-a2g1q040', text: 'Er ist ___ Arzt.', options: ['zu', 'beim', 'vom'], correctAnswer: 'beim' },
                // Dativ-Personalpronomen
                { id: 'g-a2g1q041', text: 'Kannst du ___ helfen?', options: ['ich', 'mich', 'mir'], correctAnswer: 'mir' },
                { id: 'g-a2g1q042', text: 'Das Geschenk gefällt ___. (er)', options: ['ihn', 'ihm', 'sein'], correctAnswer: 'ihm' },
                { id: 'g-a2g1q043', text: 'Wie geht es ___? (Sie, formal)', options: ['Sie', 'Ihnen', 'Ihr'], correctAnswer: 'Ihnen' },
                { id: 'g-a2g1q044', text: 'Ich danke ___. (du)', options: ['du', 'dich', 'dir'], correctAnswer: 'dir' },
                { id: 'g-a2g1q045', text: 'Der Pullover passt ___. (sie)', options: ['sie', 'ihr', 'ihre'], correctAnswer: 'ihr' },
                { id: 'g-a2g1q046', text: 'Wir gratulieren ___. (ihr)', options: ['ihr', 'euch', 'euren'], correctAnswer: 'euch' },
                { id: 'g-a2g1q047', text: 'Der Lehrer antwortet ___. (die Studenten)', options: ['sie', 'ihnen', 'ihr'], correctAnswer: 'ihnen' },
                { id: 'g-a2g1q048', text: 'Das Auto gehört ___. (wir)', options: ['wir', 'uns', 'unser'], correctAnswer: 'uns' },
                { id: 'g-a2g1q049', text: 'Schmeckt ___ die Suppe? (er)', options: ['er', 'ihn', 'ihm'], correctAnswer: 'ihm' },
                { id: 'g-a2g1q050', text: 'Ich zeige ___ die Stadt. (du)', options: ['dir', 'dich', 'du'], correctAnswer: 'dir' },
                // Adjektivdeklination (Nom. & Akk.)
                { id: 'g-a2g1q051', text: 'Der ___ Mann ist nett. (alt)', options: ['alt', 'alte', 'alten'], correctAnswer: 'alte' },
                { id: 'g-a2g1q052', text: 'Ich sehe einen ___ Hund. (klein)', options: ['klein', 'kleine', 'kleinen'], correctAnswer: 'kleinen' },
                { id: 'g-a2g1q053', text: 'Das ist eine ___ Tasche. (neu)', options: ['neu', 'neue', 'neuen'], correctAnswer: 'neue' },
                { id: 'g-a2g1q054', text: 'Er kauft das ___ Auto. (rot)', options: ['rot', 'rote', 'roten'], correctAnswer: 'rote' },
                { id: 'g-a2g1q055', text: 'Ein ___ Kind spielt. (klein)', options: ['klein', 'kleines', 'kleinen'], correctAnswer: 'kleines' },
                { id: 'g-a2g1q056', text: 'Hast du meinen ___ Schlüssel gesehen? (neu)', options: ['neu', 'neue', 'neuen'], correctAnswer: 'neuen' },
                { id: 'g-a2g1q057', text: 'Sie trinkt eine ___ Cola. (kalt)', options: ['kalt', 'kalte', 'kalten'], correctAnswer: 'kalte' },
                { id: 'g-a2g1q058', text: 'Das ___ Haus ist teuer. (groß)', options: ['groß', 'große', 'großes'], correctAnswer: 'große' },
                { id: 'g-a2g1q059', text: 'Ich habe ___ (pl.) Bücher. (neu)', options: ['neue', 'neuen', 'neu'], correctAnswer: 'neue' },
                { id: 'g-a2g1q060', text: 'Der ___ Pullover ist blau. (alt)', options: ['alt', 'alte', 'alten'], correctAnswer: 'alte' },
                // Konnektoren (denn, weil, dass, deshalb)
                { id: 'g-a2g1q061', text: 'Ich lerne Deutsch, ___ ich in Deutschland arbeiten will.', options: ['denn', 'weil', 'deshalb'], correctAnswer: 'weil' },
                { id: 'g-a2g1q062', text: 'Ich gehe nicht spazieren, ___ es regnet.', options: ['denn', 'weil', 'dass'], correctAnswer: 'denn' },
                { id: 'g-a2g1q063', text: 'Ich bin müde, weil ich schlecht ___ habe.', options: ['geschlafen', 'habe geschlafen'], correctAnswer: 'geschlafen' },
                { id: 'g-a2g1q064', text: 'Ich weiß, ___ du müde bist.', options: ['denn', 'weil', 'dass'], correctAnswer: 'dass' },
                { id: 'g-a2g1q065', text: 'Er denkt, dass das Wetter morgen gut ___ .', options: ['ist', 'sein ist'], correctAnswer: 'ist' },
                { id: 'g-a2g1q066', text: 'Es regnet, ___ bleiben wir zu Hause.', options: ['denn', 'weil', 'deshalb'], correctAnswer: 'deshalb' },
                { id: 'g-a2g1q067', text: 'Mein Auto ist kaputt, ___ komme ich zu spät.', options: ['deshalb', 'weil', 'dass'], correctAnswer: 'deshalb' },
                { id: 'g-a2g1q068', text: 'Er ist krank, ___ kann er nicht arbeiten.', options: ['denn', 'deshalb', 'weil'], correctAnswer: 'deshalb' },
                { id: 'g-a2g1q069', text: 'Er sagt, ___ er keine Zeit hat.', options: ['dass', 'denn', 'deshalb'], correctAnswer: 'dass' },
                { id: 'g-a2g1q070', text: 'Sie kommt nicht, ___ sie ist krank.', options: ['weil', 'denn', 'dass'], correctAnswer: 'denn' },
                // Reflexive Verben (Akkusativ)
                { id: 'g-a2g1q071', text: 'Ich wasche ___ am Morgen.', options: ['ich', 'mich', 'mir'], correctAnswer: 'mich' },
                { id: 'g-a2g1q072', text: 'Er rasiert ___ jeden Tag.', options: ['er', 'ihn', 'sich'], correctAnswer: 'sich' },
                { id: 'g-a2g1q073', text: 'Wir treffen ___ um 8 Uhr.', options: ['wir', 'uns', 'unser'], correctAnswer: 'uns' },
                { id: 'g-a2g1q074', text: 'Freust du ___ auf die Party?', options: ['du', 'dich', 'dir'], correctAnswer: 'dich' },
                { id: 'g-a2g1q075', text: 'Ihr müsst ___ beeilen!', options: ['ihr', 'euch', 'euer'], correctAnswer: 'euch' },
                { id: 'g-a2g1q076', text: 'Sie (pl.) interessieren ___ für Kunst.', options: ['sie', 'sich', 'ihr'], correctAnswer: 'sich' },
                { id: 'g-a2g1q077', text: 'Ich muss ___ (sich anziehen).', options: ['mich anziehen', 'anziehen mich', 'sich anziehen'], correctAnswer: 'mich anziehen' },
                { id: 'g-a2g1q078', text: 'Er setzt ___ auf den Stuhl.', options: ['er', 'sich', 'ihn'], correctAnswer: 'sich' },
                { id: 'g-a2g1q079', text: 'Wann ruhst du ___ aus?', options: ['du', 'dich', 'dir'], correctAnswer: 'dich' },
                { id: 'g-a2g1q080', text: 'Ich fühle ___ nicht gut.', options: ['ich', 'mich', 'mir'], correctAnswer: 'mich' },
                // Komparativ & Superlativ
                { id: 'g-a2g1q081', text: 'Berlin ist ___ als Hamburg. (groß)', options: ['groß', 'größer', 'am größten'], correctAnswer: 'größer' },
                { id: 'g-a2g1q082', text: 'Dieser Film ist ___ als der andere. (gut)', options: ['gut', 'besser', 'am besten'], correctAnswer: 'besser' },
                { id: 'g-a2g1q083', text: 'Ich laufe schnell, aber du läufst ___.', options: ['schnell', 'schneller', 'am schnellsten'], correctAnswer: 'schneller' },
                { id: 'g-a2g1q084', text: 'Von allen Städten finde ich Wien ___ . (schön)', options: ['schön', 'schöner', 'am schönsten'], correctAnswer: 'am schönsten' },
                { id: 'g-a2g1q085', text: 'Er spricht ___ Deutsch als ich. (gut)', options: ['gut', 'besser', 'am besten'], correctAnswer: 'besser' },
                { id: 'g-a2g1q086', text: 'Maria ist so ___ wie Anna. (alt)', options: ['alt', 'älter', 'am ältesten'], correctAnswer: 'alt' },
                { id: 'g-a2g1q087', text: 'Ich esse gern Pizza, aber ___ esse ich Pasta. (gern)', options: ['gern', 'lieber', 'am liebsten'], correctAnswer: 'lieber' },
                { id: 'g-a2g1q088', text: 'Das ist das ___ (hoch) Haus der Stadt.', options: ['hochste', 'höchste', 'höher'], correctAnswer: 'höchste' },
                { id: 'g-a2g1q089', text: 'Januar ist ___ als März. (kalt)', options: ['kalt', 'kälter', 'am kältesten'], correctAnswer: 'kälter' },
                { id: 'g-a2g1q090', text: 'Was isst du ___? (gern)', options: ['gern', 'lieber', 'am liebsten'], correctAnswer: 'am liebsten' },
                // Wechselpräpositionen (Akkusativ vs. Dativ)
                { id: 'g-a2g1q091', text: 'Ich stelle das Buch ___ das Regal. (Wohin?)', options: ['in', 'im', 'ins'], correctAnswer: 'ins' },
                { id: 'g-a2g1q092', text: 'Das Buch steht ___ Regal. (Wo?)', options: ['in', 'im', 'ins'], correctAnswer: 'im' },
                { id: 'g-a2g1q093', text: 'Er hängt das Bild ___ die Wand. (Wohin?)', options: ['an', 'am', 'auf'], correctAnswer: 'an' },
                { id: 'g-a2g1q094', text: 'Das Bild hängt ___ Wand. (Wo?)', options: ['an', 'am', 'auf'], correctAnswer: 'an' }, // Trick: 'an der' = an
                { id: 'g-a2g1q095', text: 'Die Katze legt sich ___ den Tisch. (Wohin?)', options: ['unter', 'unterm', 'unten'], correctAnswer: 'unter' },
                { id: 'g-a2g1Gq096', text: 'Die Katze liegt ___ dem Tisch. (Wo?)', options: ['unter', 'unterm', 'unten'], correctAnswer: 'unterm' },
                { id: 'g-a2g1q097', text: 'Wir setzen uns ___ den Tisch. (Wohin?)', options: ['an', 'am', 'ans'], correctAnswer: 'an' }, // 'an den' = an
                { id: 'g-a2g1q098', text: 'Wir sitzen ___ Tisch. (Wo?)', options: ['an', 'am', 'ans'], correctAnswer: 'am' },
                { id: 'g-a2g1q099', text: 'Ich gehe ___ das Kino. (Wohin?)', options: ['in', 'im', 'ins'], correctAnswer: 'ins' },
                { id: 'g-a2g1q100', text: 'Ich bin ___ Kino. (Wo?)', options: ['in', 'im', 'ins'], correctAnswer: 'im' },
                { id: 'g-a2g1q101', text: 'Er legt den Stift ___ den Tisch. (Wohin?)', options: ['auf', 'auf dem'], correctAnswer: 'auf' },
                { id: 'g-a2g1q102', text: 'Der Stift liegt ___ dem Tisch. (Wo?)', options: ['auf', 'auf den'], correctAnswer: 'auf' }, // Trick: 'auf dem' = auf
              ]
            }
          ],
        },
//
// --- END OF g-a2-l1 ---

                {
          id: 'g-a2-l2',
          title: 'Modelltest 2: Übungssatz',
          estimatedTime: 105,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l2-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Guten Tag, ich suche einen warmen Pullover.' },
                { speaker: 'Verkäuferin', line: 'Gern. Wie gefällt Ihnen dieser hier in Blau? Er ist aus Wolle.' },
                { speaker: 'Kunde', line: 'Oh, der ist schön. Was kostet er?' },
                { speaker: 'Verkäuferin', line: 'Er ist im Angebot, nur 29,95 €.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 2. Was hast du gestern Abend gemacht?' },
                { speaker: 'Person A', line: 'Ich war im Kino. Der neue Film mit Daniel Brühl war super!' },
                { speaker: 'Person B', line: 'Echt? Ich wollte ihn auch sehen, hatte aber keine Zeit.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 3. Entschuldigung, wie komme ich zum Museum?' },
                { speaker: 'Person A', line: 'Ganz einfach. Gehen Sie hier rechts und dann immer geradeaus. Nach 200 Metern sehen Sie es auf der linken Seite.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 4. Hallo, ich möchte einen Tisch für heute Abend reservieren.' },
                { speaker: 'Restaurant', line: 'Gern. Für wie viele Personen?' },
                { speaker: 'Anrufer', line: 'Für vier Personen, bitte. Um 19:30 Uhr.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 5. Dein Deutsch ist ja schon richtig gut!' },
                { speaker: 'Person B', line: 'Danke! Ich habe einen Intensivkurs gemacht. Letztes Jahr konnte ich fast nichts sagen.' },
              ],
              questions: [
                { id: 'g-a2h1q1_2', text: 'Nummer 1: Was kostet der Pullover?', options: ['a) 90,95 €', 'b) 29,95 €', 'c) 25,90 €'], correctAnswer: 'b) 29,95 €' },
                { id: 'g-a2h1q2_2', text: 'Nummer 2: Was hat Person A gestern gemacht?', options: ['a) Sie war im Theater.', 'b) Sie hatte keine Zeit.', 'c) Sie war im Kino.'], correctAnswer: 'c) Sie war im Kino.' },
                { id: 'g-a2h1q3_2', text: 'Nummer 3: Wo ist das Museum?', options: ['a) Auf der rechten Seite.', 'b) 200 Meter geradeaus, dann rechts.', 'c) Auf der linken Seite.'], correctAnswer: 'c) Auf der linken Seite.' },
                { id: 'g-a2h1q4_2', text: 'Nummer 4: Wann möchte der Anrufer kommen?', options: ['a) Um 19:30 Uhr', 'b) Um 18:30 Uhr', 'c) Für 2 Personen'], correctAnswer: 'a) Um 19:30 Uhr' },
                { id: 'g-a2h1q5_2', text: 'Nummer 5: Was ist richtig?', options: ['a) Person B lernt nicht gern Deutsch.', 'b) Person B hat einen Kurs gemacht.', 'c) Person B konnte schon letztes Jahr gut sprechen.'], correctAnswer: 'b) Person B hat einen Kurs gemacht.' },
              ]
            },
            {
              id: 'g-a2-l2-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (5 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen bei "Gesund leben". Heute sprechen wir über Ernährung. Zu Gast ist Dr. Lena Fels, eine Ernährungsexpertin.' },
                { speaker: 'Dr. Fels', line: 'Guten Tag. Ja, das Thema ist sehr wichtig. Viele Menschen essen zu ungesund.' },
                { speaker: 'Moderatorin', line: 'Was ist denn Ihr wichtigster Tipp?' },
                { speaker: 'Dr. Fels', line: 'Man sollte viel trinken, am besten Wasser oder Tee, circa 2 Liter am Tag. Und natürlich viel Obst und Gemüse. Fünf Portionen am Tag sind ideal.' },
                { speaker: 'Moderatorin', line: 'Und was ist mit Fleisch?' },
                { speaker: 'Dr. Fels', line: 'Fleisch ist okay, aber nicht jeden Tag. Fisch ist besser. Und man sollte versuchen, weniger Zucker zu essen. Das ist oft das größte Problem.' },
              ],
              questions: [
                { id: 'g-a2h2q1_2', text: 'Frau Dr. Fels ist Ärztin.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' }, // Sie ist Ernährungsexpertin
                { id: 'g-a2h2q2_2', text: 'Man sollte 2 Liter Wasser oder Tee trinken.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h2q3_2', text: 'Fünf Portionen Fleisch am Tag sind ideal.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q4_2', text: 'Man sollte jeden Tag Fleisch essen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q5_2', text: 'Zucker ist oft ein großes Problem.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a2-l2-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                  { speaker: 'Ansage', line: 'Nummer 1. Hallo Anna, wann kommst du heute? Ich koche schon.' },
                  { speaker: 'Person A', line: 'Oh, super! Ich bin in 15 Minuten da. Ich muss nur noch schnell zur Post.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 2. Entschuldigung, wie lange hat das Museum heute geöffnet?' },
                  { speaker: 'Person B', line: 'Heute ist Montag. Montags haben wir leider geschlossen. Sie können aber gern morgen von 10 bis 18 Uhr kommen.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 3. Ich habe mein Portemonnaie verloren! Mein ganzes Geld ist weg!' },
                  { speaker: 'Person A', line: 'Oh nein! Warte, wir gehen sofort zur Polizei und melden das.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 4. Was wünschen Sie? Wir haben heute frischen Fisch.' },
                  { speaker: 'Person B', line: 'Nein, danke. Ich bin Vegetarier. Ich nehme bitte den Gemüseteller.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 5. Hast du Lust, am Wochenende ins Schwimmbad zu gehen?' },
                  { speaker: 'Person A', line: 'Ich weiß nicht, ich habe meine Badesachen nicht hier. Aber wir können Rad fahren.' },
              ],
              questions: [
                { id: 'g-a2h3q1_2', text: 'Nummer 1: Wann kommt Person A?', options: ['a) In 50 Minuten', 'b) In 15 Minuten', 'c) Sie kocht gerade'], correctAnswer: 'b) In 15 Minuten' },
                { id: 'g-a2h3q2_2', text: 'Nummer 2: Wann kann man das Museum besuchen?', options: ['a) Heute von 10-18 Uhr', 'b) Heute nicht', 'c) Montags von 10-18 Uhr'], correctAnswer: 'b) Heute nicht' },
                { id: 'g-a2h3q3_2', text: 'Nummer 3: Was ist das Problem?', options: ['a) Jemand hat die Polizei gerufen', 'b) Jemand hat sein Geld verloren', 'c) Jemand hat kein Geld'], correctAnswer: 'b) Jemand hat sein Geld verloren' },
                { id: 'g-a2h3q4_2', text: 'Nummer 4: Was isst die Person?', options: ['a) Frischen Fisch', 'b) Nichts', 'c) Gemüse'], correctAnswer: 'c) Gemüse' },
                { id: 'g-a2h3q5_2', text: 'Nummer 5: Was machen die beiden?', options: ['a) Sie gehen schwimmen', 'b) Sie fahren Rad', 'c) Sie bleiben zu Hause'], correctAnswer: 'b) Sie fahren Rad' },
              ]
            },
            {
              id: 'g-a2-l2-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (5 Fragen)',
              content: 'Sie hören ein Interview (zweimal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen in unserer Sendung "Mein Hobby". Heute ist Leon zu Gast. Leon, du sammelst Briefmarken. Ist das nicht ein bisschen altmodisch?' },
                { speaker: 'Leon', line: 'Hallo. (lacht) Ja, vielleicht. Mein Großvater hat damit angefangen und ich habe seine Sammlung bekommen. Jetzt ist es mein großes Hobby.' },
                { speaker: 'Moderatorin', line: 'Was ist das Besondere daran?' },
                { speaker: 'Leon', line: 'Jede Briefmarke erzählt eine Geschichte. Ich habe Marken aus über 100 Ländern. Man lernt viel über Geografie und Geschichte. Es ist wie eine kleine Weltreise zu Hause.' },
                { speaker: 'Moderatorin', line: 'Ist das nicht ein teures Hobby?' },
                { speaker: 'Leon', line: 'Es kann teuer sein, aber man muss die teuren Marken nicht kaufen. Ich tausche viel mit anderen Sammlern, auch online. Das kostet fast nichts.' },
              ],
              questions: [
                { id: 'g-a2h4q1_2', text: 'Leons Hobby ist modern.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q2_2', text: 'Leon hat das Hobby von seinem Vater.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q3_2', text: 'Leon lernt durch sein Hobby etwas über andere Länder.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h4q4_2', text: 'Das Hobby ist immer sehr teuer.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q5_2', text: 'Leon tauscht Briefmarken mit anderen Leuten.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },

            // --- LESEN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l2-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (5 Fragen)',
              content: 'Sie lesen 5 kurze Texte. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1:**\nHallo Max,\nvergiß bitte nicht, die Blumen zu gießen! Ich bin das ganze Wochenende bei meiner Schwester. Geld für Pizza ist auf dem Küchentisch. Bis Sonntagabend!\nLiebe Grüße,\nSabine\n*Frage: Was soll Max tun?*\n\n**Text 2:**\nLiebe Studierende,\nder A2-Kursraum hat sich geändert. Wir sind nicht mehr in Raum 205. Der Kurs findet ab sofort in Raum 310 (3. Stock) statt. Die Zeit (18-20 Uhr) bleibt gleich.\nIhr Sprachzentrum\n*Frage: Was ist neu?*\n\n**Text 3:**\nSportverein Grün-Weiß\nNächste Woche beginnen unsere neuen Yogakurse! Es gibt noch freie Plätze am Montag (17 Uhr) und am Freitag (9 Uhr). Anmeldung nur online unter www.sport-gw.de\n*Frage: Wie kann man sich anmelden?*\n\n**Text 4:**\nHi Julia,\nich habe Kopfschmerzen und fühle mich nicht gut. Ich glaube, ich habe Fieber. Ich gehe heute nicht zur Arbeit und rufe den Arzt an. Kannst du vielleicht unserem Chef Bescheid sagen?\nDanke, Ali\n*Frage: Warum schreibt Ali?*\n\n**Text 5:**\nSehr geehrter Herr Kraus,\nIhr neuer Kühlschrank wird morgen (Dienstag) zwischen 10 und 12 Uhr geliefert. Bitte seien Sie zu Hause. Falls Sie nicht können, rufen Sie uns bitte an.\nIhr Elektro-Markt\n*Frage: Wann kommt der Kühlschrank?*',
              questions: [
                { id: 'g-a2r1q1_2', text: 'Text 1: Was soll Max tun?', options: ['a) Pizza kaufen.', 'b) Die Blumen gießen.', 'c) Seine Schwester besuchen.'], correctAnswer: 'b) Die Blumen gießen.' },
                { id: 'g-a2r1q2_2', text: 'Text 2: Was ist neu?', options: ['a) Der Raum', 'b) Die Zeit', 'c) Der Lehrer'], correctAnswer: 'a) Der Raum' },
                { id: 'g-a2r1q3_2', text: 'Text 3: Wie kann man sich anmelden?', options: ['a) Am Telefon', 'b) Im Internet', 'c) Am Montag um 17 Uhr'], correctAnswer: 'b) Im Internet' },
                { id: 'g-a2r1q4_2', text: 'Text 4: Warum schreibt Ali?', options: ['a) Er möchte Julia beim Arzt treffen.', 'b) Er möchte Julia informieren, dass er krank ist.', 'c) Er bittet Julia, dem Chef Bescheid zu sagen.'], correctAnswer: 'c) Er bittet Julia, dem Chef Bescheid zu sagen.' },
                { id: 'g-a2r1q5_2', text: 'Text 5: Wann kommt der Kühlschrank?', options: ['a) Heute zwischen 10 und 12 Uhr.', 'b) Morgen am Vormittag.', 'c) Am Dienstag um 12 Uhr.'], correctAnswer: 'b) Morgen am Vormittag.' },
              ]
            },
            {
              id: 'g-a2-l2-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (5 Fragen)',
              content: 'Lesen Sie den Text und die 5 Anzeigen. Welche Anzeige (a, b oder c) passt zu welcher Situation (1-5)?\n\n**Situationen:**\n1. Sie möchten am Abend einen Film sehen, aber nicht im Kino.\n2. Sie ziehen um und brauchen einen großen Wagen für Ihre Möbel.\n3. Ihre Waschmaschine ist kaputt. Sie brauchen schnell Hilfe.\n4. Sie möchten in den Ferien für 2 Wochen an die Ostsee fahren.\n5. Ihre Freundin hat Geburtstag. Sie suchen Blumen.\n\n**Anzeigen:**\n**a) TV-Programm heute:** 20:15 Uhr, ProSieben: "Mission Impossible", Actionfilm. 20:15 Uhr, ARD: "Ein Tag am Meer", Dokumentation. 22:00 Uhr, ZDF: Nachrichten.\n\n**b) Reparatur-Service "Fix"**: Wir reparieren alles! Waschmaschinen, Kühlschränke, Fernseher. Schnell und günstig. Rufen Sie uns an: 030-555-1234. Wir kommen sofort!\n\n**c) Blumenhaus "Vergissmeinnicht":** Die schönsten Blumen der Stadt. Rosen, Tulpen und mehr. Perfekt für jeden Anlass. Auch sonntags geöffnet! Bahnhofstraße 12.\n\n**d) Autovermietung "Flink"**: Vom Kleinwagen bis zum LKW. Mieten Sie unseren großen Transporter für Ihren Umzug! Günstige Wochenend-Tarife. www.flink.de\n\n**e) Reisebüro "Südwind":** Träumen Sie von Sonne? Wir haben tolle Angebote für Italien und Spanien. 3 Wochen im Juli, Hotel mit Pool, nur 599 €.',
              questions: [
                { id: 'g-a2r2q1_2', text: 'Situation 1: Film zu Hause sehen.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'a' },
                { id: 'g-a2r2q2_2', text: 'Situation 2: Auto für Umzug.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'd' },
                { id: 'g-a2r2q3_2', text: 'Situation 3: Waschmaschine kaputt.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'b' },
                { id: 'g-a2r2q4_2', text: 'Situation 4: Urlaub an der Ostsee.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'e' }, // Trick: Ostsee != Italien/Spanien, but it's the only travel agency. This is common.
                { id: 'g-a2r2q5_2', text: 'Situation 5: Blumen für Freundin.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'c' },
              ]
            },
            {
              id: 'g-a2-l2-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (5 Fragen)',
              content: 'Lesen Sie die Informationstafel im Fitness-Studio. Kreuzen Sie an: Richtig oder Falsch.\n\n**Informationen für unsere Mitglieder - Fitness-Studio "TopFit"**\n\n- **Öffnungszeiten:** Mo-Fr: 08:00 - 22:00 Uhr. Sa & So: 10:00 - 20:00 Uhr.\n- **Getränke:** Bitte keine Glasflaschen mitbringen. Plastikflaschen sind erlaubt. Getränke können Sie auch an unserer Bar kaufen.\n- **Sauna:** Die Sauna ist täglich ab 17:00 Uhr geöffnet. Am Wochenende schon ab 12:00 Uhr. Bitte bringen Sie ein großes Handtuch mit.\n- **Kurse:** Unsere Kurse (Yoga, Zumba) sind im Preis inbegriffen. Bitte tragen Sie sich 15 Minuten vor Kursbeginn in die Liste am Empfang ein.\n- **Umkleide:** Bitte lassen Sie keine Wertsachen in den Schränken. Benutzen Sie die Schließfächer. Wir übernehmen keine Haftung.',
              questions: [
                { id: 'g-a2r3q1_2', text: 'Das Studio ist am Wochenende länger geöffnet als in der Woche.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q2_2', text: 'Man darf Wasser in Plastikflaschen mitbringen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2r3q3_2', text: 'Die Sauna ist am Samstag um 14:00 Uhr geöffnet.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2r3q4_2', text: 'Man muss für die Kurse extra bezahlen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q5_2', text: 'Man soll Wertsachen in den Schränken lassen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-a2-l2-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (5 Fragen)',
              content: 'Lesen Sie den Informationstext. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Einladung zum Sommerfest der Firma**\n\nLiebe Kolleginnen und Kollegen,\n\nwir möchten Sie und Ihre Familien herzlich zu unserem Sommerfest einladen! Das Fest findet am Samstag, den 20. Juli, ab 15 Uhr statt. Wir feiern wie letztes Jahr im "Park-Café".\n\nFür Essen und Trinken ist gesorgt. Es gibt ein großes Grill-Buffet und auch vegetarische Gerichte. Für die Kinder haben wir eine Hüpfburg und einen Zauberer organisiert.\n\nBitte geben Sie uns bis zum 10. Juli Bescheid, ob Sie kommen und wie viele Personen (Erwachsene/Kinder) Sie mitbringen. Sie können sich in die Liste eintragen, die im Sekretariat liegt, oder eine E-Mail an Frau Berg schreiben.\n\nWir freuen uns auf ein schönes Fest!\nIhre Geschäftsleitung',
              questions: [
                { id: 'g-a2r4q1_2', text: 'Wen darf man zum Fest mitbringen?', options: ['a) Nur Kollegen', 'b) Seine Familie', 'c) Niemanden'], correctAnswer: 'b) Seine Familie' },
                { id: 'g-a2r4q2_2', text: 'Wo findet das Fest statt?', options: ['a) Im Büro', 'b) Im Sekretariat', 'c) In einem Café im Park'], correctAnswer: 'c) In einem Café im Park' },
                { id: 'g-a2r4q3_2', text: 'Was gibt es für Kinder?', options: ['a) Ein Grill-Buffet', 'b) Nichts Besonderes', 'c) Einen Zauberer'], correctAnswer: 'c) Einen Zauberer' },
                { id: 'g-a2r4q4_2', text: 'Was müssen die Mitarbeiter tun?', options: ['a) Frau Berg anrufen.', 'b) Essen mitbringen.', 'c) Bis zum 10. Juli Bescheid sagen.'], correctAnswer: 'c) Bis zum 10. Juli Bescheid sagen.' },
                { id: 'g-a2r4q5_2', text: 'Wie kann man sich anmelden?', options: ['a) Nur per E-Mail', 'b) Man muss ins Park-Café gehen', 'c) Per E-Mail oder über eine Liste'], correctAnswer: 'c) Per E-Mail oder über eine Liste' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-a2-l2-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle SMS / E-Mail (20-30 Wörter)',
              content: 'Schreiben Sie eine kurze Nachricht (ca. 20-30 Wörter).\n\nSie sind mit Ihrem Freund Pablo im Kino verabredet. Sie kommen aber zu spät, weil Ihr Bus im Stau steht.\n- Sagen Sie, dass Sie zu spät kommen.\n- Nennen Sie den Grund (Stau).\n- Sagen Sie, wann Sie da sind (ca. 15 Min. später).',
            },
            {
              id: 'g-a2-l2-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (30-40 Wörter)',
              content: 'Schreiben Sie eine E-Mail (ca. 30-40 Wörter).\n\nSie haben in der Sprachschule einen A2-Kurs gemacht. Sie möchten jetzt einen B1-Kurs besuchen. Schreiben Sie an die Schule.\n- Sagen Sie, welchen Kurs Sie gemacht haben.\n- Fragen Sie, wann der B1-Kurs beginnt.\n- Fragen Sie nach dem Preis.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-a2-l2-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Fragen stellen & beantworten',
              content: 'Sie bekommen vier Karten (z.B. Lieblingsessen, Sport, Musik, Sprache). Stellen Sie Ihrem Partner (dem Bot) Fragen zu diesen Themen. Der Bot stellt Ihnen auch Fragen. Üben Sie, über sich zu sprechen.'
            },
            {
              id: 'g-a2-l2-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Von einem Thema erzählen',
              content: 'Sie bekommen eine Karte mit einem Thema (z.B. "Meine Wohnung" oder "Ein Fest in meinem Land"). Erzählen Sie 1-2 Minuten darüber. Der Bot stellt Ihnen danach eine Frage.'
            },
            {
              id: 'g-a2-l2-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Etwas gemeinsam planen',
              content: 'Ihre Aufgabe ist es, mit dem Bot etwas zu planen (z.B. "Einen Ausflug am Wochenende machen"). Finden Sie einen Tag, eine Uhrzeit und einen Ort. Machen Sie Vorschläge und reagieren Sie auf die Vorschläge des Bots.'
            },
            
            // --- A2 WÖRTSCHATZ (Reusing from g-a2-l1-v1) ---
            {
              id: 'g-a2-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A2',
              content: 'Wichtige Wörter für die A2-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-a2-l1
              ]
            },

            // --- A2 GRAMMATIK (Reusing from g-a2-l1-g1) ---
            {
              id: 'g-a2-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A2',
              content: 'Testen Sie Ihr Grammatikwissen für die A2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-a2-l1
              ]
            }
          ],
        },
//
// --- END OF g-a2-l2 ---
        {
          id: 'g-a2-l3',
          title: 'Modelltest 3: Übungssatz',
          estimatedTime: 105,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l3-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Was machst du heute Abend? Hast du Lust auf Kino?' },
                { speaker: 'Person A', line: 'Oh, heute Abend kann ich nicht. Ich muss für die Prüfung morgen lernen. Aber am Wochenende habe ich Zeit.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 2. Entschuldigung, wie viel kostet dieser Mantel?' },
                { speaker: 'Verkäufer', line: 'Der blaue? Der ist von 120 Euro auf 80 Euro reduziert.' },
                { speaker: 'Kunde', line: '80 Euro? Das ist ein gutes Angebot.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 3. Ich habe so Hunger. Lass uns etwas essen gehen.' },
                { speaker: 'Person B', line: 'Gute Idee. Ich kenne hier in der Nähe ein gutes italienisches Restaurant. Sie haben tolle Pizza.' },
                { speaker: 'Person A', line: 'Pizza ist super.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 4. Guten Tag, ich brauche einen Termin bei Frau Dr. Fischer.' },
                { speaker: 'Praxis', line: 'Geht es am Donnerstagnachmittag um 16 Uhr?' },
                { speaker: 'Anrufer', line: 'Ja, das passt. Vielen Dank.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 5. Wo warst du im Urlaub?' },
                { speaker: 'Person A', line: 'Ich war in der Türkei. Das Wetter war fantastisch, jeden Tag 30 Grad und Sonne.' },
              ],
              questions: [
                { id: 'g-a2h1q1_3', text: 'Nummer 1: Warum kann Person A nicht ins Kino?', options: ['a) Sie mag Kino nicht.', 'b) Sie hat keine Zeit am Wochenende.', 'c) Sie muss lernen.'], correctAnswer: 'c) Sie muss lernen.' },
                { id: 'g-a2h1q2_3', text: 'Nummer 2: Was kostet der Mantel jetzt?', options: ['a) 120 Euro', 'b) 80 Euro', 'c) 40 Euro'], correctAnswer: 'b) 80 Euro' },
                { id: 'g-a2h1q3_3', text: 'Nummer 3: Was wollen die Personen essen?', options: ['a) Pizza', 'b) Salat', 'c) Nichts'], correctAnswer: 'a) Pizza' },
                { id: 'g-a2h1q4_3', text: 'Nummer 4: Wann ist der Termin?', options: ['a) Donnerstag um 16 Uhr', 'b) Dienstag um 16 Uhr', 'c) Donnerstag am Morgen'], correctAnswer: 'a) Donnerstag um 16 Uhr' },
                { id: 'g-a2h1q5_3', text: 'Nummer 5: Wie war das Wetter in der Türkei?', options: ['a) Es hat geregnet.', 'b) Es war kalt.', 'c) Es war sehr warm und sonnig.'], correctAnswer: 'c) Es war sehr warm und sonnig.' },
              ]
            },
            {
              id: 'g-a2-l3-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (5 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen bei "Rund um die Stadt". Bei mir ist Herr Reuter vom Fundbüro. Herr Reuter, was vergessen die Leute am häufigsten?' },
                { speaker: 'Herr Reuter', line: 'Guten Tag. Oh, die Leute vergessen alles! Aber am häufigsten sind es Schlüssel, Handys und Regenschirme. ' },
                { speaker: 'Moderator', line: 'Was passiert mit den Sachen?' },
                { speaker: 'Herr Reuter', line: 'Die Leute haben 6 Monate Zeit, ihre Sachen abzuholen. Wir versuchen, den Besitzer zu finden, wenn wir einen Namen haben. Aber bei einem Regenschirm ist das schwer.' },
                { speaker: 'Moderator', line: 'Und was passiert nach den 6 Monaten?' },
                { speaker: 'Herr Reuter', line: 'Sachen, die nicht abgeholt werden, versteigern wir. Das machen wir zweimal im Jahr, im Sommer und im Winter.' },
              ],
              questions: [
                { id: 'g-a2h2q1_3', text: 'Herr Reuter arbeitet im Museum.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q2_3', text: 'Die Leute vergessen am häufigsten Koffer.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q3_3', text: 'Man hat ein halbes Jahr Zeit, um seine Sachen abzuholen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h2q4_3', text: 'Das Fundbüro findet immer den Besitzer.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q5_3', text: 'Die Sachen werden zweimal im Jahr versteigert.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a2-l3-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                  { speaker: 'Ansage', line: 'Nummer 1. Was machen wir heute? Das Wetter ist so schlecht.' },
                  { speaker: 'Person A', line: 'Ja, nur Regen. Wir können nicht in den Park. Gehen wir stattdessen ins Museum?' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 2. Ich möchte bitte 500 Gramm Rindfleisch.' },
                  { speaker: 'Metzger', line: 'Gern. Darf es ein bisschen mehr sein? Es sind 550 Gramm.' },
                  { speaker: 'Kunde', line: 'Ja, das ist in Ordnung.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 3. Du, ich kann dein Fahrrad nicht finden.' },
                  { speaker: 'Person B', line: 'Ich habe es doch in die Garage gestellt, hinter dein Auto.' },
                  { speaker: 'Person A', line: 'Ach, da! Ja, jetzt sehe ich es. Danke.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 4. Wir müssen morgen früh aufstehen. Der Zug fährt um 6:30 Uhr.' },
                  { speaker: 'Person A', line: 'Um 6:30 Uhr? Oh, dann müssen wir den Wecker auf 5 Uhr stellen.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 5. Wie war dein Bewerbungsgespräch?' },
                  { speaker: 'Person B', line: 'Ganz gut, glaube ich. Die Chefin war sehr nett. Ich bekomme nächste Woche Bescheid.' },
              ],
              questions: [
                { id: 'g-a2h3q1_3', text: 'Nummer 1: Was machen die Personen?', options: ['a) Sie gehen in den Park.', 'b) Sie gehen ins Museum.', 'c) Sie bleiben zu Hause.'], correctAnswer: 'b) Sie gehen ins Museum.' },
                { id: 'g-a2h3q2_3', text: 'Nummer 2: Wie viel Rindfleisch kauft der Kunde?', options: ['a) 500 Gramm', 'b) Weniger als 500 Gramm', 'c) 550 Gramm'], correctAnswer: 'c) 550 Gramm' },
                { id: 'g-a2h3q3_3', text: 'Nummer 3: Wo ist das Fahrrad?', options: ['a) Vor dem Auto', 'b) Hinter dem Auto', 'c) Man kann es nicht finden'], correctAnswer: 'b) Hinter dem Auto' },
                { id: 'g-a2h3q4_3', text: 'Nummer 4: Wann müssen sie aufstehen?', options: ['a) Um 6:30 Uhr', 'b) Um 5:00 Uhr', 'c) Um 5:30 Uhr'], correctAnswer: 'b) Um 5:00 Uhr' },
                { id: 'g-a2h3q5_3', text: 'Nummer 5: Wann bekommt Person B eine Antwort?', options: ['a) Nächste Woche', 'b) Heute', 'c) Gar nicht'], correctAnswer: 'a) Nächste Woche' },
              ]
            },
            {
              id: 'g-a2-l3-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (5 Fragen)',
              content: 'Sie hören ein Interview (zweimal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen zu "Mein Beruf". Heute ist Frau Lange bei uns. Sie ist Polizistin. Frau Lange, wollten Sie schon immer Polizistin werden?' },
                { speaker: 'Frau Lange', line: 'Guten Tag. Nein, eigentlich nicht. Als Kind wollte ich Tierärztin werden. Aber nach der Schule habe ich ein Praktikum bei der Polizei gemacht und das hat mir sofort gefallen.' },
                { speaker: 'Moderatorin', line: 'Ist der Beruf nicht gefährlich?' },
                { speaker: 'Frau Lange', line: 'Manchmal ja. Aber wir haben eine gute Ausbildung. Mir gefällt, dass kein Tag wie der andere ist. Ich arbeite mal im Büro, mal fahre ich Streife.' },
                { speaker: 'Moderatorin', line: 'Was war Ihr schönster Moment im Beruf?' },
                { speaker: 'Frau Lange', line: 'Wenn man Menschen helfen kann. Letzte Woche haben wir ein kleines Kind gefunden, das seine Eltern im Park verloren hatte. Das war ein schöner Moment.' },
              ],
              questions: [
                { id: 'g-a2h4q1_3', text: 'Frau Lange wollte als Kind Tierärztin werden.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h4q2_3', text: 'Sie hat sich nach einem Praktikum für den Beruf entschieden.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h4q3_3', text: 'Frau Lange findet ihren Beruf langweilig.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q4_3', text: 'Sie arbeitet nur im Büro.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q5_3', text: 'Letzte Woche hat sie Eltern im Park gefunden.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },

            // --- LESEN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l3-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (5 Fragen)',
              content: 'Sie lesen 5 kurze Texte. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1:**\nHallo Tim,\nich war gestern auf deiner Party. Es war super! Leider habe ich meine Jacke bei dir vergessen. Sie ist rot und aus Leder. Kann ich sie morgen abholen?\nLG, Anna\n*Frage: Was ist passiert?*\n\n**Text 2:**\nLiebe Frau Klein,\nich kann heute leider nicht zum Deutschkurs kommen, weil ich einen wichtigen Arzttermin habe. Können Sie mir bitte die Hausaufgaben per E-Mail schicken?\nVielen Dank und viele Grüße,\nCarlos\n*Frage: Was möchte Carlos?*\n\n**Text 3:**\nNotiz für Herrn Berg:\nIhr Kunde, Herr Schmidt, hat angerufen. Er muss den Termin am Freitag leider absagen. Er ruft Sie nächste Woche an, um einen neuen Termin zu machen.\n(S. Müller, Sekretariat)\n*Frage: Was ist richtig?*\n\n**Text 4:**\nHi Papa,\nkannst du mich bitte vom Bahnhof abholen? Mein Zug kommt um 17:50 Uhr auf Gleis 3 an. Ich habe einen schweren Koffer.\nDanke, Lisa\n*Frage: Warum schreibt Lisa?*\n\n**Text 5:**\nSehr geehrte Damen und Herren,\nwir informieren Sie, dass sich unsere Öffnungszeiten geändert haben. Ab dem 1. Mai ist unsere Bibliothek auch samstags von 10 bis 14 Uhr für Sie geöffnet.\nIhre Stadtbibliothek\n*Frage: Was ist neu?*',
              questions: [
                { id: 'g-a2r1q1_3', text: 'Text 1: Was ist passiert?', options: ['a) Anna hat ihre Jacke verloren.', 'b) Anna hat ihre rote Jacke auf der Party vergessen.', 'c) Anna will Tim morgen eine Jacke bringen.'], correctAnswer: 'b) Anna hat ihre rote Jacke auf der Party vergessen.' },
                { id: 'g-a2r1q2_3', text: 'Text 2: Was möchte Carlos?', options: ['a) Er möchte die Hausaufgaben bekommen.', 'b) Er möchte einen Arzttermin.', 'c) Er möchte Frau Klein besuchen.'], correctAnswer: 'a) Er möchte die Hausaufgaben bekommen.' },
                { id: 'g-a2r1q3_3', text: 'Text 3: Was ist richtig?', options: ['a) Herr Berg hat den Termin abgesagt.', 'b) Herr Schmidt ruft nächste Woche an.', 'c) Der neue Termin ist am Freitag.'], correctAnswer: 'b) Herr Schmidt ruft nächste Woche an.' },
                { id: 'g-a2r1q4_3', text: 'Text 4: Warum schreibt Lisa?', options: ['a) Sie möchte, dass ihr Vater sie abholt.', 'b) Sie kommt um 17:50 Uhr nicht an.', 'c) Sie hat ihren Koffer vergessen.'], correctAnswer: 'a) Sie möchte, dass ihr Vater sie abholt.' },
                { id: 'g-a2r1q5_3', text: 'Text 5: Was ist neu?', options: ['a) Die Bibliothek ist am 1. Mai geschlossen.', 'b) Die Bibliothek ist am Samstag geöffnet.', 'c) Die Bibliothek ist bis 10 Uhr geöffnet.'], correctAnswer: 'b) Die Bibliothek ist am Samstag geöffnet.' },
              ]
            },
            {
              id: 'g-a2-l3-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (5 Fragen)',
              content: 'Lesen Sie den Text und die 5 Anzeigen. Welche Anzeige (a, b oder c) passt zu welcher Situation (1-5)?\n\n**Situationen:**\n1. Sie suchen ein günstiges Fahrrad, das noch gut funktioniert.\n2. Sie möchten am Wochenende einen Ausflug in die Natur machen, aber nicht allein.\n3. Sie brauchen schnell neue Passfotos für Ihren Ausweis.\n4. Sie möchten am Abend Spanisch lernen.\n5. Sie suchen eine Wohnung für sich und Ihre Katze.\n\n**Anzeigen:**\n**a) Fotostudio "Klick":** Passfotos und Bewerbungsfotos. Sofort zum Mitnehmen! Garantiert biometrisch. Ohne Termin. Mo-Fr 9-18 Uhr. Hauptstraße 10.\n\n**b) Wandergruppe "Naturfreunde":** Wir wandern jeden Sonntag im Schwarzwald. Treffpunkt: 9 Uhr am Hauptbahnhof. Offen für alle! Mitzubringen: gute Laune und feste Schuhe. Info: wanderfreunde@mail.de\n\n**c) Fahrrad-Flohmarkt:** Großer privater Fahrrad-Flohmarkt am Samstag, 10-14 Uhr, auf dem Schulhof. Hier finden Sie gebrauchte, aber gute Fahrräder für wenig Geld.\n\n**d) Immobilien-Welt:** Schöne 2-Zimmer-Wohnung, Balkon, ruhig. 650 € + NK. Leider keine Haustiere erlaubt. Rufen Sie an!\n\n**e) Volkshochschule (VHS):** Neue Kurse! Spanisch für Anfänger (A1), Mo & Mi, 18-20 Uhr. Englisch (B2), Di & Do, 19-21 Uhr. Italienisch (A2), Fr, 17-19 Uhr.',
              questions: [
                { id: 'g-a2r2q1_3', text: 'Situation 1: Günstiges Fahrrad.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'c' },
                { id: 'g-a2r2q2_3', text: 'Situation 2: Ausflug am Wochenende.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'b' },
                { id: 'g-a2r2q3_3', text: 'Situation 3: Passfotos.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'a' },
                { id: 'g-a2r2q4_3', text: 'Situation 4: Spanisch am Abend.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'e' },
                { id: 'g-a2r2q5_3', text: 'Situation 5: Wohnung mit Katze.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'd' }, // Trick: 'd' says 'keine Haustiere', but it's the only housing ad. The user must identify it's *not* a match.
              ]
            },
            {
              id: 'g-a2-l3-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (5 Fragen)',
              content: 'Lesen Sie die Regeln für den Besuch im Schwimmbad. Kreuzen Sie an: Richtig oder Falsch.\n\n**Badeordnung - Hallenbad "Wasserwelt"**\n\n- Vor dem Schwimmen bitte duschen. Das Duschen ist Pflicht.\n- Das Mitbringen von Speisen und Getränken ist nicht erlaubt. Unser Restaurant im 1. Stock hat täglich geöffnet.\n- Kinder unter 8 Jahren dürfen nur mit einer erwachsenen Begleitperson ins Schwimmbad.\n- Das Springen vom Beckenrand ist verboten. Bitte benutzen Sie nur das Sprungbrett.\n- Im gesamten Schwimmbad (auch im Restaurant) ist das Rauchen verboten.',
              questions: [
                { id: 'g-a2r3q1_3', text: 'Man muss nicht duschen, wenn man nur kurz schwimmt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q2_3', text: 'Man darf sein eigenes Essen mitbringen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q3_3', text: 'Ein 7-jähriges Kind darf allein schwimmen gehen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q4_3', text: 'Man darf nicht vom Beckenrand springen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2r3q5_3', text: 'Im Restaurant darf man rauchen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-a2-l3-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (5 Fragen)',
              content: 'Lesen Sie den Informationstext. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Urlaub in Deutschland: Warum nicht?**\n\nViele Deutsche fahren im Urlaub gern ins Ausland, nach Italien oder Spanien. Aber Urlaub im eigenen Land wird immer beliebter. Warum? Deutschland hat viel zu bieten: die Berge im Süden, die Nord- und Ostsee im Norden und viele interessante Städte wie Berlin oder Hamburg.\n\nEin Urlaub in Deutschland hat viele Vorteile. Die Anreise ist oft kürzer und billiger als ein Flug. Man muss keine fremde Sprache sprechen, obwohl viele Deutsche gern Englisch im Urlaub sprechen. Außerdem ist das Essen vertraut. \n\nBesonders beliebt sind Ferienwohnungen. Hier kann man selbst kochen und ist flexibler als im Hotel. Auch Camping ist bei Familien sehr beliebt. Für einen Urlaub in Deutschland muss man nicht viel Geld ausgeben.',
              questions: [
                { id: 'g-a2r4q1_3', text: 'Was wird immer beliebter?', options: ['a) Urlaub in Italien und Spanien.', 'b) Urlaub in Deutschland.', 'c) Nur in Städten Urlaub zu machen.'], correctAnswer: 'b) Urlaub in Deutschland.' },
                { id: 'g-a2r4q2_3', text: 'Was ist ein Vorteil von Urlaub in Deutschland?', options: ['a) Man muss immer fliegen.', 'b) Man kann eine fremde Sprache lernen.', 'c) Die Anreise ist oft kürzer.'], correctAnswer: 'c) Die Anreise ist oft kürzer.' },
                { id: 'g-a2r4q3_3', text: 'Welche Sprache sprechen viele Deutsche im Urlaub?', options: ['a) Italienisch', 'b) Englisch', 'c) Spanisch'], correctAnswer: 'b) Englisch' },
                { id: 'g-a2r4q4_3', text: 'Warum sind Ferienwohnungen beliebt?', options: ['a) Weil sie teurer als Hotels sind.', 'b) Weil man dort kochen kann.', 'c) Weil man dort nicht kochen muss.'], correctAnswer: 'b) Weil man dort kochen kann.' },
                { id: 'g-a2r4q5_3', text: 'Was ist richtig?', options: ['a) Urlaub in Deutschland ist immer teuer.', 'b) Camping ist nicht beliebt.', 'c) Man kann in Deutschland günstig Urlaub machen.'], correctAnswer: 'c) Man kann in Deutschland günstig Urlaub machen.' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-a2-l3-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle SMS / E-Mail (20-30 Wörter)',
              content: 'Schreiben Sie eine kurze Nachricht (ca. 20-30 Wörter).\n\nIhre Freundin Anna hat Ihnen zum Geburtstag ein Buch geschenkt. Sie haben sich sehr gefreut.\n- Bedanken Sie sich für das Geschenk.\n- Sagen Sie, dass Sie das Buch toll finden.\n- Fragen Sie, ob Sie sich am Wochenende treffen können.',
            },
            {
              id: 'g-a2-l3-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (30-40 Wörter)',
              content: 'Schreiben Sie eine E-Mail (ca. 30-40 Wörter).\n\nSie haben online ein Zimmer im "Hotel Vier Jahreszeiten" gebucht. Sie möchten aber ein ruhiges Zimmer haben. Schreiben Sie an das Hotel.\n- Sagen Sie, dass Sie ein Zimmer gebucht haben (wann?).\n- Bitten Sie um ein ruhiges Zimmer (nicht zur Straße).\n- Bedanken Sie sich.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-a2-l3-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Fragen stellen & beantworten',
              content: 'Sie bekommen vier Karten (z.B. Familie, Beruf, Urlaub, Letzter Kinobesuch). Stellen Sie Ihrem Partner (dem Bot) Fragen zu diesen Themen. Der Bot stellt Ihnen auch Fragen. Üben Sie, über sich zu sprechen.'
            },
            {
              id: 'g-a2-l3-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Von einem Thema erzählen',
              content: 'Sie bekommen eine Karte mit einem Thema (z.B. "Mein Lieblingsessen" oder "Meine Heimatstadt"). Erzählen Sie 1-2 Minuten darüber. Der Bot stellt Ihnen danach eine Frage.'
            },
            {
              id: 'g-a2-l3-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Etwas gemeinsam planen',
              content: 'Ihre Aufgabe ist es, mit dem Bot etwas zu planen (z.B. "Einen Grillabend am See organisieren"). Finden Sie einen Tag, eine Uhrzeit und wer was mitbringt. Machen Sie Vorschläge und reagieren Sie auf die Vorschläge des Bots.'
            },
            
            // --- A2 WÖRTSCHATZ (Reusing from g-a2-l1-v1) ---
            {
              id: 'g-a2-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A2',
              content: 'Wichtige Wörter für die A2-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-a2-l1
              ]
            },

            // --- A2 GRAMMATIK (Reusing from g-a2-l1-g1) ---
            {
              id: 'g-a2-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A2',
              content: 'Testen Sie Ihr Grammatikwissen für die A2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-a2-l1
              ]
            }
          ],
        },
//
// --- END OF g-a2-l3 ---
                {
          id: 'g-a2-l4',
          title: 'Modelltest 4: Übungssatz',
          estimatedTime: 105,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l4-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Guten Tag, ich möchte bitte nach Berlin fahren. Wann fährt der nächste Zug?' },
                { speaker: 'Person A', line: 'Der nächste ICE fährt in 10 Minuten von Gleis 5. Sie müssen sich beeilen.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 2. Hast du die Hausaufgaben für morgen gemacht?' },
                { speaker: 'Person B', line: 'Oh nein, die habe ich total vergessen! Ich muss das heute Abend noch schnell machen.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 3. Was ist denn mit deinem Arm passiert?' },
                { speaker: 'Person A', line: 'Ich bin gestern vom Fahrrad gefallen. Es ist nicht gebrochen, aber es tut ziemlich weh.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 4. Ich habe Hunger. Holen wir uns eine Pizza?' },
                { speaker: 'Person B', line: 'Ich habe schon gekocht. Es gibt Nudeln mit Tomatensoße.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 5. Wo ist denn meine Brille? Ich kann sie nicht finden.' },
                { speaker: 'Person A', line: 'Sie liegt auf dem Schreibtisch, neben dem Computer.' },
              ],
              questions: [
                { id: 'g-a2h1q1_4', text: 'Nummer 1: Wann fährt der Zug?', options: ['a) In 5 Minuten', 'b) In 10 Minuten', 'c) In 15 Minuten'], correctAnswer: 'b) In 10 Minuten' },
                { id: 'g-a2h1q2_4', text: 'Nummer 2: Was hat Person B vergessen?', options: ['a) Den Test', 'b) Den Abend', 'c) Die Hausaufgaben'], correctAnswer: 'c) Die Hausaufgaben' },
                { id: 'g-a2h1q3_4', text: 'Nummer 3: Was ist passiert?', options: ['a) Person A hat sich den Arm gebrochen.', 'b) Person A ist vom Fahrrad gefallen.', 'c) Person A war beim Arzt.'], correctAnswer: 'b) Person A ist vom Fahrrad gefallen.' },
                { id: 'g-a2h1q4_4', text: 'Nummer 4: Was gibt es zu essen?', options: ['a) Pizza', 'b) Nichts', 'c) Nudeln'], correctAnswer: 'c) Nudeln' },
                { id: 'g-a2h1q5_4', text: 'Nummer 5: Wo ist die Brille?', options: ['a) Auf dem Computer', 'b) Neben dem Schreibtisch', 'c) Auf dem Schreibtisch'], correctAnswer: 'c) Auf dem Schreibtisch' },
              ]
            },
            {
              id: 'g-a2-l4-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (5 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen bei "Reiselust". Heute ist Frau Berger bei uns. Sie haben eine lange Reise durch Südamerika gemacht.' },
                { speaker: 'Frau Berger', line: 'Hallo. Ja, ich war sechs Monate unterwegs, nur mit meinem Rucksack.' },
                { speaker: 'Moderator', line: 'Sechs Monate! Das ist lang. Waren Sie allein?' },
                { speaker: 'Frau Berger', line: 'Ich bin allein gestartet, habe aber unterwegs viele andere Reisende getroffen. Ich habe in Hostels geschlafen. Das war billig und man lernt leicht Leute kennen.' },
                { speaker: 'Moderator', line: 'Was war Ihr schönstes Erlebnis?' },
                { speaker: 'Frau Berger', line: 'Die Wanderung in den Bergen von Peru. Das war sehr anstrengend, aber die Natur war unglaublich schön.' },
              ],
              questions: [
                { id: 'g-a2h2q1_4', text: 'Frau Berger war 6 Wochen in Südamerika.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q2_4', text: 'Sie ist mit ihrem Rucksack gereist.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h2q3_4', text: 'Sie hat in teuren Hotels geschlafen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q4_4', text: 'Sie war die ganze Zeit allein.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q5_4', text: 'Die Wanderung in Peru war einfach.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-a2-l4-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                  { speaker: 'Ansage', line: 'Nummer 1. Guten Tag, ich habe eine Reservierung auf den Namen Müller.' },
                  { speaker: 'Rezeption', line: 'Einen Moment... Müller... Ja, ein Einzelzimmer für zwei Nächte. Bitte füllen Sie dieses Formular aus.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 2. Schau mal, der Himmel ist ganz dunkel. Ich glaube, es gibt gleich ein Gewitter.' },
                  { speaker: 'Person B', line: 'Oh ja, schnell. Mach bitte die Fenster zu!' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 3. Ich muss zur Bank. Kommst du mit?' },
                  { speaker: 'Person A', line: 'Ich muss noch arbeiten. Aber ich treffe dich in einer Stunde vor dem Supermarkt.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 4. Was ist dein Lieblingsfach in der Schule?' },
                  { speaker: 'Kind', line: 'Mathe finde ich langweilig. Aber Sport und Kunst mag ich am liebsten.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 5. Haben Sie schon gewählt?' },
                  { speaker: 'Person B', line: 'Ja, ich nehme das Schnitzel mit Pommes. Und einen Salat, bitte.' },
              ],
              questions: [
                { id: 'g-a2h3q1_4', text: 'Nummer 1: Was soll Herr Müller tun?', options: ['a) Sein Zimmer bezahlen.', 'b) Ein Formular ausfüllen.', 'c) Zwei Nächte bleiben.'], correctAnswer: 'b) Ein Formular ausfüllen.' },
                { id: 'g-a2h3q2_4', text: 'Nummer 2: Was soll Person B tun?', options: ['a) Nach draußen gehen.', 'b) Ein Fenster öffnen.', 'c) Die Fenster schließen.'], correctAnswer: 'c) Die Fenster schließen.' },
                { id: 'g-a2h3q3_4', text: 'Nummer 3: Wo treffen sie sich?', options: ['a) Vor der Bank', 'b) Beim Supermarkt', 'c) Bei der Arbeit'], correctAnswer: 'b) Beim Supermarkt' },
                { id: 'g-a2h3q4_4', text: 'Nummer 4: Was ist das Lieblingsfach?', options: ['a) Mathe', 'b) Sport und Kunst', 'c) Deutsch'], correctAnswer: 'b) Sport und Kunst' },
                { id: 'g-a2h3q5_4', text: 'Nummer 5: Was bestellt die Person?', options: ['a) Nur ein Schnitzel', 'b) Schnitzel, Pommes und Salat', 'c) Nur einen Salat'], correctAnswer: 'b) Schnitzel, Pommes und Salat' },
              ]
            },
            {
              id: 'g-a2-l4-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (5 Fragen)',
              content: 'Sie hören ein Interview (zweimal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen bei "Bunt gemischt". Mein Gast heute ist Clara, eine Studentin. Clara, du wohnst in einer WG, einer Wohngemeinschaft. Wie ist das?' },
                { speaker: 'Clara', line: 'Hallo. Ja, ich wohne mit drei anderen Leuten zusammen. Das ist super, weil die Miete billig ist. Ein Zimmer in einer WG ist viel billiger als eine eigene Wohnung.' },
                { speaker: 'Moderator', line: 'Gibt es auch Nachteile?' },
                { speaker: 'Clara', line: 'Klar. Man ist nie allein. Und man muss sich absprechen, zum Beispiel beim Putzen. Wir haben einen Putzplan, aber nicht jeder hält sich daran. Das gibt manchmal Streit.' },
                { speaker: 'Moderator', line: 'Würdest du es weiterempfehlen?' },
                { speaker: 'Clara', line: 'Für Studenten auf jeden Fall. Man lernt schnell Leute kennen und es ist nicht so teuer. Aber ich glaube, nach dem Studium möchte ich dann doch allein wohnen.' },
              ],
              questions: [
                { id: 'g-a2h4q1_4', text: 'Clara wohnt allein in einer Wohnung.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q2_4', text: 'Sie wohnt in einer WG, weil es billig ist.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h4q3_4', text: 'Ein Vorteil ist, dass man immer allein ist.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q4_4', text: 'Alle halten sich immer an den Putzplan.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q5_4', text: 'Clara möchte für immer in einer WG wohnen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },

            // --- LESEN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l4-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (5 Fragen)',
              content: 'Sie lesen 5 kurze Texte. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1:**\nHallo Maria,\ngroßartige Neuigkeiten! Ich habe den Job bekommen! Ich fange am 1. nächsten Monat an. Ich bin so glücklich. Feiern wir das am Wochenende?\nLG, Ben\n*Frage: Warum schreibt Ben?*\n\n**Text 2:**\nLieber Herr Schmidt,\nleider funktioniert die Heizung in meiner Wohnung (Nr. 12) nicht. Es ist sehr kalt. Können Sie bitte so schnell wie möglich einen Handwerker schicken?\nMit freundlichen Grüßen,\nA. Wagner\n*Frage: Was ist das Problem?*\n\n**Text 3:**\nSportnachrichten:\nEintracht Frankfurt hat gestern 2:0 gegen Bayern München gewonnen. Die Fans feierten den überraschenden Sieg die ganze Nacht. Das nächste Spiel ist am Samstag.\n*Frage: Was ist passiert?*\n\n**Text 4:**\nHi Lena,\nich habe Tickets für das Konzert am Freitag! Treffen wir uns um 19 Uhr vor der Halle? Der Bus (Linie 3) fährt direkt dorthin.\nBis dann, Tom\n*Frage: Was schlägt Tom vor?*\n\n**Text 5:**\nSehr geehrter Kunde,\nIhr Paket konnte heute nicht zugestellt werden, da Sie nicht zu Hause waren. Sie können das Paket ab morgen bei Ihrer Postfiliale (Hauptstraße 5) abholen.\nIhr Paketdienst\n*Frage: Was soll der Kunde tun?*',
              questions: [
                { id: 'g-a2r1q1_4', text: 'Text 1: Warum schreibt Ben?', options: ['a) Er will am Wochenende feiern.', 'b) Er hat einen neuen Job gefunden.', 'c) Er fängt nächsten Monat an zu feiern.'], correctAnswer: 'b) Er hat einen neuen Job gefunden.' },
                { id: 'g-a2r1q2_4', text: 'Text 2: Was ist das Problem?', options: ['a) Die Wohnung ist zu teuer.', 'b) Das Licht funktioniert nicht.', 'c) Die Heizung ist kaputt.'], correctAnswer: 'c) Die Heizung ist kaputt.' },
                { id: 'g-a2r1q3_4', text: 'Text 3: Was ist passiert?', options: ['a) Bayern München hat 2:0 gewonnen.', 'b) Eintracht Frankfurt hat verloren.', 'c) Eintracht Frankfurt hat gewonnen.'], correctAnswer: 'c) Eintracht Frankfurt hat gewonnen.' },
                { id: 'g-a2r1q4_4', text: 'Text 4: Was schlägt Tom vor?', options: ['a) Mit dem Bus zu fahren.', 'b) Sich am Freitag vor der Halle zu treffen.', 'c) Tickets für Freitag zu kaufen.'], correctAnswer: 'b) Sich am Freitag vor der Halle zu treffen.' },
                { id: 'g-a2r1q5_4', text: 'Text 5: Was soll der Kunde tun?', options: ['a) Zu Hause auf das Paket warten.', 'b) Das Paket morgen bei der Post holen.', 'c) In der Hauptstraße 5 anrufen.'], correctAnswer: 'b) Das Paket morgen bei der Post holen.' },
              ]
            },
            {
              id: 'g-a2-l4-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (5 Fragen)',
              content: 'Lesen Sie den Text und die 5 Anzeigen. Welche Anzeige (a, b oder c) passt zu welcher Situation (1-5)?\n\n**Situationen:**\n1. Sie möchten abends in der Stadt tanzen gehen.\n2. Sie suchen ein günstiges Mittagsmenü in der Nähe der Universität.\n3. Sie möchten am Wochenende Möbel kaufen, aber kein Auto mieten.\n4. Sie suchen einen Deutschkurs, der morgens stattfindet.\n5. Sie möchten eine Katze aus dem Tierheim adoptieren.\n\n**Anzeigen:**\n**a) Sprachschule "Dialog":** Deutsch für Anfänger (A1) und Fortgeschrittene (B1). Abendkurse: Mo/Mi, 18-20 Uhr. Vormittagskurse: Di/Do, 9-11 Uhr. Jetzt anmelden!\n\n**b) Tierheim Berlin:** Wir haben viele liebe Hunde und Katzen, die ein neues Zuhause suchen. Besuchen Sie uns: Di-So, 14-17 Uhr. www.tierheim-berlin.de\n\n**c) Möbelhaus "Wohnwelt":** Große Auswahl, kleine Preise! Sofa, Bett, Schrank. Unser Service: Wir liefern Ihre neuen Möbel direkt zu Ihnen nach Hause! Auch samstags.\n\n**d) Diskothek "Nachtvogel":** Die beste Party der Stadt! Jeden Freitag und Samstag ab 22 Uhr. Musik: Pop, Dance & Charts. Studenten zahlen die Hälfte!\n\n**e) Café "Campus":** Direkt an der Uni. Perfekt für die Pause. Wir bieten täglich wechselnden Mittagstisch für nur 5,90 € (Studentenpreis). Auch vegetarisch. 11-14 Uhr.',
              questions: [
                { id: 'g-a2r2q1_4', text: 'Situation 1: Tanzen gehen.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'd' },
                { id: 'g-a2r2q2_4', text: 'Situation 2: Günstiges Mittagessen.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'e' },
                { id: 'g-a2r2q3_4', text: 'Situation 3: Möbel kaufen (mit Lieferung).', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'c' },
                { id: 'g-a2r2q4_4', text: 'Situation 4: Deutschkurs am Morgen.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'a' },
                { id: 'g-a2r2q5_4', text: 'Situation 5: Eine Katze adoptieren.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'b' },
              ]
            },
            {
              id: 'g-a2-l4-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (5 Fragen)',
              content: 'Lesen Sie die Informationen auf der Webseite eines Kinos. Kreuzen Sie an: Richtig oder Falsch.\n\n**Willkommen im "Kino-Palast"**\n\n- **Preise:** Erwachsene: 11 €. Kinder unter 12 Jahren: 7 €. Studenten (mit Ausweis): 8 €.\n- **Kino-Tag:** Dienstag ist Kino-Tag! Alle Tickets kosten nur 6 € (gilt nicht für 3D-Filme und an Feiertagen).\n- **Reservierung:** Sie können Tickets online reservieren. Reservierte Tickets müssen bis 30 Minuten vor Filmbeginn an der Kasse abgeholt werden. Danach gehen sie zurück in den Verkauf.\n- **Snacks:** Das Mitbringen von eigenen Speisen und Getränken ist nicht gestattet.\n- **3D-Filme:** Für 3D-Filme zahlen Sie einen Aufpreis von 3 €. Die 3D-Brille kostet 1 €.',
              questions: [
                { id: 'g-a2r3q1_4', text: 'Studenten zahlen immer 11 €.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q2_4', text: 'Am Dienstag kosten 3D-Filme auch 6 €.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q3_4', text: 'Man kann reservierte Tickets 10 Minuten vor dem Film abholen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q4_4', text: 'Man darf seine eigenen Getränke mitbringen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q5_4', text: 'Ein 3D-Film kostet 3 € mehr als ein normaler Film.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a2-l4-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (5 Fragen)',
              content: 'Lesen Sie den Informationstext. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Wie findet man eine Wohnung in Deutschland?**\n\nEine Wohnung in einer großen Stadt wie Berlin oder München zu finden, ist oft nicht einfach und kann teuer sein. Die meisten Menschen suchen Wohnungen auf großen Internet-Portalen. Hier kann man genau eingeben, was man sucht: Größe, Preis, Stadtteil.\n\nMan muss oft schnell sein. Wenn man eine gute Wohnung findet, sollte man sofort anrufen oder eine E-Mail schreiben und einen Besichtigungstermin vereinbaren. Zu diesem Termin kommen oft viele andere Interessenten. Man sollte alle wichtigen Papiere dabeihaben: eine Kopie vom Ausweis, einen Gehaltsnachweis (was man verdient) und eine "Schufa-Auskunft" (Informationen, ob man Schulden hat).\n\nEine Alternative sind Wohngemeinschaften (WGs), besonders für junge Leute. Hier teilt man sich eine Wohnung mit anderen. Das ist billiger und man ist nicht so allein.',
              questions: [
                { id: 'g-a2r4q1_4', text: 'Wo suchen die meisten Leute nach Wohnungen?', options: ['a) In der Zeitung', 'b) Im Internet', 'c) In Berlin und München'], correctAnswer: 'b) Im Internet' },
                { id: 'g-a2r4q2_4', text: 'Was sollte man machen, wenn man eine gute Wohnung findet?', options: ['a) Warten', 'b) Sofort einen Termin machen', 'c) Papiere suchen'], correctAnswer: 'b) Sofort einen Termin machen' },
                { id: 'g-a2r4q3_4', text: 'Was ist ein Gehaltsnachweis?', options: ['a) Ein Papier, das zeigt, wo man arbeitet.', 'b) Ein Papier, das zeigt, was man verdient.', 'c) Ein Papier, das zeigt, dass man keine Schulden hat.'], correctAnswer: 'b) Ein Papier, das zeigt, was man verdient.' },
                { id: 'g-a2r4q4_4', text: 'Was ist eine WG?', options: ['a) Eine große, teure Wohnung.', 'b) Eine Wohnung für alte Leute.', 'c) Eine Wohnung, die man sich mit anderen teilt.'], correctAnswer: 'c) Eine Wohnung, die man sich mit anderen teilt.' },
                { id: 'g-a2r4q5_4', text: 'Was ist ein Vorteil einer WG?', options: ['a) Man ist immer allein.', 'b) Man muss keine Miete zahlen.', 'c) Es ist billiger.'], correctAnswer: 'c) Es ist billiger.' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-a2-l4-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle SMS / E-Mail (20-30 Wörter)',
              content: 'Schreiben Sie eine kurze Nachricht (ca. 20-30 Wörter).\n\nSie sind krank und können nicht zu Ihrer Arbeit in der Bäckerei gehen. Schreiben Sie Ihrem Chef, Herrn Bäcker.\n- Sagen Sie, dass Sie krank sind.\n- Sagen Sie, dass Sie heute nicht kommen können.\n- Sagen Sie, dass Sie später anrufen.',
            },
            {
              id: 'g-a2-l4-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (30-40 Wörter)',
              content: 'Schreiben Sie eine E-Mail (ca. 30-40 Wörter).\n\nSie möchten bei einem Sportverein einen Tenniskurs machen. Sie haben eine Anzeige gelesen. Schreiben Sie an den Sportverein.\n- Sagen Sie, dass Sie die Anzeige gelesen haben.\n- Fragen Sie, wann der Kurs stattfindet.\n- Fragen Sie, was der Kurs kostet.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-a2-l4-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Fragen stellen & beantworten',
              content: 'Sie bekommen vier Karten (z.B. Beruf, Hobbys, Essen & Trinken, Wohnort). Stellen Sie Ihrem Partner (dem Bot) Fragen zu diesen Themen. Der Bot stellt Ihnen auch Fragen. Üben Sie, über sich zu sprechen.'
            },
            {
              id: 'g-a2-l4-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Von einem Thema erzählen',
              content: 'Sie bekommen eine Karte mit einem Thema (z.B. "Ein Ausflug am Wochenende" oder "Was ich gern in meiner Freizeit mache"). Erzählen Sie 1-2 Minuten darüber. Der Bot stellt Ihnen danach eine Frage.'
            },
            {
              id: 'g-a2-l4-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Etwas gemeinsam planen',
              content: 'Ihre Aufgabe ist es, mit dem Bot etwas zu planen (z.B. "Einen Kollegen im Krankenhaus besuchen"). Finden Sie einen Tag, eine Uhrzeit und was Sie mitbringen. Machen Sie Vorschläge und reagieren Sie auf die Vorschläge des Bots.'
            },
            
            // --- A2 WÖRTSCHATZ (Reusing from g-a2-l1-v1) ---
            {
              id: 'g-a2-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A2',
              content: 'Wichtige Wörter für die A2-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-a2-l1
              ]
            },

            // --- A2 GRAMMATIK (Reusing from g-a2-l1-g1) ---
            {
              id: 'g-a2-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A2',
              content: 'Testen Sie Ihr Grammatikwissen für die A2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-a2-l1
              ]
            }
          ],
        },
//
// --- END OF g-a2-l4 ---
        {
          id: 'g-a2-l5',
          title: 'Modelltest 5: Übungssatz',
          estimatedTime: 105,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l5-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Nummer 1. Was für ein schlechtes Wetter! Es regnet schon den ganzen Tag.' },
                { speaker: 'Person A', line: 'Ja, furchtbar. Und ich habe meinen Regenschirm im Büro vergessen.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 2. Guten Tag, ich hätte gern ein Pfund Kaffee.' },
                { speaker: 'Verkäufer', line: 'Gern. Gemahlen oder ganze Bohnen?' },
                { speaker: 'Kunde', line: 'Gemahlen, bitte. Mittelstark.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 3. Hast du Lust, heute Abend mit ins Konzert zu kommen?' },
                { speaker: 'Person B', line: 'Oh, gern! Welche Band spielt denn?' },
                { speaker: 'Person A', line: '"Silbermond". Ich habe die Karten schon gekauft.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 4. Entschuldigung, ist dieser Platz noch frei?' },
                { speaker: 'Person A', line: 'Nein, tut mir leid. Mein Kollege holt sich nur schnell einen Kaffee.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Nummer 5. Wie war dein Urlaub in den Bergen?' },
                { speaker: 'Person B', line: 'Super! Ich war jeden Tag wandern. Das Wetter war perfekt, nur Sonne.' },
              ],
              questions: [
                { id: 'g-a2h1q1_5', text: 'Nummer 1: Was hat Person A vergessen?', options: ['a) Ihre Jacke', 'b) Das Büro', 'c) Ihren Regenschirm'], correctAnswer: 'c) Ihren Regenschirm' },
                { id: 'g-a2h1q2_5', text: 'Nummer 2: Welchen Kaffee kauft der Kunde?', options: ['a) Ganze Bohnen', 'b) Gemahlenen Kaffee', 'c) Starken Kaffee'], correctAnswer: 'b) Gemahlenen Kaffee' },
                { id: 'g-a2h1q3_5', text: 'Nummer 3: Was ist richtig?', options: ['a) Person A hat noch keine Karten.', 'b) Sie gehen zu "Silbermond".', 'c) Person B hat keine Lust.'], correctAnswer: 'b) Sie gehen zu "Silbermond".' },
                { id: 'g-a2h1q4_5', text: 'Nummer 4: Ist der Platz frei?', options: ['a) Ja, der Platz ist frei.', 'b) Nein, der Platz ist besetzt.', 'c) Ja, aber nur für Kollegen.'], correctAnswer: 'b) Nein, der Platz ist besetzt.' },
                { id: 'g-a2h1q5_5', text: 'Nummer 5: Wie war das Wetter im Urlaub?', options: ['a) Es hat geregnet.', 'b) Es war sonnig.', 'c) Es war schlecht.'], correctAnswer: 'b) Es war sonnig.' },
              ]
            },
            {
              id: 'g-a2-l5-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (5 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen bei "Fit und Gesund". Heute sprechen wir über Sport im Winter. Gast ist Dr. Meyer, ein Sportmediziner.' },
                { speaker: 'Dr. Meyer', line: 'Guten Tag. Ja, viele Leute hören im Winter auf, Sport zu treiben. Das ist ein Fehler. Bewegung ist auch in der kalten Jahreszeit wichtig.' },
                { speaker: 'Moderatorin', line: 'Aber ist es nicht gefährlich, bei Kälte draußen zu joggen?' },
                { speaker: 'Dr. Meyer', line: 'Nicht, wenn man die richtige Kleidung trägt. Wichtig ist, dass man sich "wie eine Zwiebel" anzieht, also mehrere dünne Schichten. Und man sollte langsam anfangen.' },
                { speaker: 'Moderatorin', line: 'Gibt es eine Alternative?' },
                { speaker: 'Dr. Meyer', line: 'Natürlich. Schwimmen im Hallenbad ist perfekt. Oder man geht in ein Fitness-Studio. Das Wichtigste ist, dass man überhaupt etwas tut.' },
              ],
              questions: [
                { id: 'g-a2h2q1_5', text: 'Dr. Meyer ist ein Fitnesstrainer.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q2_5', text: 'Man sollte im Winter keinen Sport machen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q3_5', text: 'Beim Joggen im Winter soll man dicke Kleidung tragen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q4_5', text: 'Man sollte beim Joggen schnell starten.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h2q5_5', text: 'Schwimmen ist eine gute Alternative im Winter.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a2-l5-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (5 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                  { speaker: 'Ansage', line: 'Nummer 1. Guten Tag, ich suche das Buch "Kochen für Anfänger".' },
                  { speaker: 'Buchhändler', line: 'Mal sehen... Ja, das haben wir da. Es steht in der Abteilung "Kochen", im zweiten Stock.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 2. Hast du mein Handy gesehen? Ich finde es nicht.' },
                  { speaker: 'Person B', line: 'Es liegt in der Küche auf dem Tisch. Du hast es beim Frühstück dort liegengelassen.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 3. Ich fahre am Samstag nach München. Der Zug ist aber so teuer.' },
                  { speaker: 'Person A', line: 'Warum nimmst du nicht den Bus? Das dauert länger, ist aber viel billiger.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 4. Was fehlt Ihnen denn?' },
                  { speaker: 'Patientin', line: 'Ich habe seit drei Tagen starke Kopfschmerzen und mein Rücken tut weh.' },
                  { speaker: 'Ansage', line: '---'},
                  { speaker: 'Ansage', line: 'Nummer 5. Entschuldigung, wann schließt der Supermarkt?' },
                  { speaker: 'Person A', line: 'Heute schon um 20 Uhr. Normalerweise haben wir bis 22 Uhr geöffnet, aber heute ist Samstag.' },
              ],
              questions: [
                { id: 'g-a2h3q1_5', text: 'Nummer 1: Wo ist das Buch?', options: ['a) Im ersten Stock', 'b) Im zweiten Stock', 'c) Sie haben es nicht.'], correctAnswer: 'b) Im zweiten Stock' },
                { id: 'g-a2h3q2_5', text: 'Nummer 2: Wo ist das Handy?', options: ['a) Im Wohnzimmer', 'b) In der Küche', 'c) Person B hat es.'], correctAnswer: 'b) In der Küche' },
                { id: 'g-a2h3q3_5', text: 'Nummer 3: Was ist billiger?', options: ['a) Der Zug', 'b) Der Bus', 'c) Beide sind teuer.'], correctAnswer: 'b) Der Bus' },
                { id: 'g-a2h3q4_5', text: 'Nummer 4: Was hat die Patientin?', options: ['a) Bauchschmerzen', 'b) Kopfschmerzen und Rückenschmerzen', 'c) Husten'], correctAnswer: 'b) Kopfschmerzen und Rückenschmerzen' },
                { id: 'g-a2h3q5_5', text: 'Nummer 5: Wann schließt der Supermarkt heute?', options: ['a) Um 20 Uhr', 'b) Um 22 Uhr', 'c) Er ist schon geschlossen.'], correctAnswer: 'a) Um 20 Uhr' },
              ]
            },
            {
              id: 'g-a2-l5-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (5 Fragen)',
              content: 'Sie hören ein Interview (zweimal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Mein Haustier". Heute ist Frau Seidel bei uns. Sie haben einen Hund aus dem Tierheim.' },
                { speaker: 'Frau Seidel', line: 'Hallo. Ja, unser Hund heißt Max. Wir haben ihn vor einem Jahr aus dem Tierheim geholt. Er war schon drei Jahre alt.' },
                { speaker: 'Moderator', line: 'Warum ein Hund aus dem Tierheim?' },
                { speaker: 'Frau Seidel', line: 'Wir wollten einem Tier ein neues Zuhause geben. Max ist sehr lieb. Am Anfang war er ein bisschen ängstlich, aber jetzt ist er ein toller Familienhund. Er liebt es, spazieren zu gehen.' },
                { speaker: 'Moderator', line: 'Ist es viel Arbeit?' },
                { speaker: 'Frau Seidel', line: 'Ja, ein Hund braucht viel Zeit. Man muss jeden Tag mit ihm raus, auch bei Regen. Aber er gibt einem so viel zurück. Wir sind sehr glücklich mit ihm.' },
              ],
              questions: [
                { id: 'g-a2h4q1_5', text: 'Der Hund Max ist noch ein Baby.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q2_5', text: 'Frau Seidel hat Max vor einem Jahr bekommen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2h4q3_5', text: 'Max war von Anfang an nicht ängstlich.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q4_5', text: 'Ein Hund braucht nicht viel Zeit.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2h4q5_5', text: 'Frau Seidel ist glücklich mit Max.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },

            // --- LESEN (4 Parts, 20 Questions) ---
            {
              id: 'g-a2-l5-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (5 Fragen)',
              content: 'Sie lesen 5 kurze Texte. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1:**\nHallo Julia,\nich muss heute länger im Büro bleiben, bis 19 Uhr. Schaffst du es, die Kinder vom Kindergarten abzuholen? Das wäre super! Ruf mich kurz an, ob es geht.\nLiebe Grüße, Markus\n*Frage: Was soll Julia tun?*\n\n**Text 2:**\nLiebe Mieterinnen und Mieter,\nam Donnerstag, den 10. Mai, funktioniert der Aufzug von 9 bis 12 Uhr nicht. Wir machen wichtige Reparaturen. Bitte benutzen Sie in dieser Zeit die Treppe.\nVielen Dank, Ihre Hausverwaltung\n*Frage: Was ist am 10. Mai?*\n\n**Text 3:**\nSonderangebot im Supermarkt:\nDiese Woche: Italienische Woche! Alles für die perfekte Pasta. Tomatensoße (500g) nur 0,99 € und Spaghetti (1kg) nur 1,29 €. Nur solange der Vorrat reicht.\n*Frage: Was ist im Angebot?*\n\n**Text 4:**\nHi Papa,\nich bin bei Anna. Wir machen zusammen Hausaufgaben. Ich komme später nach Hause, so gegen 18 Uhr. Mach dir keine Sorgen. Essen brauche ich nicht, ich esse bei Anna.\nLG, Tim\n*Frage: Was ist richtig?*\n\n**Text 5:**\nSehr geehrte Frau Seidel,\nIhr Termin für das Bewerbungsgespräch ist am Montag, 15.03., um 11:00 Uhr. Bitte bringen Sie Ihren Lebenslauf und Ihre Zeugnisse mit. Der Eingang ist in der Goethestraße 5, Raum 301.\nMit freundlichen Grüßen, H. Meier\n*Frage: Was soll Frau Seidel mitbringen?*',
              questions: [
                { id: 'g-a2r1q1_5', text: 'Text 1: Was soll Julia tun?', options: ['a) Markus um 19 Uhr anrufen.', 'b) Die Kinder vom Kindergarten abholen.', 'c) Länger im Büro bleiben.'], correctAnswer: 'b) Die Kinder vom Kindergarten abholen.' },
                { id: 'g-a2r1q2_5', text: 'Text 2: Was ist am 10. Mai?', options: ['a) Man kann den Aufzug nicht benutzen.', 'b) Man muss die Treppe reparieren.', 'c) Der Aufzug funktioniert ab 12 Uhr nicht.'], correctAnswer: 'a) Man kann den Aufzug nicht benutzen.' },
                { id: 'g-a2r1q3_5', text: 'Text 3: Was ist im Angebot?', options: ['a) Italienische Pasta für 0,99 €', 'b) Spaghetti für 1,29 €', 'c) Pasta und Soße für 1,29 €'], correctAnswer: 'b) Spaghetti für 1,29 €' },
                { id: 'g-a2r1q4_5', text: 'Text 4: Was ist richtig?', options: ['a) Tim kommt um 18 Uhr zum Essen.', 'b) Tim macht bei Anna Hausaufgaben.', 'c) Tim wartet auf seinen Papa.'], correctAnswer: 'b) Tim macht bei Anna Hausaufgaben.' },
                { id: 'g-a2r1q5_5', text: 'Text 5: Was soll Frau Seidel mitbringen?', options: ['a) Einen Stift', 'b) Einen neuen Termin', 'c) Ihren Lebenslauf und Zeugnisse'], correctAnswer: 'c) Ihren Lebenslauf und Zeugnisse' },
              ]
            },
            {
              id: 'g-a2-l5-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (5 Fragen)',
              content: 'Lesen Sie den Text und die 5 Anzeigen. Welche Anzeige (a, b oder c) passt zu welcher Situation (1-5)?\n\n**Situationen:**\n1. Sie suchen einen Babysitter für Ihre 4-jährige Tochter.\n2. Sie möchten am Abend Sport machen, am liebsten Fußball.\n3. Sie möchten wissen, wie das Wetter morgen in Hamburg wird.\n4. Sie suchen eine Bäckerei, die auch am Sonntag geöffnet hat.\n5. Sie möchten eine gebrauchte Waschmaschine kaufen.\n\n**Anzeigen:**\n**a) Wetter-Online:** Das Wetter für Ihre Stadt. Berlin: Morgen sonnig, 22 Grad. Hamburg: Morgen Regen, 15 Grad. München: Morgen bewölkt, 18 Grad. www.wetter-online.de\n\n**b) Bäckerei "Sonnenschein":** Jeden Tag frische Brötchen! Auch sonntags von 8 bis 11 Uhr für Sie da. Kommen Sie vorbei! Schillerstraße 1.\n\n**c) Kleinanzeigen-Markt:** Verkaufe: Gut erhaltene Waschmaschine (2 Jahre alt), 150 €. Nur Selbstabholung. Tel: 0176-98765\n\n**d) Liebe Eltern!** Ich (Anna, 18, Schülerin) habe viel Erfahrung mit Kindern und suche einen Job als Babysitter. Ich kann abends und am Wochenende. Referenzen vorhanden. Tel: 0151-12345\n\n**e) Sportverein "Eiche":** Lust auf Bewegung? Wir bieten: Volleyball (Di, 19 Uhr), Basketball (Mi, 20 Uhr) und Gymnastik (Do, 18 Uhr). Leider ist unsere Fußballgruppe voll.',
              questions: [
                { id: 'g-a2r2q1_5', text: 'Situation 1: Babysitter gesucht.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'd' },
                { id: 'g-a2r2q2_5', text: 'Situation 2: Fußball am Abend.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'e' }, // Trick: 'e' says football is FULL. It's the only sports ad, so it's the right ad, but the user can't play.
                { id: 'g-a2r2q3_5', text: 'Situation 3: Wetter in Hamburg.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'a' },
                { id: 'g-a2r2q4_5', text: 'Situation 4: Bäckerei am Sonntag.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'b' },
                { id: 'g-a2r2q5_5', text: 'Situation 5: Gebrauchte Waschmaschine.', options: ['a', 'b', 'c', 'd', 'e'], correctAnswer: 'c' },
              ]
            },
            {
              id: 'g-a2-l5-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (5 Fragen)',
              content: 'Lesen Sie die Informationstafel im Park. Kreuzen Sie an: Richtig oder Falsch.\n\n**Willkommen im Stadtpark!**\n\nDamit sich alle Besucher wohlfühlen, bitten wir Sie um Folgendes:\n- **Hunde:** Hunde sind im Park willkommen, müssen aber immer an der Leine geführt werden. Auf dem Kinderspielplatz sind Hunde verboten.\n- **Grillen:** Grillen ist nur auf den dafür vorgesehenen Grillplätzen (im Westteil des Parks) erlaubt. Bitte machen Sie kein offenes Feuer auf der Wiese.\n- **Fahrräder:** Das Fahrradfahren ist nur auf den Hauptwegen gestattet. Bitte fahren Sie langsam und nehmen Sie Rücksicht auf Fußgänger.\n- **Müll:** Bitte werfen Sie Ihren Müll in die Mülleimer oder nehmen Sie ihn wieder mit nach Hause.',
              questions: [
                { id: 'g-a2r3q1_5', text: 'Hunde dürfen im ganzen Park frei laufen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q2_5', text: 'Hunde sind auf dem Spielplatz erlaubt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q3_5', text: 'Man darf überall im Park grillen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-a2r3q4_5', text: 'Man darf auf den Hauptwegen Fahrrad fahren.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-a2r3q5_5', text: 'Man soll seinen Müll mit nach Hause nehmen oder in die Mülleimer werfen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-a2-l5-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (5 Fragen)',
              content: 'Lesen Sie den Informationstext. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Warum ist Sport so wichtig?**\n\nSport ist gesund. Das wissen die meisten Menschen. Aber warum eigentlich? Wenn wir uns bewegen, arbeitet unser Herz schneller und pumpt mehr Blut durch den Körper. Das trainiert das Herz und ist gut für den Blutdruck.\n\nAber Sport ist nicht nur gut für den Körper, sondern auch für den Kopf. Beim Sport vergisst man den Stress von der Arbeit. Man fühlt sich danach oft besser und entspannter. \n\nMan muss nicht jeden Tag drei Stunden trainieren. Experten sagen, dass 30 Minuten Bewegung am Tag schon ausreichen. Das kann ein Spaziergang sein, Fahrradfahren oder Schwimmen. Wichtig ist, dass man es regelmäßig macht. Am besten sucht man sich einen Sport, der Spaß macht.',
              questions: [
                { id: 'g-a2r4q1_5', text: 'Was passiert, wenn wir uns bewegen?', options: ['a) Das Herz arbeitet langsamer.', 'b) Man bekommt Stress.', 'c) Das Herz pumpt mehr Blut.'], correctAnswer: 'c) Das Herz pumpt mehr Blut.' },
                { id: 'g-a2r4q2_5', text: 'Sport ist gut für...', options: ['a) nur den Körper.', 'b) nur den Kopf.', 'c) Körper und Kopf.'], correctAnswer: 'c) Körper und Kopf.' },
                { id: 'g-a2r4q3_5', text: 'Wie fühlt man sich oft nach dem Sport?', options: ['a) Gestresster', 'b) Entspannter', 'c) Müder'], correctAnswer: 'b) Entspannter' },
                { id: 'g-a2r4q4_5', text: 'Wie viel Sport sollte man machen?', options: ['a) Drei Stunden am Tag.', 'b) 30 Minuten am Tag.', 'c) Nur am Wochenende.'], correctAnswer: 'b) 30 Minuten am Tag.' },
                { id: 'g-a2r4q5_5', text: 'Was ist laut Experten am wichtigsten?', options: ['a) Dass man einen Sport macht, der Spaß macht.', 'b) Dass man schnell läuft.', 'c) Dass man im Fitness-Studio trainiert.'], correctAnswer: 'a) Dass man einen Sport macht, der Spaß macht.' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-a2-l5-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle SMS / E-Mail (20-30 Wörter)',
              content: 'Schreiben Sie eine kurze Nachricht (ca. 20-30 Wörter).\n\nSie sind am Samstag zu einer Wanderung mit Freunden verabredet. Sie haben aber Ihr Bein verletzt und können nicht mitkommen.\n- Sagen Sie die Wanderung ab.\n- Nennen Sie den Grund (Bein verletzt).\n- Wünschen Sie den Freunden viel Spaß.',
            },
            {
              id: 'g-a2-l5-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (30-40 Wörter)',
              content: 'Schreiben Sie eine E-Mail (ca. 30-40 Wörter).\n\nSie haben in einer Anzeige gelesen, dass die "Musikschule Fröhlich" Gitarrenunterricht anbietet. Sie interessieren sich dafür.\n- Sagen Sie, warum Sie schreiben.\n- Fragen Sie, ob es einen Kurs für Anfänger gibt.\n- Fragen Sie, was der Kurs kostet.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-a2-l5-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Fragen stellen & beantworten',
              content: 'Sie bekommen vier Karten (z.B. Lieblingsbuch, Frühstück, Letzter Urlaub, Pläne für morgen). Stellen Sie Ihrem Partner (dem Bot) Fragen zu diesen Themen. Der Bot stellt Ihnen auch Fragen. Üben Sie, über sich zu sprechen.'
            },
            {
              id: 'g-a2-l5-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Von einem Thema erzählen',
              content: 'Sie bekommen eine Karte mit einem Thema (z.B. "Sport in meinem Leben" oder "Meine Familie"). Erzählen Sie 1-2 Minuten darüber. Der Bot stellt Ihnen danach eine Frage.'
            },
            {
              id: 'g-a2-l5-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Etwas gemeinsam planen',
              content: 'Ihre Aufgabe ist es, mit dem Bot etwas zu planen (z.B. "Einen Sprachkurs zusammen besuchen"). Finden Sie einen passenden Kurs, eine Uhrzeit und wie Sie dorthin kommen. Machen Sie Vorschläge und reagieren Sie auf die Vorschläge des Bots.'
            },
            
            // --- A2 WÖRTSCHATZ (Reusing from g-a2-l1-v1) ---
            {
              id: 'g-a2-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz A2',
              content: 'Wichtige Wörter für die A2-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-a2-l1
              ]
            },

            // --- A2 GRAMMATIK (Reusing from g-a2-l1-g1) ---
            {
              id: 'g-a2-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik A2',
              content: 'Testen Sie Ihr Grammatikwissen für die A2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-a2-l1
              ]
            }
          ],
        },
//
// --- END OF g-a2-l5 ---
      ]
    },
    {
      level: 'G-B1' as CEFRLevel,
      title: 'Goethe-Zertifikat B1',
      description: 'Trainieren Sie für die B1-Prüfung mit 5 kompletten Modelltests.',
      lessons: [
        
        {
          id: 'g-b1-l1',
          title: 'Modelltest 1: Gesamte Prüfung',
          estimatedTime: 165, // B1 exam is much longer
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 30 Questions - B1 is harder) ---
            {
              id: 'g-b1-l1-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (10 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (zweimal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie an: Richtig/Falsch und a, b oder c.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Frau', line: 'Hallo Tom! Wie war dein Wochenende? Du wolltest doch an die Ostsee fahren, oder?' },
                { speaker: 'Tom', line: 'Ach, leider nicht. Das Wetter war so schlecht gemeldet. Überall Regen! Ich bin zu Hause geblieben und habe stattdessen die Wohnung geputzt.' },
                { speaker: 'Frau', line: 'Oh, das ist ja schade. Aber meine Wohnung müsste auch mal geputzt werden.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Mann', line: 'Guten Tag, ich suche ein Geschenk für meine Frau. Sie liest gern.' },
                { speaker: 'Verkäuferin', line: 'Vielleicht einen Bestseller? Hier, "Der Schatten des Windes" ist sehr beliebt. Oder interessiert sie sich für Kochbücher?' },
                { speaker: 'Mann', line: 'Nein, kochen ist nicht so ihr Hobby. Aber der Roman klingt gut. Den nehme ich.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Tochter', line: 'Papa, kannst du mich heute Abend vom Bahnhof abholen? Mein Zug kommt um 20:15 Uhr an.' },
                { speaker: 'Vater', line: 'Um 20:15 Uhr? Da habe ich noch meinen Sportkurs. Geht es, wenn du ein Taxi nimmst? Ich bezahle es auch.' },
                { speaker: 'Tochter', line: 'Klar, kein Problem. Mache ich.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Kollegin', line: 'Hallo Herr Schmidt. Ich wollte Sie nur informieren, dass das Meeting morgen nicht um 10 Uhr stattfindet, sondern auf 14 Uhr verschoben wurde. Raum 305 bleibt gleich.' },
                { speaker: 'Herr Schmidt', line: 'Ah, danke für die Info! 14 Uhr passt mir sogar besser.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 5.' },
                { speaker: 'Mann', line: 'Entschuldigung, ich glaube, mein Handy funktioniert nicht. Ich kann nicht ins Internet.' },
                { speaker: 'Frau', line: 'Haben Sie "Mobile Daten" aktiviert? Oder vielleicht haben Sie kein Guthaben mehr auf Ihrer Prepaid-Karte?' },
                { speaker: 'Mann', line: 'Oh, das Guthaben... Das muss ich prüfen. Danke für den Tipp!' },
              ],
              questions: [
                // Text 1
                { id: 'g-b1h1q1', text: 'Text 1: Tom war am Wochenende an der Ostsee.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q2', text: 'Text 1: Was hat Tom stattdessen gemacht?', options: ['a) Er hat ein Buch gelesen.', 'b) Er hat die Wohnung geputzt.', 'c) Er hat die Frau besucht.'], correctAnswer: 'b) Er hat die Wohnung geputzt.' },
                // Text 2
                { id: 'g-b1h1q3', text: 'Text 2: Die Frau des Mannes kocht gern.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q4', text: 'Text 2: Was kauft der Mann?', options: ['a) Ein Kochbuch.', 'b) Nichts.', 'c) Einen Roman.'], correctAnswer: 'c) Einen Roman.' },
                // Text 3
                { id: 'g-b1h1q5', text: 'Text 3: Die Tochter kommt um 20:15 Uhr am Bahnhof an.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h1q6', text: 'Text 3: Wie kommt die Tochter nach Hause?', options: ['a) Der Vater holt sie ab.', 'b) Sie nimmt ein Taxi.', 'c) Sie wartet auf den Vater.'], correctAnswer: 'b) Sie nimmt ein Taxi.' },
                // Text 4
                { id: 'g-b1h1q7', text: 'Text 4: Das Meeting findet in einem anderen Raum statt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q8', text: 'Text 4: Wann ist das Meeting?', options: ['a) Um 10 Uhr.', 'b) Um 14 Uhr.', 'c) Es fällt aus.'], correctAnswer: 'b) Um 14 Uhr.' },
                // Text 5
                { id: 'g-b1h1q9', text: 'Text 5: Der Mann hat ein Problem mit seinem Handy.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h1q10', text: 'Text 5: Was ist der mögliche Grund?', options: ['a) Er hat kein Guthaben mehr.', 'b) Das Internet ist kaputt.', 'c) Die Frau hat sein Handy.'], correctAnswer: 'a) Er hat kein Guthaben mehr.' },
              ]
            },
            {
              id: 'g-b1-l1-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Radiovortrag (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen bei "Radio Wissen". Heute geht es um ein spannendes Thema: das Fahrrad. Immer mehr Menschen in deutschen Städten steigen vom Auto auf das Fahrrad um. Wir haben die Verkehrsexpertin Dr. Eva Lange zu Gast. Frau Dr. Lange, warum ist das Fahrrad so beliebt?' },
                { speaker: 'Dr. Lange', line: 'Guten Tag. Die Gründe sind vielfältig. Erstens ist es natürlich gut für die Umwelt. Es produziert keine Abgase. Zweitens ist es gesund, man bewegt sich an der frischen Luft. Drittens ist es in vollen Innenstädten oft das schnellste Verkehrsmittel. Man steht nicht im Stau und die Parkplatzsuche fällt weg.' },
                { speaker: 'Moderatorin', line: 'Aber ist es nicht auch gefährlich?' },
                { speaker: 'Dr. Lange', line: 'Das ist ein wichtiger Punkt. Die Sicherheit ist für viele ein Problem. Es gibt oft nicht genug gute Radwege. Viele Radfahrer fühlen sich unsicher zwischen Autos und Bussen. Deshalb fordern wir als Verkehrsclub, dass die Städte mehr in sichere, breite Radwege investieren. Kopenhagen in Dänemark macht das sehr gut vor. Dort fahren über 50% der Menschen mit dem Rad zur Arbeit.' },
                { speaker: 'Moderatorin', line: 'Was ist mit E-Bikes?' },
                { speaker: 'Dr. Lange', line: 'E-Bikes, also Fahrräder mit einem kleinen Elektromotor, sind ein großer Trend. Sie helfen besonders älteren Menschen oder Pendlern, die längere Strecken fahren müssen. Man kommt nicht verschwitzt im Büro an. Der Nachteil ist der hohe Preis. Ein gutes E-Bike ist teuer.' },
              ],
              questions: [
                { id: 'g-b1h2q1', text: 'Worum geht es in dem Vortrag?', options: ['a) Neue Automodelle', 'b) Den Fahrrad-Trend in Städten', 'c) Sport in Dänemark'], correctAnswer: 'b) Den Fahrrad-Trend in Städten' },
                { id: 'g-b1h2q2', text: 'Was ist KEIN genannter Vorteil des Fahrrads?', options: ['a) Es ist umweltfreundlich.', 'b) Es ist gesund.', 'c) Es ist immer sicher.'], correctAnswer: 'c) Es ist immer sicher.' },
                { id: 'g-b1h2q3', text: 'Warum ist das Fahrrad in der Stadt oft am schnellsten?', options: ['a) Weil man nicht im Stau steht.', 'b) Weil Autos langsam fahren müssen.', 'c) Weil es viele Parkplätze gibt.'], correctAnswer: 'a) Weil man nicht im Stau steht.' },
                { id: 'g-b1h2q4', text: 'Was ist das Hauptproblem für Radfahrer?', options: ['a) Das schlechte Wetter.', 'b) Die Sicherheit und fehlende Radwege.', 'c) Die hohen Preise für Fahrräder.'], correctAnswer: 'b) Die Sicherheit und fehlende Radwege.' },
                { id: 'g-b1h2q5', text: 'Welche Stadt wird als gutes Beispiel genannt?', options: ['a) Berlin', 'b) Kopenhagen', 'c) Hamburg'], correctAnswer: 'b) Kopenhagen' },
                { id: 'g-b1h2q6', text: 'Was ist ein Vorteil von E-Bikes?', options: ['a) Sie sind sehr billig.', 'b) Sie helfen bei langen Strecken.', 'c) Sie brauchen keine Radwege.'], correctAnswer: 'b) Sie helfen bei langen Strecken.' },
                { id: 'g-b1h2q7', text: 'Wer benutzt E-Bikes oft?', options: ['a) Nur Sportler', 'b) Ältere Menschen und Pendler', 'c) Nur Kinder'], correctAnswer: 'b) Ältere Menschen und Pendler' },
                { id: 'g-b1h2q8', text: 'Was ist ein Nachteil von E-Bikes?', options: ['a) Sie sind nicht umweltfreundlich.', 'b) Sie sind langsam.', 'c) Sie sind teuer.'], correctAnswer: 'c) Sie sind teuer.' },
                { id: 'g-b1h2q9', text: 'Wie viele Menschen in Kopenhagen fahren Rad zur Arbeit?', options: ['a) Weniger als 50%', 'b) Mehr als 50%', 'c) Genau 50%'], correctAnswer: 'b) Mehr als 50%' },
                { id: 'g-b1h2q10', text: 'Was fordert der Verkehrsclub?', options: ['a) Mehr Investitionen in sichere Radwege.', 'b) Billigere E-Bikes.', 'c) Ein Verbot von Autos in der Stadt.'], correctAnswer: 'a) Mehr Investitionen in sichere Radwege.' },
              ]
            },
            {
              id: 'g-b1-l1-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Anna', line: 'Hallo Ben, wie geht’s? Lange nicht gesehen.' },
                { speaker: 'Ben', line: 'Hi Anna! Gut, danke. Ich hatte nur viel Stress. Ich ziehe nächste Woche um.' },
                { speaker: 'Anna', line: 'Oh, wirklich? Wohin ziehst du?' },
                { speaker: 'Ben', line: 'In den Stadtteil "Südstadt". Ich habe endlich eine größere Wohnung gefunden. Meine alte 1-Zimmer-Wohnung war einfach zu klein.' },
                { speaker: 'Anna', line: 'Das glaube ich. Südstadt ist schön, aber ist es da nicht sehr teuer?' },
                { speaker: 'Ben', line: 'Ja, die Miete ist schon höher. Aber die neue Wohnung hat drei Zimmer und einen Balkon! Davon habe ich immer geträumt.' },
                { speaker: 'Anna', line: 'Super! Brauchst du Hilfe beim Umzug? Ich könnte am Samstag helfen.' },
                { speaker: 'Ben', line: 'Das ist total nett! Aber ich habe schon einen Umzugswagen und professionelle Helfer gemietet. Das ist einfacher, ich habe so viele Bücher.' },
                { speaker: 'Anna', line: 'Stimmt, deine Bücher... (lacht). Aber ich kann Essen für die Helfer machen. Sandwiches oder so?' },
                { speaker: 'Ben', line: 'Das wäre fantastisch, Anna! Tausend Dank.' },
              ],
              questions: [
                { id: 'g-b1h3q1', text: 'Ben zieht um, weil seine alte Wohnung zu teuer war.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q2', text: 'Seine neue Wohnung ist eine 1-Zimmer-Wohnung.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q3', text: 'Die neue Wohnung hat einen Balkon.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h3q4', text: 'Anna wird beim Tragen der Kisten helfen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q5', text: 'Ben hat einen Umzugswagen gemietet.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h3q6', text: 'Anna wird Essen für die Helfer kochen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-b1-l1-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (4 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen bei "Kontrovers". Unser Thema heute: Sollen Haustiere im Büro erlaubt sein? Herr Wagner, Sie sind dafür. Warum?' },
                { speaker: 'Herr Wagner', line: 'Guten Tag. Ja, ich finde, ein Hund im Büro ist eine tolle Sache. Studien zeigen, dass das Streicheln eines Hundes Stress reduziert. Das Arbeitsklima wird besser, die Kollegen sind entspannter.' },
                { speaker: 'Moderator', line: 'Frau Klose, Sie sind dagegen. Was sind Ihre Argumente?' },
                { speaker: 'Frau Klose', line: 'Hallo. Ich sehe das anders. Was ist mit Kollegen, die eine Allergie haben? Oder Angst vor Hunden? Außerdem lenkt ein Tier ab. Wer soll arbeiten, wenn der Hund spielen will? Ich finde, ein Büro ist ein Arbeitsplatz, kein Zoo.' },
                { speaker: 'Herr Wagner', line: 'Man muss natürlich Regeln aufstellen. Der Hund muss erzogen sein und einen festen Platz haben. Aber der positive Effekt auf die Stimmung ist größer als die Nachteile.' },
                { speaker: 'Frau Klose', line: 'Das glaube ich nicht. Wenn mein Kollege telefoniert und im Hintergrund bellt ein Hund, ist das unprofessionell.' },
              ],
              questions: [
                { id: 'g-b1h4q1', text: 'Worum geht es in der Diskussion?', options: ['a) Ob Haustiere gefährlich sind.', 'b) Ob Tiere am Arbeitsplatz erlaubt sein sollen.', 'c) Ob Herr Wagner einen Hund kaufen soll.'], correctAnswer: 'b) Ob Tiere am Arbeitsplatz erlaubt sein sollen.' },
                { id: 'g-b1h4q2', text: 'Was ist Herr Wagners Hauptargument DAFÜR?', options: ['a) Hunde reduzieren Stress und verbessern das Klima.', 'b) Hunde können im Büro spielen.', 'c) Hunde sind professionell.'], correctAnswer: 'a) Hunde reduzieren Stress und verbessern das Klima.' },
                { id: 'g-b1h4q3', text: 'Was ist Frau Kloses Hauptargument DAGEGEN?', options: ['a) Hunde sind teuer.', 'b) Sie mag keine Tiere.', 'c) Kollegen könnten Allergien haben oder Angst.'], correctAnswer: 'c) Kollegen könnten Allergien haben oder Angst.' },
                { id: 'g-b1h4q4', text: 'Was findet Frau Klose unprofessionell?', options: ['a) Wenn ein Hund bellt, während man telefoniert.', 'b) Wenn Herr Wagner einen Hund mitbringt.', 'c) Wenn Kollegen Angst haben.'], correctAnswer: 'a) Wenn ein Hund bellt, während man telefoniert.' },
              ]
            },

            // --- LESEN (5 Parts, 30 Questions - B1 is longer) ---
            {
              id: 'g-b1-l1-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (6 Fragen)',
              content: 'Lesen Sie die Blog-Beiträge. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Thema: Leben ohne Plastik?**\n\n**Beitrag von Lisa (28):**\nIch versuche seit einem Jahr, Plastik zu reduzieren. Es ist schwer! Im Supermarkt ist fast alles in Plastik verpackt. Ich kaufe jetzt immer auf dem Markt ein, mit meinen eigenen Stofftaschen. Das ist teurer, aber besser für die Umwelt. Ich mache auch mein eigenes Putzmittel aus Essig und Zitrone. Mein Ziel ist, irgendwann fast "Zero Waste" zu leben.\n\n**Beitrag von Markus (45):**\nIch bin ehrlich: Ich achte da nicht so drauf. Ich habe einen stressigen Job und zwei Kinder. Da muss der Einkauf schnell gehen. Ich trenne meinen Müll, das muss reichen. Ich habe keine Zeit, auf den Markt zu fahren oder Putzmittel selbst zu machen. Ich finde, die Industrie und die Politik müssen etwas ändern, nicht nur der einzelne Verbraucher.\n\n**Beitrag von Sophie (19):**\n"Zero Waste" ist für mich total wichtig. Ich kaufe Kleidung nur Second-Hand und Lebensmittel im "Unverpackt-Laden". Dort füllt man Nudeln, Reis oder Müsli in eigene Gläser ab. Es ist am Anfang komisch, aber man gewöhnt sich daran. Es ist ein tolles Gefühl, fast keinen Müll zu produzieren.\n\n**Fragen:**\n',
              questions: [
                { id: 'g-b1r1q1', text: 'Wer kauft nicht im Supermarkt ein?', options: ['a) Lisa', 'b) Markus', 'c) Sophie'], correctAnswer: 'c) Sophie' }, // Lisa kauft auf dem Markt, Sophie im Unverpackt-Laden
                { id: 'g-b1r1q2', text: 'Wer macht sein Putzmittel selbst?', options: ['a) Lisa', 'b) Markus', 'c) Sophie'], correctAnswer: 'a) Lisa' },
                { id: 'g-b1r1q3', text: 'Wer hat wenig Zeit für umweltfreundliches Einkaufen?', options: ['a) Lisa', 'b) Markus', 'c) Sophie'], correctAnswer: 'b) Markus' },
                { id: 'g-b1r1q4', text: 'Wer kauft gebrauchte Kleidung?', options: ['a) Lisa', 'b) Markus', 'c) Sophie'], correctAnswer: 'c) Sophie' },
                { id: 'g-b1r1q5', text: 'Wer findet, dass die Politik handeln muss?', options: ['a) Lisa', 'b) Markus', 'c) Sophie'], correctAnswer: 'b) Markus' },
                { id: 'g-b1r1q6', text: 'Wer bringt eigene Behälter zum Einkaufen mit?', options: ['a) Lisa und Sophie', 'b) Nur Markus', 'c) Nur Lisa'], correctAnswer: 'a) Lisa und Sophie' },
              ]
            },
            {
              id: 'g-b1-l1-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (6 Fragen)',
              content: 'Lesen Sie den Artikel aus einer Zeitung. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Home-Office: Fluch oder Segen?**\n\nSeit der Pandemie ist das Home-Office für viele Menschen normal geworden. Statt morgens im Stau zu stehen, klappt man zu Hause den Laptop auf. Für viele ein Traum: Man kann länger schlafen, ist flexibler und kann nebenbei eine Waschmaschine anstellen. Studien zeigen, dass viele im Home-Office sogar produktiver arbeiten.\n\nDoch die Medaille hat zwei Seiten. Vielen fehlt der direkte Kontakt zu den Kollegen. Der schnelle Plausch in der Kaffeeküche oder das gemeinsame Mittagessen fällt weg. Das kann einsam machen. Außerdem ist es schwer, eine klare Grenze zwischen Arbeit und Freizeit zu ziehen. Man schaut "nur noch schnell" E-Mails am Abend oder arbeitet am Wochenende. Experten warnen, dass dies zu Stress und Burnout führen kann.\n\nFirmen müssen daher neue Konzepte entwickeln. Beliebt sind "Hybrid-Modelle": Man arbeitet zum Beispiel drei Tage zu Hause und zwei Tage im Büro. So kombiniert man die Vorteile von beidem: die Ruhe und Flexibilität zu Hause und den sozialen Kontakt im Büro.',
              questions: [
                { id: 'g-b1r2q1', text: 'Was ist ein Vorteil von Home-Office?', options: ['a) Man steht nicht im Stau.', 'b) Man hat mehr Kontakt zu Kollegen.', 'c) Man arbeitet weniger produktiv.'], correctAnswer: 'a) Man steht nicht im Stau.' },
                { id: 'g-b1r2q2', text: 'Was fehlt vielen Menschen im Home-Office?', options: ['a) Eine Waschmaschine.', 'b) Der soziale Kontakt.', 'c) Ein Laptop.'], correctAnswer: 'b) Der soziale Kontakt.' },
                { id: 'g-b1r2q3', text: 'Was ist ein Nachteil von Home-Office?', options: ['a) Man schläft länger.', 'b) Die Arbeit ist produktiver.', 'c) Die Grenze zwischen Arbeit und Freizeit verschwimmt.'], correctAnswer: 'c) Die Grenze zwischen Arbeit und Freizeit verschwimmt.' },
                { id: 'g-b1r2q4', text: 'Wovor warnen Experten?', options: ['a) Vor zu viel Kaffeepausen.', 'b) Vor Stress und Burnout.', 'c) Vor zu viel Freizeit.'], correctAnswer: 'b) Vor zu viel Stress und Burnout.' },
                { id: 'g-b1r2q5', text: 'Was ist ein "Hybrid-Modell"?', options: ['a) Man arbeitet nur im Büro.', 'b) Man arbeitet teils zu Hause, teils im Büro.', 'c) Man arbeitet nur zu Hause.'], correctAnswer: 'b) Man arbeitet teils zu Hause, teils im Büro.' },
                { id: 'g-b1r2q6', text: 'Was ist der Hauptgedanke des Textes?', options: ['a) Home-Office ist nur schlecht.', 'b) Home-Office ist nur gut.', 'c) Home-Office hat Vor- und Nachteile.'], correctAnswer: 'c) Home-Office hat Vor- und Nachteile.' },
              ]
            },
            {
              id: 'g-b1-l1-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten am Wochenende einen Ausflug in die Natur machen und suchen eine geführte Tour.\n2. Sie suchen einen Sprachkurs für Italienisch, der abends stattfindet.\n3. Ihr Freund wird 30. Sie suchen einen besonderen Ort für eine große Party.\n4. Sie ziehen um und brauchen einen LKW für einen Tag.\n5. Sie möchten am Samstagabend ins Theater gehen, aber nicht zu viel bezahlen.\n6. Sie möchten lernen, wie man professionelle Fotos macht.\n\n**Anzeigen:**\n**a) Sprachschule "Allegra":** Lernen Sie Italienisch, wo es am schönsten ist! Intensivkurse in Rom, 2 Wochen, Unterkunft in Gastfamilie. Nur im Sommer.\n\n**b) Theaterkasse:** Günstiger ins Theater! Jeden Montag "Studententag" - 50% Rabatt. Für alle anderen: Buchen Sie 3 Wochen im Voraus und sparen Sie 20%.\n\n**c) Eventscheune "Zum alten Fass":** Sie planen eine Hochzeit, einen runden Geburtstag oder eine Firmenfeier? Unsere Location bietet Platz für bis zu 150 Personen. Mit Catering & Musik. Fragen Sie unverbindlich an!\n\n**d) Foto-Workshop:** Lernen Sie Fotografieren von einem Profi. Kurs für Anfänger: "Meine erste Spiegelreflexkamera". Nächster Termin: 05./06. Mai (Wochenendkurs). Jetzt anmelden!\n\n**e) Autovermietung "Trans-Fix":** Wir haben das passende Fahrzeug. Vom Kleinwagen bis zum 7,5-Tonner-LKW. Günstige Tagestarife, auch am Wochenende. Reservieren Sie online!\n\n**f) Volkshochschule (VHS) Kurse:** Neu im Programm: Spanisch A1 (Di, 18-20 Uhr), Französisch B1 (Mi, 19-21 Uhr), Töpferkurs (Sa, 10-14 Uhr).\n\n**g) Wanderverein "Alpenblick":** Nächste Tour: Sonntag, 10.05. Wir fahren mit dem Bus in die Berge. Wanderführer: Klaus. Mitzubringen: Feste Schuhe, Rucksack, Getränk. Abfahrt: 8 Uhr Hauptbahnhof.\n\n**h) Restaurant "La Vita":** Genießen Sie italienische Spezialitäten. Mittagsmenü nur 9,90 €. Abends à la carte. Geschlossen am Montag.',
              questions: [
                { id: 'g-b1r3q1', text: 'Situation 1: Geführte Wanderung', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'g' },
                { id: 'g-b1r3q2', text: 'Situation 2: Italienisch-Abendkurs', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'a' is in Rome, 'f' has no Italian, 'h' is a restaurant
                { id: 'g-b1r3q3', text: 'Situation 3: Große Geburtstagsparty', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'c' },
                { id: 'g-b1r3q4', text: 'Situation 4: LKW für Umzug', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'e' },
                { id: 'g-b1r3q5', text: 'Situation 5: Günstige Theaterkarten', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'b' },
                { id: 'g-b1r3q6', text: 'Situation 6: Fotokurs', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'd' },
              ]
            },
            {
              id: 'g-b1-l1-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Text aus einer Zeitschrift. Kreuzen Sie an: Richtig oder Falsch.\n\n**Hotel "Mama" – Warum junge Erwachsene nicht ausziehen**\n\nFrüher war es normal: Mit 18 oder 19 Jahren zog man für die Ausbildung oder das Studium von zu Hause aus. Heute ist das anders. Das "Hotel Mama" ist beliebt wie nie. Laut Statistik wohnen in Deutschland fast 30% der 25-Jährigen noch bei ihren Eltern. In Italien oder Spanien sind es sogar noch mehr.\n\nWarum ist das so? Der Hauptgrund ist finanziell. Die Mieten in den Großstädten sind extrem hoch. Ein kleines WG-Zimmer kostet oft schon 500 Euro oder mehr. Das können sich viele Studenten oder Auszubildende nicht leisten. Gleichzeitig ist das Leben zu Hause sehr bequem: Der Kühlschrank ist voll, die Wäsche wird gewaschen und man muss sich um nichts kümmern. \n\nExperten sehen diesen Trend kritisch. Sie sagen, dass junge Erwachsene lernen müssen, selbstständig zu sein. Dazu gehört, einen eigenen Haushalt zu führen, Rechnungen zu bezahlen und Verantwortung zu übernehmen. Wer zu lange zu Hause wohnt, verpasst vielleicht diesen wichtigen Schritt ins Erwachsenenleben.',
              questions: [
                { id: 'g-b1r4q1', text: 'Heute ziehen junge Leute früher aus als früher.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1r4q2', text: 'Fast ein Drittel der 25-jährigen Deutschen wohnt bei den Eltern.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1r4q3', text: 'In Italien wohnen weniger junge Leute bei den Eltern als in Deutschland.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1r4q4', text: 'Der wichtigste Grund für das "Hotel Mama" sind die hohen Mieten.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1r4q5', text: 'Das Leben bei den Eltern ist oft sehr bequem.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1r4q6', text: 'Experten finden den Trend gut für die jungen Erwachsenen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1r4q7', text: 'Wer lange zu Hause wohnt, wird schneller selbstständig.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-b1-l1-r5',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 5 (5 Fragen)',
              content: 'Lesen Sie die Anleitung. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Anleitung: Einen perfekten Milchschaum für Cappuccino machen**\n\nSie träumen von einem Cappuccino wie im Café? Mit diesen Schritten gelingt der perfekte Milchschaum, auch ohne teure Maschine.\n\n1.  **Die richtige Milch:** Wichtig ist der Eiweißgehalt. Am besten funktioniert kalte Vollmilch (3,5% Fett). Fettarme Milch geht auch, der Schaum ist aber nicht so cremig.\n\n2.  **Das Gefäß:** Benutzen Sie ein hohes Gefäß aus Metall. Es leitet die Wärme besser.\n\n3.  **Die Technik (mit Dampfdüse):** Halten Sie die Dampfdüse knapp unter die Oberfläche der Milch. Starten Sie. Es entsteht ein "Zieh-Geräusch". Die Milch beginnt zu schäumen und das Volumen wird größer. Das ist die "Ziehphase".\n\n4.  **Die "Rollphase":** Wenn der Schaum fest genug ist (Volumen hat sich fast verdoppelt), tauchen Sie die Düse tiefer ein. Die Milch "rollt" jetzt nur noch und wird erhitzt. \n\n5.  **Die Temperatur:** Wichtig! Die Milch darf nicht kochen (nicht über 65-70 Grad). Wenn das Metallgefäß zu heiß wird, um es anzufassen, sofort aufhören.\n\n6.  **Abklopfen:** Klopfen Sie das Gefäß leicht auf den Tisch, um große Luftblasen zu zerstören. Fertig!',
              questions: [
                { id: 'g-b1r5q1', text: 'Welche Milch funktioniert am besten?', options: ['a) Warme Milch', 'b) Fettarme Milch', 'c) Kalte Vollmilch'], correctAnswer: 'c) Kalte Vollmilch' },
                { id: 'g-b1r5q2', text: 'Welches Gefäß ist ideal?', options: ['a) Ein hohes aus Glas', 'b) Ein hohes aus Metall', 'c) Ein niedriges aus Plastik'], correctAnswer: 'b) Ein hohes aus Metall' },
                { id: 'g-b1r5q3', text: 'Wo ist die Dampfdüse in der "Ziehphase"?', options: ['a) Tief in der Milch', 'b) Knapp unter der Oberfläche', 'c) Über der Milch'], correctAnswer: 'b) Knapp unter der Oberfläche' },
                { id: 'g-b1r5q4', text: 'Wann muss man mit dem Erhitzen aufhören?', options: ['a) Wenn die Milch kocht.', 'b) Wenn das Gefäß zu heiß zum Anfassen ist.', 'c) Wenn das Volumen sich verdoppelt hat.'], correctAnswer: 'b) Wenn das Gefäß zu heiß zum Anfassen ist.' },
                { id: 'g-b1r5q5', text: 'Warum klopft man das Gefäß ab?', options: ['a) Um die Milch abzukühlen.', 'b) Um große Luftblasen zu entfernen.', 'c) Um den Schaum fester zu machen.'], correctAnswer: 'b) Um große Luftblasen zu entfernen.' },
              ]
            },
            
            // --- SCHREIBEN (3 Parts) ---
            {
              id: 'g-b1-l1-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle E-Mail (ca. 80 Wörter)',
              content: 'Sie haben von Ihrem Freund Alex eine Einladung zu seiner Geburtstagsparty bekommen. Er plant eine große Grillparty im Garten.\nSchreiben Sie ihm eine E-Mail (ca. 80 Wörter):\n- Bedanken Sie sich und sagen Sie zu.\n- Schreiben Sie, dass Sie die Idee (Grillparty) gut finden.\n- Sie sind Vegetarier. Fragen Sie, ob das ein Problem ist oder ob Sie etwas mitbringen sollen.\n- Fragen Sie nach dem Weg (Bus/Bahn).',
            },
            {
              id: 'g-b1-l1-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Forumsbeitrag (ca. 80 Wörter)',
              content: 'Sie haben im Internet einen Forumsbeitrag zum Thema "Sollten Kinder Handys haben?" gelesen.\n\n**Meinung von "Medi-Fan":**\n"Ich finde, Kinder sollten so früh wie möglich ein Handy haben. Es ist wichtig für die Sicherheit. So können sie ihre Eltern immer anrufen. Außerdem lernen sie früh den Umgang mit Technik."\n\nSchreiben Sie Ihre Meinung dazu (ca. 80 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe für Ihre Meinung.\n- Nennen Sie ein anderes Beispiel oder einen anderen Aspekt.',
            },
            {
              id: 'g-b1-l1-w3',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 3: Formelle E-Mail (ca. 40 Wörter)',
              content: 'Sie machen einen Sprachkurs (B1) bei der Sprachschule "Dialog". Sie können nächsten Montag nicht in den Kurs kommen, weil Sie einen wichtigen Arzttermin haben.\nSchreiben Sie eine E-Mail an Ihre Lehrerin, Frau Schuster (ca. 40 Wörter).\n- Entschuldigen Sie sich.\n- Nennen Sie den Grund.\n- Bitten Sie um die Hausaufgaben.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-b1-l1-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Etwas gemeinsam planen',
              content: 'Planen Sie mit Ihrem Partner (dem Bot) etwas.\n**Situation:** Sie und der Bot sind im selben Deutschkurs. Ein Mitschüler, Paul, hatte einen Unfall und liegt im Krankenhaus. Sie wollen ihn besuchen.\n**Aufgabe:** Finden Sie einen gemeinsamen Termin (Tag/Uhrzeit) und überlegen Sie, was Sie ihm schenken/mitbringen können.'
            },
            {
              id: 'g-b1-l1-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Ein Thema präsentieren',
              content: 'Sie sollen eine kurze Präsentation (ca. 3-4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Meine Heimatstadt" oder "Sport und Gesundheit").\n**Aufgabe:** Bereiten Sie eine Präsentation vor. Ihre Präsentation sollte eine Einleitung, einen Hauptteil (eigene Erfahrungen, Situation in Ihrem Land, Vor- & Nachteile) und einen Schluss haben. Starten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b1-l1-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Feedback geben & reagieren',
              content: 'Nach Ihrer Präsentation (Teil 2) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback (z.B. "Deine Präsentation war interessant, aber...") und stellen Sie ihm eine Frage zum Thema.'
            },
            
            // --- B1 WÖRTSCHATZ (100+ Vocab) ---
            {
              id: 'g-b1-l1-v1',
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B1',
              content: 'Wichtige Wörter für die B1-Prüfung, sortiert nach Themen.',
              vocabulary: [
                // Meinungen & Argumente
                { german: 'die Meinung', english: 'the opinion' },
                { german: 'meiner Meinung nach', english: 'in my opinion' },
                { german: 'Ich bin der Ansicht, dass...', english: 'I am of the view that...' },
                { german: 'Ich stimme zu', english: 'I agree' },
                { german: 'Ich stimme nicht zu', english: 'I disagree' },
                { german: 'der Vorteil', english: 'the advantage' },
                { german: 'der Nachteil', english: 'the disadvantage' },
                { german: 'einerseits ... andererseits', english: 'on the one hand ... on the other hand' },
                { german: 'der Grund', english: 'the reason' },
                { german: 'begründen', english: 'to justify, give reasons for' },
                { german: 'der Vorschlag', english: 'the suggestion' },
                { german: 'vorschlagen', english: 'to suggest' },
                { german: 'zustimmen', english: 'to agree' },
                { german: 'ablehnen', english: 'to reject, decline' },
                { german: 'überzeugen', english: 'to convince' },
                // Umwelt & Gesellschaft
                { german: 'die Umwelt', english: 'the environment' },
                { german: 'der Umweltschutz', english: 'environmental protection' },
                { german: 'das Klima', english: 'the climate' },
                { german: 'der Klimawandel', english: 'climate change' },
                { german: 'der Müll', english: 'the trash' },
                { german: 'Müll trennen', english: 'to separate trash' },
                { german: 'vermeiden', english: 'to avoid' },
                { german: 'Plastik vermeiden', english: 'to avoid plastic' },
                { german: 'recyceln', english: 'to recycle' },
                { german: 'die Energie', english: 'the energy' },
                { german: 'Energie sparen', english: 'to save energy' },
                { german: 'die Gesellschaft', english: 'the society' },
                { german: 'die Regierung', english: 'the government' },
                { german: 'die Politik', english: 'politics' },
                { german: 'das Gesetz', english: 'the law' },
                // Arbeit & Beruf
                { german: 'der Arbeitgeber', english: 'the employer' },
                { german: 'der Arbeitnehmer', english: 'the employee' },
                { german: 'der Angestellte', english: 'the employee' },
                { german: 'der Kollege', english: 'the colleague' },
                { german: 'die Bewerbung', english: 'the application' },
                { german: 'sich bewerben um', english: 'to apply for' },
                { german: 'das Vorstellungsgespräch', english: 'the job interview' },
                { german: 'der Lebenslauf', english: 'the CV, resume' },
                { german: 'die Ausbildung', english: 'the education, training' },
                { german: 'die Erfahrung', english: 'the experience' },
                { german: 'die Kenntnisse', english: 'the knowledge, skills' },
                { german: 'die Gehaltserhöhung', english: 'the salary raise' },
                { german: 'die Teilzeit', english: 'part-time' },
                { german: 'die Vollzeit', english: 'full-time' },
                { german: 'die Kündigung', english: 'the resignation, termination' },
                { german: 'kündigen', english: 'to resign, to fire' },
                { german: 'selbstständig', english: 'self-employed' },
                { german: 'die Steuer', english: 'the tax' },
                // Medien & Konsum
                { german: 'die Medien', english: 'the media' },
                { german: 'die Nachricht', english: 'the news, message' },
                { german: 'die Zeitung', english: 'the newspaper' },
                { german: 'die Zeitschrift', english: 'the magazine' },
                { german: 'der Rundfunk', english: 'the broadcast (radio/TV)' },
                { german: 'der Verbraucher', english: 'the consumer' },
                { german: 'der Konsum', english: 'consumption' },
                { german: 'konsumieren', english: 'to consume' },
                { german: 'die Werbung', english: 'the advertisement' },
                { german: 'der Vertrag', english: 'the contract' },
                { german: 'einen Vertrag abschließen', english: 'to sign a contract' },
                { german: 'die Rechnung', english: 'the bill, invoice' },
                { german: 'die Schulden', english: 'the debt' },
                { german: 'die Bank', english: 'the bank' },
                { german: 'das Konto', english: 'the account' },
                { german: 'Geld überweisen', english: 'to transfer money' },
                // Gesundheit & Fitness
                { german: 'die Gesundheit', english: 'the health' },
                { german: 'gesund', english: 'healthy' },
                { german: 'krank', english: 'sick' },
                { german: 'die Krankheit', english: 'the illness' },
                { german: 'sich ernähren', english: 'to eat, to nourish oneself' },
                { german: 'die Ernährung', english: 'the nutrition, diet' },
                { german: 'sich bewegen', english: 'to move' },
                { german: 'die Bewegung', english: 'the movement, exercise' },
                { german: 'sich entspannen', english: 'to relax' },
                { german: 'die Entspannung', english: 'the relaxation' },
                { german: 'der Stress', english: 'the stress' },
                { german: 'gestresst', english: 'stressed' },
                { german: 'die Versicherung', english: 'the insurance' },
                { german: 'die Krankenversicherung', english: 'health insurance' },
                { german: 'der Arzt', english: 'the doctor' },
                { german: 'der Termin', english: 'the appointment' },
                { german: 'einen Termin vereinbaren', english: 'to make an appointment' },
                // Wohnen & Miete
                { german: 'die Wohnung', english: 'the apartment' },
                { german: 'die Miete', english: 'the rent' },
                { german: 'mieten', english: 'to rent' },
                { german: 'der Vermieter', english: 'the landlord' },
                { german: 'der Mieter', english: 'the tenant' },
                { german: 'die Nebenkosten', english: 'utilities' },
                { german: 'der Umzug', english: 'the move (relocation)' },
                { german: 'umziehen', english: 'to move (relocate)' },
                { german: 'die Kaution', english: 'the deposit' },
                { german: 'der Nachbar', english: 'the neighbor' },
                { german: 'der Lärm', english: 'the noise' },
                // Nützliche Verben & Adjektive
                { german: 'abhängen von', english: 'to depend on' },
                { german: 'achten auf', english: 'to pay attention to' },
                { german: 'sich beschweren über', english: 'to complain about' },
                { german: 'sich erinnern an', english: 'to remember' },
                { german: 'sich freuen auf', english: 'to look forward to' },
                { german: 'sich freuen über', english: 'to be happy about' },
                { german: 'sich interessieren für', english: 'to be interested in' },
                { german: 'teilnehmen an', english: 'to participate in' },
                { german: 'warten auf', english: 'to wait for' },
                { german: 'wichtig', english: 'important' },
                { german: 'möglich', english: 'possible' },
                { german: 'unmöglich', english: 'impossible' },
                { german: 'nötig', english: 'necessary' },
                { german: 'notwendig', english: 'necessary' },
                { german: 'schwierig', english: 'difficult' },
                { german: 'einfach', english: 'easy' },
                { german: 'interessant', english: 'interesting' },
                { german: 'langweilig', english: 'boring' },
                { german: 'gefährlich', english: 'dangerous' },
                { german: 'sicher', english: 'safe, certain' },
                { german: 'umweltfreundlich', english: 'environmentally friendly' },
                { german: 'teuer', english: 'expensive' },
                { german: 'günstig', english: 'affordable, cheap' },
                { german: 'bequem', english: 'comfortable' },
                { german: 'unbequem', english: 'uncomfortable' },
              ]
            },

            // --- B1 GRAMMATIK (100+ Questions) ---
            {
              id: 'g-b1-l1-g1',
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B1',
              content: 'Testen Sie Ihr Grammatikwissen für die B1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Konjunktiv II (Höflichkeit & Wünsche)
                { id: 'g-b1g1q001', text: 'Ich ___ gern einen Kaffee.', options: ['hätte', 'habe', 'hättest'], correctAnswer: 'hätte' },
                { id: 'g-b1g1q002', text: '___ du mir bitte helfen?', options: ['Könntest', 'Kannst', 'Könnt'], correctAnswer: 'Könntest' },
                { id: 'g-b1g1q003', text: 'Ich ___ gern am Meer.', options: ['wäre', 'bin', 'wärst'], correctAnswer: 'wäre' },
                { id: 'g-b1g1q004', text: 'Er ___ lieber zu Hause bleiben.', options: ['würde', 'wird', 'wärst'], correctAnswer: 'würde' },
                { id: 'g-b1g1q005', text: 'Was ___ Sie an meiner Stelle tun?', options: ['würden', 'werden', 'wären'], correctAnswer: 'würden' },
                // Konjunktiv II (Irreale Bedingungen)
                { id: 'g-b1g1q006', text: 'Wenn ich Zeit ___, würde ich dich besuchen.', options: ['hätte', 'habe', 'hättest'], correctAnswer: 'hätte' },
                { id: 'g-b1g1q007', text: 'Wenn ich du ___, würde ich mehr lernen.', options: ['wäre', 'bin', 'wärst'], correctAnswer: 'wäre' },
                { id: 'g-b1g1q008', text: 'Er ___ ein Auto kaufen, wenn er Geld hätte.', options: ['würde', 'wird', 'wäre'], correctAnswer: 'würde' },
                { id: 'g-b1g1q009', text: 'Wenn das Wetter schön ___, ___ wir spazieren gehen.', options: ['wäre / würden', 'ist / werden', 'wäre / werden'], correctAnswer: 'wäre / würden' },
                { id: 'g-b1g1q010', text: 'Ich ___ dir geholfen, wenn ich Zeit gehabt ___ . (Irreale Vergangenheit)', options: ['hätte / hätte', 'wäre / hätte', 'hätte / wäre'], correctAnswer: 'hätte / hätte' },
                { id: 'g-b1g1q011', text: 'Wenn er ___ (kommen), ___ wir ins Kino gegangen. (Irreale Vergangenheit)', options: ['gekommen wäre / wären', 'gekommen hätte / hätten', 'kam / würden'], correctAnswer: 'gekommen wäre / wären' },
                // Passiv (Präsens)
                { id: 'g-b1g1q012', text: 'Das Auto ___ repariert.', options: ['wird', 'ist', 'wurde'], correctAnswer: 'wird' },
                { id: 'g-b1g1q013', text: 'Die E-Mail ___ von mir geschrieben.', options: ['wird', 'ist', 'wurde'], correctAnswer: 'wird' },
                { id: 'g-b1g1q014', text: 'Hier ___ nicht geraucht werden.', options: ['darf', 'muss', 'ist'], correctAnswer: 'darf' },
                { id: 'g-b1g1q015', text: 'Die Fenster müssen ___ werden.', options: ['geputzt', 'putzen', 'geputzen'], correctAnswer: 'geputzt' },
                { id: 'g-b1g1q016', text: 'Das Essen ___ (kochen).', options: ['wird gekocht', 'ist gekocht', 'kocht'], correctAnswer: 'wird gekocht' },
                // Passiv (Präteritum)
                { id: 'g-b1g1q017', text: 'Das Haus ___ 1980 gebaut.', options: ['wird', 'ist', 'wurde'], correctAnswer: 'wurde' },
                { id: 'g-b1g1q018', text: 'Der Brief ___ gestern geschickt.', options: ['wurde', 'war', 'wird'], correctAnswer: 'wurde' },
                { id: 'g-b1g1q019', text: 'Die Tür ___ von ihm geöffnet.', options: ['wurde', 'war', 'wird'], correctAnswer: 'wurde' },
                { id: 'g-b1g1q020', text: 'Die Rechnung ___ noch nicht bezahlt.', options: ['wurde', 'war', 'ist'], correctAnswer: 'wurde' },
                { id: 'g-b1g1q021', text: 'Das Auto ___ (reparieren).', options: ['wurde repariert', 'war repariert', 'wird repariert'], correctAnswer: 'wurde repariert' },
                // Relativsätze (Nominativ)
                { id: 'g-b1g1q022', text: 'Das ist der Mann, ___ aus Berlin kommt.', options: ['der', 'dem', 'den'], correctAnswer: 'der' },
                { id: 'g-b1g1q023', text: 'Das ist die Frau, ___ so gut kocht.', options: ['die', 'der', 'den'], correctAnswer: 'die' },
                { id: 'g-b1g1q024', text: 'Wo ist das Buch, ___ auf dem Tisch lag?', options: ['das', 'dem', 'den'], correctAnswer: 'das' },
                { id: 'g-b1g1q025', text: 'Das sind die Kinder, ___ im Garten spielen.', options: ['die', 'denen', 'der'], correctAnswer: 'die' },
                // Relativsätze (Akkusativ)
                { id: 'g-b1g1q026', text: 'Hier ist der Kuchen, ___ ich gebacken habe.', options: ['der', 'dem', 'den'], correctAnswer: 'den' },
                { id: 'g-b1g1q027', text: 'Das ist die Tasche, ___ ich suche.', options: ['die', 'der', 'den'], correctAnswer: 'die' },
                { id: 'g-b1g1q028', text: 'Er liest das Buch, ___ du ihm geschenkt hast.', options: ['das', 'dem', 'den'], correctAnswer: 'das' },
                { id: 'g-b1g1q029', text: 'Ich kenne die Leute, ___ du eingeladen hast.', options: ['die', 'denen', 'der'], correctAnswer: 'die' },
                // Relativsätze (Dativ)
                { id: 'g-b1g1q030', text: 'Das ist der Kollege, ___ ich geholfen habe.', options: ['der', 'dem', 'den'], correctAnswer: 'dem' },
                { id: 'g-b1g1q031', text: 'Das ist die Frau, ___ das Auto gehört.', options: ['die', 'der', 'den'], correctAnswer: 'der' },
                { id: 'g-b1g1q032', text: 'Das ist das Kind, ___ ich das Buch gebe.', options: ['das', 'dem', 'den'], correctAnswer: 'dem' },
                { id: 'g-b1g1q033', text: 'Das sind die Freunde, ___ ich vertraue.', options: ['die', 'denen', 'der'], correctAnswer: 'denen' },
                // Relativsätze (Präpositionen)
                { id: 'g-b1g1q034', text: 'Das ist der Freund, mit ___ ich ins Kino gehe.', options: ['der', 'dem', 'den'], correctAnswer: 'dem' },
                { id: 'g-b1g1q035', text: 'Das ist die Stadt, in ___ ich wohne.', options: ['die', 'der', 'den'], correctAnswer: 'der' },
                { id: 'g-b1g1q036', text: 'Das ist das Thema, über ___ wir sprechen.', options: ['das', 'dem', 'den'], correctAnswer: 'das' },
                { id: 'g-b1g1q037', text: 'Zeig mir den Stift, mit ___ du schreibst.', options: ['der', 'dem', 'den'], correctAnswer: 'dem' },
                { id: 'g-b1g1q038', text: 'Das sind die Probleme, für ___ es keine Lösung gibt.', options: ['die', 'der', 'denen'], correctAnswer: 'die' },
                // Konnektoren (weil, da, denn)
                { id: 'g-b1g1q039', text: 'Ich lerne Deutsch, ___ ich in Berlin arbeiten will.', options: ['weil', 'denn', 'deshalb'], correctAnswer: 'weil' },
                { id: 'g-b1g1q040', text: 'Ich lerne Deutsch, ___ ich will in Berlin arbeiten.', options: ['weil', 'denn', 'deshalb'], correctAnswer: 'denn' },
                { id: 'g-b1g1q041', text: '___ ich krank war, bin ich zu Hause geblieben.', options: ['Weil', 'Da', 'Denn'], correctAnswer: 'Da' }, // 'Da' often starts a sentence
                { id: 'g-b1g1q042', text: 'Er ist müde, ___ er hat schlecht geschlafen.', options: ['weil', 'denn', 'obwohl'], correctAnswer: 'denn' },
                // Konnektoren (obwohl, trotzdem)
                { id: 'g-b1g1q043', text: 'Ich gehe spazieren, ___ es regnet.', options: ['obwohl', 'trotzdem', 'deshalb'], correctAnswer: 'obwohl' },
                { id: 'g-b1g1q044', text: 'Es regnet, ___ gehe ich spazieren.', options: ['obwohl', 'trotzdem', 'deshalb'], correctAnswer: 'trotzdem' },
                { id: 'g-b1g1q045', text: '___ er krank war, ist er zur Arbeit gegangen.', options: ['Obwohl', 'Trotzdem', 'Weil'], correctAnswer: 'Obwohl' },
                { id: 'g-b1g1q046', text: 'Er war krank, ___ ist er zur Arbeit gegangen.', options: ['obwohl', 'trotzdem', 'denn'], correctAnswer: 'trotzdem' },
                // Konnektoren (deshalb, deswegen, darum)
                { id: 'g-b1g1q047', text: 'Ich war krank, ___ konnte ich nicht kommen.', options: ['deshalb', 'weil', 'obwohl'], correctAnswer: 'deshalb' },
                { id: 'g-b1g1q048', text: 'Er hat viel gelernt, ___ hat er die Prüfung bestanden.', options: ['deswegen', 'denn', 'damit'], correctAnswer: 'deswegen' },
                { id: 'g-b1g1q049', text: 'Sie hat Geld gespart, ___ kann sie ein Auto kaufen.', options: ['darum', 'weil', 'obwohl'], correctAnswer: 'darum' },
                // Finale Nebensätze (damit, um...zu)
                { id: 'g-b1g1q050', text: 'Ich lerne Deutsch, ___ ich einen Job finde.', options: ['damit', 'um zu', 'weil'], correctAnswer: 'damit' }, // Different subjects (ich, ich)
                { id: 'g-b1g1q051', text: 'Ich lerne Deutsch, ___ einen Job ___ finden.', options: ['damit / zu', 'um / zu', 'denn / zu'], correctAnswer: 'um / zu' }, // Same subject (ich)
                { id: 'g-b1g1q052', text: 'Er gibt mir Geld, ___ ich das Buch kaufen kann.', options: ['damit', 'um zu', 'deshalb'], correctAnswer: 'damit' }, // Different subjects (er, ich)
                { id: 'g-b1g1q053', text: 'Sie fährt schnell, ___ pünktlich anzukommen.', options: ['damit', 'um zu', 'deshalb'], correctAnswer: 'um zu' }, // Same subject (sie)
                { id: 'g-b1g1q054', text: 'Ich brauche eine Brille, ___ besser ___ sehen.', options: ['damit / zu', 'um / zu', 'weil / zu'], correctAnswer: 'um / zu' },
                // Temporale Nebensätze (als, wenn)
                { id: 'g-b1g1q055', text: '___ ich ein Kind war, habe ich viel gespielt.', options: ['Als', 'Wenn', 'Wann'], correctAnswer: 'Als' }, // Single past event
                { id: 'g-b1g1q056', text: 'Immer ___ ich meine Oma besuchte, gab es Kuchen.', options: ['als', 'wenn', 'wann'], correctAnswer: 'wenn' }, // Repeated past event
                { id: 'g-b1g1q057', text: '___ ich 18 wurde, habe ich den Führerschein gemacht.', options: ['Als', 'Wenn', 'Wann'], correctAnswer: 'Als' },
                { id: 'g-b1g1q058', text: 'Ruf mich an, ___ du Zeit hast.', options: ['als', 'wenn', 'wann'], correctAnswer: 'wenn' }, // Present/Future event
                { id: 'g-b1g1q059', text: 'Ich weiß nicht, ___ er kommt.', options: ['als', 'wenn', 'wann'], correctAnswer: 'wann' }, // Indirect question
                // Temporale Nebensätze (bevor, nachdem, seit, während)
                { id: 'g-b1g1q060', text: '___ ich gefrühstückt habe, putze ich Zähne.', options: ['Nachdem', 'Bevor', 'Seit'], correctAnswer: 'Nachdem' }, // Plusquamperfekt/Perfekt -> Präsens
                { id: 'g-b1g1q061', text: 'Ich putze Zähne, ___ ich frühstücke.', options: ['nachdem', 'bevor', 'seit'], correctAnswer: 'bevor' },
                { id: 'g-b1g1q062', text: '___ ich in Berlin wohne, lerne ich Deutsch.', options: ['Nachdem', 'Bevor', 'Seit'], correctAnswer: 'Seit' },
                { id: 'g-b1g1q063', text: '___ ich koche, höre ich Musik.', options: ['Nachdem', 'Bevor', 'Während'], correctAnswer: 'Während' },
                { id: 'g-b1g1q064', text: 'Er ging schlafen, ___ er den Film gesehen hatte.', options: ['nachdem', 'bevor', 'während'], correctAnswer: 'nachdem' },
                { id: 'g-b1g1q065', text: 'Man muss die Hände waschen, ___ man isst.', options: ['nachdem', 'bevor', 'seit'], correctAnswer: 'bevor' },
                // Adjektivdeklination (Dativ)
                { id: 'g-b1g1q066', text: 'Ich helfe dem ___ Mann. (alt)', options: ['alt', 'alte', 'alten'], correctAnswer: 'alten' },
                { id: 'g-b1g1q067', text: 'Sie spricht mit der ___ Frau. (nett)', options: ['nett', 'nette', 'netten'], correctAnswer: 'netten' },
                { id: 'g-b1g1q068', text: 'Er spielt mit einem ___ Kind. (klein)', options: ['klein', 'kleine', 'kleinen'], correctAnswer: 'kleinen' },
                { id: 'g-b1g1q069', text: 'Das Auto gehört meinem ___ Bruder. (alt)', options: ['alt', 'alte', 'alten'], correctAnswer: 'alten' },
                { id: 'g-b1g1q070', text: 'Ich danke dir für das ___ Geschenk. (schön)', options: ['schön', 'schöne', 'schönen'], correctAnswer: 'schöne' }, // Akkusativ
                // Adjektivdeklination (Genitiv)
                { id: 'g-b1g1q071', text: 'Das Auto meines ___ Vaters ist rot. (alt)', options: ['alt', 'alte', 'alten'], correctAnswer: 'alten' },
                { id: 'g-b1g1q072', text: 'Der Hund einer ___ Frau ist weggelaufen. (jung)', options: ['jung', 'junge', 'jungen'], correctAnswer: 'jungen' },
                { id: 'g-b1g1q073', text: 'Der Ball des ___ Kindes ist weg. (klein)', options: ['klein', 'kleine', 'kleinen'], correctAnswer: 'kleinen' },
                { id: 'g-b1g1q074', text: 'Das sind die Bücher meiner ___ Freunde. (gut)', options: ['gut', 'gute', 'guten'], correctAnswer: 'guten' },
                // Adjektivdeklination (ohne Artikel)
                { id: 'g-b1g1q075', text: '___ Kaffee schmeckt gut. (Heißer)', options: ['Heißer', 'Heiße', 'Heißes'], correctAnswer: 'Heißer' },
                { id: 'g-b1g1q076', text: 'Ich trinke gern ___ Wein. (rot)', options: ['rot', 'roter', 'roten'], correctAnswer: 'roten' }, // Akkusativ
                { id: 'g-b1g1q077', text: '___ (kalt) Wasser mag ich nicht.', options: ['Kalt', 'Kaltes', 'Kalten'], correctAnswer: 'Kaltes' },
                { id: 'g-b1g1q078', text: 'Er spricht mit ___ (freundlich) Leuten.', options: ['freundlich', 'freundliche', 'freundlichen'], correctAnswer: 'freundlichen' }, // Dativ Plural
                // Verben mit Präpositionen
                { id: 'g-b1g1q079', text: 'Ich warte ___ den Bus.', options: ['auf', 'für', 'mit'], correctAnswer: 'auf' },
                { id: 'g-b1g1q080', text: 'Er interessiert sich ___ Politik.', options: ['an', 'für', 'über'], correctAnswer: 'für' },
                { id: 'g-b1g1q081', text: 'Wir sprechen ___ das Wetter.', options: ['von', 'mit', 'über'], correctAnswer: 'über' },
                { id: 'g-b1g1q082', text: 'Sie denkt ___ ihren Urlaub.', options: ['an', 'auf', 'über'], correctAnswer: 'an' },
                { id: 'g-b1g1q083', text: 'Er hat ___ dem Rauchen aufgehört.', options: ['von', 'mit', 'für'], correctAnswer: 'mit' },
                { id: 'g-b1g1q084', text: 'Ich freue mich ___ das Wochenende.', options: ['auf', 'über', 'mit'], correctAnswer: 'auf' }, // Future
                { id: 'g-b1g1q085', text: 'Ich freue mich ___ das Geschenk.', options: ['auf', 'über', 'mit'], correctAnswer: 'über' }, // Present/Past
                { id: 'g-b1g1q086', text: 'Er erinnert sich ___ seine Kindheit.', options: ['an', 'auf', 'über'], correctAnswer: 'an' },
                { id: 'g-b1g1q087', text: 'Sie nimmt ___ dem Kurs teil.', options: ['an', 'in', 'mit'], correctAnswer: 'an' },
                { id: 'g-b1g1q088', text: 'Ich habe Angst ___ Spinnen.', options: ['von', 'vor', 'mit'], correctAnswer: 'vor' },
                { id: 'g-b1g1q089', text: 'Er träumt ___ einer Weltreise.', options: ['von', 'über', 'an'], correctAnswer: 'von' },
                { id: 'g-b1g1q090', text: 'Sie bittet ___ Hilfe.', options: ['um', 'für', 'an'], correctAnswer: 'um' },
                { id: 'g-b1g1q091', text: 'Ich danke dir ___ deine Hilfe.', options: ['für', 'um', 'mit'], correctAnswer: 'für' },
                { id: 'g-b1g1q092', text: 'Er beschwert sich ___ das Essen.', options: ['von', 'an', 'über'], correctAnswer: 'über' },
                // n-Deklination
                { id: 'g-b1g1q093', text: 'Ich sehe den ___ (Junge).', options: ['Junge', 'Jungen', 'Junge_'], correctAnswer: 'Jungen' },
                { id: 'g-b1g1q094', text: 'Das ist der Name des ___ (Kollege).', options: ['Kollege', 'Kollegen', 'Kolleges'], correctAnswer: 'Kollegen' },
                { id: 'g-b1g1q095', text: 'Ich spreche mit dem ___ (Herr).', options: ['Herr', 'Herrn', 'Herren'], correctAnswer: 'Herrn' },
                { id: 'g-b1g1q096', text: 'Kennen Sie Herrn ___ (Meier)?', options: ['Meier', 'Meiern', 'Meiers'], correctAnswer: 'Meier' }, // Names are not n-declension
                { id: 'g-b1g1q097', text: 'Das ist ein ___ (Löwe).', options: ['Löwe', 'Löwen', 'Löwe_'], correctAnswer: 'Löwe' }, // Nominativ
                { id: 'g-b1g1q098', text: 'Ich frage den ___ (Polizist).', options: ['Polizist', 'Polizisten', 'Polizists'], correctAnswer: 'Polizisten' },
                { id: 'g-b1g1q099', text: 'Er gibt dem ___ (Student) ein Buch.', options: ['Student', 'Studenten', 'Studentes'], correctAnswer: 'Studenten' },
                { id: 'g-b1g1q100', text: 'Das ist der Tisch des ___ (Architekt).', options: ['Architekt', 'Architekten', 'Architekts'], correctAnswer: 'Architekten' },
                { id: 'g-b1g1q101', text: 'Ich habe einen ___ (Gedanke).', options: ['Gedanke', 'Gedanken', 'Gedankes'], correctAnswer: 'Gedanken' },
                { id: 'g-b1g1q102', text: 'Der ___ (Name) ist schwer.', options: ['Name', 'Namen', 'Names'], correctAnswer: 'Name' }, // Nominativ
                { id: 'g-b1g1q103', text: 'Ich habe seinen ___ (Name) vergessen.', options: ['Name', 'Namen', 'Names'], correctAnswer: 'Namen' }, // Akkusativ
                { id: 'g-b1g1q104', text: 'Das Ende des ___ (Film) war traurig.', options: ['Film', 'Films', 'Filmen'], correctAnswer: 'Films' }, // Not n-declension
              ]
            }
          ],
        },
//
// --- END OF g-b1-l1 ---

         {
          id: 'g-b1-l2',
          title: 'Modelltest 2: Übungssatz',
          estimatedTime: 165,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 30 Questions) ---
            {
              id: 'g-b1-l2-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (10 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (zweimal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie an: Richtig/Falsch und a, b oder c.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Mann', line: 'Hallo Sarah, ich rufe wegen der Party am Samstag an. Ich kann leider doch nicht kommen, ich muss arbeiten.' },
                { speaker: 'Sarah', line: 'Oh, wie schade! Arbeitest du das ganze Wochenende?' },
                { speaker: 'Mann', line: 'Nein, nur am Samstag. Am Sonntag habe ich frei. Wollen wir da vielleicht einen Kaffee trinken?' },
                { speaker: 'Sarah', line: 'Ja, gute Idee! Sonntag passt mir gut.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Frau', line: 'Guten Tag, ich möchte einen Flug nach Rom buchen, bitte.' },
                { speaker: 'Angestellter', line: 'Gern. Hin und zurück? Wann möchten Sie fliegen?' },
                { speaker: 'Frau', line: 'Nächste Woche, vom 10. bis 17. Mai. Aber bitte kein Flug am Vormittag. Ich reise lieber nachmittags.' },
                { speaker: 'Angestellter', line: 'Okay, ich schaue mal... Es gibt einen Flug am 10. Mai um 15:30 Uhr.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Kollege 1', line: 'Sag mal, hast du schon die E-Mail von Herrn Wagner gelesen? Wegen der neuen Arbeitszeiten?' },
                { speaker: 'Kollege 2', line: 'Ja, habe ich. Ich finde das nicht gut. Ab nächstem Monat sollen wir bis 18 Uhr arbeiten, statt 17 Uhr.' },
                { speaker: 'Kollege 1', line: 'Dafür fangen wir aber auch eine Stunde später an, erst um 10 Uhr. Ich finde das super, dann kann ich morgens Sport machen.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Mann', line: 'Ich habe so starke Zahnschmerzen. Ich brauche dringend einen Termin.' },
                { speaker: 'Praxis', line: 'Ohje. Haben Sie heute um 14 Uhr Zeit? Das wäre ein Notfalltermin. Sie müssen aber vielleicht länger warten.' },
                { speaker: 'Mann', line: 'Ja, 14 Uhr ist perfekt. Warten ist kein Problem. Vielen Dank!' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 5.' },
                { speaker: 'Frau', line: 'Entschuldigung, wo finde ich hier die Abteilung für Haushaltswaren? Ich suche Töpfe.' },
                { speaker: 'Verkäufer', line: 'Töpfe und Pfannen sind im 3. Stock. Nehmen Sie den Aufzug hier links, dann sehen Sie die Abteilung direkt.' },
                { speaker: 'Frau', line: 'Im 3. Stock. Super, danke.' },
              ],
              questions: [
                // Text 1
                { id: 'g-b1h1q1_2', text: 'Text 1: Der Mann kann nicht zur Party kommen, weil er krank ist.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q2_2', text: 'Text 1: Was machen die beiden am Sonntag?', options: ['a) Sie gehen auf die Party.', 'b) Sie arbeiten zusammen.', 'c) Sie trinken einen Kaffee.'], correctAnswer: 'c) Sie trinken einen Kaffee.' },
                // Text 2
                { id: 'g-b1h1q3_2', text: 'Text 2: Die Frau möchte am 10. Mai fliegen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h1q4_2', text: 'Text 2: Welche Abflugzeit bevorzugt die Frau?', options: ['a) Am Vormittag.', 'b) Am Nachmittag.', 'c) Am Abend.'], correctAnswer: 'b) Am Nachmittag.' },
                // Text 3
                { id: 'g-b1h1q5_2', text: 'Text 3: Die Kollegen sprechen über einen neuen Chef.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q6_2', text: 'Text 3: Wie findet Kollege 1 die neuen Arbeitszeiten?', options: ['a) Er findet sie nicht gut.', 'b) Er findet sie sehr gut.', 'c) Er hat keine Meinung.'], correctAnswer: 'b) Er findet sie sehr gut.' },
                // Text 4
                { id: 'g-b1h1q7_2', text: 'Text 4: Der Mann muss nicht im Wartezimmer warten.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q8_2', text: 'Text 4: Wann ist der Termin?', options: ['a) Um 10 Uhr.', 'b) Um 14 Uhr.', 'c) Morgen.'], correctAnswer: 'b) Um 14 Uhr.' },
                // Text 5
                { id: 'g-b1h1q9_2', text: 'Text 5: Die Frau sucht Töpfe.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h1q10_2', text: 'Text 5: Wo ist die Abteilung?', options: ['a) Im Erdgeschoss, links.', 'b) Im 3. Stock.', 'c) Im 2. Stock.'], correctAnswer: 'b) Im 3. Stock.' },
              ]
            },
            {
              id: 'g-b1-l2-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Radiovortrag (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen bei "Digital Leben". Unser Thema heute: "Social Media" - Fluch oder Segen? Zu Gast ist die Medienpsychologin Dr. Hanna Scholz. Frau Dr. Scholz, wie sehen Sie die Entwicklung?' },
                { speaker: 'Dr. Scholz', line: 'Guten Tag. Die Entwicklung ist rasant. Über 90% der Jugendlichen in Deutschland nutzen täglich Social-Media-Plattformen. Das ist eine enorme Zahl.' },
                { speaker: 'Moderator', line: 'Was sind die größten Vorteile?' },
                { speaker: 'Dr. Scholz', line: 'Der Hauptvorteil ist die Vernetzung. Man kann leicht mit Freunden auf der ganzen Welt in Kontakt bleiben. Man kann sich informieren, austauschen und an Diskussionen teilnehmen. Für viele ist es auch eine wichtige Quelle für Kreativität.' },
                { speaker: 'Moderator', line: 'Und die Nachteile? Man hört ja viel von Stress und "Fake News".' },
                { speaker: 'Dr. Scholz', line: 'Das ist die Kehrseite. Ein großes Problem ist der ständige Vergleich. Man sieht nur die perfekten Urlaubsfotos und Erfolge der anderen. Das erzeugt Druck und macht unzufrieden. Ein weiteres Problem ist die Suchtgefahr. Manche Jugendliche verbringen 6 bis 8 Stunden am Tag online.' },
                { speaker: 'Moderator', line: 'Was raten Sie Eltern?' },
                { speaker: 'Dr. Scholz', line: 'Reden! Sprechen Sie mit Ihren Kindern. Interessieren Sie sich dafür, was sie online machen. Feste Regeln sind wichtig, zum Beispiel "handyfreie Zeiten" beim Essen oder nach 21 Uhr. Ein komplettes Verbot bringt meistens nichts. Wichtiger ist es, den Kindern einen kritischen Umgang mit Medien beizubringen.' },
              ],
              questions: [
                { id: 'g-b1h2q1_2', text: 'Was ist das Thema der Sendung?', options: ['a) Die Vorteile des Internets', 'b) Vor- und Nachteile von Social Media', 'c) Neue Handys für Jugendliche'], correctAnswer: 'b) Vor- und Nachteile von Social Media' },
                { id: 'g-b1h2q2_2', text: 'Wer ist Dr. Hanna Scholz?', options: ['a) Eine Jugendliche', 'b) Eine Lehrerin', 'c) Eine Medienpsychologin'], correctAnswer: 'c) Eine Medienpsychologin' },
                { id: 'g-b1h2q3_2', text: 'Wie viele Jugendliche in Deutschland nutzen täglich Social Media?', options: ['a) Weniger als 90%', 'b) Mehr als 90%', 'c) Genau 90%'], correctAnswer: 'b) Mehr als 90%' },
                { id: 'g-b1h2q4_2', text: 'Was ist laut Dr. Scholz der Hauptvorteil?', options: ['a) Man kann einkaufen.', 'b) Man kann sich vernetzen.', 'c) Man kann kreativ sein.'], correctAnswer: 'b) Man kann sich vernetzen.' },
                { id: 'g-b1h2q5_2', text: 'Was ist ein großes Problem von Social Media?', options: ['a) Es ist zu teuer.', 'b) Der ständige Vergleich mit anderen.', 'c) Man findet keine Freunde.'], correctAnswer: 'b) Der ständige Vergleich mit anderen.' },
                { id: 'g-b1h2q6_2', text: 'Wie viele Stunden verbringen manche Jugendliche online?', options: ['a) 6 bis 8 Stunden', 'b) 1 bis 2 Stunden', 'c) 21 Stunden'], correctAnswer: 'a) 6 bis 8 Stunden' },
                { id: 'g-b1h2q7_2', text: 'Was rät Dr. Scholz den Eltern?', options: ['a) Sie sollen Social Media verbieten.', 'b) Sie sollen mit ihren Kindern sprechen.', 'c) Sie sollen die Handys kontrollieren.'], correctAnswer: 'b) Sie sollen mit ihren Kindern sprechen.' },
                { id: 'g-b1h2q8_2', text: 'Was sind "handyfreie Zeiten"?', options: ['a) Zeiten, in denen man ein Handy kostenlos bekommt.', 'b) Zeiten, in denen man das Handy nicht benutzt.', 'c) Zeiten, in denen man online ist.'], correctAnswer: 'b) Zeiten, in denen man das Handy nicht benutzt.' },
                { id: 'g-b1h2q9_2', text: 'Was ist wichtiger als ein Verbot?', options: ['a) Ein neues Handy zu kaufen.', 'b) Einen kritischen Umgang zu lernen.', 'c) Mehr Zeit am Handy zu verbringen.'], correctAnswer: 'b) Einen kritischen Umgang zu lernen.' },
                { id: 'g-b1h2q10_2', text: 'Was macht unzufrieden?', options: ['a) Mit Freunden zu sprechen.', 'b) Feste Regeln zu haben.', 'c) Nur perfekte Fotos von anderen zu sehen.'], correctAnswer: 'c) Nur perfekte Fotos von anderen zu sehen.' },
              ]
            },
            {
              id: 'g-b1-l2-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Martin', line: 'Hallo Lisa, wie war dein Urlaub in Italien?' },
                { speaker: 'Lisa', line: 'Hallo Martin. Ach, es war... kompliziert. Das Hotel war super, direkt am Strand.' },
                { speaker: 'Martin', line: 'Das klingt doch gut. Wo ist das Problem?' },
                { speaker: 'Lisa', line: 'Das Wetter! Es hat die ersten drei Tage nur geregnet. Wir saßen im Hotel fest.' },
                { speaker: 'Martin', line: 'Oh nein, das ist ja Pech. Und was habt ihr dann gemacht?' },
                { speaker: 'Lisa', line: 'Wir haben gelesen und viel zu viel gegessen. Das Essen war unglaublich gut. Zum Glück wurde das Wetter besser. Die letzten vier Tage hatten wir nur Sonne.' },
                { speaker: 'Martin', line: 'Na also. Konntet ihr dann noch was unternehmen?' },
                { speaker: 'Lisa', line: 'Ja, wir haben einen Ausflug nach Rom gemacht. Das war fantastisch, aber auch sehr anstrengend. So viele Leute! Ich glaube, nächstes Mal fahre ich lieber in die Berge zum Wandern.' },
              ],
              questions: [
                { id: 'g-b1h3q1_2', text: 'Lisa war in Spanien im Urlaub.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q2_2', text: 'Das Hotel war nicht schön.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q3_2', text: 'Das Wetter war die ganze Zeit schlecht.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q4_2', text: 'Lisa fand das Essen im Hotel nicht gut.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q5_2', text: 'Lisa hat einen Ausflug nach Rom gemacht.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h3q6_2', text: 'Nächstes Mal möchte Lisa wieder ans Meer fahren.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-b1-l2-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (4 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen bei "Stadtgespräch". Unser Thema heute: "Brauchen wir noch Bargeld?" Immer mehr Menschen zahlen nur noch mit Karte oder Handy. Herr Müller, Sie sind von der Handelsbank. Ist Bargeld ein Auslaufmodell?' },
                { speaker: 'Herr Müller', line: 'Guten Tag. Ja, ich denke schon. Digitales Bezahlen ist schneller, hygienischer und sicherer. Man muss nicht viel Geld im Portemonnaie haben. Für den Handel ist es auch einfacher.' },
                { speaker: 'Moderatorin', line: 'Frau Yilmaz, Sie sind vom Verbraucherschutz. Sehen Sie das auch so?' },
                { speaker: 'Frau Yilmaz', line: 'Überhaupt nicht. Bargeld bedeutet Freiheit und Anonymität. Wenn ich digital bezahle, weiß die Bank oder der Zahlungsdienst, wo ich was kaufe. Ich werde zum "gläsernen Kunden". Außerdem haben ältere Menschen oft kein Smartphone oder wollen nicht alles digital machen. Wir müssen die Wahl haben.' },
                { speaker: 'Herr Müller', line: 'Aber die Sicherheit... Bargeld kann man verlieren oder es kann gestohlen werden.' },
                { speaker: 'Frau Yilmaz', line: 'Eine Karte kann auch gestohlen werden! Und was ist mit Datenklau im Internet? Ich finde, die Kontrolle über die eigenen Ausgaben ist mit Bargeld viel einfacher.' },
              ],
              questions: [
                { id: 'g-b1h4q1_2', text: 'Was ist das Thema der Diskussion?', options: ['a) Die Sicherheit von Banken.', 'b) Die Zukunft des Bezahlens.', 'c) Neue Smartphones.'], correctAnswer: 'b) Die Zukunft des Bezahlens.' },
                { id: 'g-b1h4q2_2', text: 'Was ist ein Vorteil von digitalem Bezahlen laut Herrn Müller?', options: ['a) Es ist anonymer.', 'b) Es ist hygienischer.', 'c) Man hat mehr Kontrolle.'], correctAnswer: 'b) Es ist hygienischer.' },
                { id: 'g-b1h4q3_2', text: 'Was ist Frau Yilmaz\' Hauptargument FÜR Bargeld?', options: ['a) Es ist schneller.', 'b) Es ist moderner.', 'c) Es bedeutet Freiheit und Anonymität.'], correctAnswer: 'c) Es bedeutet Freiheit und Anonymität.' },
                { id: 'g-b1h4q4_2', text: 'Wer hat laut Frau Yilmaz oft Probleme mit digitalem Bezahlen?', options: ['a) Ältere Menschen.', 'b) Herr Müller.', 'c) Angestellte im Handel.'], correctAnswer: 'a) Ältere Menschen.' },
              ]
            },

            // --- LESEN (5 Parts, 30 Questions) ---
            {
              id: 'g-b1-l2-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (6 Fragen)',
              content: 'Lesen Sie die Blog-Beiträge. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Thema: Wie wichtig ist Sport für Sie?**\n\n**Beitrag von David (22):**\nIch kann ohne Sport nicht leben. Ich gehe viermal pro Woche ins Fitness-Studio und spiele am Wochenende Fußball mit Freunden. Für mich ist das der perfekte Ausgleich zum Stress an der Uni. Wenn ich mich nicht bewege, werde ich unruhig und kann mich nicht konzentrieren. Ich achte auch sehr auf meine Ernährung.\n\n**Beitrag von Julia (34):**\nFrüher habe ich Sport gehasst. Aber vor zwei Jahren habe ich mit Yoga angefangen. Das hat mein Leben verändert. Es ist nicht so anstrengend wie Joggen, aber es tut meinem Rücken gut. Ich arbeite den ganzen Tag im Büro. Jetzt mache ich jeden Morgen 30 Minuten Yoga und fühle mich viel besser. Ich bin ruhiger und flexibler geworden.\n\n**Beitrag von Klaus (51):**\nIch weiß, Sport ist gesund. Aber ehrlich gesagt, bin ich zu faul. Nach einem langen Arbeitstag möchte ich nur noch auf mein Sofa. Meine Frau sagt immer, ich soll mich mehr bewegen. Vielleicht fange ich nächsten Monat mit Schwimmen an. Das ist gut für die Gelenke. Aber versprechen kann ich es nicht.\n\n**Fragen:**\n',
              questions: [
                { id: 'g-b1r1q1_2', text: 'Wer macht am meisten Sport?', options: ['a) David', 'b) Julia', 'c) Klaus'], correctAnswer: 'a) David' },
                { id: 'g-b1r1q2_2', text: 'Wer macht Sport gegen Stress?', options: ['a) David', 'b) Julia', 'c) Klaus'], correctAnswer: 'a) David' },
                { id: 'g-b1r1q3_2', text: 'Wer macht Sport wegen Rückenproblemen?', options: ['a) David', 'b) Julia', 'c) Klaus'], correctAnswer: 'b) Julia' },
                { id: 'g-b1r1q4_2', text: 'Wer macht im Moment keinen Sport?', options: ['a) David', 'b) Julia', 'c) Klaus'], correctAnswer: 'c) Klaus' },
                { id: 'g-b1r1q5_2', text: 'Wer hat seine Meinung über Sport geändert?', options: ['a) David', 'b) Julia', 'c) Klaus'], correctAnswer: 'b) Julia' },
                { id: 'g-b1r1q6_2', text: 'Wer überlegt, mit Schwimmen anzufangen?', options: ['a) David', 'b) Julia', 'c) Klaus'], correctAnswer: 'c) Klaus' },
              ]
            },
            {
              id: 'g-b1-l2-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (6 Fragen)',
              content: 'Lesen Sie den Artikel aus einer Zeitschrift. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Der Trend zum "Tiny House"**\n\nWeniger ist mehr. Dieser Gedanke wird für viele Menschen immer wichtiger. Sie wollen nicht mehr in großen Häusern mit vielen Dingen leben, die sie nicht brauchen. Ein neuer Trend heißt "Tiny House" (Mini-Haus). Diese Häuser sind oft nur 15 bis 30 Quadratmeter groß, aber sie haben alles, was man braucht: ein kleines Bad, eine Küche, ein Bett und einen Wohnbereich.\n\nViele dieser Häuser sind mobil, das heißt, sie haben Räder und man kann mit ihnen umziehen. Die Vorteile liegen auf der Hand: Man bezahlt viel weniger Geld für Miete oder Kauf. Man verbraucht weniger Energie und schont so die Umwelt. Man hat weniger Dinge und muss weniger putzen.\n\nAber es gibt auch Nachteile. Das Leben auf so kleinem Raum ist nicht für jeden. Man kann nicht viele Gäste einladen. Eine Familie mit zwei Kindern wird hier kaum Platz finden. Außerdem ist es in Deutschland rechtlich kompliziert. Man darf sein Tiny House nicht einfach irgendwo abstellen. Man braucht ein Grundstück und eine Baugenehmigung, genau wie für ein normales Haus.',
              questions: [
                { id: 'g-b1r2q1_2', text: 'Wie groß sind Tiny Houses oft?', options: ['a) 15 bis 30 Quadratmeter', 'b) 50 bis 80 Quadratmeter', 'c) Immer über 100 Quadratmeter'], correctAnswer: 'a) 15 bis 30 Quadratmeter' },
                { id: 'g-b1r2q2_2', text: 'Was ist ein Vorteil von Tiny Houses?', options: ['a) Sie sind sehr groß.', 'b) Man braucht weniger Energie.', 'c) Man kann viele Gäste einladen.'], correctAnswer: 'b) Man braucht weniger Energie.' },
                { id: 'g-b1r2q3_2', text: 'Was bedeutet "mobil" in diesem Text?', options: ['a) Man kann darin telefonieren.', 'b) Die Häuser haben Möbel.', 'c) Man kann mit den Häusern umziehen.'], correctAnswer: 'c) Man kann mit den Häusern umziehen.' },
                { id: 'g-b1r2q4_2', text: 'Für wen ist ein Tiny House wahrscheinlich nicht geeignet?', options: ['a) Für Singles', 'b) Für Familien mit Kindern', 'c) Für Leute, die Energie sparen wollen'], correctAnswer: 'b) Für Familien mit Kindern' },
                { id: 'g-b1r2q5_2', text: 'Was ist ein rechtliches Problem in Deutschland?', options: ['a) Man darf sie nur mieten, nicht kaufen.', 'b) Man braucht ein Grundstück und eine Genehmigung.', 'c) Sie dürfen keine Räder haben.'], correctAnswer: 'b) Man braucht ein Grundstück und eine Genehmigung.' },
                { id: 'g-b1r2q6_2', text: 'Welche Idee steckt hinter dem Trend?', options: ['a) Man will mehr Dinge besitzen.', 'b) Man will mit weniger Dingen leben.', 'c) Man will in der Stadt leben.'], correctAnswer: 'b) Man will mit weniger Dingen leben.' },
              ]
            },
            {
              id: 'g-b1-l2-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten Deutsch lernen und suchen einen Kurs, der Sie schnell auf das B2-Niveau vorbereitet.\n2. Sie haben Probleme mit Ihrem Laptop (er ist langsam) und suchen eine Reparatur.\n3. Sie wollen am Samstagabend mit Freunden tanzen gehen.\n4. Sie suchen ein günstiges Geschenk für einen Kollegen, der gern liest.\n5. Sie haben starke Rückenschmerzen und suchen einen speziellen Arzt.\n6. Sie möchten Ihre Wohnung neu streichen lassen.\n\n**Anzeigen:**\n**a) Tanzclub "Salsa":** Lust auf lateinamerikanische Rhythmen? Salsa-Kurs für Anfänger, jeden Freitag 20 Uhr. Keine Vorkenntnisse nötig.\n\n**b) Orthopädie-Praxis Dr. Knie:** Spezialist für Sportverletzungen und Gelenkprobleme. Bei akuten Rückenschmerzen bekommen Sie bei uns schnell einen Termin. Rufen Sie an!\n\n**c) PC-Notdienst "FixIt":** Computer-Reparatur aller Marken. Ist Ihr PC zu langsam? Virus? Kaputtes Display? Wir helfen! Günstige Preise für Studenten. Kommen auch ins Haus.\n\n**d) Bücher-Fundgrube:** Das Antiquariat in Ihrer Nähe. Tausende gebrauchte Bücher ab 1 Euro. Romane, Krimis, Sachbücher. Der perfekte Ort für Geschenke-Sucher. Mo-Sa 10-18 Uhr.\n\n**e) Sprachschule "Perfekt":** Intensivkurse Deutsch. In 8 Wochen von B1 zu B2. TägUnterricht (Mo-Fr, 9-13 Uhr). Start: 1. Juni. Info-Abend nächsten Montag.\n\n**f) Disco "Apollo":** Jeden Samstag die beste Party der Stadt! 90er-Jahre-Special. Geöffnet ab 22 Uhr. Eintritt 10 €.\n\n**g) Restaurant "Zum goldenen Löwen":** Deutsche Küche modern interpretiert. Perfekt für ein Geschäftsessen oder ein romantisches Dinner. Reservierung empfohlen.\n\n**h) Malerbetrieb "Schönweiß":** Wir streichen Ihre Wände, Decken und Fassaden. Sauber, schnell und professionell. Kostenloser Kostenvoranschlag. Rufen Sie uns an!',
              questions: [
                { id: 'g-b1r3q1_2', text: 'Situation 1: Deutsch-Intensivkurs B2', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'e' },
                { id: 'g-b1r3q2_2', text: 'Situation 2: Laptop-Reparatur', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'c' },
                { id: 'g-b1r3q3_2', text: 'Situation 3: Tanzen gehen am Samstag', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'f' },
                { id: 'g-b1r3q4_2', text: 'Situation 4: Günstiges Buchgeschenk', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'd' },
                { id: 'g-b1r3q5_2', text: 'Situation 5: Arzt für Rückenschmerzen', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'b' },
                { id: 'g-b1r3q6_2', text: 'Situation 6: Wohnung streichen', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'h' },
              ]
            },
            {
              id: 'g-b1-l2-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Forumsbeitrag. Kreuzen Sie an: Richtig oder Falsch.\n\n**Thema: Sollen Noten in der Schule abgeschafft werden?**\n\n**Beitrag von "Lern-Fan88":**\nIch bin Lehrer und sage ganz klar: Ja, wir sollten Noten abschaffen, zumindest in den unteren Klassen. Noten erzeugen unglaublichen Druck. Die Kinder lernen nicht mehr, weil sie etwas wissen wollen, sondern nur noch "für die Prüfung". Sie haben Angst vor einer schlechten Note, Angst vor den Eltern, Angst vor den Mitschülern. Das ist keine gute Lernumgebung.\n\nStatt einer "3" oder "5" sollten Lehrer ausführliche Berichte schreiben. "Du bist schon sehr gut im Rechnen, aber bei der Rechtschreibung musst du noch üben." Das hilft dem Kind viel mehr. Es zeigt, wo die Stärken und Schwächen liegen, ohne das Kind zu demotivieren.\n\n**Beitrag von "Realist75":**\nDas ist ja eine schöne Idee, aber total unrealistisch. Lehrer haben keine Zeit, für 30 Schüler jede Woche lange Berichte zu schreiben. Noten sind schnell und effizient. Außerdem ist das Leben kein Wunschkonzert. Auch im Beruf und im Studium gibt es Konkurrenz und Druck. Man muss lernen, damit umzugehen. Noten sind objektiv und vergleichbar. Ein Bericht ist immer subjektiv. Wie soll man sich mit einem "Bericht" an einer Universität bewerben?',
              questions: [
                { id: 'g-b1r4q1_2', text: '"Lern-Fan88" ist Schüler.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1r4q2_2', text: 'Er findet, dass Noten Stress verursachen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1r4q3_2', text: 'Er schlägt vor, Noten durch Berichte zu ersetzen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1r4q4_2', text: '"Realist75" stimmt "Lern-Fan88" zu.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1r4q5_2', text: 'Ein Argument von "Realist75" ist, dass Lehrer zu wenig Zeit für Berichte haben.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1r4q6_2', text: 'Er findet Noten nicht objektiv.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1r4q7_2', text: 'Er glaubt, man kann sich mit Berichten nicht an einer Uni bewerben.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-b1-l2-r5',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 5 (5 Fragen)',
              content: 'Lesen Sie die Anleitung. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Anleitung: Einen guten Lebenslauf schreiben**\n\nDer Lebenslauf ist das wichtigste Dokument Ihrer Bewerbung. Er muss klar, übersichtlich und fehlerfrei sein. So geht\'s:\n\n1.  **Layout:** Halten Sie es einfach. Keine bunten Farben oder verrückten Schriftarten. Ein professionelles Foto (optional, aber oft gern gesehen) gehört oben rechts.\n\n2.  **Reihenfolge:** Der Lebenslauf wird "antichronologisch" geschrieben. Das heißt, Sie beginnen mit Ihrer aktuellsten Position (z.B. Ihr jetziger Job) und gehen dann in der Zeit zurück. Das Gleiche gilt für die Ausbildung (letzter Abschluss zuerst).\n\n3.  **Länge:** Der Lebenslauf sollte maximal zwei Seiten lang sein. Personaler haben wenig Zeit.\n\n4.  **Inhalt:** Nennen Sie nicht nur, wo Sie gearbeitet haben, sondern was Sie dort gemacht haben. Beschreiben Sie Ihre wichtigsten Aufgaben und Erfolge in Stichpunkten (z.B. "Verantwortlich für Projekt X", "Betreuung von Kunden").\n\n5.  **Lücken:** Haben Sie Lücken im Lebenslauf (z.B. 6 Monate nicht gearbeitet)? Seien Sie ehrlich. Schreiben Sie z.B. "Berufliche Neuorientierung" oder "Elternzeit".\n\n6.  **Kontrolle:** Lesen Sie alles dreimal. Ein Tippfehler kann einen schlechten Eindruck machen. Lassen Sie am besten eine andere Person Korrektur lesen.',
              questions: [
                { id: 'g-b1r5q1_2', text: 'Was bedeutet "antichronologisch"?', options: ['a) Man beginnt mit der Kindheit.', 'b) Man beginnt mit der aktuellsten Position.', 'c) Man sortiert nach Wichtigkeit.'], correctAnswer: 'b) Man beginnt mit der aktuellsten Position.' },
                { id: 'g-b1r5q2_2', text: 'Wie lang sollte der Lebenslauf maximal sein?', options: ['a) Eine Seite', 'b) Zwei Seiten', 'c) Drei Seiten'], correctAnswer: 'b) Zwei Seiten' },
                { id: 'g-b1r5q3_2', text: 'Was sollte man bei den Inhalten beschreiben?', options: ['a) Nur den Namen der Firma', 'b) Nur die Dauer der Anstellung', 'c) Die wichtigsten Aufgaben und Erfolge'], correctAnswer: 'c) Die wichtigsten Aufgaben und Erfolge' },
                { id: 'g-b1r5q4_2', text: 'Was soll man mit "Lücken" machen?', options: ['a) Sie nicht erwähnen.', 'b) Etwas erfinden.', 'c) Ehrlich sein und sie erklären.'], correctAnswer: 'c) Ehrlich sein und sie erklären.' },
                { id: 'g-b1r5q5_2', text: 'Was ist der letzte Schritt?', options: ['a) Ein Foto machen.', 'b) Bunte Farben benutzen.', 'c) Alles auf Fehler kontrollieren.'], correctAnswer: 'c) Alles auf Fehler kontrollieren.' },
              ]
            },
            
            // --- SCHREIBEN (3 Parts) ---
            {
              id: 'g-b1-l2-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle E-Mail (ca. 80 Wörter)',
              content: 'Ihr Freund David hat Sie eingeladen, mit ihm und anderen Freunden ein Wochenende in einer Hütte in den Bergen zu verbringen. Sie können aber erst einen Tag später kommen.\nSchreiben Sie ihm eine E-Mail (ca. 80 Wörter):\n- Bedanken Sie sich für die Einladung.\n- Erklären Sie, warum Sie später kommen (z.B. wichtige Arbeit).\n- Sagen Sie, wann Sie genau ankommen (z.B. Samstagvormittag).\n- Fragen Sie, ob Sie etwas Besonderes mitbringen sollen.',
            },
            {
              id: 'g-b1-l2-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Forumsbeitrag (ca. 80 Wörter)',
              content: 'Sie haben im Internet einen Forumsbeitrag zum Thema "Ist Essen aus dem Supermarkt noch gesund?" gelesen.\n\n**Meinung von "Bio-Fan":**\n"Ich kaufe nur noch im Bio-Laden. Das Essen im Supermarkt ist voller Chemie und hat keinen Geschmack. Das ist zwar teurer, aber meine Gesundheit ist mir wichtiger."\n\nSchreiben Sie Ihre Meinung dazu (ca. 80 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe für Ihre Meinung.\n- Erzählen Sie von Ihren eigenen Erfahrungen (z.B. wo Sie einkaufen).',
            },
            {
              id: 'g-b1-l2-w3',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 3: Formelle E-Mail (ca. 40 Wörter)',
              content: 'Sie haben online ein Hotelzimmer im "Hotel Central" gebucht. Sie haben aber keine Bestätigung per E-Mail erhalten.\nSchreiben Sie eine E-Mail an das Hotel (ca. 40 Wörter).\n- Sagen Sie, wann Sie gebucht haben.\n- Bitten Sie um eine Bestätigung.\n- Bedanken Sie sich.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-b1-l2-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Etwas gemeinsam planen',
              content: 'Planen Sie mit Ihrem Partner (dem Bot) etwas.\n**Situation:** Sie und der Bot wollen zusammen einen Überraschungs-Geburtstag für eine Freundin (Maria) organisieren.\n**Aufgabe:** Finden Sie einen Termin, überlegen Sie, wen Sie einladen und was Sie als Geschenk kaufen wollen.'
            },
            {
              id: 'g-b1-l2-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Ein Thema präsentieren',
              content: 'Sie sollen eine kurze Präsentation (ca. 3-4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Ein Buch, das ich gelesen habe" oder "Ein interessanter Beruf").\n**Aufgabe:** Bereiten Sie eine Präsentation vor. Ihre Präsentation sollte eine Einleitung, einen Hauptteil (eigene Erfahrungen, Situation in Ihrem Land, Vor- & Nachteile) und einen Schluss haben. Starten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b1-l2-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Feedback geben & reagieren',
              content: 'Nach Ihrer Präsentation (Teil 2) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback (z.B. "Deine Präsentation war interessant, aber...") und stellen Sie ihm eine Frage zum Thema.'
            },
            
            // --- B1 WÖRTSCHATZ (Reusing from g-b1-l1-v1) ---
            {
              id: 'g-b1-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B1',
              content: 'Wichtige Wörter für die B1-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-b1-l1
              ]
            },

            // --- B1 GRAMMATIK (Reusing from g-b1-l1-g1) ---
            {
              id: 'g-b1-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B1',
              content: 'Testen Sie Ihr Grammatikwissen für die B1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-b1-l1
              ]
            }
          ],
        },
//
// --- END OF g-b1-l2 ---

        {
          id: 'g-b1-l3',
          title: 'Modelltest 3: Übungssatz',
          estimatedTime: 165,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 30 Questions) ---
            {
              id: 'g-b1-l3-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (10 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (zweimal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie an: Richtig/Falsch und a, b oder c.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Mann', line: 'Guten Tag, ich hätte gern einen Tisch für zwei Personen.' },
                { speaker: 'Kellnerin', line: 'Haben Sie reserviert?' },
                { speaker: 'Mann', line: 'Leider nein. Haben Sie nichts mehr frei?' },
                { speaker: 'Kellnerin', line: 'Im Restaurant ist alles besetzt. Aber auf der Terrasse hätten wir noch einen Tisch, wenn Sie möchten.' },
                { speaker: 'Mann', line: 'Ja, super. Das nehmen wir.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Frau', line: 'Hallo Tom, ich bins, Lena. Du, ich schaffe es heute nicht zum Sport.' },
                { speaker: 'Tom', line: 'Oh, schade. Ist was passiert?' },
                { speaker: 'Frau', line: 'Ich muss länger arbeiten. Das Meeting dauert ewig. Können wir unser Training auf morgen verschieben?' },
                { speaker: 'Tom', line: 'Ja, morgen habe ich auch Zeit. Gleiche Uhrzeit?' },
                { speaker: 'Frau', line: 'Perfekt, danke dir!' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Mann', line: 'Entschuldigung, wie komme ich zum Bahnhof?' },
                { speaker: 'Passantin', line: 'Zum Bahnhof? Da nehmen Sie am besten die U-Bahn. Die U5 fährt direkt dorthin.' },
                { speaker: 'Mann', line: 'Die U5. Und wo ist die nächste Station?' },
                { speaker: 'Passantin', line: 'Gleich hier um die Ecke. Aber der Bus, Linie 100, fährt auch dorthin. Er hält direkt vor dem Eingang.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Frau', line: 'Schau mal, dieses rote Kleid! Das ist perfekt für Annas Hochzeit.' },
                { speaker: 'Mann', line: 'Findest du? Ich finde das blaue daneben viel schöner. Das rote ist ein bisschen zu kurz, oder?' },
                { speaker: 'Frau', line: 'Hm, du hast recht. Ich probiere mal das blaue an.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 5.' },
                { speaker: 'Mann', line: 'Ich habe online einen Fernseher bestellt, aber er ist kaputt angekommen.' },
                { speaker: 'Service', line: 'Oh, das tut mir leid. Senden Sie uns bitte eine E-Mail mit Fotos des Schadens und Ihrer Bestellnummer. Wir schicken Ihnen dann ein Rücksende-Etikett.' },
                { speaker: 'Mann', line: 'Okay, mache ich sofort.' },
              ],
              questions: [
                // Text 1
                { id: 'g-b1h1q1_3', text: 'Text 1: Der Mann hat einen Tisch reserviert.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q2_3', text: 'Text 1: Wo bekommen sie einen Tisch?', options: ['a) Im Restaurant.', 'b) Gar nicht.', 'c) Auf der Terrasse.'], correctAnswer: 'c) Auf der Terrasse.' },
                // Text 2
                { id: 'g-b1h1q3_3', text: 'Text 2: Lena kann nicht zum Sport kommen, weil sie krank ist.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q4_3', text: 'Text 2: Was passiert mit dem Training?', options: ['a) Es fällt aus.', 'b) Es wird auf morgen verschoben.', 'c) Es findet später statt.'], correctAnswer: 'b) Es wird auf morgen verschoben.' },
                // Text 3
                { id: 'g-b1h1q5_3', text: 'Text 3: Der Bus Linie 100 fährt nicht zum Bahnhof.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q6_3', text: 'Text 3: Welche U-Bahn-Linie fährt zum Bahnhof?', options: ['a) Die U5', 'b) Die U100', 'c) Keine U-Bahn fährt dorthin.'], correctAnswer: 'a) Die U5' },
                // Text 4
                { id: 'g-b1h1q7_3', text: 'Text 4: Die Frau probiert zuerst das rote Kleid an.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q8_3', text: 'Text 4: Welches Kleid probiert die Frau an?', options: ['a) Das rote.', 'b) Das blaue.', 'c) Keins von beiden.'], correctAnswer: 'b) Das blaue.' },
                // Text 5
                { id: 'g-b1h1q9_3', text: 'Text 5: Der Fernseher ist beim Transport kaputt gegangen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h1q10_3', text: 'Text 5: Was soll der Mann zuerst tun?', options: ['a) Ein Rücksende-Etikett kaufen.', 'b) Anrufen.', 'c) Eine E-Mail mit Fotos schicken.'], correctAnswer: 'c) Eine E-Mail mit Fotos schicken.' },
              ]
            },
            {
              id: 'g-b1-l3-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Radiovortrag (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Impuls". Unser Thema heute ist "Lernen im Alter". Ist das Gehirn mit 60 nicht mehr so fit wie mit 20? Bei uns ist der Hirnforscher Professor Adam.' },
                { speaker: 'Prof. Adam', line: 'Guten Tag. Diese Idee, dass man im Alter nicht mehr lernen kann, ist falsch. Das Gehirn ist ein Muskel, der trainiert werden will – in jedem Alter.' },
                { speaker: 'Moderator', line: 'Aber es fällt älteren Menschen doch schwerer, z.B. eine neue Sprache zu lernen?' },
                { speaker: 'Prof. Adam', line: 'Es ist anders. Jüngere Menschen lernen oft schneller Details, wie Vokabeln. Ältere Menschen lernen langsamer, aber oft nachhaltiger. Sie verstehen Zusammenhänge besser, weil sie mehr Lebenserfahrung haben. Das "Was" ist wichtig: Das Gehirn lernt am besten, wenn man sich für das Thema interessiert.' },
                { speaker: 'Moderator', line: 'Was kann man also tun, um im Alter fit im Kopf zu bleiben?' },
                { speaker: 'Prof. Adam', line: 'Drei Dinge sind entscheidend. Erstens: Bewegung. Ja, Sport! Das Gehirn braucht Sauerstoff. Zweitens: Soziale Kontakte. Sprechen, diskutieren, mit anderen Menschen zusammen sein, das ist Training. Drittens: Etwas Neues lernen! Das muss nicht Chinesisch sein. Ein neues Musikinstrument, ein neues Hobby, Kochen... Das Gehirn liebt Herausforderungen.' },
              ],
              questions: [
                { id: 'g-b1h2q1_3', text: 'Was ist das Thema der Sendung?', options: ['a) Sport für Senioren', 'b) Das Gehirn von 20-Jährigen', 'c) Lernen im Alter'], correctAnswer: 'c) Lernen im Alter' },
                { id: 'g-b1h2q2_3', text: 'Was sagt Professor Adam über das Gehirn?', options: ['a) Es kann im Alter nicht mehr lernen.', 'b) Es ist wie ein Muskel.', 'c) Es funktioniert mit 60 besser als mit 20.'], correctAnswer: 'b) Es ist wie ein Muskel.' },
                { id: 'g-b1h2q3_3', text: 'Wie lernen ältere Menschen im Vergleich zu jüngeren?', options: ['a) Sie lernen Details schneller.', 'b) Sie lernen oft nachhaltiger.', 'c) Sie interessieren sich nicht für neue Themen.'], correctAnswer: 'b) Sie lernen oft nachhaltiger.' },
                { id: 'g-b1h2q4_3', text: 'Was ist beim Lernen besonders wichtig?', options: ['a) Das Alter', 'b) Das Interesse am Thema', 'c) Schnelligkeit'], correctAnswer: 'b) Das Interesse am Thema' },
                { id: 'g-b1h2q5_3', text: 'Wie viele wichtige Dinge nennt der Professor für Fitness im Kopf?', options: ['a) Zwei', 'b) Drei', 'c) Vier'], correctAnswer: 'b) Drei' },
                { id: 'g-b1h2q6_3', text: 'Was ist der erste Punkt?', options: ['a) Soziale Kontakte', 'b) Etwas Neues lernen', 'c) Bewegung'], correctAnswer: 'c) Bewegung' },
                { id: 'g-b1h2q7_3', text: 'Warum ist Sport gut für das Gehirn?', options: ['a) Weil es Sauerstoff braucht.', 'b) Weil man Muskeln trainiert.', 'c) Weil man abnimmt.'], correctAnswer: 'a) Weil es Sauerstoff braucht.' },
                { id: 'g-b1h2q8_3', text: 'Was ist auch "Training" für das Gehirn?', options: ['a) Allein sein', 'b) Mit anderen Menschen sprechen', 'c) Chinesisch lernen'], correctAnswer: 'b) Mit anderen Menschen sprechen' },
                { id: 'g-b1h2q9_3', text: 'Was ist ein Beispiel für "etwas Neues lernen"?', options: ['a) Nur Chinesisch', 'b) Ein Musikinstrument', 'c) Spazieren gehen'], correctAnswer: 'b) Ein Musikinstrument' },
                { id: 'g-b1h2q10_3', text: 'Was liebt das Gehirn?', options: ['a) Routine', 'b) Sauerstoff', 'c) Herausforderungen'], correctAnswer: 'c) Herausforderungen' },
              ]
            },
            {
              id: 'g-b1-l3-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Carla', line: 'Hi Jan, wie war dein Bewerbungsgespräch bei der neuen Firma?' },
                { speaker: 'Jan', line: 'Hallo Carla. Puh, ich weiß nicht. Es war okay, glaube ich. Der Chef war nett.' },
                { speaker: 'Carla', line: 'Was musstest du denn machen?' },
                { speaker: 'Jan', line: 'Erst mal über meinen Lebenslauf sprechen. Das war einfach. Aber dann haben sie mir Fragen auf Englisch gestellt!' },
                { speaker: 'Carla', line: 'Oh, ernsthaft? Stand das in der Anzeige?' },
                { speaker: 'Jan', line: 'Nein, das war die Überraschung. Ich war total nervös und habe, glaube ich, viele Fehler gemacht. Mein Schulenglisch ist schon so lange her.' },
                { speaker: 'Carla', line: 'Ach, bestimmt war es nicht so schlimm. Und wie geht es jetzt weiter?' },
                { speaker: 'Jan', line: 'Sie wollen sich bis Ende der Woche entscheiden und mich anrufen. Ich hoffe, es klappt. Der Job klingt super interessant.' },
              ],
              questions: [
                { id: 'g-b1h3q1_3', text: 'Jan hatte ein Bewerbungsgespräch.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h3q2_3', text: 'Der Chef war unfreundlich.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q3_3', text: 'Jan musste auf Englisch sprechen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h3q4_3', text: 'Jan wusste, dass er Englisch sprechen muss.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q5_3', text: 'Jan war beim Englischsprechen sehr selbstsicher.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q6_3', text: 'Er bekommt die Entscheidung noch diese Woche.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-b1-l3-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (4 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Streitpunkt". Unser Thema: Sollen Supermärkte am Sonntag geöffnet sein? Frau Berger, Sie sind dafür.' },
                { speaker: 'Frau Berger', line: 'Ja, absolut. Ich arbeite die ganze Woche von 8 bis 18 Uhr. Der Samstag ist stressig: putzen, Wäsche waschen, einkaufen. Ich hätte gern die Möglichkeit, meinen Einkauf in Ruhe am Sonntag zu erledigen. In anderen Ländern ist das völlig normal.' },
                { speaker: 'Moderator', line: 'Herr Thiel, Sie sind von der Gewerkschaft. Sie sind dagegen.' },
                { speaker: 'Herr Thiel', line: 'Ganz genau. Die Angestellten im Handel brauchen auch einen freien Tag, um sich zu erholen und Zeit mit der Familie zu verbringen. Der Sonntag ist der einzige Tag, der fast allen gehört. Wenn wir den auch noch zum Arbeitstag machen, leidet das soziale Leben.' },
                { speaker: 'Frau Berger', line: 'Aber es könnten ja Studenten dort arbeiten, die Geld brauchen.' },
                { speaker: 'Herr Thiel', line: 'Das löst das Problem nicht. Die Angestellten würden trotzdem gezwungen, sonntags zu arbeiten. Wir finden, sechs Tage Einkaufen müssen reichen. Man muss nur besser planen.' },
              ],
              questions: [
                { id: 'g-b1h4q1_3', text: 'Was ist das Thema der Diskussion?', options: ['a) Ob Studenten mehr Geld brauchen.', 'b) Ob Angestellte mehr Familie sehen sollen.', 'c) Ob Supermärkte sonntags öffnen sollen.'], correctAnswer: 'c) Ob Supermärkte sonntags öffnen sollen.' },
                { id: 'g-b1h4q2_3', text: 'Was ist Frau Bergers Hauptargument DAFÜR?', options: ['a) Sie hat in der Woche wenig Zeit.', 'b) Sie möchte sonntags arbeiten.', 'c) Sie findet andere Länder besser.'], correctAnswer: 'a) Sie hat in der Woche wenig Zeit.' },
                { id: 'g-b1h4q3_3', text: 'Was ist Herr Thiels Hauptargument DAGEGEN?', options: ['a) Die Supermärkte machen nicht genug Gewinn.', 'b) Die Angestellten brauchen einen freien Tag.', 'c) Frau Berger soll besser planen.'], correctAnswer: 'b) Die Angestellten brauchen einen freien Tag.' },
                { id: 'g-b1h4q4_3', text: 'Was sagt Herr Thiel über den Vorschlag mit den Studenten?', options: ['a) Er findet die Idee gut.', 'b) Er sagt, das löst das Problem nicht.', 'c) Er sagt, Studenten wollen nicht arbeiten.'], correctAnswer: 'b) Er sagt, das löst das Problem nicht.' },
              ]
            },

            // --- LESEN (5 Parts, 30 Questions) ---
            {
              id: 'g-b1-l3-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (6 Fragen)',
              content: 'Lesen Sie die Blog-Beiträge. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Thema: Reisen - Hotel oder Ferienwohnung?**\n\n**Beitrag von Marie (31):**\nIch buche nur noch Ferienwohnungen. Seit wir unseren Sohn haben, ist das viel praktischer. Wir haben mehr Platz, eine eigene Küche und können essen, wann wir wollen. Ich muss mich nicht an feste Frühstückszeiten halten. Es ist meistens auch günstiger als ein Hotelzimmer für drei Personen. Man fühlt sich mehr "wie zu Hause".\n\n**Beitrag von Tom (45):**\nIm Urlaub will ich mich um nichts kümmern. Deswegen buche ich immer ein gutes Hotel mit Halbpension. Ich hasse es, im Urlaub zu kochen oder abzuwaschen. Ich will, dass mein Zimmer jeden Tag geputzt wird und ich abends ein gutes Buffet habe. Der Service ist mir wichtig. Das kostet zwar mehr, aber das ist es mir im Urlaub wert.\n\n**Beitrag von Alex (24):**\nMir ist beides zu teuer. Ich reise als Backpacker und übernachte in Hostels, also Jugendherbergen. Man schläft zwar in einem Zimmer mit 8 Leuten, aber es ist unschlagbar günstig. Man lernt sofort Leute aus der ganzen Welt kennen. Für mich die beste Art zu reisen. Eine Ferienwohnung wäre mir viel zu langweilig.\n\n**Fragen:**\n',
              questions: [
                { id: 'g-b1r1q1_3', text: 'Wer reist am liebsten in einer Ferienwohnung?', options: ['a) Marie', 'b) Tom', 'c) Alex'], correctAnswer: 'a) Marie' },
                { id: 'g-b1r1q2_3', text: 'Wem ist der Service im Urlaub am wichtigsten?', options: ['a) Marie', 'b) Tom', 'c) Alex'], correctAnswer: 'b) Tom' },
                { id: 'g-b1r1q3_3', text: 'Wer möchte im Urlaub nicht kochen?', options: ['a) Marie', 'b) Tom', 'c) Alex'], correctAnswer: 'b) Tom' },
                { id: 'g-b1r1q4_3', text: 'Wer reist am billigsten?', options: ['a) Marie', 'b) Tom', 'c) Alex'], correctAnswer: 'c) Alex' },
                { id: 'g-b1r1q5_3', text: 'Für wen ist Flexibilität beim Essen ein Hauptgrund?', options: ['a) Marie', 'b) Tom', 'c) Alex'], correctAnswer: 'a) Marie' },
                { id: 'g-b1r1q6_3', text: 'Wer trifft auf Reisen gern neue Leute?', options: ['a) Marie', 'b) Tom', 'c) Alex'], correctAnswer: 'c) Alex' },
              ]
            },
            {
              id: 'g-b1-l3-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (6 Fragen)',
              content: 'Lesen Sie den Artikel aus einer Zeitung. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Eine neue Chance für alte Lebensmittel**\n\nIn Deutschland werden jedes Jahr Millionen Tonnen Lebensmittel weggeworfen. Vieles davon ist noch gut, aber das Mindesthaltbarkeitsdatum (MHD) ist abgelaufen oder das Obst hat eine kleine braune Stelle. Die Organisation "Foodsharing" will das ändern.\n\nDie Idee ist einfach: Menschen können Lebensmittel, die sie nicht mehr brauchen, "teilen" statt sie wegzuwerfen. Das funktioniert über sogenannte "Fair-Teiler". Das sind öffentliche Kühlschränke und Regale, die an verschiedenen Orten in der Stadt stehen. Jeder kann dort Lebensmittel hineinlegen (z.B. Gemüse, Brot, Joghurt) und jeder darf sich kostenlos etwas herausnehmen.\n\nDie freiwilligen Helfer, "Foodsaver" genannt, holen auch Lebensmittel bei Supermärkten oder Bäckereien ab, die sonst im Müll landen würden. Wichtig ist: Es geht nicht nur um arme Menschen. Jeder darf mitmachen. Das Ziel ist es, die Verschwendung zu stoppen und den Respekt vor Lebensmitteln zu erhöhen. Es gibt klare Regeln: Rohes Fleisch oder Fisch sind verboten, um gesundheitliche Probleme zu vermeiden.',
              questions: [
                { id: 'g-b1r2q1_3', text: 'Was ist das Hauptproblem, das der Text beschreibt?', options: ['a) Es gibt zu wenig Lebensmittel.', 'b) Es werden zu viele Lebensmittel weggeworfen.', 'c) Das Mindesthaltbarkeitsdatum ist zu kurz.'], correctAnswer: 'b) Es werden zu viele Lebensmittel weggeworfen.' },
                { id: 'g-b1r2q2_3', text: 'Was ist ein "Fair-Teiler"?', options: ['a) Ein Helfer, der Essen abholt.', 'b) Ein Supermarkt, der Essen verkauft.', 'c) Ein öffentlicher Kühlschrank zum Teilen.'], correctAnswer: 'c) Ein öffentlicher Kühlschrank zum Teilen.' },
                { id: 'g-b1r2q3_3', text: 'Wer holt Essen bei Supermärkten ab?', options: ['a) Die "Foodsaver"', 'b) Die "Fair-Teiler"', 'c) Die Kunden'], correctAnswer: 'a) Die "Foodsaver"' },
                { id: 'g-b1r2q4_3', text: 'Wer darf sich Essen aus den "Fair-Teilern" nehmen?', options: ['a) Nur arme Menschen', 'b) Nur die Helfer', 'c) Jeder'], correctAnswer: 'c) Jeder' },
                { id: 'g-b1r2q5_3', text: 'Was ist das Hauptziel von "Foodsharing"?', options: ['a) Geld zu verdienen.', 'b) Die Verschwendung von Lebensmitteln zu stoppen.', 'c) Supermärkten zu helfen.'], correctAnswer: 'b) Die Verschwendung von Lebensmitteln zu stoppen.' },
                { id: 'g-b1r2q6_3', text: 'Was darf man nicht in den "Fair-Teiler" legen?', options: ['a) Brot und Gemüse', 'b) Rohes Fleisch', 'c) Joghurt'], correctAnswer: 'b) Rohes Fleisch' },
              ]
            },
            {
              id: 'g-b1-l3-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten am Wochenende mit Freunden feiern und suchen eine Bar mit Live-Musik.\n2. Ihre Waschmaschine ist kaputt. Sie suchen eine günstige, gebrauchte als Ersatz.\n3. Sie interessieren sich für moderne Kunst und möchten eine Ausstellung besuchen.\n4. Sie suchen einen Job als Kellner am Wochenende.\n5. Sie möchten Spanisch lernen, haben aber nur vormittags Zeit.\n6. Sie wollen umziehen und suchen eine 4-Zimmer-Wohnung.\n\n**Anzeigen:**\n**a) Kunsthalle "ModernArt":** Neue Ausstellung: "Farben der Zukunft". Digitale Kunst und Installationen. Geöffnet: Di-So 10-18 Uhr. Eintritt: 12 €.\n\n**b) Sprachschule "Lingua":** Spanisch, Französisch, Englisch. Abendkurse (A1-B2): Mo/Mi 18-20 Uhr. Intensivkurse am Wochenende.\n\n**c) Café "Sonnenschein":** Wir suchen Verstärkung! Nette Kollegin für Service (Bedienung) gesucht. Arbeitszeit: Sa & So, 10-17 Uhr. Erfahrung nicht nötig. info@cafe-sonne.de\n\n**d) "Jazzkeller":** Der Treffpunkt für Musikfans. Jeden Freitag und Samstag ab 21 Uhr Live-Jazz. Cocktails & kleine Snacks. Freier Eintritt am Freitag!\n\n**e) Gebrauchtwaren-Hof:** Alles, was das Herz begehrt. Möbel, Kleidung, Elektrogeräte. Wir haben 5 geprüfte Waschmaschinen ab 80 €. Lieferung möglich.\n\n**f) Immobilien "Traumhaus":** Aktuell im Angebot: 3-Zimmer-Wohnung, Balkon, 80qm. 2-Zimmer-Appartement, zentral, 45qm. Rufen Sie uns an!\n\n**g) Restaurant "Bella Notte":** Wir suchen eine Küchenhilfe (m/w/d) für Abwasch und Vorbereitung. Arbeitszeit: Mo-Fr, 17-22 Uhr.\n\n**h) Fitness-Studio "Puls":** Trainieren rund um die Uhr. 24/7 geöffnet. Kurse: Yoga, Spinning, Boxen. Jetzt Probetraining vereinbaren!',
              questions: [
                { id: 'g-b1r3q1_3', text: 'Situation 1: Bar mit Live-Musik', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'd' },
                { id: 'g-b1r3q2_3', text: 'Situation 2: Gebrauchte Waschmaschine', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'e' },
                { id: 'g-b1r3q3_3', text: 'Situation 3: Ausstellung moderne Kunst', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'a' },
                { id: 'g-b1r3q4_3', text: 'Situation 4: Job als Kellner', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'c' },
                { id: 'g-b1r3q5_3', text: 'Situation 5: Spanischkurs am Vormittag', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'b' offers only evening/weekend courses
                { id: 'g-b1r3q6_3', text: 'Situation 6: 4-Zimmer-Wohnung', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'f' offers 2 and 3 rooms
              ]
            },
            {
              id: 'g-b1-l3-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Forumsbeitrag. Kreuzen Sie an: Ja oder Nein.\n\n**Thema: Autofreie Innenstädte - Ja oder Nein?**\n\nSollen in unseren Innenstädten in Zukunft keine Autos mehr fahren dürfen? Diese Idee wird in vielen Städten diskutiert. Wir haben unsere Leser nach ihrer Meinung gefragt.\n\n**Beitrag von "Stadtmensch":**\nIch bin absolut dafür! Ich wohne in der Innenstadt und der Lärm und die Abgase sind furchtbar. Es gibt fast keine Parkplätze und man steht nur im Stau. Ich fahre nur noch mit dem Fahrrad oder der U-Bahn. Mehr Platz für Cafés, Bäume und Fußgänger würde die Lebensqualität enorm verbessern. Die Geschäfte hätten keine Nachteile, im Gegenteil: Die Leute hätten mehr Lust, in Ruhe zu bummeln.\n\n**Beitrag von "Pendler72":**\nIch bin absolut dagegen. Ich wohne auf dem Land und arbeite in der Stadt. Wie soll ich ohne Auto zur Arbeit kommen? Die Busse fahren bei uns nur alle zwei Stunden. Und was ist mit älteren Menschen oder Familien mit Kindern, die einkaufen müssen? Sollen die alles mit dem Fahrrad transportieren? Die Geschäfte in der Innenstadt würden kaputtgehen, weil niemand mehr hinkommt. Die Idee ist unrealistisch.',
              questions: [
                { id: 'g-b1r4q1_3', text: 'Findet "Stadtmensch" die Idee gut?', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b1r4q2_3', text: '"Stadtmensch" fährt selbst viel Auto in der Stadt.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q3_3', text: 'Er glaubt, die Geschäfte würden Nachteile haben.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q4_3', text: 'Findet "Pendler72" die Idee gut?', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q5_3', text: '"Pendler72" wohnt in der Innenstadt.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q6_3', text: 'Er sagt, die Busverbindung auf dem Land ist sehr gut.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q7_3', text: 'Er glaubt, die Geschäfte würden Probleme bekommen.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
              ]
            },
            {
              id: 'g-b1-l3-r5',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 5 (5 Fragen)',
              content: 'Lesen Sie die Anleitung. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Anleitung: Richtiges Verhalten bei einem Brand**\n\nFeuer ist gefährlich. Wenn es brennt, ist richtiges Handeln lebenswichtig. Bewahren Sie Ruhe und folgen Sie diesen Schritten:\n\n1.  **Alarmieren:** Rufen Sie sofort die Feuerwehr unter der Notrufnummer 112 an. Wer? Wo? Was? Wie viele? Warten Sie auf Rückfragen!\n\n2.  **In Sicherheit bringen:** Retten Sie Menschen und Tiere aus der Gefahrenzone. Wichtig: Helfen Sie zuerst Kindern, älteren Menschen oder Menschen mit Behinderung. Warnen Sie andere Hausbewohner.\n\n3.  **Türen schließen:** Schließen Sie alle Türen (nicht abschließen!) auf dem Weg nach draußen. Das stoppt die Ausbreitung von Rauch und Feuer.\n\n4.  **Fluchtweg:** Verlassen Sie das Gebäude über den gekennzeichneten Fluchtweg (Treppenhaus). Benutzen Sie auf keinen Fall den Aufzug! Der Aufzug kann zur Todesfalle werden, wenn der Strom ausfällt.\n\n5.  **Feuerwehr erwarten:** Warten Sie draußen an einem sicheren Ort auf die Feuerwehr und informieren Sie die Einsatzkräfte (z.B. ob noch Personen im Gebäude sind).',
              questions: [
                { id: 'g-b1r5q1_3', text: 'Was ist der erste Schritt bei einem Brand?', options: ['a) Türen schließen', 'b) Die Feuerwehr anrufen', 'c) Den Aufzug benutzen'], correctAnswer: 'b) Die Feuerwehr anrufen' },
                { id: 'g-b1r5q2_3', text: 'Wem soll man zuerst helfen?', options: ['a) Kindern und älteren Menschen', 'b) Zuerst sich selbst retten', 'c) Den Haustieren'], correctAnswer: 'a) Kindern und älteren Menschen' },
                { id: 'g-b1r5q3_3', text: 'Warum soll man Türen schließen?', options: ['a) Damit niemand mehr ins Haus kann.', 'b) Damit der Rauch sich nicht ausbreitet.', 'c) Damit die Feuerwehr sie nicht öffnen muss.'], correctAnswer: 'b) Damit der Rauch sich nicht ausbreitet.' },
                { id: 'g-b1r5q4_3', text: 'Warum darf man den Aufzug nicht benutzen?', options: ['a) Weil er zu langsam ist.', 'b) Weil er brennen könnte.', 'c) Weil er bei Stromausfall stecken bleiben kann.'], correctAnswer: 'c) Weil er bei Stromausfall stecken bleiben kann.' },
                { id: 'g-b1r5q5_3', text: 'Was soll man nach dem Verlassen des Gebäudes tun?', options: ['a) Sofort nach Hause gehen.', 'b) Auf die Feuerwehr warten und sie informieren.', 'c) Versuchen, das Feuer selbst zu löschen.'], correctAnswer: 'b) Auf die Feuerwehr warten und sie informieren.' },
              ]
            },
            
            // --- SCHREIBEN (3 Parts) ---
            {
              id: 'g-b1-l3-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle E-Mail (ca. 80 Wörter)',
              content: 'Ein Freund von Ihnen, der in einer anderen Stadt wohnt, möchte Sie nächstes Wochenende besuchen kommen. Er hat gefragt, was Sie zusammen machen können.\nSchreiben Sie ihm eine E-Mail (ca. 80 Wörter):\n- Sagen Sie, dass Sie sich über seinen Besuch freuen.\n- Machen Sie einen Vorschlag für Samstag (z.B. Museum, Konzert...).\n- Machen Sie einen Vorschlag für Sonntag (z.B. Brunch, Park...).\n- Fragen Sie, ob ihm die Vorschläge gefallen.',
            },
            {
              id: 'g-b1-l3-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Forumsbeitrag (ca. 80 Wörter)',
              content: 'Sie haben im Internet einen Forumsbeitrag zum Thema "Urlaub: Berge oder Meer?" gelesen.\n\n**Meinung von "Strand-Fan":**\n"Ich fahre jedes Jahr ans Meer. Nur in der Sonne liegen und schwimmen – das ist für mich perfekte Erholung. Wandern in den Bergen ist doch nur anstrengend und langweilig."\n\nSchreiben Sie Ihre Meinung dazu (ca. 80 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe, was Sie bevorzugen (Berge oder Meer).\n- Erzählen Sie von einem eigenen Erlebnis.',
            },
            {
              id: 'g-b1-l3-w3',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 3: Formelle E-Mail (ca. 40 Wörter)',
              content: 'Sie haben online Schuhe bestellt, aber die falsche Größe (Größe 40 statt 42) erhalten. Sie möchten sie umtauschen.\nSchreiben Sie eine E-Mail an den Online-Shop (ca. 40 Wörter).\n- Sagen Sie, was das Problem ist.\n- Bitten Sie um einen Umtausch in die richtige Größe.\n- Fragen Sie, wie Sie die Schuhe zurückschicken sollen.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-b1-l3-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Etwas gemeinsam planen',
              content: 'Planen Sie mit Ihrem Partner (dem Bot) etwas.\n**Situation:** Sie und der Bot wollen zusammen am Wochenende einen Ausflug in eine andere Stadt (z.B. Hamburg) machen.\n**Aufgabe:** Einigen Sie sich auf einen Tag (Sa/So), ein Verkehrsmittel (Zug/Bus) und was Sie dort besichtigen wollen.'
            },
            {
              id: 'g-b1-l3-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Ein Thema präsentieren',
              content: 'Sie sollen eine kurze Präsentation (ca. 3-4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Umweltschutz im Alltag" oder "Mein Lieblingsfilm").\n**Aufgabe:** Bereiten Sie eine Präsentation vor. Ihre Präsentation sollte eine Einleitung, einen Hauptteil (eigene Erfahrungen, Situation in Ihrem Land, Vor- & Nachteile) und einen Schluss haben. Starten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b1-l3-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Feedback geben & reagieren',
              content: 'Nach Ihrer Präsentation (Teil 2) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback (z.B. "Deine Präsentation war interessant, aber...") und stellen Sie ihm eine Frage zum Thema.'
            },
            
            // --- B1 WÖRTSCHATZ (Reusing from g-b1-l1-v1) ---
            {
              id: 'g-b1-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B1',
              content: 'Wichtige Wörter für die B1-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-b1-l1
              ]
            },

            // --- B1 GRAMMATIK (Reusing from g-b1-l1-g1) ---
            {
              id: 'g-b1-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B1',
              content: 'Testen Sie Ihr Grammatikwissen für die B1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-b1-l1
              ]
            }
          ],
        },
//
// --- END OF g-b1-l3 ---
        {
          id: 'g-b1-l4',
          title: 'Modelltest 4: Übungssatz',
          estimatedTime: 165,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 30 Questions) ---
            {
              id: 'g-b1-l4-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (10 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (zweimal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie an: Richtig/Falsch und a, b oder c.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Frau', line: 'Hallo, ich habe online einen Pullover bestellt, aber er ist zu klein. Kann ich ihn hier umtauschen?' },
                { speaker: 'Verkäufer', line: 'Haben Sie ihn online oder hier im Geschäft gekauft?' },
                { speaker: 'Frau', line: 'Online.' },
                { speaker: 'Verkäufer', line: 'Dann müssen Sie ihn leider per Post zurückschicken. Ein Umtausch hier im Laden ist für Online-Bestellungen nicht möglich.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Mann', line: 'Hi Julia, wie gehts? Hast du Lust auf Kino morgen Abend?' },
                { speaker: 'Julia', line: 'Morgen Abend? Da kann ich leider nicht. Ich muss meine Eltern vom Flughafen abholen. Sie kommen aus dem Urlaub zurück.' },
                { speaker: 'Mann', line: 'Ach so. Schade. Vielleicht am Wochenende?' },
                { speaker: 'Julia', line: 'Ja, am Samstagabend habe ich Zeit.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Frau', line: 'Ich würde gern wissen, was es heute in der Kantine gibt.' },
                { speaker: 'Kollege', line: 'Heute ist "Pasta-Tag". Es gibt Spaghetti Bolognese und eine vegetarische Lasagne. Ich glaube, ich nehme die Lasagne.' },
                { speaker: 'Frau', line: 'Oh, Lasagne klingt gut. Das nehme ich auch.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Mann', line: 'Guten Tag, mein Name ist Kraus. Ich habe um 11 Uhr einen Termin bei Frau Dr. Weiß.' },
                { speaker: 'Rezeption', line: 'Herr Kraus... ja, ich sehe Sie hier. Leider ist Frau Dr. Weiß in einem Notfall. Es wird ca. 30 Minuten länger dauern. Möchten Sie warten?' },
                { speaker: 'Mann', line: '30 Minuten? Ja, das ist in Ordnung. Ich warte.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 5.' },
                { speaker: 'Frau', line: 'Wo warst du? Ich rufe dich schon die ganze Zeit an! Wir sind verabredet.' },
                { speaker: 'Mann', line: 'Entschuldigung! Mein Akku war leer. Ich bin jetzt auf dem Weg. In 10 Minuten bin ich da.' },
                { speaker: 'Frau', line: 'Na gut. Ich warte im Café.' },
              ],
              questions: [
                // Text 1
                { id: 'g-b1h1q1_4', text: 'Text 1: Die Frau hat den Pullover im Geschäft gekauft.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q2_4', text: 'Text 1: Was muss die Frau tun?', options: ['a) Den Pullover im Laden umtauschen.', 'b) Einen neuen Pullover kaufen.', 'c) Den Pullover per Post schicken.'], correctAnswer: 'c) Den Pullover per Post schicken.' },
                // Text 2
                { id: 'g-b1h1q3_4', text: 'Text 2: Julia hat am Wochenende keine Zeit.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q4_4', text: 'Text 2: Warum kann Julia morgen nicht?', options: ['a) Sie fliegt in den Urlaub.', 'b) Sie holt ihre Eltern ab.', 'c) Sie geht ins Kino.'], correctAnswer: 'b) Sie holt ihre Eltern ab.' },
                // Text 3
                { id: 'g-b1h1q5_3', text: 'Text 3: Es gibt heute nur vegetarisches Essen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q6_3', text: 'Text 3: Was isst die Frau?', options: ['a) Spaghetti Bolognese', 'b) Vegetarische Lasagne', 'c) Sie isst nichts.'], correctAnswer: 'b) Vegetarische Lasagne' },
                // Text 4
                { id: 'g-b1h1q7_3', text: 'Text 4: Der Termin von Herrn Kraus fällt aus.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q8_3', text: 'Text 4: Was ist das Problem?', options: ['a) Herr Kraus ist zu spät.', 'b) Die Ärztin ist verspätet.', 'c) Der Termin ist erst um 11:30 Uhr.'], correctAnswer: 'b) Die Ärztin ist verspätet.' },
                // Text 5
                { id: 'g-b1h1q9_3', text: 'Text 5: Der Mann ist zu spät, weil sein Akku leer war.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h1q10_3', text: 'Text 5: Wo wartet die Frau?', options: ['a) Im Café', 'b) Zu Hause', 'c) Auf dem Weg'], correctAnswer: 'a) Im Café' },
              ]
            },
            {
              id: 'g-b1-l4-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Radiovortrag (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Welt im Wandel". Unser Thema ist heute "Tourismus". Reisen ist so einfach wie nie, aber ist das nur gut? Im Studio ist Dr. Tim Bauer, Soziologe.' },
                { speaker: 'Dr. Bauer', line: 'Guten Tag. Nein, das ist nicht nur gut. Wir erleben einen "Overtourism", also zu viel Tourismus in beliebten Städten wie Venedig, Barcelona oder Amsterdam.' },
                { speaker: 'Moderator', line: 'Was sind die Folgen?' },
                { speaker: 'Dr. Bauer', line: 'Die Folgen sind gravierend. Erstens steigen die Mieten so stark, dass die Einheimischen sich ihre eigenen Städte nicht mehr leisten können. Normale Wohnungen werden zu teuren Ferienwohnungen. Zweitens ist der Müll. Große Kreuzfahrtschiffe produzieren enorm viel Müll und Abgase. Drittens geht die lokale Kultur verloren. Überall gibt es nur noch Souvenirshops und Fast-Food-Ketten statt lokaler Handwerker.' },
                { speaker: 'Moderator', line: 'Was kann man tun?' },
                { speaker: 'Dr. Bauer', line: 'Einige Städte versuchen, den Tourismus zu begrenzen, z.B. mit Eintrittsgeld für die Innenstadt, wie in Venedig. Aber auch jeder Reisende selbst ist verantwortlich. "Sanfter Tourismus" ist das Stichwort. Das heißt: Respekt vor der Kultur haben, in kleinen, lokalen Hotels übernachten statt in großen Ketten, und vielleicht auch mal unbekanntere Orte besuchen.' },
              ],
              questions: [
                { id: 'g-b1h2q1_4', text: 'Was ist das Thema der Sendung?', options: ['a) Reisen in Venedig', 'b) Probleme durch zu viel Tourismus', 'c) Günstige Kreuzfahrten'], correctAnswer: 'b) Probleme durch zu viel Tourismus' },
                { id: 'g-b1h2q2_4', text: 'Was bedeutet "Overtourism"?', options: ['a) Zu viele Touristen', 'b) Zu wenige Touristen', 'c) Teurer Tourismus'], correctAnswer: 'a) Zu viele Touristen' },
                { id: 'g-b1h2q3_4', text: 'Was ist eine Folge von "Overtourism"?', options: ['a) Die Mieten werden billiger.', 'b) Es gibt mehr lokale Handwerker.', 'c) Die Einheimischen können sich die Mieten nicht mehr leisten.'], correctAnswer: 'c) Die Einheimischen können sich die Mieten nicht mehr leisten.' },
                { id: 'g-b1h2q4_4', text: 'Welches Problem verursachen Kreuzfahrtschiffe?', options: ['a) Sie sind zu langsam.', 'b) Sie produzieren viel Müll.', 'c) Sie sind zu teuer.'], correctAnswer: 'b) Sie produzieren viel Müll.' },
                { id: 'g-b1h2q5_4', text: 'Was passiert mit der lokalen Kultur?', options: ['a) Sie wird stärker.', 'b) Sie geht verloren.', 'c) Sie wird von Touristen gelernt.'], correctAnswer: 'b) Sie geht verloren.' },
                { id: 'g-b1h2q6_4', text: 'Wie versucht Venedig, das Problem zu lösen?', options: ['a) Mit Eintrittsgeld für die Stadt.', 'b) Mit einem Verbot für Touristen.', 'c) Mit mehr Souvenirshops.'], correctAnswer: 'a) Mit Eintrittsgeld für die Stadt.' },
                { id: 'g-b1h2q7_4', text: 'Was ist "Sanfter Tourismus"?', options: ['a) Nur in großen Hotelketten zu schlafen.', 'b) Nur Fast-Food zu essen.', 'c) Respekt vor der Kultur zu haben.'], correctAnswer: 'c) Respekt vor der Kultur zu haben.' },
                { id: 'g-b1h2q8_4', text: 'Was ist KEINE Folge von Overtourism?', options: ['a) Steigende Mieten', 'b) Mehr Müll', 'c) Billigere Wohnungen'], correctAnswer: 'c) Billigere Wohnungen' },
                { id: 'g-b1h2q9_4', text: 'Wo ist das Problem laut Dr. Bauer NICHT?', options: ['a) Amsterdam', 'b) Venedig', 'c) Unbekannten Orten'], correctAnswer: 'c) Unbekannten Orten' },
                { id: 'g-b1h2q10_4', text: 'Wer ist Dr. Tim Bauer?', options: ['a) Ein Soziologe', 'b) Ein Tourist', 'c) Ein Hotelmanager'], correctAnswer: 'a) Ein Soziologe' },
              ]
            },
            {
              id: 'g-b1-l4-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Anna', line: 'Hallo Markus. Sag mal, was machst du eigentlich beruflich? Ich weiß das gar nicht genau.' },
                { speaker: 'Markus', line: 'Hi Anna. Ich bin Softwareentwickler bei einer großen IT-Firma.' },
                { speaker: 'Anna', line: 'Oh, das klingt kompliziert. Arbeitest du viel?' },
                { speaker: 'Markus', line: 'Ja, schon. 40 Stunden die Woche, aber wir haben flexible Arbeitszeiten. Das heißt, ich kann morgens anfangen, wann ich will, zwischen 8 und 10 Uhr.' },
                { speaker: 'Anna', line: 'Das ist praktisch. Und arbeitest du auch im Home-Office?' },
                { speaker: 'Markus', line: 'Ja, zwei Tage die Woche. Meistens Dienstag und Donnerstag. Das ist super, weil ich dann nicht so lange zur Arbeit fahren muss. Ich spare fast zwei Stunden am Tag.' },
                { speaker: 'Anna', line: 'Toll. Und gefällt dir die Arbeit?' },
                { speaker: 'Markus', line: 'Meistens ja. Die Kollegen sind nett und das Gehalt ist gut. Nur manchmal sind die Projekte sehr stressig, besonders wenn ein Termin näher rückt.' },
              ],
              questions: [
                { id: 'g-b1h3q1_4', text: 'Markus ist IT-Berater.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q2_4', text: 'Er muss jeden Tag um 8 Uhr anfangen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q3_4', text: 'Er arbeitet die ganze Woche im Büro.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q4_4', text: 'Er spart Zeit, weil er nicht jeden Tag fahren muss.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h3q5_4', text: 'Sein Gehalt ist nicht so gut.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q6_4', text: 'Manchmal ist seine Arbeit stressig.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-b1-l4-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (4 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Treffpunkt". Unser Thema ist "Vegetarische Ernährung". Ist es gesünder, auf Fleisch zu verzichten? Frau Roth, Sie sind Ernährungsberaterin.' },
                { speaker: 'Frau Roth', line: 'Guten Tag. Ja, Studien zeigen klar: Wer wenig oder kein Fleisch isst, hat oft bessere Blutwerte und ein geringeres Risiko für bestimmte Krankheiten. Eine gut geplante vegetarische Ernährung ist sehr gesund.' },
                { speaker: 'Moderator', line: 'Herr Bausch, Sie sind Landwirt. Wie sehen Sie das?' },
                { speaker: 'Herr Bausch', line: 'Ich sehe das kritisch. Fleisch ist ein wichtiger Lieferant für Eisen und Vitamin B12. Besonders für Kinder und Sportler ist das wichtig. Das Problem ist nicht das Fleisch, sondern der übermäßige Konsum. Ein gutes Stück Fleisch aus regionaler, artgerechter Haltung ist gesund.' },
                { speaker: 'Frau Roth', line: 'Aber Vitamin B12 kann man supplementieren, und Eisen steckt auch in Haferflocken oder Linsen. Der übermäßige Fleischkonsum schadet ja nicht nur uns, sondern auch dem Klima.' },
              ],
              questions: [
                { id: 'g-b1h4q1_4', text: 'Was sagt Frau Roth über vegetarische Ernährung?', options: ['a) Sie ist immer ungesund.', 'b) Sie kann sehr gesund sein.', 'c) Sie ist nur für Sportler gut.'], correctAnswer: 'b) Sie kann sehr gesund sein.' },
                { id: 'g-b1h4q2_4', text: 'Was ist Herrn Bauschs Meinung?', options: ['a) Man sollte nie Fleisch essen.', 'b) Das Problem ist der übermäßige Konsum.', 'c) Fleisch hat kein Vitamin B12.'], correctAnswer: 'b) Das Problem ist der übermäßige Konsum.' },
                { id: 'g-b1h4q3_4', text: 'Was sagt Herr Bausch über Fleisch für Kinder?', options: ['a) Es ist unwichtig.', 'b) Es ist wichtig.', 'c) Es ist gefährlich.'], correctAnswer: 'b) Es ist wichtig.' },
                { id: 'g-b1h4q4_4', text: 'Was sagt Frau Roth über Vitamin B12?', options: ['a) Man findet es in Linsen.', 'b) Man kann es als Präparat nehmen.', 'c) Es ist nicht wichtig.'], correctAnswer: 'b) Man kann es als Präparat nehmen.' },
              ]
            },

            // --- LESEN (5 Parts, 30 Questions) ---
            {
              id: 'g-b1-l4-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (6 Fragen)',
              content: 'Lesen Sie die Blog-Beiträge. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Thema: Fremdsprachen lernen - Wozu?**\n\n**Beitrag von Sven (42):**\nIch lerne seit zwei Jahren Spanisch, nur so als Hobby. Meine Frau und ich fahren gern nach Andalusien in den Urlaub. Es ist ein tolles Gefühl, wenn man im Restaurant auf Spanisch bestellen kann und die Leute versteht. Für meinen Job als Ingenieur brauche ich es nicht, da ist Englisch wichtiger. Aber es hält das Gehirn fit!\n\n**Beitrag von Jana (25):**\nFür mich sind Fremdsprachen der Schlüssel zum Beruf. Ich habe "Internationale Beziehungen" studiert und spreche fließend Englisch und Französisch. Jetzt lerne ich noch Chinesisch, weil das für die Wirtschaft immer wichtiger wird. Es ist sehr schwer, aber ich glaube, es wird mir in Zukunft viele Türen öffnen. Ohne Mehrsprachigkeit hat man heute kaum noch Chancen.\n\n**Beitrag von Klaus (58):**\nIch habe in der Schule Englisch gelernt, aber fast alles vergessen. Ich finde, das ist nicht so schlimm. Ich lebe in Deutschland, hier spricht man Deutsch. Wenn ich reise, komme ich mit Händen und Füßen durch. Und zur Not gibt es ja Übersetzungs-Apps auf dem Handy. Das reicht für mich völlig aus.\n\n**Fragen:**\n',
              questions: [
                { id: 'g-b1r1q1_4', text: 'Wer lernt eine Sprache nur als Hobby?', options: ['a) Sven', 'b) Jana', 'c) Klaus'], correctAnswer: 'a) Sven' },
                { id: 'g-b1r1q2_4', text: 'Für wen ist Mehrsprachigkeit beruflich entscheidend?', options: ['a) Sven', 'b) Jana', 'c) Klaus'], correctAnswer: 'b) Jana' },
                { id: 'g-b1r1q3_4', text: 'Wer braucht Englisch für den Job?', options: ['a) Sven', 'b) Jana', 'c) Klaus'], correctAnswer: 'a) Sven' }, // Trick: Jana spricht es, aber Sven erwähnt, dass es in seinem Job wichtiger ist (als Spanisch).
                { id: 'g-b1r1q4_4', text: 'Wer findet, dass man nicht unbedingt Fremdsprachen braucht?', options: ['a) Sven', 'b) Jana', 'c) Klaus'], correctAnswer: 'c) Klaus' },
                { id: 'g-b1r1q5_4', text: 'Wer lernt gerade Chinesisch?', options: ['a) Sven', 'b) Jana', 'c) Klaus'], correctAnswer: 'b) Jana' },
                { id: 'g-b1r1q6_4', text: 'Wer benutzt Übersetzungs-Apps?', options: ['a) Sven', 'b) Jana', 'c) Klaus'], correctAnswer: 'c) Klaus' },
              ]
            },
            {
              id: 'g-b1-l4-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (6 Fragen)',
              content: 'Lesen Sie den Artikel aus einer Zeitung. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Schluss mit "Wegwerf-Mode"**\n\n"Fast Fashion" nennt man den Trend, Kleidung so billig zu produzieren, dass man sie kauft, ein paarmal trägt und dann wegwirft. Jede Woche gibt es neue Kollektionen in den Läden. Die Qualität ist oft schlecht, die Preise sind extrem niedrig. Das hat schlimme Folgen: für die Umwelt, die durch die Produktion und den Transport belastet wird, und für die Arbeiter in den Fabriken, die oft unter schlechten Bedingungen arbeiten und sehr wenig verdienen.\n\nDoch ein Umdenken beginnt. Immer mehr Menschen setzen auf "Slow Fashion". Sie kaufen bewusster ein. Sie fragen: Woher kommt die Kleidung? Ist sie aus Bio-Baumwolle? Wurde sie fair produziert? Diese Mode ist teurer, aber sie hält auch länger. Qualität statt Quantität ist das Motto.\n\nAuch Second-Hand-Läden und Tausch-Partys werden immer beliebter. Warum immer neu kaufen, wenn es so viele gute gebrauchte Sachen gibt? Experten raten, lieber ein teures, zeitloses Teil zu kaufen, das man viele Jahre tragen kann, als zehn T-Shirts für 5 Euro.',
              questions: [
                { id: 'g-b1r2q1_4', text: 'Was ist das Hauptmerkmal von "Fast Fashion"?', options: ['a) Hohe Qualität und hohe Preise', 'b) Schnelle Produktion und niedrige Preise', 'c) Langsame Produktion und Bio-Materialien'], correctAnswer: 'b) Schnelle Produktion und niedrige Preise' },
                { id: 'g-b1r2q2_4', text: 'Was ist eine Folge von "Fast Fashion"?', options: ['a) Die Arbeiter verdienen sehr gut.', 'b) Die Umwelt wird geschont.', 'c) Die Umwelt wird belastet.'], correctAnswer: 'c) Die Umwelt wird belastet.' },
                { id: 'g-b1r2q3_4', text: 'Was ist "Slow Fashion"?', options: ['a) Kleidung, die nicht modisch ist.', 'b) Bewusster Konsum von hochwertiger Kleidung.', 'c) Kleidung, die man wegwirft.'], correctAnswer: 'b) Bewusster Konsum von hochwertiger Kleidung.' },
                { id: 'g-b1r2q4_4', text: 'Was bedeutet "Qualität statt Quantität"?', options: ['a) Lieber viele billige Sachen kaufen.', 'b) Lieber wenige, aber gute Sachen kaufen.', 'c) Lieber schnell einkaufen.'], correctAnswer: 'b) Lieber wenige, aber gute Sachen kaufen.' },
                { id: 'g-b1r2q5_4', text: 'Was wird außerdem immer beliebter?', options: ['a) Jede Woche neu einkaufen.', 'b) Second-Hand-Läden.', 'c) Billige T-Shirts.'], correctAnswer: 'b) Second-Hand-Läden.' },
                { id: 'g-b1r2q6_4', text: 'Was raten Experten?', options: ['a) Zehn T-Shirts für 5 Euro zu kaufen.', 'b) Nur noch in Fabriken zu kaufen.', 'c) Lieber ein teures, zeitloses Teil zu kaufen.'], correctAnswer: 'c) Lieber ein teures, zeitloses Teil zu kaufen.' },
              ]
            },
            {
              id: 'g-b1-l4-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten am Wochenende mit Ihrer Familie einen Ausflug machen. Ihre Kinder (6 und 8) sollen Spaß haben.\n2. Sie suchen ein günstiges Restaurant, das auch vegetarische Gerichte anbietet.\n3. Sie interessieren sich für die Geschichte Deutschlands und suchen ein Museum.\n4. Sie möchten in den Ferien einen Intensivkurs Französisch machen.\n5. Sie suchen einen ruhigen Ort, um für eine Prüfung zu lernen. Sie brauchen Bücher und Internet.\n6. Sie möchten sich sozial engagieren und suchen eine ehrenamtliche Tätigkeit.\n\n**Anzeigen:**\n**a) "Tafel e.V.":** Helfen Sie uns! Wir suchen freiwillige Helfer (Ehrenamt) für das Sortieren und Ausgeben von Lebensmitteln an Bedürftige. 1-2 mal pro Woche, vormittags.\n\n**b) Universitäts-Bibliothek:** Unser Lesesaal ist der perfekte Ort für konzentriertes Arbeiten. Tausende Fachbücher, freies WLAN, absolute Ruhe. Geöffnet: Mo-Sa, 8-22 Uhr.\n\n**c) Restaurant "Himmel und Erde":** 100% vegetarisch & vegan! Entdecken Sie unsere kreativen Gerichte. Hauptgerichte 15-20 €. Täglich ab 18 Uhr.\n\n**d) "Tierpark Hellabrunn":** Das Erlebnis für die ganze Familie! Über 700 Tierarten, großer Abenteuerspielplatz und Streichelzoo. Perfekt für einen sonnigen Tag. Täglich 9-18 Uhr.\n\n**e) Deutsches Historisches Museum:** Erleben Sie 2000 Jahre deutsche Geschichte. Von den Römern bis zur Wiedervereinigung. Sonderausstellung: "Das geteilte Deutschland". Di-So 10-18 Uhr.\n\n**f) Sprachschule "Voltaire":** Vive la France! Intensivkurse Französisch (A1-C1). 4 Wochen, täglicher Unterricht. Nächster Kursstart: 1. Juli. Buchen Sie jetzt Ihren Sommerkurs!\n\n**g) Pizzeria "Napoli":** Die beste Pizza der Stadt, auch zum Mitnehmen. Pizza Salami 7€, Pizza Margherita 6€. Leider keine vegetarischen Spezialitäten.\n\n**h) Sportverein "Aktiv":** Fit werden! Wir bieten Fußball, Handball und Schwimmen. Günstige Mitgliedsbeiträge für Familien. Anmeldung im Vereinsbüro.',
              questions: [
                { id: 'g-b1r3q1_4', text: 'Situation 1: Familienausflug mit Kindern', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'd' },
                { id: 'g-b1r3q2_4', text: 'Situation 2: Günstiges vegetarisches Restaurant', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'c' is vegetarian but expensive, 'g' is not vegetarian.
                { id: 'g-b1r3q3_4', text: 'Situation 3: Museum deutsche Geschichte', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'e' },
                { id: 'g-b1r3q4_4', text: 'Situation 4: Intensivkurs Französisch', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'f' },
                { id: 'g-b1r3q5_4', text: 'Situation 5: Ruhiger Lernort', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'b' },
                { id: 'g-b1r3q6_4', text: 'Situation 6: Ehrenamtliche Tätigkeit', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'a' },
              ]
            },
            {
              id: 'g-b1-l4-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Forumsbeitrag. Kreuzen Sie an: Ja oder Nein.\n\n**Thema: Muss man studieren, um erfolgreich zu sein?**\n\n**Beitrag von "Karrierefrau":**\nIch bin der Meinung: Ja, ein Studium ist heute wichtiger denn je. Ohne einen Universitätsabschluss (Bachelor oder Master) hat man kaum noch Chancen auf eine gut bezahlte Führungsposition. Ein Studium zeigt, dass man diszipliniert ist und komplexe Probleme lösen kann. Ich würde jedem raten, zu studieren.\n\n**Beitrag von "Handwerker88":**\nDas sehe ich komplett anders. Ich habe eine Ausbildung als Elektriker gemacht und verdiene sehr gut. Gute Handwerker werden überall gesucht! Viele meiner Freunde, die studiert haben, waren lange arbeitslos oder arbeiten in Jobs, die nichts mit ihrem Studium zu tun haben. Eine gute Ausbildung ist oft mehr wert als ein theoretisches Studium. Nicht jeder muss Akademiker werden.',
              questions: [
                { id: 'g-b1r4q1_4', text: 'Findet "Karrierefrau" ein Studium wichtig?', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b1r4q2_4', text: 'Sie glaubt, man braucht ein Studium für eine Führungsposition.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b1r4q3_4', text: 'Sie rät vom Studieren ab.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q4_4', text: 'Stimmt "Handwerker88" "Karrierefrau" zu?', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q5_4', text: '"Handwerker88" hat studiert.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q6_4', text: 'Er findet, dass Handwerker gute Jobchancen haben.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b1r4q7_4', text: 'Er findet, dass eine Ausbildung besser als ein Studium sein kann.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
              ]
            },
            {
              id: 'g-b1-l4-r5',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 5 (5 Fragen)',
              content: 'Lesen Sie die Anleitung. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Anleitung: Konflikte im Team lösen**\n\nWo Menschen zusammenarbeiten, gibt es auch Konflikte. Das ist normal. Wichtig ist, wie man sie löst. Ignorieren hilft nicht, das Problem wird meistens größer.\n\n1.  **Nicht warten:** Sprechen Sie das Problem so früh wie möglich an. Warten Sie nicht, bis Sie wütend sind.\n\n2.  **Vier-Augen-Gespräch:** Sprechen Sie zuerst allein mit der Person, mit der Sie den Konflikt haben. Suchen Sie einen ruhigen Raum. Nicht vor den Kollegen!\n\n3.  **Ich-Botschaften:** Sprechen Sie von sich. Sagen Sie nicht: "Sie machen immer...", sondern: "Ich habe das Gefühl, dass...". Beschreiben Sie die Situation aus Ihrer Sicht, ohne Vorwürfe.\n\n4.  **Aktiv zuhören:** Lassen Sie den anderen ausreden. Versuchen Sie zu verstehen, was sein Standpunkt ist.\n\n5.  **Lösung suchen:** Suchen Sie gemeinsam nach einer Lösung, mit der beide leben können. Ein Kompromiss ist oft der beste Weg.\n\n6.  **Chef informieren:** Wenn das Gespräch nichts bringt, können Sie den Vorgesetzten (Chef) als neutralen Moderator hinzuziehen.',
              questions: [
                { id: 'g-b1r5q1_4', text: 'Was soll man tun, wenn man ein Problem bemerkt?', options: ['a) Es ignorieren.', 'b) Warten, bis man wütend ist.', 'c) Es früh ansprechen.'], correctAnswer: 'c) Es früh ansprechen.' },
                { id: 'g-b1r5q2_4', text: 'Wo soll das erste Gespräch stattfinden?', options: ['a) Allein mit der Person.', 'b) Vor dem gesamten Team.', 'c) In der Kaffeeküche.'], correctAnswer: 'a) Allein mit der Person.' },
                { id: 'g-b1r5q3_4', text: 'Was ist eine "Ich-Botschaft"?', options: ['a) "Sie machen immer Fehler."', 'b) "Das ist falsch."', 'c) "Ich habe das Gefühl, dass..."'], correctAnswer: 'c) "Ich habe das Gefühl, dass..."' },
                { id: 'g-b1r5q4_4', text: 'Was ist ein Kompromiss?', options: ['a) Einer gewinnt, einer verliert.', 'b) Eine Lösung, mit der beide leben können.', 'c) Man ignoriert das Problem.'], correctAnswer: 'b) Eine Lösung, mit der beide leben können.' },
                { id: 'g-b1r5q5_4', text: 'Wann sollte man den Chef informieren?', options: ['a) Sofort, als Erster.', 'b) Gar nicht, das ist privat.', 'c) Wenn man allein keine Lösung findet.'], correctAnswer: 'c) Wenn man allein keine Lösung findet.' },
              ]
            },
            
            // --- SCHREIBEN (3 Parts) ---
            {
              id: 'g-b1-l4-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle E-Mail (ca. 80 Wörter)',
              content: 'Sie ziehen nächste Woche in eine neue Wohnung um und brauchen Hilfe. Schreiben Sie eine E-Mail an Ihre Freunde (ca. 80 Wörter):\n- Sagen Sie, wann der Umzug ist (z.B. Samstag ab 10 Uhr).\n- Bitten Sie um Hilfe beim Tragen.\n- Sagen Sie, dass es natürlich Essen und Trinken für alle Helfer gibt.\n- Bitten Sie um eine kurze Antwort, wer kommen kann.',
            },
            {
              id: 'g-b1-l4-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Forumsbeitrag (ca. 80 Wörter)',
              content: 'Sie haben im Internet einen Forumsbeitrag zum Thema "Ist Car-Sharing (geteilte Autos) die Zukunft?" gelesen.\n\n**Meinung von "Auto-Fan":**\n"Ich brauche mein eigenes Auto. Ich will fahren, wann ich will, und nicht erst ein Auto suchen müssen. Car-Sharing ist unpraktisch und am Ende teuer."\n\nSchreiben Sie Ihre Meinung dazu (ca. 80 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe für Ihre Meinung.\n- Erzählen Sie von Ihren eigenen Erfahrungen (z.B. ob Sie ein Auto brauchen).',
            },
            {
              id: 'g-b1-l4-w3',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 3: Formelle E-Mail (ca. 40 Wörter)',
              content: 'Sie haben sich für ein Praktikum bei der Firma "Global GmbH" beworben. Sie haben aber noch keine Antwort erhalten. Schreiben Sie eine E-Mail an den Personalchef, Herrn Schulze (ca. 40 Wörter).\n- Erinnern Sie an Ihre Bewerbung (wann?).\n- Fragen Sie höflich nach dem Stand der Dinge.\n- Bedanken Sie sich.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-b1-l4-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Etwas gemeinsam planen',
              content: 'Planen Sie mit Ihrem Partner (dem Bot) etwas.\n**Situation:** Sie und der Bot wollen zusammen Sport machen, um fitter zu werden. Sie sind sich aber nicht einig, was.\n**Aufgabe:** Diskutieren Sie (z.B. Joggen, Fitness-Studio, Schwimmen). Einigen Sie sich auf einen Sport und einen ersten Termin.'
            },
            {
              id: 'g-b1-l4-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Ein Thema präsentieren',
              content: 'Sie sollen eine kurze Präsentation (ca. 3-4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Leben in der Stadt vs. auf dem Land" oder "Soziale Medien").\n**Aufgabe:** Bereiten Sie eine Präsentation vor. Ihre Präsentation sollte eine Einleitung, einen Hauptteil (eigene Erfahrungen, Situation in Ihrem Land, Vor- & Nachteile) und einen Schluss haben. Starten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b1-l4-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Feedback geben & reagieren',
              content: 'Nach Ihrer Präsentation (Teil 2) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback (z.B. "Deine Präsentation war interessant, aber...") und stellen Sie ihm eine Frage zum Thema.'
            },
            
            // --- B1 WÖRTSCHATZ (Reusing from g-b1-l1-v1) ---
            {
              id: 'g-b1-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B1',
              content: 'Wichtige Wörter für die B1-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-b1-l1
              ]
            },

            // --- B1 GRAMMATIK (Reusing from g-b1-l1-g1) ---
            {
              id: 'g-b1-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B1',
              content: 'Testen Sie Ihr Grammatikwissen für die B1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-b1-l1
              ]
            }
          ],
        },
//
// --- END OF g-b1-l4 ---
        {
          id: 'g-b1-l5',
          title: 'Modelltest 5: Übungssatz',
          estimatedTime: 165,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 30 Questions) ---
            {
              id: 'g-b1-l5-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (10 Fragen)',
              content: 'Sie hören 5 kurze Gespräche (zweimal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie an: Richtig/Falsch und a, b oder c.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Frau', line: 'Guten Tag, ich möchte dieses Paket in die Schweiz schicken.' },
                { speaker: 'Angestellter', line: 'Gern. Als Päckchen oder als versichertes Paket?' },
                { speaker: 'Frau', line: 'Was ist der Unterschied?' },
                { speaker: 'Angestellter', line: 'Das Päckchen ist billiger, aber nicht versichert. Das Paket kostet 15 Euro, ist aber bis 500 Euro versichert.' },
                { speaker: 'Frau', line: 'Der Inhalt ist wertvoll. Dann nehme ich das versicherte Paket.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Mann', line: 'Hi Lisa, ich bin\'s, Paul. Du, ich stehe im Stau. Ich schaffe es nicht pünktlich zum Film.' },
                { speaker: 'Lisa', line: 'Oh, wie ärgerlich. Fängt er ohne dich an?' },
                { speaker: 'Mann', line: 'Ja, geh du schon mal rein. Ich komme nach. Kauf mir bitte kein Popcorn, ich habe keinen Hunger.' },
                { speaker: 'Lisa', line: 'Okay, mache ich. Bis gleich!' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Kollegin 1', line: 'Hast du schon gehört? Frau Müller aus der Buchhaltung geht in Rente.' },
                { speaker: 'Kollegin 2', line: 'Ja, nächsten Monat schon. Wir sollten ein Abschiedsgeschenk organisieren. Sammeln wir Geld?' },
                { speaker: 'Kollegin 1', line: 'Gute Idee. Ich schicke eine E-Mail an alle. Ich dachte an einen Gutschein für ein Wellness-Wochenende.' },
                { speaker: 'Kollegin 2', line: 'Perfekt! Da freut sie sich bestimmt.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Mann', line: 'Entschuldigung, wissen Sie, ob dieser Bus zum Zoo fährt?' },
                { speaker: 'Frau', line: 'Nein, dieser hier nicht. Sie müssen in die Linie 25 umsteigen, an der Haltestelle "Marktplatz".' },
                { speaker: 'Mann', line: 'Ah, okay. Und wie viele Stationen sind das bis zum Marktplatz?' },
                { speaker: 'Frau', line: 'Nur drei. Das geht schnell.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 5.' },
                { speaker: 'Sohn', line: 'Mama, ich finde meinen blauen Pullover nicht. Hast du ihn gewaschen?' },
                { speaker: 'Mutter', line: 'Ja, aber er ist noch in der Waschmaschine. Er ist noch nass. Nimm doch den grünen, der liegt im Schrank.' },
                { speaker: 'Sohn', line: 'Den mag ich nicht. Dann nehme ich die graue Jacke.' },
              ],
              questions: [
                // Text 1
                { id: 'g-b1h1q1_5', text: 'Text 1: Die Frau schickt ein Paket in die Schweiz.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h1q2_5', text: 'Text 1: Warum nimmt sie das teurere Paket?', options: ['a) Weil es schneller ist.', 'b) Weil es billiger ist.', 'c) Weil der Inhalt versichert ist.'], correctAnswer: 'c) Weil der Inhalt versichert ist.' },
                // Text 2
                { id: 'g-b1h1q3_5', text: 'Text 2: Paul kommt zu spät, weil er Hunger hat.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q4_5', text: 'Text 2: Was soll Lisa tun?', options: ['a) Popcorn für Paul kaufen.', 'b) Auf Paul vor dem Kino warten.', 'c) Schon in den Film gehen.'], correctAnswer: 'c) Schon in den Film gehen.' },
                // Text 3
                { id: 'g-b1h1q5_5', text: 'Text 3: Frau Müller ist neu in der Buchhaltung.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h1q6_5', text: 'Text 3: Was wollen die Kolleginnen als Geschenk kaufen?', options: ['a) Einen Gutschein für ein Wochenende.', 'b) Eine E-Mail.', 'c) Ein Buch.'], correctAnswer: 'a) Einen Gutschein für ein Wochenende.' },
                // Text 4
                { id: 'g-b1h1q7_5', text: 'Text 4: Der Mann muss umsteigen, um zum Zoo zu kommen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h1q8_5', text: 'Text 4: Wo muss der Mann umsteigen?', options: ['a) An der nächsten Haltestelle.', 'b) Am Marktplatz.', 'c) Er muss nicht umsteigen.'], correctAnswer: 'b) Am Marktplatz.' },
                // Text 5
                { id: 'g-b1h1q9_5', text: 'Text 5: Der blaue Pullover ist in der Wäsche.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h1q10_5', text: 'Text 5: Was zieht der Sohn an?', options: ['a) Den blauen Pullover.', 'b) Den grünen Pullover.', 'c) Die graue Jacke.'], correctAnswer: 'c) Die graue Jacke.' },
              ]
            },
            {
              id: 'g-b1-l5-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Radiovortrag (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen bei "Radio Campus". Heute geht es um das Thema "Auslandssemester". Bei mir ist die Studentin Lena, die ein Jahr in Spanien war. Lena, warum Spanien?' },
                { speaker: 'Lena', line: 'Guten Tag. Ich studiere Spanisch, da war das natürlich naheliegend. Ich wollte die Sprache aber nicht nur im Kurs lernen, sondern im Alltag leben. Und ich liebe die spanische Kultur.' },
                { speaker: 'Moderatorin', line: 'War es schwer, alles zu organisieren?' },
                { speaker: 'Lena', line: 'Oh ja, sehr. Man braucht so viele Papiere. Die Anmeldung an der Uni in Madrid war kompliziert. Aber am schwierigsten war die Wohnungssuche. Die Mieten sind hoch und es gibt viele Bewerber. Ich habe erst nach drei Wochen etwas gefunden.' },
                { speaker: 'Moderatorin', line: 'Und das Studium? War es anders als in Deutschland?' },
                { speaker: 'Lena', line: 'Total anders. Viel theoretischer. In Deutschland machen wir mehr Projektarbeit in Gruppen. Dort musste man vor allem viel auswendig lernen für die Prüfungen. Daran musste ich mich erst gewöhnen.' },
                { speaker: 'Moderatorin', line: 'Was war Ihr Fazit?' },
                { speaker: 'Lena', line: 'Es war die beste Entscheidung meines Lebens. Mein Spanisch ist jetzt fließend, ich habe Freunde aus der ganzen Welt gefunden und bin viel selbstständiger geworden. Ich kann es jedem nur empfehlen, auch wenn es am Anfang anstrengend ist.' },
              ],
              questions: [
                { id: 'g-b1h2q1_5', text: 'Warum ist Lena nach Spanien gegangen?', options: ['a) Weil sie Urlaub machen wollte.', 'b) Weil sie die Sprache im Alltag lernen wollte.', 'c) Weil die Uni in Deutschland zu schwer war.'], correctAnswer: 'b) Weil sie die Sprache im Alltag lernen wollte.' },
                { id: 'g-b1h2q2_5', text: 'Was war für Lena am schwierigsten bei der Organisation?', options: ['a) Die Anmeldung an der Uni.', 'b) Die Wohnungssuche.', 'c) Die Papiere zu bekommen.'], correctAnswer: 'b) Die Wohnungssuche.' },
                { id: 'g-b1h2q3_5', text: 'Wie lange hat sie eine Wohnung gesucht?', options: ['a) Drei Tage', 'b) Drei Wochen', 'c) Drei Monate'], correctAnswer: 'b) Drei Wochen' },
                { id: 'g-b1h2q4_5', text: 'Wie war das Studium in Madrid im Vergleich zu Deutschland?', options: ['a) Es war praktischer.', 'b) Es war theoretischer.', 'c) Es gab mehr Projektarbeit.'], correctAnswer: 'b) Es war theoretischer.' },
                { id: 'g-b1h2q5_5', text: 'Was musste Lena in Madrid viel machen?', options: ['a) In Gruppen arbeiten.', 'b) Projekte präsentieren.', 'c) Auswendig lernen.'], correctAnswer: 'c) Auswendig lernen.' },
                { id: 'g-b1h2q6_5', text: 'Wie ist Lenas Spanisch jetzt?', options: ['a) Schlechter als vorher.', 'b) Unverändert.', 'c) Fließend.'], correctAnswer: 'c) Fließend.' },
                { id: 'g-b1h2q7_5', text: 'Was hat Lena außerdem gelernt?', options: ['a) Sie ist selbstständiger geworden.', 'b) Sie hat Kochen gelernt.', 'c) Sie hat Arbeit gefunden.'], correctAnswer: 'a) Sie ist selbstständiger geworden.' },
                { id: 'g-b1h2q8_5', text: 'Wie fand Lena das Auslandsjahr insgesamt?', options: ['a) Es war zu anstrengend.', 'b) Es war die beste Entscheidung.', 'c) Sie würde es nicht empfehlen.'], correctAnswer: 'b) Es war die beste Entscheidung.' },
                { id: 'g-b1h2q9_5', text: 'Was war Lena NICHT?', options: ['a) Studentin', 'b) In Madrid', 'c) In Deutschland'], correctAnswer: 'c) In Deutschland' },
                { id: 'g-b1h2q10_5', text: 'Was war der Anlass des Gesprächs?', options: ['a) Eine Diskussion über Wohnungssuche.', 'b) Ein Bericht über ein Auslandssemester.', 'c) Eine Werbung für die Uni Madrid.'], correctAnswer: 'b) Ein Bericht über ein Auslandssemester.' },
              ]
            },
            {
              id: 'g-b1-l5-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Anna', line: 'Markus, du siehst müde aus. Alles okay?' },
                { speaker: 'Markus', line: 'Ach, ich habe im Moment einfach zu viel zu tun. Die Arbeit, und dann renovieren wir auch noch unsere Wohnung.' },
                { speaker: 'Anna', line: 'Oh, ihr renoviert? Was macht ihr denn alles?' },
                { speaker: 'Markus', line: 'Alles! Neue Böden, die Wände streichen und eine komplett neue Küche. Es ist so viel Arbeit.' },
                { speaker: 'Anna', line: 'Macht ihr das alles selbst?' },
                { speaker: 'Markus', line: 'Nein, zum Glück nicht. Für die Küche kommt eine Firma. Aber das Streichen und die Böden machen wir selbst, um Geld zu sparen. Das dauert ewig.' },
                { speaker: 'Anna', line: 'Das glaube ich. Und wo wohnt ihr währenddessen?' },
                { speaker: 'Markus', line: 'Wir können zum Glück bei meinen Schwiegereltern wohnen. Das ist zwar nicht ideal, aber besser als auf einer Baustelle zu schlafen.' },
              ],
              questions: [
                { id: 'g-b1h3q1_5', text: 'Markus ist müde, weil er zu viel arbeitet und die Wohnung renoviert.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b1h3q2_5', text: 'Sie streichen nur die Wände.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q3_5', text: 'Markus und seine Frau machen alle Arbeiten selbst.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q4_5', text: 'Sie sparen Geld, weil sie die Küche selbst einbauen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q5_5', text: 'Sie schlafen während der Renovierung in der Wohnung.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b1h3q6_5', text: 'Sie wohnen gerade bei den Schwiegereltern.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-b1-l5-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (4 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Herzlich willkommen zu "Klartext". Unser Thema heute: "Gleiches Gehalt für alle?" In Deutschland verdienen Frauen im Durchschnitt immer noch weniger als Männer. Frau Lenz, Sie sind für eine Frauenquote in Führungspositionen. Warum?' },
                { speaker: 'Frau Lenz', line: 'Guten Tag. Weil es anders nicht funktioniert. Wir reden seit 20 Jahren über "Equal Pay", aber es passiert zu wenig. Wir brauchen eine Quote, die Firmen zwingt, Frauen in Top-Positionen zu bringen. Frauen sind genauso gut qualifiziert, aber Männer wählen bei Beförderungen oft wieder Männer aus.' },
                { speaker: 'Moderatorin', line: 'Herr Haas, Sie sind Unternehmer. Was halten Sie von einer Quote?' },
                { speaker: 'Herr Haas', line: 'Gar nichts. Ich stelle die beste Person für den Job ein, egal ob Mann oder Frau. Eine Quote ist ungerecht. Was ist, wenn ein Mann besser qualifiziert ist, ich aber wegen der Quote eine Frau einstellen MUSS? Das ist Diskriminierung gegen Männer. Die Qualifikation muss entscheiden, nicht das Geschlecht.' },
                { speaker: 'Frau Lenz', line: 'Aber genau das passiert ja jetzt! Die Qualifikation von Frauen wird oft übersehen. Die Quote ist nur eine Krücke, bis echte Gleichberechtigung normal ist.' },
              ],
              questions: [
                { id: 'g-b1h4q1_5', text: 'Was ist das Thema der Diskussion?', options: ['a) Ob Frauen mehr arbeiten sollen als Männer.', 'b) Ob Frauen weniger Gehalt verdienen sollen.', 'c) Ob eine Frauenquote in Firmen sinnvoll ist.'], correctAnswer: 'c) Ob eine Frauenquote in Firmen sinnvoll ist.' },
                { id: 'g-b1h4q2_5', text: 'Warum ist Frau Lenz für eine Quote?', options: ['a) Weil Frauen besser qualifiziert sind als Männer.', 'b) Weil sie findet, dass sich freiwillig zu wenig ändert.', 'c) Weil sie Herrn Haas nicht mag.'], correctAnswer: 'b) Weil sie findet, dass sich freiwillig zu wenig ändert.' },
                { id: 'g-b1h4q3_5', text: 'Was ist Herrn Haas\' Hauptargument GEGEN eine Quote?', options: ['a) Er findet, die Qualifikation muss entscheiden.', 'b) Er möchte keine Frauen einstellen.', 'c) Er findet, Frauen verdienen genug.'], correctAnswer: 'a) Er findet, die Qualifikation muss entscheiden.' },
                { id: 'g-b1h4q4_5', text: 'Was befürchtet Herr Haas durch eine Quote?', options: ['a) Dass Frauen diskriminiert werden.', 'b) Dass Männer diskriminiert werden.', 'c) Dass er mehr Gehalt zahlen muss.'], correctAnswer: 'b) Dass Männer diskriminiert werden.' },
              ]
            },

            // --- LESEN (5 Parts, 30 Questions) ---
            {
              id: 'g-b1-l5-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (6 Fragen)',
              content: 'Lesen Sie die Blog-Beiträge. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Thema: Wie wichtig ist Pünktlichkeit?**\n\n**Beitrag von Stefan (48):**\nIch bin Deutscher und ja, für mich ist Pünktlichkeit extrem wichtig. Besonders im Beruf. Wenn ich um 10 Uhr einen Termin habe, bin ich um 9:50 Uhr da. Unpünktlichkeit ist für mich ein Zeichen von Respektlosigkeit. Es zeigt, dass die Zeit des anderen einem nicht wichtig ist. Privat bin ich etwas lockerer, aber mehr als 5 Minuten Verspätung finde ich unhöflich.\n\n**Beitrag von Maria (29):**\nIch komme aus Spanien und lebe seit 3 Jahren in Deutschland. Ich musste das erst lernen! Bei uns ist das Leben entspannter. Wenn man um 20 Uhr verabredet ist, ist es normal, um 20:30 Uhr zu kommen. Hier in Deutschland sind alle gestresst, wenn man 5 Minuten zu spät ist. Ich versuche, pünktlich zu sein, aber es fällt mir schwer. Ich finde das übertrieben.\n\n**Beitrag von Ben (21):**\nIch bin Student und ehrlich gesagt, achte ich da nicht so drauf. Bei Vorlesungen an der Uni ist es okay, ein paar Minuten später zu kommen. Bei meinen Freunden auch. Wir schreiben einfach kurz per WhatsApp "Bin 10 Min später da". Kein Problem. Nur bei meinem Nebenjob im Café, da muss ich pünktlich sein, sonst gibt es Ärger mit dem Chef.\n\n**Fragen:**\n',
              questions: [
                { id: 'g-b1r1q1_5', text: 'Wer findet Unpünktlichkeit respektlos?', options: ['a) Stefan', 'b) Maria', 'c) Ben'], correctAnswer: 'a) Stefan' },
                { id: 'g-b1r1q2_5', text: 'Wer musste Pünktlichkeit erst lernen?', options: ['a) Stefan', 'b) Maria', 'c) Ben'], correctAnswer: 'b) Maria' },
                { id: 'g-b1r1q3_5', text: 'Wer ist nur bei der Arbeit pünktlich?', options: ['a) Stefan', 'b) Maria', 'c) Ben'], correctAnswer: 'c) Ben' },
                { id: 'g-b1r1q4_5', text: 'Wer kommt aus einem Land mit einer anderen Einstellung zur Pünktlichkeit?', options: ['a) Stefan', 'b) Maria', 'c) Ben'], correctAnswer: 'b) Maria' },
                { id: 'g-b1r1q5_5', text: 'Wer ist im Privatleben lockerer als im Beruf?', options: ['a) Stefan', 'b) Maria', 'c) Ben'], correctAnswer: 'a) Stefan' },
                { id: 'g-b1r1q6_5', text: 'Wer kommuniziert Verspätungen per WhatsApp?', options: ['a) Stefan', 'b) Maria', 'c) Ben'], correctAnswer: 'c) Ben' },
              ]
            },
            {
              id: 'g-b1-l5-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (6 Fragen)',
              content: 'Lesen Sie den Artikel aus einer Zeitung. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Brauchen wir noch Zoos?**\n\nZoos sind bei Familien beliebt. Kinder lieben es, Elefanten, Löwen und Affen zu sehen. Viele Zoos sagen, sie sind wichtig für den Artenschutz. Sie züchten bedrohte Tierarten und schützen sie so vor dem Aussterben. Außerdem seien Zoos Bildungsorte, wo Kinder etwas über Tiere lernen, das sie nicht im Internet finden.\n\nKritiker sehen das jedoch anders. Sie argumentieren, dass es Tierquälerei ist, wilde Tiere in kleinen Käfigen einzusperren. Besonders große Tiere wie Elefanten oder Eisbären können in einem Zoo niemals artgerecht leben. Sie entwickeln oft Verhaltensstörungen. \n\nDie Kritiker fordern, Zoos abzuschaffen oder zumindest stark zu verändern. Statt Tiere aus aller Welt zu zeigen, sollten sich Zoos auf lokale Tierarten konzentrieren, die mehr Platz haben. Eine andere Idee sind Auffangstationen für verletzte Tiere. Die Diskussion wird emotional geführt, und eine einfache Lösung gibt es nicht.',
              questions: [
                { id: 'g-b1r2q1_5', text: 'Was ist ein Argument FÜR Zoos?', options: ['a) Sie sind gut für den Artenschutz.', 'b) Sie sind bei Kritikern beliebt.', 'c) Die Tiere haben viel Platz.'], correctAnswer: 'a) Sie sind gut für den Artenschutz.' },
                { id: 'g-b1r2q2_5', text: 'Was sagen Zoos, was Kinder dort lernen können?', options: ['a) Dass Tiere gefährlich sind.', 'b) Dinge, die man nicht im Internet findet.', 'c) Wie man Tiere züchtet.'], correctAnswer: 'b) Dinge, die man nicht im Internet findet.' },
                { id: 'g-b1r2q3_5', text: 'Was ist das Hauptargument der Kritiker?', options: ['a) Zoos sind zu teuer.', 'b) Es ist Tierquälerei, Tiere einzusperren.', 'c) Kinder mögen keine Zoos.'], correctAnswer: 'b) Es ist Tierquälerei, Tiere einzusperren.' },
                { id: 'g-b1r2q4_5', text: 'Welche Tiere haben laut Kritikern besondere Probleme?', options: ['a) Fische und Vögel', 'b) Kleine Affen', 'c) Große Tiere wie Elefanten'], correctAnswer: 'c) Große Tiere wie Elefanten' },
                { id: 'g-b1r2q5_5', text: 'Was fordern Kritiker als Alternative?', options: ['a) Zoos sollten nur noch lokale Tierarten zeigen.', 'b) Zoos sollten abgeschafft werden.', 'c) Beides ist möglich.'], correctAnswer: 'c) Beides ist möglich.' },
                { id: 'g-b1r2q6_5', text: 'Wie ist die Diskussion über Zoos?', options: ['a) Sachlich und klar', 'b) Emotional und kompliziert', 'c) Nicht mehr aktuell'], correctAnswer: 'b) Emotional und kompliziert' },
              ]
            },
            {
              id: 'g-b1-l5-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten am Wochenende etwas Kulturelles machen und interessieren sich für die Geschichte des alten Ägypten.\n2. Sie suchen einen Kurs, in dem Sie lernen, wie man professionell kocht.\n3. Ihr Kind (10 Jahre) hat Geburtstag. Sie suchen eine Idee für eine spannende Feier.\n4. Sie möchten sich sozial engagieren und älteren Menschen helfen.\n5. Sie suchen ein günstiges, aber romantisches Restaurant für ein Abendessen zu zweit.\n6. Sie möchten einen neuen Sport anfangen, am liebsten etwas mit Tanzen.\n\n**Anzeigen:**\n**a) "Tanz-Welt":** Neue Kurse! Standardtanz (Walzer, Foxtrott) für Paare, Di 19 Uhr. Hip-Hop für Jugendliche, Mi 17 Uhr. Zumba-Fitness (Workout & Tanz), Do 18 Uhr.\n\n**b) Senioren-Hilfe e.V.:** Wir suchen ehrenamtliche Helfer! Besuchen Sie einen älteren Menschen 1x pro Woche zum Reden, Einkaufen oder Spazierengehen. Wir freuen uns auf Sie!\n\n**c) Restaurant "Kerzenschein":** Der perfekte Ort für einen Abend zu zweit. Genießen Sie unser 4-Gänge-Überraschungsmenü bei romantischer Atmosphäre. Gehobene Preise. Reservierung nötig.\n\n**d) "Koch-Akademie":** Lernen Sie kochen wie ein Profi! Kurs "Italienische Küche" (4 Abende). Kurs "Saucen & Basics" (Wochenende). Leider sind alle Kurse für die nächsten 3 Monate ausgebucht.\n\n**e) "Abenteuer-Geburtstag":** Feiern Sie bei uns! Kletterpark für Kinder ab 8 Jahren. Mit Schatzsuche und Picknick. 3 Stunden Spaß garantiert. Buchen Sie jetzt!\n\n**f) Ägyptisches Museum:** Sonderschau "Leben am Nil". Entdecken Sie Mumien, Götter und das Leben der Pharaonen. Täglich 10-18 Uhr, Fr bis 21 Uhr.\n\n**g) "Asia-Wok":** Schnelles und günstiges Mittagessen. Täglich wechselnde Gerichte ab 5,50 €. Auch zum Mitnehmen.\n\n**h) "Nachhilfe-Institut":** Wir suchen Studenten (m/w/d) für Nachhilfe in Mathe und Physik. Gute Bezahlung. Flexible Zeiteinteilung.',
              questions: [
                { id: 'g-b1r3q1_5', text: 'Situation 1: Ägypten-Museum', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'f' },
                { id: 'g-b1r3q2_5', text: 'Situation 2: Kochkurs', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'd' is ausgebucht
                { id: 'g-b1r3q3_5', text: 'Situation 3: Kindergeburtstag', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'e' },
                { id: 'g-b1r3q4_5', text: 'Situation 4: Älteren Menschen helfen', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'b' },
                { id: 'g-b1r3q5_5', text: 'Situation 5: Günstiges, romantisches Restaurant', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'c' is romantic but expensive, 'g' is cheap but not romantic
                { id: 'g-b1r3q6_5', text: 'Situation 6: Tanzkurs', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'a' },
              ]
            },
            {
              id: 'g-b1-l5-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Forumsbeitrag. Kreuzen Sie an: Ja oder Nein.\n\n**Thema: Sollen E-Scooter in Innenstädten verboten werden?**\n\n**Beitrag von "Mobil-Master":**\nIch bin für ein Verbot, und zwar sofort! Diese E-Scooter sind eine Katastrophe. Sie stehen überall auf den Gehwegen herum und blockieren den Weg für Fußgänger und Kinderwagen. Außerdem fahren die Leute damit rücksichtslos. Gestern ist mir fast einer über den Fuß gefahren. Sie sind lautlos und schnell. Das ist gefährlich. Ich finde, die Nachteile sind viel größer als die Vorteile.\n\n**Beitrag von "Eco-Lina":**\nEin Verbot? Das finde ich völlig übertrieben. Ich fahre jeden Tag mit dem E-Scooter zur Arbeit. Es ist umweltfreundlich, ich stehe nicht im Stau und es macht Spaß. Das Problem sind nicht die Scooter, sondern einige Leute, die sich nicht an die Regeln halten. Man sollte nicht alle bestrafen. Bessere Regeln und Kontrollen wären sinnvoller als ein komplettes Verbot. Man verbietet ja auch keine Autos, nur weil manche zu schnell fahren.',
              questions: [
                { id: 'g-b1r4q1_5', text: 'Ist "Mobil-Master" für E-Scooter?', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q2_5', text: 'Er findet, dass die Scooter die Gehwege blockieren.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b1r4q3_5', text: 'Er findet E-Scooter sicher.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q4_5', text: 'Ist "Eco-Lina" für ein Verbot?', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q5_5', text: 'Sie nutzt den E-Scooter für den Weg zur Arbeit.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b1r4q6_5', text: 'Sie findet, dass alle E-Scooter-Fahrer rücksichtslos sind.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b1r4q7_5', text: 'Sie schlägt bessere Regeln statt eines Verbots vor.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
              ]
            },
            {
              id: 'g-b1-l5-r5',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 5 (5 Fragen)',
              content: 'Lesen Sie die Anleitung. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Anleitung: Bewerbungsgespräch per Video-Call**\n\nImmer mehr Bewerbungsgespräche finden online statt. Damit Sie einen guten Eindruck machen, beachten Sie diese Tipps:\n\n1.  **Technik-Check:** Testen Sie alles einen Tag vorher! Funktionieren Kamera, Mikrofon und Internetverbindung? Ist Ihr Laptop-Akku geladen? Ein technisches Problem wirkt unprofessionell.\n\n2.  **Der Ort:** Wählen Sie einen ruhigen Raum mit neutralem Hintergrund. Eine unaufgeräumte Küche oder ein lautes Café sind tabu. Sorgen Sie für gutes Licht von vorn.\n\n3.  **Kleidung:** Ziehen Sie sich genauso an wie für ein persönliches Gespräch im Büro. Eine Anzughose hilft, sich professioneller zu fühlen, auch wenn man sie nicht sieht.\n\n4.  **Blickkontakt:** Schauen Sie nicht auf Ihr eigenes Bild auf dem Monitor, sondern direkt in die Kamera. Das wirkt, als ob Sie Ihrem Gesprächspartner in die Augen sehen.\n\n5.  **Störungen:** Informieren Sie Familie oder Mitbewohner, dass Sie ein wichtiges Gespräch haben. Schalten Sie Ihr Handy lautlos und schließen Sie alle anderen Programme auf Ihrem Computer.',
              questions: [
                { id: 'g-b1r5q1_5', text: 'Wann sollte man die Technik testen?', options: ['a) Während des Gesprächs', 'b) Einen Tag vor dem Gespräch', 'c) 5 Minuten vor dem Gespräch'], correctAnswer: 'b) Einen Tag vor dem Gespräch' },
                { id: 'g-b1r5q2_5', text: 'Was ist ein schlechter Hintergrund?', options: ['a) Eine weiße Wand', 'b) Ein Bücherregal', 'c) Eine unaufgeräumte Küche'], correctAnswer: 'c) Eine unaufgeräumte Küche' },
                { id: 'g-b1r5q3_5', text: 'Welche Kleidung wird empfohlen?', options: ['a) Nur ein Hemd, die Hose ist egal.', 'b) Ein komplettes Business-Outfit.', 'c) Bequeme Kleidung für zu Hause.'], correctAnswer: 'b) Ein komplettes Business-Outfit.' },
                { id: 'g-b1r5q4_5', text: 'Wohin sollte man schauen?', options: ['a) In die Kamera', 'b) Auf das eigene Bild', 'c) Aus dem Fenster'], correctAnswer: 'a) In die Kamera' },
                { id: 'g-b1r5q5_5', text: 'Was sollte man mit dem Handy machen?', options: ['a) Es auf den Tisch legen.', 'b) Es für Notizen benutzen.', 'c) Es lautlos schalten.'], correctAnswer: 'c) Es lautlos schalten.' },
              ]
            },
            
            // --- SCHREIBEN (3 Parts) ---
            {
              id: 'g-b1-l5-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Informelle E-Mail (ca. 80 Wörter)',
              content: 'Sie haben von Ihrer Freundin Lena lange nichts mehr gehört. Sie möchten vorschlagen, dass Sie sie bald in ihrer Stadt besuchen.\nSchreiben Sie ihr eine E-Mail (ca. 80 Wörter):\n- Fragen Sie, wie es ihr geht.\n- Sagen Sie, dass Sie sie gern besuchen möchten (z.B. am ersten Wochenende im nächsten Monat).\n- Fragen Sie, ob sie an dem Wochenende Zeit hat.\n- Machen Sie einen Vorschlag, was Sie zusammen unternehmen könnten.',
            },
            {
              id: 'g-b1-l5-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Forumsbeitrag (ca. 80 Wörter)',
              content: 'Sie haben im Internet einen Forumsbeitrag zum Thema "Ist ein Fernstudium (Online-Uni) so gut wie ein normales Studium?" gelesen.\n\n**Meinung von "Student88":**\n"Ich studiere online und es ist super. Ich kann lernen, wann ich will, und muss nicht in die Uni fahren. Ich spare Zeit und Geld. Ich finde, das ist die Zukunft."\n\nSchreiben Sie Ihre Meinung dazu (ca. 80 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe für Ihre Meinung (z.B. Vor- oder Nachteile).\n- Erzählen Sie von Ihren eigenen Erfahrungen mit Online-Lernen.',
            },
            {
              id: 'g-b1-l5-w3',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 3: Formelle E-Mail (ca. 40 Wörter)',
              content: 'Sie haben bei einer Firma ein Bewerbungsgespräch am nächsten Freitag. Sie haben aber am selben Tag einen Notfall in der Familie und können nicht kommen.\nSchreiben Sie eine E-Mail an den Personalchef, Herrn Neumann (ca. 40 Wörter).\n- Sagen Sie den Termin ab und entschuldigen Sie sich.\n- Nennen Sie den Grund (Notfall).\n- Bitten Sie höflich um einen neuen Termin.',
            },

            // --- SPRECHEN (3 Parts) ---
            {
              id: 'g-b1-l5-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Etwas gemeinsam planen',
              content: 'Planen Sie mit Ihrem Partner (dem Bot) etwas.\n**Situation:** Sie und der Bot wollen zusammen einen Deutsch-Filmabend organisieren.\n**Aufgabe:** Einigen Sie sich auf einen Film, einen Termin (Tag/Uhrzeit) und wer was mitbringt (Getränke, Snacks).'
            },
            {
              id: 'g-b1-l5-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Ein Thema präsentieren',
              content: 'Sie sollen eine kurze Präsentation (ca. 3-4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Leben ohne Auto" oder "Mein letzter Urlaub").\n**Aufgabe:** Bereiten Sie eine Präsentation vor. Ihre Präsentation sollte eine Einleitung, einen Hauptteil (eigene Erfahrungen, Situation in Ihrem Land, Vor- & Nachteile) und einen Schluss haben. Starten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b1-l5-s3',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 3: Feedback geben & reagieren',
              content: 'Nach Ihrer Präsentation (Teil 2) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback (z.B. "Deine Präsentation war interessant, aber...") und stellen Sie ihm eine Frage zum Thema.'
            },
            
            // --- B1 WÖRTSCHATZ (Reusing from g-b1-l1-v1) ---
            {
              id: 'g-b1-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B1',
              content: 'Wichtige Wörter für die B1-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-b1-l1
              ]
            },

            // --- B1 GRAMMATIK (Reusing from g-b1-l1-g1) ---
            {
              id: 'g-b1-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B1',
              content: 'Testen Sie Ihr Grammatikwissen für die B1-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-b1-l1
              ]
            }
          ],
        },
//
// --- END OF g-b1-l5 ---
      ]
    },
    {
      level: 'G-B2' as CEFRLevel,
      title: 'Goethe-Zertifikat B2',
      description: 'Trainieren Sie für die B2-Prüfung mit 5 kompletten Modelltests.',
      lessons: [
        {
          id: 'g-b2-l1',
          title: 'Modelltest 1: Gesamte Prüfung',
          estimatedTime: 190, // B2 exam is very long
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts) ---
            {
              id: 'g-b2-l1-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören 4 kurze Gespräche (einmal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Frau', line: 'Guten Tag, Herr Dr. Brandt. Ich rufe an wegen der Stelle als wissenschaftliche Mitarbeiterin. Ist die Position noch frei?' },
                { speaker: 'Dr. Brandt', line: 'Ah, guten Tag. Ja, die Stelle ist noch nicht besetzt. Wir sind noch mitten im Auswahlverfahren. Haben Sie Ihre Unterlagen schon geschickt?' },
                { speaker: 'Frau', line: 'Nein, noch nicht. Ich wollte erst fragen, ob Kenntnisse in der Statistik-Software "R" zwingend erforderlich sind. Ich habe bisher nur mit "SPSS" gearbeitet.' },
                { speaker: 'Dr. Brandt', line: 'Das ist eine gute Frage. "R" wäre von Vorteil, ist aber keine Bedingung. Wichtiger sind uns solide methodische Kenntnisse. "SPSS" ist absolut ausreichend.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Mann 1', line: 'Was hältst du von dem Vorschlag, die Innenstadt komplett für Privatautos zu sperren?' },
                { speaker: 'Mann 2', line: 'Ich bin zwiegespalten. Einerseits wäre die Luftqualität besser und es gäbe mehr Platz für Radfahrer. Andererseits frage ich mich, wie die Geschäfte beliefert werden sollen.' },
                { speaker: 'Mann 1', line: 'Naja, für den Lieferverkehr könnte man ja Ausnahmen machen, vielleicht nur vormittags.' },
                { speaker: 'Mann 2', line: 'Hm. Und was ist mit Leuten, die nicht gut zu Fuß sind? Ich finde, man sollte eher auf E-Mobilität und einen besseren Nahverkehr setzen als auf komplette Verbote.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Frau 1', line: 'Du, ich habe gelesen, dass unser Fitnessstudio die Preise schon wieder erhöht. 80 Euro im Monat! Das ist mir zu teuer.' },
                { speaker: 'Frau 2', line: 'Mir auch. Ich überlege zu kündigen. Aber was ist die Alternative? Joggen im Park ist kostenlos, aber bei Regen macht das keinen Spaß.' },
                { speaker: 'Frau 1', line: 'Vielleicht ein Online-Kurs? Es gibt so viele gute Yoga- und Fitness-Apps. Das ist viel flexibler und billiger.' },
                { speaker: 'Frau 2', line: 'Stimmt, das wäre eine Überlegung wert. Das teste ich mal.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Moderatorin', line: 'Herr Seidel, Sie sind Architekt und haben sich auf "grünes Bauen" spezialisiert. Was bedeutet das?' },
                { speaker: 'Herr Seidel', line: 'Das bedeutet, wir bauen mit nachhaltigen Materialien wie Holz und Lehm. Und wir achten extrem auf Energieeffizienz, also Solaranlagen auf dem Dach, Dreifachverglasung und Wärmedämmung. Ein Haus soll möglichst wenig Energie verbrauchen.' },
                { speaker: 'Moderatorin', line: 'Ist das nicht viel teurer als ein normales Haus?' },
                { speaker: 'Herr Seidel', line: 'Die Baukosten sind anfangs etwa 10-15% höher. Aber das relativiert sich. Durch die extrem niedrigen Energiekosten spart man langfristig sehr viel Geld.' },
              ],
              questions: [
                { id: 'g-b2h1q1', text: 'Text 1: Die Frau ruft an, weil...', options: ['a) sie ihre Bewerbung zurückziehen will.', 'b) sie eine Frage zu den Anforderungen hat.', 'c) sie den Job bekommen hat.'], correctAnswer: 'b) sie eine Frage zu den Anforderungen hat.' },
                { id: 'g-b2h1q2', text: 'Text 1: Kenntnisse in "R" sind...', options: ['a) absolut notwendig.', 'b) hilfreich, aber nicht zwingend.', 'c) unwichtig.'], correctAnswer: 'b) hilfreich, aber nicht zwingend.' },
                { id: 'g-b2h1q3', text: 'Text 2: Mann 2 ist...', options: ['a) klar für ein Autoverbot.', 'b) klar gegen ein Autoverbot.', 'c) unsicher, was er davon halten soll.'], correctAnswer: 'c) unsicher, was er davon halten soll.' },
                { id: 'g-b2h1q4', text: 'Text 2: Was schlägt Mann 2 als Alternative vor?', options: ['a) E-Mobilität und besseren Nahverkehr.', 'b) Lieferverkehr nur vormittags.', 'c) Mehr Platz für Radfahrer.'], correctAnswer: 'a) E-Mobilität und besseren Nahverkehr.' },
                { id: 'g-b2h1q5', text: 'Text 3: Was ist das Problem?', options: ['a) Das Fitnessstudio ist zu voll.', 'b) Das Wetter ist zu schlecht zum Joggen.', 'c) Das Fitnessstudio ist zu teuer geworden.'], correctAnswer: 'c) Das Fitnessstudio ist zu teuer geworden.' },
                { id: 'g-b2h1q6', text: 'Text 3: Welche Alternative schlägt Frau 1 vor?', options: ['a) Online-Fitness-Apps', 'b) Ein anderes Fitnessstudio', 'c) Joggen im Park'], correctAnswer: 'a) Online-Fitness-Apps' },
                { id: 'g-b2h1q7', text: 'Text 4: "Grünes Bauen" bedeutet...', options: ['a) mit nachhaltigen Materialien zu bauen.', 'b) nur Häuser mit Gärten zu bauen.', 'c) billiger als normal zu bauen.'], correctAnswer: 'a) mit nachhaltigen Materialien zu bauen.' },
                { id: 'g-b2h1q8', text: 'Text 4: Wie sind die Kosten?', options: ['a) Die Baukosten sind niedriger.', 'b) Die Baukosten sind höher, aber man spart später.', 'c) Die Energie- und Baukosten sind höher.'], correctAnswer: 'b) Die Baukosten sind höher, aber man spart später.' },
              ]
            },
            {
              id: 'g-b2-l1-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Vortrag (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Professorin', line: 'Guten Morgen, meine Damen und Herren. Willkommen zur Vorlesung "Einführung in die Psychologie". Heute: "Die Psychologie des Schlafs". Warum schlafen wir? Lange Zeit dachte man, Schlaf sei nur ein passiver Erholungszustand. Heute wissen wir: Das Gegenteil ist der Fall. Im Schlaf ist unser Gehirn hochaktiv.' },
                { speaker: 'Professorin', line: 'Der Schlaf gliedert sich in verschiedene Phasen, die sich pro Nacht mehrfach wiederholen. Besonders wichtig ist die sogenannte REM-Phase, der Traumschlaf. In dieser Phase verarbeiten wir die Erlebnisse des Tages und festigen Gelerntes. Ja, Sie haben richtig gehört: Schlaf ist essenziell für das Gedächtnis. Wer vor einer Prüfung gut schläft, kann sich an mehr erinnern.' },
                { speaker: 'Professorin', line: 'Ein großes Problem unserer modernen Gesellschaft ist der chronische Schlafmangel. Wir schlafen im Durchschnitt 1,5 Stunden weniger als die Menschen vor 50 Jahren. Die Folgen sind gravierend: Konzentrationsprobleme, ein höheres Risiko für Herz-Kreislauf-Erkrankungen und sogar Depressionen. Licht, besonders das blaue Licht von Smartphones und Bildschirmen am Abend, ist ein Hauptfaktor. Es signalisiert dem Gehirn: "Bleib wach!"' },
                { speaker: 'Professorin', line: 'Was also tun? Mein Rat: Schaffen Sie Routinen. Gehen Sie jeden Tag etwa zur gleichen Zeit ins Bett. Und: Verbannen Sie das Handy aus dem Schlafzimmer.' },
              ],
              questions: [
                { id: 'g-b2h2q1', text: 'Im Schlaf ist das Gehirn nicht aktiv.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q2', text: 'Die REM-Phase ist der Traumschlaf.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q3', text: 'Schlaf ist wichtig, um Gelerntes zu speichern.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q4', text: 'Wir schlafen heute länger als vor 50 Jahren.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q5', text: 'Schlafmangel kann zu gesundheitlichen Problemen führen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q6', text: 'Blaues Licht von Handys hilft beim Einschlafen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q7', text: 'Die Professorin rät, das Handy mit ins Bett zu nehmen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q8', text: 'Man sollte jeden Tag zu unterschiedlichen Zeiten schlafen gehen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q9', text: 'Die Vorlesung ist eine Einführung in die Psychologie.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q10', text: 'Schlafmangel ist kein großes Problem.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-b2-l1-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen bei "Kultur-Talk". Bei mir ist die junge Autorin Elif Yilmaz, deren Debütroman "Stadtnächte" gerade ein Bestseller ist. Frau Yilmaz, wie fühlt sich das an?' },
                { speaker: 'Elif Yilmaz', line: 'Überwältigend. Ich habe jahrelang neben meinem Job als Kellnerin an dem Buch geschrieben. Dass es jetzt so gut ankommt, ist unglaublich.' },
                { speaker: 'Moderator', line: 'Worum geht es in "Stadtnächte"?' },
                { speaker: 'Elif Yilmaz', line: 'Es geht um eine junge Frau, die neu nach Berlin kommt und versucht, in der anonymen Großstadt anzukommen. Es geht um Freundschaft, Einsamkeit und die Suche nach der eigenen Identität.' },
                { speaker: 'Moderator', line: 'Ist das autobiografisch?' },
                { speaker: 'Elif Yilmaz', line: 'Nein, nicht direkt. Die Hauptfigur ist fiktiv. Aber natürlich sind eigene Erlebnisse und Gefühle eingeflossen, als ich damals von einer Kleinstadt nach Berlin gezogen bin. Diese Zerrissenheit zwischen Freiheit und Verlorensein, das kenne ich gut.' },
                { speaker: 'Moderator', line: 'Was war die größte Herausforderung beim Schreiben?' },
                { speaker: 'Elif Yilmaz', line: 'Die Disziplin. Nach acht Stunden Kellnern nach Hause zu kommen und sich dann noch hinzusetzen und zu schreiben. Da gab es viele Momente, in denen ich aufgeben wollte. Aber die Geschichte musste raus.' },
              ],
              questions: [
                { id: 'g-b2h3q1', text: 'Warum ist Frau Yilmaz im "Kultur-Talk"?', options: ['a) Weil sie als Kellnerin arbeitet.', 'b) Weil sie ein erfolgreiches Buch geschrieben hat.', 'c) Weil sie nach Berlin gezogen ist.'], correctAnswer: 'b) Weil sie ein erfolgreiches Buch geschrieben hat.' },
                { id: 'g-b2h3q2', text: 'Wie hat sie das Buch geschrieben?', options: ['a) Als Vollzeit-Autorin', 'b) Während ihres Studiums', 'c) Neben ihrem Job als Kellnerin'], correctAnswer: 'c) Neben ihrem Job als Kellnerin' },
                { id: 'g-b2h3q3', text: 'Was ist das Hauptthema des Romans?', options: ['a) Die Suche nach Identität in einer Großstadt.', 'b) Eine Liebesgeschichte in einer Kleinstadt.', 'c) Eine Biografie über Elif Yilmaz.'], correctAnswer: 'a) Die Suche nach Identität in einer Großstadt.' },
                { id: 'g-b2h3q4', text: 'Wie autobiografisch ist das Buch?', options: ['a) Es ist zu 100% autobiografisch.', 'b) Es ist komplett fiktiv, ohne persönliche Erlebnisse.', 'c) Eigene Gefühle und Erlebnisse sind eingeflossen.'], correctAnswer: 'c) Eigene Gefühle und Erlebnisse sind eingeflossen.' },
                { id: 'g-b2h3q5', text: 'Was fiel Frau Yilmaz beim Schreiben am schwersten?', options: ['a) Die Disziplin nach der Arbeit aufzubringen.', 'b) Eine gute Geschichte zu finden.', 'c) Einen Verlag zu finden.'], correctAnswer: 'a) Die Disziplin nach der Arbeit aufzubringen.' },
                { id: 'g-b2h3q6', text: 'Wie fühlte sich Frau Yilmaz oft in Berlin?', options: ['a) Nur frei', 'b) Nur verloren', 'c) Zerrissen zwischen Freiheit und Verlorensein'], correctAnswer: 'c) Zerrissen zwischen Freiheit und Verlorensein' },
              ]
            },
            {
              id: 'g-b2-l1-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (6 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen zu "Standpunkt". Unser Thema: Künstliche Intelligenz in der Bildung. Chance oder Gefahr? Herr Dr. Voss, Sie sind Informatiker und entwickeln KI-Lernsoftware.' },
                { speaker: 'Dr. Voss', line: 'KI ist die größte Chance, die wir je hatten. Stellen Sie sich vor: Jedes Kind bekommt einen individuellen Tutor. Die KI erkennt, wo ein Schüler Schwächen hat und passt die Aufgaben in Echtzeit an. Langsame Schüler werden gefördert, schnelle nicht gelangweilt. Das ist personalisiertes Lernen in Perfektion.' },
                { speaker: 'Moderatorin', line: 'Frau Liebig, Sie sind Lehrerin und skeptisch.' },
                { speaker: 'Frau Liebig', line: 'Ich bin nicht skeptisch, ich bin alarmiert. Wir reduzieren Bildung auf reine Datenanalyse. Schule ist mehr als Wissensvermittlung. Es geht um soziale Kompetenz, Empathie, im Team arbeiten. Das kann eine KI nicht lehren. Und was ist mit dem Datenschutz? Ich möchte nicht, dass private Lernschwächen meiner Schüler bei Tech-Konzernen gespeichert werden.' },
                { speaker: 'Dr. Voss', line: 'Die KI soll den Lehrer ja nicht ersetzen, sondern unterstützen! Der Lehrer hat dann mehr Zeit für die sozialen Aspekte, weil die KI das Vokabeltraining übernimmt.' },
                { speaker: 'Frau Liebig', line: 'Das ist die Theorie. In der Praxis sehe ich die Gefahr, dass Kinder nur noch mit dem Tablet sprechen und das kritische Denken verlernen.' },
              ],
              questions: [
                { id: 'g-b2h4q1', text: 'Was ist laut Dr. Voss der Hauptvorteil von KI in der Bildung?', options: ['a) Sie ist billiger als Lehrer.', 'b) Sie ermöglicht personalisiertes Lernen.', 'c) Sie ersetzt die Lehrer komplett.'], correctAnswer: 'b) Sie ermöglicht personalisiertes Lernen.' },
                { id: 'g-b2h4q2', text: 'Wie passt die KI die Aufgaben an?', options: ['a) Nach einem festen Plan', 'b) In Echtzeit, je nach Schwächen', 'c) Gar nicht, alle machen das Gleiche'], correctAnswer: 'b) In Echtzeit, je nach Schwächen' },
                { id: 'g-b2h4q3', text: 'Was ist Frau Liebigs Hauptsorge?', options: ['a) Dass die KI zu teuer ist.', 'b) Dass soziale Kompetenz und Empathie zu kurz kommen.', 'c) Dass die Schüler zu schnell lernen.'], correctAnswer: 'b) Dass soziale Kompetenz und Empathie zu kurz kommen.' },
                { id: 'g-b2h4q4', text: 'Welches weitere Problem nennt Frau Liebig?', options: ['a) Den Datenschutz', 'b) Die komplizierte Technik', 'c) Das Vokabeltraining'], correctAnswer: 'a) Den Datenschutz' },
                { id: 'g-b2h4q5', text: 'Wie sieht Dr. Voss die Rolle des Lehrers?', options: ['a) Der Lehrer wird nicht mehr gebraucht.', 'b) Die KI unterstützt den Lehrer.', 'c) Der Lehrer programmiert die KI.'], correctAnswer: 'b) Die KI unterstützt den Lehrer.' },
                { id: 'g-b2h4q6', text: 'Was befürchtet Frau Liebig für die Praxis?', options: ['a) Dass Kinder das kritische Denken verlernen.', 'b) Dass die Tablets zu langsam sind.', 'c) Dass Dr. Voss recht hat.'], correctAnswer: 'a) Dass Kinder das kritische Denken verlernen.' },
              ]
            },

            // --- LESEN (4 Parts) ---
            {
              id: 'g-b2-l1-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (9 Fragen)',
              content: 'Lesen Sie die 4 Texte. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1: Rezension "Das Labyrinth der Träume"**\nDieser Roman ist ein Meisterwerk der Fantasie. Der Autor entführt uns in eine Welt, in der Träume Realität werden. Sprachlich brillant, aber die Handlung ist extrem komplex. Man muss sich konzentrieren. Es ist kein Buch für den Strand, sondern erfordert einen wachen Geist. Wer sich darauf einlässt, wird belohnt.\n\n**Text 2: E-Mail vom Chef**\nAn: Team Marketing\nBetreff: Wichtig: Neues Zeiterfassungssystem\nLiebe Kolleginnen und Kollegen, ab dem 1. nächsten Monats führen wir ein neues System zur digitalen Zeiterfassung ein. Das alte Stempelsystem wird abgeschaltet. Bitte nehmen Sie alle verpflichtend an einer der folgenden Schulungen teil: Mo, 10 Uhr oder Di, 14 Uhr. Tragen Sie sich bis Freitag in die Liste ein.\n\n**Text 3: Leserbrief zum Thema "Tempolimit"**\n...ich bin absolut gegen ein generelles Tempolimit auf Autobahnen. Das Gerede vom Klimaschutz ist ein Vorwand. In Wahrheit geht es um Bevormundung. Ich fahre gern schnell und sicher. Die deutsche Autoindustrie, unser wichtigster Wirtschaftszweig, würde massiv geschädigt. Wir brauchen freie Fahrt für freie Bürger, nicht noch mehr Verbote!\n\n**Text 4: Universitäts-Info "Auslandssemester"**\nEin Semester im Ausland erweitert den Horizont. Wichtigste Voraussetzung für eine erfolgreiche Bewerbung (z.B. für das Erasmus-Programm) sind ausreichende Sprachkenntnisse (mind. B1) der Landessprache oder auf Englisch, je nach Partneruni. Zudem müssen Sie im mindestens dritten Fachsemester sein. Die Bewerbungsfrist für das kommende Wintersemester endet am 31. Januar.',
              questions: [
                { id: 'g-b2r1q1', text: 'Text 1: Was ist die Meinung des Rezensenten?', options: ['a) Das Buch ist sprachlich schwach.', 'b) Das Buch ist eine leichte Lektüre.', 'c) Das Buch ist anspruchsvoll, aber lohnenswert.'], correctAnswer: 'c) Das Buch ist anspruchsvoll, aber lohnenswert.' },
                { id: 'g-b2r1q2', text: 'Text 2: Was ist die wichtigste Information der E-Mail?', options: ['a) Das Stempelsystem bleibt.', 'b) Es gibt ein neues Zeiterfassungssystem.', 'c) Das Marketing-Team wird aufgelöst.'], correctAnswer: 'b) Es gibt ein neues Zeiterfassungssystem.' },
                { id: 'g-b2r1q3', text: 'Text 2: Die Schulung ist...', options: ['a) freiwillig.', 'b) verpflichtend.', 'c) nur für neue Mitarbeiter.'], correctAnswer: 'b) verpflichtend.' },
                { id: 'g-b2r1q4', text: 'Text 3: Was ist die Position des Verfassers?', options: ['a) Er ist für ein Tempolimit.', 'b) Er ist gegen ein Tempolimit.', 'c) Er ist für den Klimaschutz.'], correctAnswer: 'b) Er ist gegen ein Tempolimit.' },
                { id: 'g-b2r1q5', text: 'Text 3: Was befürchtet der Verfasser als Folge eines Tempolimits?', options: ['a) Schaden für die Autoindustrie.', 'b) Mehr Bevormundung.', 'c) Beides.'], correctAnswer: 'c) Beides.' },
                { id: 'g-b2r1q6', text: 'Text 4: Was ist eine Voraussetzung für das Auslandssemester?', options: ['a) Man muss im ersten Semester sein.', 'b) Man braucht B1-Sprachkenntnisse.', 'c) Man muss Englisch studieren.'], correctAnswer: 'b) Man braucht B1-Sprachkenntnisse.' },
                { id: 'g-b2r1q7', text: 'Text 4: Wann endet die Bewerbungsfrist?', options: ['a) Am 31. Januar', 'b) Im Wintersemester', 'c) Am 1. Januar'], correctAnswer: 'a) Am 31. Januar' },
                { id: 'g-b2r1q8', text: 'Welcher Text ist eine Warnung/Mahnung?', options: ['a) Text 1', 'b) Text 3', 'c) Keiner'], correctAnswer: 'b) Text 3' }, // "Bevormundung", "geschädigt", "Verbote"
                { id: 'g-b2r1q9', text: 'Welcher Text ist eine verpflichtende Anweisung?', options: ['a) Text 2', 'b) Text 4', 'c) Text 1'], correctAnswer: 'a) Text 2' },
              ]
            },
            {
              id: 'g-b2-l1-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (8 Fragen)',
              content: 'Lesen Sie den Artikel. Füllen Sie die Lücken (1-8) mit den Sätzen (a-h).\n\n**Ist Kochen das neue Hobby der Deutschen?**\n\nKochshows im Fernsehen brechen Rekorde, Food-Blogger sind die neuen Stars im Internet und die Supermärkte bieten Zutaten aus aller Welt an. (1) ___. Aber ist das wirklich so? \n\nEinerseits ja. Nie zuvor wurde so viel über Essen geredet, fotografiert und geschrieben. (2) ___. Man investiert in teure Küchengeräte und besucht Kochkurse für exotische Gerichte. Kochen ist für viele ein Event, ein Ausdruck von Kreativität und Lebensstil. \n\n(3) ___. Im stressigen Alltag bleibt oft wenig Zeit. Eine Umfrage zeigt: Unter der Woche muss es schnell gehen. (4) ___. Hier dominieren Tiefkühlpizza, Lieferdienste und schnelle Nudeln. Viele junge Menschen können zwar ein kompliziertes Thai-Curry kochen, (5) ___.\n\nExperten sehen hier eine Spaltung der Gesellschaft. (6) ___. Die anderen greifen aus Zeit- oder Geldmangel zu billigem Fast Food. (7) ___. Sie fordern, dass Kochen wieder als Grundkompetenz in den Schulen unterrichtet wird. (8) ___.\n\n**Sätze:**\n(a) Die einen zelebrieren Essen als Kult.\n(b) scheitern aber an einem einfachen Braten.\n(c) Denn nur wer selbst kocht, weiß, was er isst.\n(d) Es scheint, als sei Deutschland eine Nation von Gourmet-Köchen geworden.\n(e) Andererseits zeigt die Realität ein anderes Bild.\n(f) Gesunde Ernährung spielt dabei oft keine Rolle.\n(g) Das Kochen wird zum Statussymbol.\n(h) Da bleibt keine Zeit für aufwändige Rezepte.',
              questions: [
                { id: 'g-b2r2q1', text: 'Lücke (1)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'd' },
                { id: 'g-b2r2q2', text: 'Lücke (2)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'g' },
                { id: 'g-b2r2q3', text: 'Lücke (3)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'e' },
                { id: 'g-b2r2q4', text: 'Lücke (4)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'h' },
                { id: 'g-b2r2q5', text: 'Lücke (5)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'b' },
                { id: 'g-b2r2q6', text: 'Lücke (6)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'a' },
                { id: 'g-b2r2q7', text: 'Lücke (7)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'f' },
                { id: 'g-b2r2q8', text: 'Lücke (8)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'c' },
              ]
            },
            {
              id: 'g-b2-l1-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten sich beruflich weiterbilden und suchen einen Kurs im Bereich "Online-Marketing" für Berufstätige.\n2. Sie suchen einen Job. Sie sind ausgebildete/r Krankenpfleger/in und möchten in einem Krankenhaus arbeiten.\n3. Sie möchten wissen, welche Kinofilme am Wochenende in Berlin laufen.\n4. Sie suchen eine Organisation, bei der Sie Ihre alten, aber guten Kleider spenden können.\n5. Sie möchten eine neue Sprache lernen, am liebsten eine skandinavische, z.B. Schwedisch.\n6. Sie haben Probleme mit Ihrem Vermieter und suchen juristischen Rat.\n\n**Anzeigen:**\n**a) "Kleiderkammer":** Helfen Sie helfen! Wir nehmen gut erhaltene Kleiderspenden (Herren, Damen, Kinder) an. Mo-Fr 10-16 Uhr. Bahnhofstr. 5.\n\n**b) Kinoprogramm Berlin:** Das aktuelle Programm. "Kino-Welt": 20 Uhr: "Matrix 5". "CineStar": 19 Uhr: "Die große Reise" (Doku). Alle Kinos und Zeiten auf www.kino-berlin.de\n\n**c) "Nordika" Sprachinstitut:** Lernen Sie den Norden kennen! Wir bieten Abendkurse für Schwedisch, Norwegisch und Dänisch. Alle Niveaus. Kostenlose Probestunde!\n\n**d) "Digital-Campus":** Weiterbildung 4.0. Unsere Abend-Seminare: "Social Media für Einsteiger", "SEO & Google Ads", "Erfolgreich mit E-Commerce". Zertifizierte Kurse. Jetzt buchen!\n\n**e) "Mieterschutzbund e.V.":** Wir helfen bei Problemen mit der Miete, Nebenkosten oder Kündigung. Unsere Anwälte beraten Sie kompetent. Werden Sie Mitglied!\n\n**f) Stellenanzeige: "Pflege-Mobil":** Wir suchen examinierte Altenpfleger (m/w/d) für unseren ambulanten Pflegedienst. (Führerschein nötig). Wir bieten ein tolles Team und gutes Gehalt.\n\n**g) Universität Hamburg:** Bewerben Sie sich jetzt für einen Studienplatz in Jura, Medizin oder BWL. Frist endet am 15. Juli.\n\n**h) "City-Klinikum":** Wir wachsen! Zur Verstärkung unserer Teams suchen wir Ärzte (m/w/d) für die Chirurgie und Anästhesie.',
              questions: [
                { id: 'g-b2r3q1', text: 'Situation 1: Kurs Online-Marketing', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'd' },
                { id: 'g-b2r3q2', text: 'Situation 2: Job als Krankenpfleger', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'f' is Altenpfleger (ambulant), 'h' is Ärzte
                { id: 'g-b2r3q3', text: 'Situation 3: Kinoprogramm', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'b' },
                { id: 'g-b2r3q4', text: 'Situation 4: Kleiderspende', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'a' },
                { id: 'g-b2r3q5', text: 'Situation 5: Schwedisch-Kurs', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'c' },
                { id: 'g-b2r3q6', text: 'Situation 6: Juristischer Rat', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'e' },
              ]
            },
            {
              id: 'g-b2-l1-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Meinungsbeitrag. Kreuzen Sie an: Ja oder Nein.\n\n**Titel: Generation "Praktikum" - Ausbeutung oder Chance?**\n\nImmer mehr Akademiker starten nach dem Studium nicht mit einem festen Job, sondern mit einem Praktikum. Oft dauert dieses 6 Monate oder länger und wird nur minimal oder gar nicht bezahlt. Kritiker sprechen von der "Generation Praktikum", die als billige Arbeitskraft ausgenutzt wird. Statt zu lernen, kochen die Praktikanten Kaffee und machen Kopien.\n\nIch selbst habe zwei Praktika nach meinem Master-Abschluss gemacht und sehe das differenzierter. Ja, die Bezahlung ist ein Problem. Aber ein Praktikum ist eine riesige Chance. Ich konnte in zwei verschiedene Branchen "hineinschnuppern" und feststellen, was mir wirklich liegt. Ich habe Kontakte geknüpft, die für meinen späteren Einstieg Gold wert waren. Wichtig ist, dass man sich nicht ausnutzen lässt. Man muss klare Aufgaben einfordern und das Praktikum als Lernzeit begreifen. Ein Praktikum, in dem man nur Kaffee kocht, sollte man sofort abbrechen.',
              questions: [
                { id: 'g-b2r4q1', text: 'Beginnen viele Akademiker ihre Karriere mit einem Praktikum?', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q2', text: 'Kritiker finden, Praktikanten werden gut bezahlt.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q3', text: 'Der Autor des Textes hat keine Praktika gemacht.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q4', text: 'Der Autor sieht das Thema nur negativ.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q5', text: 'Ein Vorteil für den Autor war das Knüpfen von Kontakten.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q6', text: 'Der Autor findet, man sollte als Praktikant Kaffee kochen.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q7', text: 'Der Autor rät, ein schlechtes Praktikum abzubrechen.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-b2-l1-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Forumsbeitrag (ca. 150 Wörter)',
              content: 'Sie haben in einem Online-Magazin einen Artikel zum Thema "Braucht man heute noch ein eigenes Auto?" gelesen. Im Forum finden Sie folgende Meinung:\n\n**Meinung von "Stadt-Radler":**\n"Ich finde, private Autos sollten aus den Innenstädten verschwinden. Sie verpesten die Luft, machen Lärm und verstopfen die Straßen. Mit Car-Sharing, E-Bikes und einem gut ausgebauten Nahverkehr braucht in der Stadt niemand mehr ein eigenes Auto. Das ist billiger und umweltfreundlicher."\n\n**Aufgabe:** Schreiben Sie einen Forumsbeitrag (ca. 150 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe für Ihre Haltung.\n- Beschreiben Sie die Situation in Ihrem Heimatland.\n- Nennen Sie Alternativen oder andere Möglichkeiten.',
            },
            {
              id: 'g-b2-l1-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (ca. 100 Wörter)',
              content: 'Sie haben sich bei einer Firma um ein Praktikum beworben. Sie haben nun eine Einladung zu einem Vorstellungsgespräch per Video-Call am 10.05. um 10:00 Uhr erhalten.\nLeider können Sie an diesem Termin nicht, da Sie eine wichtige Prüfung an der Universität haben.\n\n**Aufgabe:** Schreiben Sie eine E-Mail (ca. 100 Wörter) an den Personalchef, Herrn Berger.\n- Bedanken Sie sich für die Einladung.\n- Erklären Sie, warum Sie nicht können (Prüfung).\n- Zeigen Sie weiterhin Ihr großes Interesse an dem Praktikum.\n- Bitten Sie höflich um einen alternativen Termin (z.B. am Nachmittag oder an einem anderen Tag).',
            },

            // --- SPRECHEN (2 Parts) ---
            {
              id: 'g-b2-l1-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Präsentation (Vortrag)',
              content: 'Sie sollen eine kurze Präsentation (ca. 4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Leben und Arbeiten im Ausland" oder "Einfluss von Social Media auf die Gesellschaft").\n**Aufgabe:** Bereiten Sie eine Präsentation vor.\n- Stellen Sie das Thema und die Struktur vor.\n- Berichten Sie von persönlichen Erfahrungen oder der Situation in Ihrem Land.\n- Nennen Sie Vor- und Nachteile und Ihre eigene Meinung.\n- Beenden Sie die Präsentation mit einem Fazit.\nStarten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b2-l1-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Diskussion (Debatte)',
              content: 'Nach Ihrer Präsentation (Teil 1) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback zu seinem Vortrag und beginnen Sie eine Diskussion. Stellen Sie Fragen, äußern Sie Ihre eigene Meinung und reagieren Sie auf die Argumente des Bots.'
            },
            
            // --- B2 WÖRTSCHATZ (100+ Vocab) ---
            {
              id: 'g-b2-l1-v1',
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B2',
              content: 'Wichtige Wörter für die B2-Prüfung, sortiert nach Themen.',
              vocabulary: [
                // Arbeit & Wirtschaft
                { german: 'der Arbeitgeber', english: 'the employer' },
                { german: 'der Arbeitnehmer', english: 'the employee' },
                { german: 'der Angestellte', english: 'the (white-collar) employee' },
                { german: 'der Vorgesetzte', english: 'the superior, manager' },
                { german: 'die Fachkraft', english: 'the skilled worker' },
                { german: 'der Mangel an', english: 'the lack of' },
                { german: 'die Gewerkschaft', english: 'the trade union' },
                { german: 'die Anforderung', english: 'the requirement' },
                { german: 'die Qualifikation', english: 'the qualification' },
                { german: 'die Herausforderung', english: 'the challenge' },
                { german: 'der Lebenslauf', english: 'the CV, resume' },
                { german: 'das Vorstellungsgespräch', english: 'the job interview' },
                { german: 'sich bewerben um', english: 'to apply for' },
                { german: 'einstellen', english: 'to hire, employ' },
                { german: 'kündigen', english: 'to resign, to fire' },
                { german: 'die Kündigung', english: 'the notice, termination' },
                { german: 'das Gehalt', english: 'the salary' },
                { german: 'die Steuer', english: 'the tax' },
                { german: 'die Wirtschaft', english: 'the economy' },
                { german: 'der Handel', english: 'the trade, commerce' },
                { german: 'der Wettbewerb', english: 'the competition' },
                { german: 'das Unternehmen', english: 'the company, enterprise' },
                { german: 'die Konkurrenz', english: 'the competition' },
                // Bildung & Wissenschaft
                { german: 'die Bildung', english: 'education' },
                { german: 'das Bildungssystem', english: 'the education system' },
                { german: 'die Ausbildung', english: 'the vocational training, education' },
                { german: 'das Studium', english: 'the (university) studies' },
                { german: 'der Studierende', english: 'the student' },
                { german: 'die Universität', english: 'the university' },
                { german: 'die Hochschule', english: 'the university, college' },
                { german: 'die Forschung', english: 'research' },
                { german: 'der Wissenschaftler', english: 'the scientist' },
                { german: 'die Studie', english: 'the study (research)' },
                { german: 'das Ergebnis', english: 'the result' },
                { german: 'die Kenntnisse', english: 'the knowledge' },
                { german: 'erwerben', english: 'to acquire' },
                { german: 'die Fähigkeit', english: 'the ability, skill' },
                { german: 'die Prüfung', english: 'the exam' },
                { german: 'bestehen', english: 'to pass (an exam)' },
                { german: 'durchfallen', english: 'to fail (an exam)' },
                { german: 'das Zeugnis', english: 'the certificate, report card' },
                // Umwelt & Klima
                { german: 'die Umwelt', english: 'the environment' },
                { german: 'der Umweltschutz', english: 'environmental protection' },
                { german: 'der Klimawandel', english: 'climate change' },
                { german: 'die Erderwärmung', english: 'global warming' },
                { german: 'der Schadstoff', english: 'the pollutant' },
                { german: 'die Abgase', english: 'the exhaust fumes' },
                { german: 'die Energiequelle', english: 'the energy source' },
                { german: 'erneuerbare Energien', english: 'renewable energies' },
                { german: 'die Solarenergie', english: 'solar energy' },
                { german: 'die Windkraft', english: 'wind power' },
                { german: 'der Müll', english: 'the trash' },
                { german: 'die Verschwendung', english: 'the waste, squandering' },
                { german: 'recyceln', english: 'to recycle' },
                { german: 'nachhaltig', english: 'sustainable' },
                { german: 'die Nachhaltigkeit', english: 'sustainability' },
                { german: 'der Verbraucher', english: 'the consumer' },
                { german: 'verzichten auf', english: 'to do without, renounce' },
                // Medien & Digitalisierung
                { german: 'die Medien', english: 'the media' },
                { german: 'die Digitalisierung', english: 'digitalization' },
                { german: 'die künstliche Intelligenz (KI)', english: 'artificial intelligence (AI)' },
                { german: 'das soziale Netzwerk', english: 'the social network' },
                { german: 'der Datenschutz', english: 'data protection, privacy' },
                { german: 'die Daten', english: 'the data' },
                { german: 'speichern', english: 'to save, store' },
                { german: 'der Einfluss', english: 'the influence' },
                { german: 'beeinflussen', english: 'to influence' },
                { german: 'die Quelle', english: 'the source' },
                { german: 'die Information', english: 'the information' },
                { german: 'die Nachricht', english: 'the news, message' },
                { german: 'die Schlagzeile', english: 'the headline' },
                { german: 'die Gefahr', english: 'the danger' },
                { german: 'die Chance', english: 'the chance, opportunity' },
                // Gesellschaft & Politik
                { german: 'die Gesellschaft', english: 'the society' },
                { german: 'die Regierung', english: 'the government' },
                { german: 'die Behörde', english: 'the authority, public agency' },
                { german: 'das Gesetz', english: 'the law' },
                { german: 'die Regel', english: 'the rule' },
                { german: 'die Demokratie', english: 'democracy' },
                { german: 'die Wahl', english: 'the election, choice' },
                { german: 'die Partei', english: 'the (political) party' },
                { german: 'der Bürger', english: 'the citizen' },
                { german: 'die Bevölkerung', english: 'the population' },
                { german: 'die Mehrheit', english: 'the majority' },
                { german: 'die Minderheit', english: 'the minority' },
                { german: 'die Gleichberechtigung', english: 'equal rights' },
                { german: 'die Diskriminierung', english: 'discrimination' },
                { german: 'die Verantwortung', english: 'the responsibility' },
                { german: 'sich engagieren für', english: 'to get involved in' },
                { german: 'das Ehrenamt', english: 'volunteering' },
                // Argumentation & Meinung
                { german: 'der Standpunkt', english: 'the point of view' },
                { german: 'die Meinung', english: 'the opinion' },
                { german: 'meiner Meinung nach', english: 'in my opinion' },
                { german: 'Ich bin der Ansicht, dass...', english: 'I am of the view that...' },
                { german: 'Ich stimme (nicht) zu', english: 'I (don\'t) agree' },
                { german: 'Das Argument', english: 'the argument' },
                { german: 'dafür sprechen', english: 'to speak in favor of' },
                { german: 'dagegen sprechen', english: 'to speak against' },
                { german: 'einerseits ... andererseits', english: 'on the one hand ... on the other hand' },
                { german: 'zwar ... aber', english: 'it is true that ... but' },
                { german: 'weder ... noch', english: 'neither ... nor' },
                { german: 'sowohl ... als auch', english: 'both ... and' },
                { german: 'der Vorteil', english: 'the advantage' },
                { german: 'der Nachteil', english: 'the disadvantage' },
                { german: 'die Ursache', english: 'the cause' },
                { german: 'die Folge', english: 'the consequence' },
                { german: 'die Lösung', english: 'the solution' },
                { german: 'der Kompromiss', english: 'the compromise' },
                { german: 'überzeugen', english: 'to convince' },
                { german: 'behaupten', english: 'to claim, assert' },
                { german: 'bezweifeln', english: 'to doubt' },
              ]
            },

            // --- B2 GRAMMATIK (100+ Questions) ---
            {
              id: 'g-b2-l1-g1',
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B2',
              content: 'Testen Sie Ihr Grammatikwissen für die B2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Konjunktiv I (Indirekte Rede)
                { id: 'g-b2g1q001', text: 'Er sagt, er ___ krank. (sein)', options: ['ist', 'wäre', 'sei'], correctAnswer: 'sei' },
                { id: 'g-b2g1q002', text: 'Sie meint, sie ___ Zeit. (haben)', options: ['habe', 'hätte', 'hat'], correctAnswer: 'habe' },
                { id: 'g-b2g1q003', text: 'Der Politiker erklärte, er ___ nichts davon. (wissen)', options: ['wisse', 'wüsste', 'weiß'], correctAnswer: 'wisse' },
                { id: 'g-b2g1q004', text: 'Die Zeitung schreibt, die Regierung ___ neue Steuern. (planen)', options: ['plant', 'plane', 'planen würde'], correctAnswer: 'plane' },
                { id: 'g-b2g1q005', text: 'Er behauptet, er ___ nicht lügen. (können)', options: ['kann', 'könne', 'könnte'], correctAnswer: 'könne' },
                { id: 'g-b2g1q006', text: 'Sie sagten, sie ___ müde. (sein - Plural)', options: ['sind', 'wären', 'seien'], correctAnswer: 'seien' },
                // Passiv (Alle Zeiten & Modalverben)
                { id: 'g-b2g1q007', text: 'Das Auto muss ___ (reparieren).', options: ['repariert werden', 'repariert sein', 'reparieren'], correctAnswer: 'repariert werden' },
                { id: 'g-b2g1q008', text: 'Der Brief ___ (schicken - Perfekt Passiv).', options: ['wurde geschickt', 'ist geschickt worden', 'hat geschickt'], correctAnswer: 'ist geschickt worden' },
                { id: 'g-b2g1q009', text: 'Die Arbeit ___ (machen - Präteritum Passiv).', options: ['wurde gemacht', 'war gemacht', 'wird gemacht'], correctAnswer: 'wurde gemacht' },
                { id: 'g-b2g1q010', text: 'Das Fenster kann nicht ___ (öffnen).', options: ['geöffnet werden', 'geöffnet sein', 'öffnen'], correctAnswer: 'geöffnet werden' },
                { id: 'g-b2g1q011', text: 'Das Problem ___ (lösen - Futur I Passiv).', options: ['wird gelöst sein', 'wird gelöst werden', 'lösen wird'], correctAnswer: 'wird gelöst werden' },
                { id: 'g-b2g1q012', text: 'Das Essen hätte ___ (kochen). (Passiv Konjunktiv II)', options: ['gekocht werden müssen', 'gekocht sein müssen', 'gekocht werden können'], correctAnswer: 'gekocht werden müssen' },
                // Partizipialattribute
                { id: 'g-b2g1q013', text: 'Das ___ (singen) Kind ist glücklich. (Partizip I)', options: ['gesungene', 'singende', 'sang'], correctAnswer: 'singende' },
                { id: 'g-b2g1q014', text: 'Das ___ (stehlen) Auto wurde gefunden. (Partizip II)', options: ['stehlende', 'gestohlene', 'stahl'], correctAnswer: 'gestohlene' },
                { id: 'g-b2g1q015', text: 'Der ___ (lachen) Mann ist mein Onkel.', options: ['lachende', 'gelachte', 'lachte'], correctAnswer: 'lachende' },
                { id: 'g-b2g1q016', text: 'Die ___ (schreiben) E-Mail ist wichtig.', options: ['schreibende', 'geschriebene', 'schrieb'], correctAnswer: 'geschriebene' },
                { id: 'g-b2g1q017', text: 'Die ___ (öffnen) Tür quietscht.', options: ['öffnende', 'geöffnete', 'offen'], correctAnswer: 'geöffnete' }, // Note: 'offene' is also correct, but 'geöffnete' is the participle.
                { id: 'g-b2g1q018', text: 'Das ist ein ___ (interessieren) Buch.', options: ['interessierendes', 'interessiertes', 'interessantes'], correctAnswer: 'interessantes' }, // Irregular
                { id: 'g-b2g1q019', text: 'Die ___ (weinen) Frau braucht Hilfe.', options: ['weinende', 'geweinte', 'weinte'], correctAnswer: 'weinende' },
                { id: 'g-b2g1q020', text: 'Der ___ (reparieren) Computer funktioniert wieder.', options: ['reparierende', 'reparierte', 'reparatur'], correctAnswer: 'reparierte' },
                // n-Deklination
                { id: 'g-b2g1q021', text: 'Ich sehe den ___ (Junge).', options: ['Junge', 'Jungen', 'Junges'], correctAnswer: 'Jungen' },
                { id: 'g-b2g1q022', text: 'Er spricht mit dem ___ (Kunde).', options: ['Kunde', 'Kunden', 'Kundos'], correctAnswer: 'Kunden' },
                { id: 'g-b2g1q023', text: 'Das ist die Tasche des ___ (Kollege).', options: ['Kollege', 'Kollegen', 'Kolleges'], correctAnswer: 'Kollegen' },
                { id: 'g-b2g1q024', text: 'Kennen Sie Herrn ___ (Brandt)?', options: ['Brandt', 'Brandten', 'Brandts'], correctAnswer: 'Brandt' }, // Eigennamen
                { id: 'g-b2g1q025', text: 'Der ___ (Präsident) hält eine Rede.', options: ['Präsident', 'Präsidenten', 'Präsidents'], correctAnswer: 'Präsident' }, // Nominativ
                { id: 'g-b2g1q026', text: 'Ich frage den ___ (Polizist).', options: ['Polizist', 'Polizisten', 'Polizists'], correctAnswer: 'Polizisten' },
                { id: 'g-b2g1q027', text: 'Das ist ein ___ (Bär).', options: ['Bär', 'Bären', 'Bärs'], correctAnswer: 'Bär' }, // Nominativ
                { id: 'g-b2g1q028', text: 'Ich habe einen ___ (Bär) gesehen.', options: ['Bär', 'Bären', 'Bärn'], correctAnswer: 'Bären' }, // Akkusativ
                { id: 'g-b2g1q029', text: 'Der Name meines ___ (Nachbar) ist Müller.', options: ['Nachbar', 'Nachbarn', 'Nachbars'], correctAnswer: 'Nachbarn' },
                { id: 'g-b2g1q030', text: 'Das ___ (Herz) schlägt schnell.', options: ['Herz', 'Herzen', 'Herzes'], correctAnswer: 'Herz' }, // Nominativ (Ausnahme)
                { id: 'g-b2g1q031', text: 'Ich folge meinem ___ (Herz).', options: ['Herz', 'Herzen', 'Herzes'], correctAnswer: 'Herzen' }, // Dativ (Ausnahme)
                // Konnektoren (Doppelt)
                { id: 'g-b2g1q032', text: 'Er ist ___ klug ___ auch lustig.', options: ['sowohl / als', 'weder / noch', 'zwar / aber'], correctAnswer: 'sowohl / als' },
                { id: 'g-b2g1q033', text: 'Ich mag ___ Fisch ___ Fleisch.', options: ['sowohl / als', 'weder / noch', 'entweder / oder'], correctAnswer: 'weder / noch' },
                { id: 'g-b2g1q034', text: 'Wir fahren ___ nach Berlin ___ nach Hamburg.', options: ['sowohl / als', 'weder / noch', 'entweder / oder'], correctAnswer: 'entweder / oder' },
                { id: 'g-b2g1q035', text: 'Das Auto ist ___ teuer, ___ es gefällt mir.', options: ['sowohl / als', 'weder / noch', 'zwar / aber'], correctAnswer: 'zwar / aber' },
                { id: 'g-b2g1q036', text: '___ mehr ich lerne, ___ besser verstehe ich.', options: ['Je / desto', 'So / wie', 'Zwar / aber'], correctAnswer: 'Je / desto' },
                { id: 'g-b2g1q037', text: 'Er ist ___ müde, ___ auch krank.', options: ['nicht nur / sondern', 'weder / noch', 'je / desto'], correctAnswer: 'nicht nur / sondern' },
                { id: 'g-b2g1q038', text: 'Je schneller er fährt, ___ gefährlicher wird es.', options: ['je', 'desto', 'umso'], correctAnswer: 'desto' }, // 'umso' is also correct
                // Konnektoren (Kausal, Konzessiv, Konsekutiv, Adversativ)
                { id: 'g-b2g1q039', text: '___ es regnete, ging er spazieren. (Konzessiv)', options: ['Weil', 'Obwohl', 'Trotzdem'], correctAnswer: 'Obwohl' },
                { id: 'g-b2g1q040', text: 'Es regnete. ___, ging er spazieren. (Konzessiv)', options: ['Weil', 'Obwohl', 'Trotzdem'], correctAnswer: 'Trotzdem' },
                { id: 'g-b2g1q041', text: 'Er ist krank, ___ er nicht arbeiten kann. (Konsekutiv)', options: ['sodass', 'damit', 'weil'], correctAnswer: 'sodass' },
                { id: 'g-b2g1q042', text: '___ er viel Geld hat, ist er nicht glücklich. (Adversativ/Konz.)', options: ['Während', 'Obwohl', 'Da'], correctAnswer: 'Obwohl' },
                { id: 'g-b2g1q043', text: 'Ich fahre Rad, ___ mein Bruder Auto fährt. (Adversativ)', options: ['während', 'bevor', 'obwohl'], correctAnswer: 'während' },
                { id: 'g-b2g1q044', text: 'Er spart Geld, ___ er sich ein Auto kaufen kann. (Final)', options: ['damit', 'sodass', 'weil'], correctAnswer: 'damit' },
                { id: 'g-b2g1q045', text: '___ des schlechten Wetters fiel das Spiel aus. (Kausal - Präposition)', options: ['Wegen', 'Trotz', 'Während'], correctAnswer: 'Wegen' },
                { id: 'g-b2g1q046', text: '___ des schlechten Wetters fand das Spiel statt. (Konzessiv - Präposition)', options: ['Wegen', 'Trotz', 'Während'], correctAnswer: 'Trotz' },
                // Nominalisierung / Verbalisierung
                { id: 'g-b2g1q047', text: 'Das ___ (Rauchen) ist hier verboten. (Nominalisierung v. "rauchen")', options: ['Rauchen', 'Gerauchte', 'Rauchende'], correctAnswer: 'Rauchen' },
                { id: 'g-b2g1q048', text: 'Beim ___ (Lernen) höre ich Musik. (Nominalisierung v. "lernen")', options: ['Lernen', 'Gelernten', 'Lernende'], correctAnswer: 'Lernen' },
                { id: 'g-b2g1q049', text: 'Die ___ (Lösung) des Problems ist schwer. (Nominalisierung v. "lösen")', options: ['Lösung', 'Lösen', 'Gelöste'], correctAnswer: 'Lösung' },
                { id: 'g-b2g1q050', text: '"Die Regierung plant..." -> "Die ___ der Regierung..."', options: ['Planung', 'Plan', 'Geplante'], correctAnswer: 'Planung' },
                { id: 'g-b2g1q051', text: '"Er entscheidet sich." -> "Seine ___ ist..."', options: ['Entscheidung', 'Entschiedene', 'Entscheiden'], correctAnswer: 'Entscheidung' },
                { id: 'g-b2g1q052', text: '"Wir bitten um Hilfe." -> "Unsere ___ um Hilfe..."', options: ['Bitte', 'Gebet', 'Bitten'], correctAnswer: 'Bitte' },
                { id: 'g-b2g1q053', text: '"Das ist verboten." -> "Es gibt ein ___"', options: ['Verbot', 'Verbotene', 'Verbieten'], correctAnswer: 'Verbot' },
                { id: 'g-b2g1q054', text: '"Er ist verantwortlich." -> "Er trägt die ___"', options: ['Verantwortung', 'Verantwortliche', 'Antwort'], correctAnswer: 'Verantwortung' },
                // Futur II
                { id: 'g-b2g1q055', text: 'Bis morgen ___ er die Arbeit ___ (beenden).', options: ['wird / beendet haben', 'wird / beenden', 'wurde / beendet'], correctAnswer: 'wird / beendet haben' },
                { id: 'g-b2g1q056', text: 'In einem Jahr ___ sie ihr Studium ___ (abschließen).', options: ['wird / abgeschlossen haben', 'wird / abschließen', 'hat / abgeschlossen'], correctAnswer: 'wird / abgeschlossen haben' },
                { id: 'g-b2g1q057', text: 'Er ___ (ankommen - Vermutung über Vergangenheit).', options: ['wird angekommen sein', 'ist angekommen', 'käme an'], correctAnswer: 'wird angekommen sein' },
                { id: 'g-b2g1q058', text: 'Sie ___ (vergessen - Vermutung über Vergangenheit).', options: ['wird es vergessen haben', 'hat es vergessen', 'vergaß es'], correctAnswer: 'wird es vergessen haben' },
                // Konjunktiv II der Vergangenheit (Modalverben)
                { id: 'g-b2g1q059', text: 'Ich ___ (können) dir helfen, aber ich hatte keine Zeit.', options: ['hätte helfen können', 'konnte helfen', 'helfen könnte'], correctAnswer: 'hätte helfen können' },
                { id: 'g-b2g1q060', text: 'Er ___ (sollen) mehr lernen, dann hätte er bestanden.', options: ['hätte mehr lernen sollen', 'sollte mehr lernen', 'gelernt haben sollte'], correctAnswer: 'hätte mehr lernen sollen' },
                { id: 'g-b2g1q061', text: 'Wir ___ (müssen) früher aufstehen, dann hätten wir den Zug nicht verpasst.', options: ['hätten früher aufstehen müssen', 'mussten früher aufstehen', 'aufstehen müssten'], correctAnswer: 'hätten früher aufstehen müssen' },
                { id: 'g-b2g1q062', text: 'Du ___ (dürfen) das nicht sagen.', options: ['hättest das nicht sagen dürfen', 'durftest das nicht sagen', 'sagen dürftest'], correctAnswer: 'hättest das nicht sagen dürfen' },
                // Relativsätze (wo, was)
                { id: 'g-b2g1q063', text: 'Das ist Berlin, die Stadt, ___ ich wohne.', options: ['die', 'wo', 'in der'], correctAnswer: 'in der' }, // 'wo' is colloquial
                { id: 'g-b2g1q064', text: 'Das ist das Beste, ___ mir je passiert ist.', options: ['das', 'was', 'welches'], correctAnswer: 'was' }, // nach Superlativ
                { id: 'g-b2g1q065', text: 'Ich habe alles, ___ ich brauche.', options: ['das', 'was', 'welches'], correctAnswer: 'was' }, // nach 'alles'
                { id: 'g-b2g1q066', text: 'Er hat mir nichts gesagt, ___ mich überrascht hat.', options: ['das', 'was', 'welches'], correctAnswer: 'was' }, // nach 'nichts'
                { id: 'g-b2g1q067', text: 'Das ist etwas, ___ ich nicht verstehe.', options: ['das', 'was', 'welches'], correctAnswer: 'was' }, // nach 'etwas'
                // Verben mit Präpositionalergänzung
                { id: 'g-b2g1q068', text: 'Ich bestehe ___ einer schnellen Antwort.', options: ['auf', 'aus', 'in'], correctAnswer: 'auf' },
                { id: 'g-b2g1q069', text: 'Das Buch besteht ___ drei Teilen.', options: ['auf', 'aus', 'in'], correctAnswer: 'aus' },
                { id: 'g-b2g1q070', text: 'Das Problem besteht ___ der Finanzierung.', options: ['auf', 'aus', 'in'], correctAnswer: 'in' },
                { id: 'g-b2g1q071', text: 'Er zweifelt ___ der Richtigkeit der Aussage.', options: ['an', 'auf', 'mit'], correctAnswer: 'an' },
                { id: 'g-b2g1q072', text: 'Sie leidet ___ einer schweren Krankheit.', options: ['an', 'unter', 'von'], correctAnswer: 'an' },
                { id: 'g-b2g1q073', text: 'Er leidet ___ dem lauten Lärm.', options: ['an', 'unter', 'von'], correctAnswer: 'unter' },
                { id: 'g-b2g1q074', text: 'Es hängt ___ Wetter ab, ob wir grillen.', options: ['vom', 'beim', 'mit dem'], correctAnswer: 'vom' },
                { id: 'g-b2g1q075', text: 'Die Firma protestiert ___ die neuen Steuern.', options: ['für', 'gegen', 'mit'], correctAnswer: 'gegen' },
                { id: 'g-b2g1q076', text: 'Ich beziehe mich ___ Ihr Schreiben vom 10. Mai.', options: ['auf', 'an', 'mit'], correctAnswer: 'auf' },
                { id: 'g-b2g1q077', text: 'Er kämpft ___ seine Rechte.', options: ['für', 'gegen', 'um'], correctAnswer: 'um' }, // B2 distinction
                { id: 'g-b2g1q078', text: 'Er kämpft ___ den Feind.', options: ['für', 'gegen', 'um'], correctAnswer: 'gegen' },
                { id: 'g-b2g1q079', text: 'Der Film handelt ___ einen König.', options: ['von', 'über', 'mit'], correctAnswer: 'von' },
                // Adjektive mit Präpositionen
                { id: 'g-b2g1q080', text: 'Ich bin ___ deine Hilfe dankbar.', options: ['für', 'über', 'mit'], correctAnswer: 'für' },
                { id: 'g-b2g1q081', text: 'Er ist ___ seine Kollegin eifersüchtig.', options: ['auf', 'mit', 'über'], correctAnswer: 'auf' },
                { id: 'g-b2g1q082', text: 'Wir sind ___ das Ergebnis enttäuscht.', options: ['von', 'über', 'mit'], correctAnswer: 'von' },
                { id: 'g-b2g1q083', text: 'Bist du ___ einem Treffen interessiert?', options: ['an', 'für', 'in'], correctAnswer: 'an' },
                { id: 'g-b2g1q084', text: 'Er ist ___ seiner Frau verheiratet.', options: ['mit', 'an', 'von'], correctAnswer: 'mit' },
                { id: 'g-b2g1q085', text: 'Ich bin ___ überzeugt, dass das richtig ist.', options: ['von', 'an', 'für'], correctAnswer: 'von' },
                { id: 'g-b2g1q086', text: 'Sie ist stolz ___ ihre Tochter.', options: ['auf', 'über', 'mit'], correctAnswer: 'auf' },
                { id: 'g-b2g1q087', text: 'Ich bin ___ müde von der langen Reise.', options: ['von', 'an', 'aus'], correctAnswer: 'von' },
                { id: 'g-b2g1q088', text: 'Er ist wütend ___ seinen Chef.', options: ['auf', 'über', 'mit'], correctAnswer: 'auf' }, // or 'über'
                { id: 'g-b2g1q089', text: 'Wir sind ___ dem Ergebnis zufrieden.', options: ['mit', 'von', 'über'], correctAnswer: 'mit' },
                // Gemischte Strukturen
                { id: 'g-b2g1q090', text: '___ er reich ist, ist er unglücklich.', options: ['Obwohl', 'Weil', 'Trotz'], correctAnswer: 'Obwohl' },
                { id: 'g-b2g1q091', text: '___ seines Reichtums ist er unglücklich.', options: ['Obwohl', 'Weil', 'Trotz'], correctAnswer: 'Trotz' },
                { id: 'g-b2g1q092', text: '___ er krank war, ging er arbeiten. (Nebensatz)', options: ['Trotzdem', 'Obwohl', 'Wegen'], correctAnswer: 'Obwohl' },
                { id: 'g-b2g1q093', text: 'Er war krank. ___ ging er arbeiten. (Hauptsatz)', options: ['Trotzdem', 'Obwohl', 'Wegen'], correctAnswer: 'Trotzdem' },
                { id: 'g-b2g1q094', text: '___ seiner Krankheit ging er arbeiten. (Präposition)', options: ['Trotzdem', 'Obwohl', 'Trotz'], correctAnswer: 'Trotz' },
                { id: 'g-b2g1q095', text: '___ er schnell fuhr, kam er zu spät.', options: ['Weil', 'Trotzdem', 'Obwohl'], correctAnswer: 'Obwohl' },
                { id: 'g-b2g1q096', text: 'Das ist das Haus, ___ (Genitiv) Dach kaputt ist.', options: ['das', 'dessen', 'dem'], correctAnswer: 'dessen' },
                { id: 'g-b2g1q097', text: 'Das ist die Frau, ___ (Genitiv) Hund ich gefunden habe.', options: ['die', 'der', 'deren'], correctAnswer: 'deren' },
                { id: 'g-b2g1q098', text: 'Ich weiß nicht, ___ er das gemacht hat.', options: ['ob', 'dass', 'wenn'], correctAnswer: 'ob' }, // if
                { id: 'g-b2g1q099', text: 'Ich weiß, ___ er das gemacht hat.', options: ['ob', 'dass', 'wenn'], correctAnswer: 'dass' }, // that
                { id: 'g-b2g1q100', text: 'Er arbeitet als Kellner, ___ er studiert.', options: ['während', 'bevor', 'nachdem'], correctAnswer: 'während' },
                { id: 'g-b2g1q101', text: 'Er arbeitet, ___ Geld zu verdienen.', options: ['damit', 'um', 'sodass'], correctAnswer: 'um' },
                { id: 'g-b2g1q102', text: 'Er gibt mir Geld, ___ ich die Miete bezahlen kann.', options: ['damit', 'um', 'sodass'], correctAnswer: 'damit' },
              ]
            }
          ],
        },
//
// --- END OF g-b2-l1 ---
        {
          id: 'g-b2-l2',
          title: 'Modelltest 2: Übungssatz',
          estimatedTime: 190,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts) ---
            {
              id: 'g-b2-l2-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören 4 kurze Gespräche (einmal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Frau', line: 'Hallo Ben, ich rufe wegen der Projektpräsentation an. Bist du schon fertig mit deinem Teil?' },
                { speaker: 'Ben', line: 'Fast. Mir fehlt nur noch die Auswertung der Umfrage. Das dauert aber noch. Die Grafiken sind komplizierter als gedacht.' },
                { speaker: 'Frau', line: 'Okay, aber denk daran, die Deadline ist morgen Mittag. Sollen wir heute Abend nochmal telefonieren, um alles abzugleichen?' },
                { speaker: 'Ben', line: 'Ja, unbedingt. Ich melde mich so gegen 20 Uhr, in Ordnung?' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Mann', line: 'Guten Tag, ich interessiere mich für den Masterstudiengang "Global History". Können Sie mir sagen, welche Zulassungsvoraussetzungen es gibt?' },
                { speaker: 'Studienberatung', line: 'Guten Tag. Sie benötigen einen Bachelor-Abschluss in einem verwandten Fach, also Geschichte, Politik oder Soziologie. Und ganz wichtig: Sie müssen Englischnachweise auf C1-Niveau vorlegen, da der gesamte Studiengang auf Englisch stattfindet.' },
                { speaker: 'Mann', line: 'C1... Ich habe nur B2. Gibt es da eine Möglichkeit?' },
                { speaker: 'Studienberatung', line: 'Nein, C1 ist zwingend erforderlich. Sie könnten den Test aber noch vor Fristende nachreichen.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Vater', line: 'Lisa, dein Konsum von diesen Online-Spielen ist ja nicht mehr normal. Du sitzt das ganze Wochenende nur vor dem Rechner.' },
                { speaker: 'Lisa', line: 'Ach Papa, das ist nicht nur "Spielen". Ich treffe da meine Freunde, wir reden und erleben was zusammen. Das ist sozial!' },
                { speaker: 'Vater', line: 'Sozial? Ich nenne das ungesund. Du solltest mal rausgehen, dich bewegen. Das ist doch kein echtes Leben.' },
                { speaker: 'Lisa', line: 'Das siehst du falsch. Diese Online-Welt ist für meine Generation genauso real.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Mann', line: 'Frau Dr. Mertens, ich habe das Gefühl, ich leide unter Burnout. Ich bin ständig müde, kann nicht schlafen und habe keine Energie.' },
                { speaker: 'Ärztin', line: 'Das höre ich in letzter Zeit häufig. Die ständige Erreichbarkeit durch E-Mails und Handy ist ein enormer Stressfaktor. Der erste Schritt ist, klare Grenzen zu setzen. Kein Handy nach 20 Uhr. Und Sie brauchen einen Ausgleich. Haben Sie ein Hobby?' },
                { speaker: 'Mann', line: 'Früher habe ich gemalt. Aber dafür habe ich keine Zeit.' },
                { speaker: 'Ärztin', line: 'Nehmen Sie sich die Zeit. Das ist genauso wichtig wie Medizin.' },
              ],
              questions: [
                { id: 'g-b2h1q1_2', text: 'Text 1: Was ist Bens Problem?', options: ['a) Er hat die Deadline vergessen.', 'b) Die Auswertung der Umfrage ist schwierig.', 'c) Er will nicht telefonieren.'], correctAnswer: 'b) Die Auswertung der Umfrage ist schwierig.' },
                { id: 'g-b2h1q2_2', text: 'Text 1: Die beiden...', options: ['a) treffen sich heute Abend.', 'b) telefonieren heute Abend.', 'c) verschieben die Deadline.'], correctAnswer: 'b) telefonieren heute Abend.' },
                { id: 'g-b2h1q3_2', text: 'Text 2: Was ist eine zwingende Voraussetzung für den Master?', options: ['a) Ein Bachelor in Geschichte.', 'b) Englischkenntnisse auf C1-Niveau.', 'c) Ein B2-Zertifikat.'], correctAnswer: 'b) Englischkenntnisse auf C1-Niveau.' },
                { id: 'g-b2h1q4_2', text: 'Text 2: Der Studiengang...', options: ['a) ist komplett auf Englisch.', 'b) ist auf Deutsch und Englisch.', 'c) ist nur für Soziologen.'], correctAnswer: 'a) ist komplett auf Englisch.' },
                { id: 'g-b2h1q5_2', text: 'Text 3: Was kritisiert der Vater?', options: ['a) Dass Lisa kein Geld verdient.', 'b) Dass Lisa zu viel Zeit mit Online-Spielen verbringt.', 'c) Dass Lisa ihre Freunde trifft.'], correctAnswer: 'b) Dass Lisa zu viel Zeit mit Online-Spielen verbringt.' },
                { id: 'g-b2h1q6_2', text: 'Text 3: Lisa findet, die Spiele sind...', options: ['a) ungesund.', 'b) eine soziale Aktivität.', 'c) langweilig.'], correctAnswer: 'b) eine soziale Aktivität.' },
                { id: 'g-b2h1q7_2', text: 'Text 4: Was rät die Ärztin als ersten Schritt?', options: ['a) Medikamente zu nehmen.', 'b) Klare Grenzen beim Handy-Gebrauch zu setzen.', 'c) Den Job zu kündigen.'], correctAnswer: 'b) Klare Grenzen beim Handy-Gebrauch zu setzen.' },
                { id: 'g-b2h1q8_2', text: 'Text 4: Die Ärztin findet, der Mann sollte...', options: ['a) mehr arbeiten.', 'b) sich Zeit für sein altes Hobby nehmen.', 'c) mehr schlafen.'], correctAnswer: 'b) sich Zeit für sein altes Hobby nehmen.' },
              ]
            },
            {
              id: 'g-b2-l2-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Vortrag (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Dozentin', line: 'Guten Morgen. Thema heute: "Urbanisierung" - die wachsende Stadt. Weltweit ziehen immer mehr Menschen vom Land in die Stadt. Man schätzt, dass im Jahr 2050 fast 70% der Weltbevölkerung in Städten leben werden.' },
                { speaker: 'Dozentin', line: 'Dieser Trend hat massive Konsequenzen. Einerseits bieten Städte Chancen: bessere Jobs, höhere Bildung, ein großes Kulturangebot. Andererseits führt das schnelle Wachstum zu enormen Problemen.' },
                { speaker: 'Dozentin', line: 'Nehmen wir das Beispiel Verkehr: Die Straßen sind verstopft, es gibt Staus und die Luftverschmutzung steigt dramatisch. Ein weiteres Problem ist der Wohnraum. Bezahlbare Wohnungen werden knapp, die Mieten explodieren. Das führt zu sozialen Spannungen.' },
                { speaker: 'Dozentin', line: 'Städteplaner suchen verzweifelt nach Lösungen. Ein Ansatz ist die "Smart City". Die Idee: Technologie soll helfen, die Stadt effizienter zu machen. Zum Beispiel: Intelligente Ampeln, die den Verkehr besser steuern. Oder Apps, die freie Parkplätze anzeigen. Ein anderer Ansatz ist die "Grüne Stadt": mehr Parks, Dachgärten und bessere Radwege, um die Lebensqualität zu steigern.' },
                { speaker: 'Dozentin', line: 'Klar ist: Wir müssen unsere Städte neu denken, damit sie lebenswert bleiben.' },
              ],
              questions: [
                { id: 'g-b2h2q1_2', text: 'Das Thema des Vortrags ist das Leben auf dem Land.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q2_2', text: '2050 werden ca. 70% der Menschen in Städten leben.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q3_2', text: 'Städte bieten oft bessere Job- und Bildungschancen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q4_2', text: 'Wachstum in Städten führt zu besserer Luft.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q5_2', text: 'Bezahlbare Wohnungen sind ein großes Problem.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q6_2', text: 'Das Konzept "Smart City" nutzt Technologie.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q7_2', text: 'Intelligente Ampeln sind ein Beispiel für "Grüne Stadt".', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q8_2', text: 'Mehr Parks und Dachgärten sind Teil der "Grünen Stadt".', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q9_2', text: 'Städteplaner haben bereits alle Lösungen gefunden.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q10_2', text: 'Die Dozentin hält das Thema für dringend.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-b2-l2-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Beruf und Karriere". Heute spreche ich mit Jonas Meffert, einem sogenannten "Digitalen Nomaden". Herr Meffert, was ist das genau?' },
                { speaker: 'Jonas Meffert', line: 'Guten Tag. Ein digitaler Nomade ist jemand, der ortsunabhängig arbeitet. Alles, was ich brauche, ist mein Laptop und eine stabile Internetverbindung. Ich bin Programmierer und kann meine Arbeit von überall auf der Welt machen.' },
                { speaker: 'Moderator', line: 'Und das tun Sie auch? Sie reisen ständig?' },
                { speaker: 'Jonas Meffert', line: 'Ja, ich war letztes Jahr in sechs verschiedenen Ländern. Ich arbeite drei Monate in Thailand, dann zwei in Portugal... Ich liebe diese Freiheit. Ich bin mein eigener Chef, teile mir meine Zeit selbst ein und sehe die Welt.' },
                { speaker: 'Moderator', line: 'Das klingt traumhaft. Gibt es gar keine Nachteile?' },
                { speaker: 'Jonas Meffert', line: 'Doch, natürlich. Die soziale Anbindung fehlt manchmal. Man baut schwer tiefe Freundschaften auf, weil man nie lange an einem Ort ist. Und die Bürokratie ist kompliziert: Steuern, Visa, Krankenversicherung... Darum muss man sich alles selbst kümmern. Reich wird man meistens auch nicht, aber darum geht es mir nicht.' },
              ],
              questions: [
                { id: 'g-b2h3q1_2', text: 'Was ist ein "Digitaler Nomade"?', options: ['a) Jemand, der nicht gern reist.', 'b) Jemand, der von überall arbeiten kann.', 'c) Jemand, der keinen Laptop besitzt.'], correctAnswer: 'b) Jemand, der von überall arbeiten kann.' },
                { id: 'g-b2h3q2_2', text: 'Was ist Herr Meffert von Beruf?', options: ['a) Moderator', 'b) Reiseleiter', 'c) Programmierer'], correctAnswer: 'c) Programmierer' },
                { id: 'g-b2h3q3_2', text: 'Was liebt er an seinem Lebensstil?', options: ['a) Die Freiheit und das Reisen.', 'b) Die hohen Einnahmen.', 'c) Die Sicherheit.'], correctAnswer: 'a) Die Freiheit und das Reisen.' },
                { id: 'g-b2h3q4_2', text: 'Was ist ein Nachteil?', options: ['a) Er hat zu viele Freunde.', 'b) Er hat zu viel Gepäck.', 'c) Es ist schwer, tiefe Freundschaften aufzubauen.'], correctAnswer: 'c) Es ist schwer, tiefe Freundschaften aufzubauen.' },
                { id: 'g-b2h3q5_2', text: 'Was ist ein weiteres Problem?', options: ['a) Das Internet ist oft zu langsam.', 'b) Die Bürokratie (Steuern, Visa).', 'c) Er findet kein gutes Essen.'], correctAnswer: 'b) Die Bürokratie (Steuern, Visa).' },
                { id: 'g-b2h3q6_2', text: 'Was ist das Hauptziel von Herrn Meffert?', options: ['a) Möglichst reich zu werden.', 'b) Freiheit zu haben.', 'c) Einen festen Job zu finden.'], correctAnswer: 'b) Freiheit zu haben.' },
              ]
            },
            {
              id: 'g-b2-l2-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (6 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Klartext". Thema heute: Das bedingungslose Grundeinkommen. Die Idee: Jeder Bürger erhält monatlich einen festen Geldbetrag vom Staat, ohne dafür arbeiten zu müssen. Frau Dr. Bader, Sie befürworten das.' },
                { speaker: 'Dr. Bader', line: 'Ja, denn es würde Armut abschaffen und den Menschen Existenzangst nehmen. Menschen wären frei, kreativ zu sein, sich weiterzubilden oder sich um die Familie zu kümmern, statt in einem Job festzustecken, den sie hassen. Es ist eine Investition in die Gesellschaft.' },
                { speaker: 'Moderator', line: 'Herr König, Sie sind Wirtschaftsexperte und lehnen das ab.' },
                { speaker: 'Herr König', line: 'Natürlich. Erstens: Wer soll das bezahlen? Das würde Milliarden kosten. Zweitens: Es nimmt jeden Anreiz zu arbeiten. Warum sollte jemand noch Müllmann oder Pfleger werden, wenn er das Geld auch so bekommt? Unser Wirtschaftssystem würde zusammenbrechen.' },
                { speaker: 'Dr. Bader', line: 'Das glaube ich nicht. Die meisten Menschen wollen eine Aufgabe. Sie würden weiterarbeiten, aber aus Motivation, nicht aus Zwang. Und viele würden sich ehrenamtlich engagieren.' },
                { speaker: 'Herr König', line: 'Das ist eine romantische Vorstellung. Ich glaube an Leistung. Wer arbeitet, soll mehr haben als der, der nicht arbeitet.' },
              ],
              questions: [
                { id: 'g-b2h4q1_2', text: 'Was ist das "bedingungslose Grundeinkommen"?', options: ['a) Ein Lohn für harte Arbeit.', 'b) Geld vom Staat für jeden, ohne Gegenleistung.', 'c) Ein Kredit von der Bank.'], correctAnswer: 'b) Geld vom Staat für jeden, ohne Gegenleistung.' },
                { id: 'g-b2h4q2_2', text: 'Was ist Frau Baders Hauptargument DAFÜR?', options: ['a) Es würde Armut und Existenzangst beseitigen.', 'b) Es würde die Wirtschaft stärken.', 'c) Es würde die Menschen zum Arbeiten zwingen.'], correctAnswer: 'a) Es würde Armut und Existenzangst beseitigen.' },
                { id: 'g-b2h4q3_2', text: 'Was ist Herrn Königs erstes Argument DAGEGEN?', options: ['a) Es ist ungerecht.', 'b) Es ist zu kompliziert.', 'c) Es ist unbezahlbar.'], correctAnswer: 'c) Es ist unbezahlbar.' },
                { id: 'g-b2h4q4_2', text: 'Was befürchtet Herr König?', options: ['a) Dass die Menschen kreativer werden.', 'b) Dass niemand mehr arbeiten will.', 'c) Dass die Mieten steigen.'], correctAnswer: 'b) Dass niemand mehr arbeiten will.' },
                { id: 'g-b2h4q5_2', text: 'Was glaubt Frau Bader, warum die Menschen weiterarbeiten würden?', options: ['a) Aus Zwang', 'b) Aus Motivation', 'c) Für mehr Geld'], correctAnswer: 'b) Aus Motivation' },
                { id: 'g-b2h4q6_2', text: 'Worin sind sich die beiden einig?', options: ['a) Dass es teuer wäre.', 'b) Dass Menschen faul sind.', 'c) In fast nichts.'], correctAnswer: 'c) In fast nichts.' },
              ]
            },

            // --- LESEN (4 Parts) ---
            {
              id: 'g-b2-l2-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (9 Fragen)',
              content: 'Lesen Sie die 4 Texte. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1: Studien-Info "Medizin"**\nDas Medizinstudium in Deutschland ist lang und anspruchsvoll. Es ist bundesweit zulassungsbeschränkt, das heißt, man braucht einen exzellenten Notendurchschnitt (Numerus Clausus). Das Studium dauert mindestens 6 Jahre und endet mit dem Staatsexamen. Ohne absolute Disziplin und hohe Belastbarkeit ist das Studium kaum zu schaffen.\n\n**Text 2: Buch-Rezension "Der Schwarm"**\nFrank Schätzings Öko-Thriller ist auch Jahre nach seinem Erscheinen beängstigend aktuell. Eine unbekannte Intelligenz aus der Tiefsee schlägt zurück gegen die Menschheit, die die Meere zerstört. Der Roman ist brillant recherchiert und verbindet Wissenschaft mit Hochspannung. Einziger Kritikpunkt: Mit 1000 Seiten ist das Buch fast zu lang.\n\n**Text 3: Interne E-Mail "Betriebsausflug"**\nAn: Alle Mitarbeiter\nBetreff: Abstimmung Betriebsausflug\nLiebe Belegschaft, dieses Jahr wollen wir etwas Aktives machen. Zur Wahl stehen: 1. Kanutour auf der Lahn, 2. Kletterwald am See, 3. Stadt-Rallye in Köln. Bitte stimmen Sie bis Freitag über den Link in unserem Intranet ab. Der Ausflug findet am 15. Juli statt. Die Teilnahme ist freiwillig, aber wir hoffen auf rege Beteiligung.\n\n**Text 4: Zeitungsnotiz "Neues Museum"**\nNach fünf Jahren Bauzeit eröffnet am Samstag das neue "Futurium" in Berlin. Das Museum will einen Blick in die Zukunft werfen: Wie werden wir leben? Wie werden wir uns ernähren? In drei großen Ausstellungsbereichen zu Mensch, Natur und Technik können Besucher interaktiv verschiedene Zukunftsszenarien erkunden. Der Eintritt ist am Eröffnungswochenende frei.',
              questions: [
                { id: 'g-b2r1q1_2', text: 'Text 1: Was ist der "Numerus Clausus"?', options: ['a) Das Staatsexamen', 'b) Ein erforderlicher Notendurchschnitt', 'c) Eine Eigenschaft von Studenten'], correctAnswer: 'b) Ein erforderlicher Notendurchschnitt' },
                { id: 'g-b2r1q2_2', text: 'Text 1: Das Medizinstudium ist...', options: ['a) kurz und einfach.', 'b) lang und anspruchsvoll.', 'c) nur auf Englisch.'], correctAnswer: 'b) lang und anspruchsvoll.' },
                { id: 'g-b2r1q3_2', text: 'Text 2: Was kritisiert der Rezensent am Buch "Der Schwarm"?', options: ['a) Es ist schlecht recherchiert.', 'b) Es ist zu kurz.', 'c) Es ist sehr lang.'], correctAnswer: 'c) Es ist sehr lang.' },
                { id: 'g-b2r1q4_2', text: 'Text 2: Das Thema des Buches ist...', options: ['a) eine Liebesgeschichte.', 'b) ein Konflikt zwischen Mensch und Natur.', 'c) eine Biografie.'], correctAnswer: 'b) ein Konflikt zwischen Mensch und Natur.' },
                { id: 'g-b2r1q5_2', text: 'Text 3: Die Teilnahme am Betriebsausflug ist...', options: ['a) verpflichtend.', 'b) freiwillig.', 'c) nur für das Management.'], correctAnswer: 'b) freiwillig.' },
                { id: 'g-b2r1q6_2', text: 'Text 3: Worum geht es in der E-Mail?', options: ['a) Um eine Abstimmung über den Ausflugsort.', 'b) Um eine Stadt-Rallye in Köln.', 'c) Um eine Gehaltserhöhung.'], correctAnswer: 'a) Um eine Abstimmung über den Ausflugsort.' },
                { id: 'g-b2r1q7_2', text: 'Text 4: Was ist das "Futurium"?', options: ['a) Ein neues Museum in Berlin.', 'b) Ein alter Palast.', 'c) Ein Kino.'], correctAnswer: 'a) Ein neues Museum in Berlin.' },
                { id: 'g-b2r1q8_2', text: 'Text 4: Was kostet der Eintritt am Samstag?', options: ['a) 15 Euro', 'b) 5 Euro', 'c) Nichts'], correctAnswer: 'c) Nichts' },
                { id: 'g-b2r1q9_2', text: 'Welcher Text ist eine Einladung/Aufforderung?', options: ['a) Text 1', 'b) Text 3', 'c) Text 4'], correctAnswer: 'b) Text 3' },
              ]
            },
            {
              id: 'g-b2-l2-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (8 Fragen)',
              content: 'Lesen Sie den Artikel. Füllen Sie die Lücken (1-8) mit den Sätzen (a-h).\n\n**Das Problem mit dem Plastikmüll**\n\nPlastik ist überall. Es ist praktisch, leicht und billig. (1) ___. Jedes Jahr landen Millionen Tonnen davon in unseren Ozeanen. Dort wird es zur tödlichen Gefahr für Fische, Vögel und andere Meerestiere. Sie verwechseln das Plastik mit Nahrung oder verfangen sich darin.\n\n(2) ___. Es zerfällt durch Sonne und Salzwasser in immer kleinere Teile, sogenanntes Mikroplastik. (3) ___. Über die Fische, die wir essen, gelangt es so auch in unsere eigene Nahrungskette.\n\nDas Problem ist global, (4) ___. Die EU hat reagiert und bestimmte Einweg-Plastikartikel verboten, (5) ___. Das ist ein erster Schritt, aber es reicht nicht aus. Experten fordern ein Umdenken bei der Produktion. (6) ___. \n\nWas kann der Einzelne tun? (7) ___. Man kann Stofftaschen statt Plastiktüten benutzen, Mehrwegflaschen kaufen und auf unnötige Verpackungen verzichten. (8) ___.\n\n**Sätze:**\n(a) aber auch die Lösung muss global sein.\n(b) Am Ende zählt jede einzelne Plastikflasche, die nicht im Meer landet.\n(c) wie zum Beispiel Plastikstrohhalme und Einweg-Geschirr.\n(d) Aber es hat einen gewaltigen Nachteil: Es verrottet nicht.\n(e) Dieses Mikroplastik ist mittlerweile überall nachweisbar, von der Arktis bis in die Tiefsee.\n(f) Der Verzicht ist nicht immer einfach.\n(g) Unternehmen müssen verpflichtet werden, recyclingfähige Materialien zu verwenden.\n(h) Das Problem ist jedoch: Plastik verschwindet nicht einfach.',
              questions: [
                { id: 'g-b2r2q1_2', text: 'Lücke (1)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'd' },
                { id: 'g-b2r2q2_2', text: 'Lücke (2)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'h' },
                { id: 'g-b2r2q3_2', text: 'Lücke (3)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'e' },
                { id: 'g-b2r2q4_2', text: 'Lücke (4)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'a' },
                { id: 'g-b2r2q5_2', text: 'Lücke (5)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'c' },
                { id: 'g-b2r2q6_2', text: 'Lücke (6)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'g' },
                { id: 'g-b2r2q7_2', text: 'Lücke (7)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'f' },
                { id: 'g-b2r2q8_2', text: 'Lücke (8)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'b' },
              ]
            },
            {
              id: 'g-b2-l2-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten mit einem Freund, der im Rollstuhl sitzt, ein Museum besuchen.\n2. Sie suchen einen Kurs, in dem Sie lernen, wie man professionelle Webseiten programmiert.\n3. Sie interessieren sich für die Geschichte des 20. Jahrhunderts in Deutschland, besonders für die Zeit der DDR.\n4. Sie suchen eine neue, anspruchsvolle Sportart und möchten gern Klettern ausprobieren.\n5. Sie möchten am Wochenende einen Ausflug machen und suchen eine Mitfahrgelegenheit nach Hamburg.\n6. Sie haben einen Hund und suchen einen Park, in dem dieser frei laufen darf.\n\n**Anzeigen:**\n**a) "IT-Academy":** Werden Sie Web-Entwickler! Abendkurs "HTML, CSS & JavaScript" (6 Monate). Vorkenntnisse nicht erforderlich. Start: 01.09.\n\n**b) "Boulder-Welt":** Klettern ohne Seil! Entdecke den Trendsport Bouldern. Einführungskurse jeden Samstag um 14 Uhr. Kein Partner nötig. Einfach vorbeikommen!\n\n**c) "Mitfahrzentrale.de":** Biete Fahrt: Fr, 17 Uhr, Berlin -> Hamburg, 2 Plätze frei, 20 €. Suche Fahrt: So, ab 18 Uhr, Hamburg -> Berlin. \n\n**d) "DDR Museum":** Erleben Sie den Alltag in der DDR! Fahren Sie Trabi, sitzen Sie in einer Plattenbau-Wohnung. Interaktiv und spannend. Leider ist unser Museum nicht barrierefrei (kein Aufzug).\n\n**e) "Naturhistorisches Museum":** Entdecken Sie Dinosaurier und die Evolution! Ein Erlebnis für die ganze Familie. Unser Haus ist vollständig barrierefrei zugänglich (Rampen, Aufzüge).\n\n**f) Grünflächenamt informiert:** Neuer Hundelaufplatz eröffnet! Im Volkspark West gibt es ab sofort eine 3000qm große, eingezäunte Wiese, auf der Hunde ohne Leine spielen dürfen.\n\n**g) "Klassik-Konzerte":** Diesen Samstag: Beethoven-Symphonien in der Philharmonie. Restkarten an der Abendkasse.\n\n**h) Stellenanzeige:** Suchen Programmierer (m/w/d) für Java. Mind. 3 Jahre Berufserfahrung. Bewerbung an: jobs@it-firma.de',
              questions: [
                { id: 'g-b2r3q1_2', text: 'Situation 1: Museum mit Rollstuhl', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'e' },
                { id: 'g-b2r3q2_2', text: 'Situation 2: Webseiten programmieren lernen', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'a' },
                { id: 'g-b2r3q3_2', text: 'Situation 3: DDR-Geschichte', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'd' },
                { id: 'g-b2r3q4_2', text: 'Situation 4: Klettern ausprobieren', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'b' },
                { id: 'g-b2r3q5_2', text: 'Situation 5: Mitfahrgelegenheit nach Hamburg', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'c' },
                { id: 'g-b2r3q6_2', text: 'Situation 6: Hund ohne Leine', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'f' },
              ]
            },
            {
              id: 'g-b2-l2-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Meinungsbeitrag. Kreuzen Sie an: Ja oder Nein.\n\n**Titel: Müssen wir alle Veganer werden?**\n\nDie Diskussion um Veganismus wird oft sehr emotional geführt. Die einen sagen, es sei die einzige Lösung für das Klima und Tierwohl. Die anderen halten es für einen unnatürlichen Trend.\n\nIch lebe selbst seit fünf Jahren vegan und für mich war es die richtige Entscheidung. Ich fühle mich gesünder und fitter. Der Verzicht auf Fleisch, Milch und Eier fiel mir anfangs schwer, aber heute gibt es so viele fantastische Ersatzprodukte, dass es kein echter Verzicht mehr ist. \n\nTrotzdem würde ich nie versuchen, andere zu "missionieren". Ich finde, die Ernährung ist eine sehr persönliche Entscheidung. Was ich aber erwarte, ist Respekt. Und ich wünsche mir, dass wir alle unseren Fleischkonsum drastisch reduzieren. Man muss nicht 100% vegan leben, aber 50% weniger Fleisch wäre schon ein riesiger Gewinn für den Planeten. Statt über "ganz oder gar nicht" zu streiten, sollten wir den "goldenen Mittelweg" finden.',
              questions: [
                { id: 'g-b2r4q1_2', text: 'Der Autor lebt seit 10 Jahren vegan.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q2_2', text: 'Dem Autor fiel der Verzicht von Anfang an leicht.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q3_2', text: 'Er findet, dass Ersatzprodukte heute gut sind.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q4_2', text: 'Der Autor versucht, alle anderen vom Veganismus zu überzeugen.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q5_2', text: 'Er erwartet Respekt für seine Entscheidung.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q6_2', text: 'Er findet, dass jeder 100% vegan leben muss.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q7_2', text: 'Er schlägt vor, dass alle Menschen weniger Fleisch essen.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-b2-l2-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Forumsbeitrag (ca. 150 Wörter)',
              content: 'Sie haben in einem Online-Magazin einen Artikel zum Thema "Tourismus in der eigenen Stadt" gelesen. Im Forum finden Sie folgende Meinung:\n\n**Meinung von "Anwohner77":**\n"Ich wohne in einer beliebten Touristenstadt und es ist furchtbar. Überall nur laute Gruppen, die Müll hinterlassen. Die Mieten steigen, weil alles zu Ferienwohnungen wird. Normale Bäckereien schließen, dafür gibt es 10 Souvenir-Shops. Ich finde, der Tourismus zerstört unsere Städte."\n\n**Aufgabe:** Schreiben Sie einen Forumsbeitrag (ca. 150 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe für Ihre Haltung.\n- Beschreiben Sie die Situation in Ihrem Heimatland.\n- Nennen Sie Vorschläge, wie man die Situation verbessern könnte.',
            },
            {
              id: 'g-b2-l2-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (ca. 100 Wörter)',
              content: 'Sie absolvieren gerade ein Praktikum in einer Firma. Sie möchten Ihren Chef, Herrn Dr. Neumann, bitten, ob Sie eine Woche unbezahlten Urlaub nehmen können (z.B. vom 10. bis 14. nächsten Monat).\n\n**Aufgabe:** Schreiben Sie eine E-Mail (ca. 100 Wörter) an Herrn Dr. Neumann.\n- Nennen Sie den Grund für Ihre E-Mail (Bitte um unbezahlten Urlaub).\n- Erklären Sie kurz, warum Sie den Urlaub brauchen (z.B. wichtige Familienangelegenheit).\n- Versichern Sie ihm, dass Sie alle wichtigen Aufgaben vorher erledigen oder übergeben werden.\n- Bitten Sie um sein Verständnis und eine kurze Rückmeldung.',
            },

            // --- SPRECHEN (2 Parts) ---
            {
              id: 'g-b2-l2-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Präsentation (Vortrag)',
              content: 'Sie sollen eine kurze Präsentation (ca. 4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Alternative Ernährungsformen" oder "Sollten Studiengebühren eingeführt werden?").\n**Aufgabe:** Bereiten Sie eine Präsentation vor.\n- Stellen Sie das Thema und die Struktur vor.\n- Berichten Sie von persönlichen Erfahrungen oder der Situation in Ihrem Land.\n- Nennen Sie Vor- und Nachteile und Ihre eigene Meinung.\n- Beenden Sie die Präsentation mit einem Fazit.\nStarten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b2-l2-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Diskussion (Debatte)',
              content: 'Nach Ihrer Präsentation (Teil 1) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback zu seinem Vortrag und beginnen Sie eine Diskussion. Stellen Sie Fragen, äußern Sie Ihre eigene Meinung und reagieren Sie auf die Argumente des Bots.'
            },
            
            // --- B2 WÖRTSCHATZ (Reusing from g-b2-l1-v1) ---
            {
              id: 'g-b2-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B2',
              content: 'Wichtige Wörter für die B2-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-b2-l1
              ]
            },

            // --- B2 GRAMMATIK (Reusing from g-b2-l1-g1) ---
            {
              id: 'g-b2-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B2',
              content: 'Testen Sie Ihr Grammatikwissen für die B2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-b2-l1
              ]
            }
          ],
        },
//
// --- END OF g-b2-l2 ---
        {
          id: 'g-b2-l3',
          title: 'Modelltest 3: Übungssatz',
          estimatedTime: 190,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts, 30 Questions) ---
            {
              id: 'g-b2-l3-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören 4 kurze Gespräche (einmal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Student', line: 'Entschuldigen Sie, ich bin auf der Suche nach dem Buch "Sozialpsychologie" von Aronson. Im Katalog steht, es müsste hier sein, aber ich finde es nicht.' },
                { speaker: 'Bibliothekarin', line: 'Guten Tag. Ja, das ist ein Standardwerk. Lassen Sie mich nachsehen... Oh, es tut mir leid. Alle fünf Exemplare sind derzeit ausgeliehen. Die Vormerkliste ist auch schon lang.' },
                { speaker: 'Student', line: 'Oh nein. Gibt es eine digitale Version?' },
                { speaker: 'Bibliothekarin', line: 'Ja, als E-Book haben wir es in der Online-Bibliothek. Sie können es von jedem Uni-Computer aus lesen oder für 24 Stunden ausleihen.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Personalleiterin', line: 'Herr Jansen, danke, dass Sie da waren. Wir fanden Ihre Präsentation sehr aufschlussreich. Besonders Ihr technisches Fachwissen hat uns beeindruckt.' },
                { speaker: 'Herr Jansen', line: 'Das freut mich sehr.' },
                { speaker: 'Personalleiterin', line: 'Eine Anmerkung habe ich aber: Sie wirkten teilweise extrem nervös. Für eine Führungsposition ist souveränes Auftreten essenziell. Daran sollten Sie arbeiten. Wir melden uns nächste Woche.' },
                { speaker: 'Herr Jansen', line: 'Verstehe. Vielen Dank für das offene Feedback.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Mann', line: 'Guten Tag, ich habe online ein Zugticket gebucht, aber ich glaube, ich habe das falsche Datum ausgewählt. Ich wollte am 20. fahren, nicht am 19.' },
                { speaker: 'Schalterbeamtin', line: 'Mal sehen. Ja, das Ticket ist für heute, den 19., ausgestellt. Das ist ein Sparpreis-Ticket, das ist eigentlich von Umtausch oder Stornierung ausgeschlossen.' },
                { speaker: 'Mann', line: 'Oh, nein! Das heißt, das Geld ist weg?' },
                { speaker: 'Schalterbeamtin', line: 'Normalerweise ja. Aus Kulanz kann ich anbieten, es gegen eine Gebühr von 19 Euro auf morgen umzubuchen, solange der Zug nicht ausgebucht ist.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Nachrichtensprecher', line: '...und nun die Wetteraussichten. Während es im Süden Deutschlands sonnig und bis zu 25 Grad warm wird, zieht über den Norden eine Kaltfront. Insbesondere an der Küste ist mit schweren Sturmböen und Starkregen zu rechnen. Die Behörden raten, die Küstenregion am Nachmittag zu meiden.' },
                { speaker: 'Moderatorin', line: 'Danke, Thomas. Und nun zu den Sportmeldungen...' },
              ],
              questions: [
                { id: 'g-b2h1q1_3', text: 'Text 1: Was ist das Problem des Studenten?', options: ['a) Er kann das Buch im Regal nicht finden.', 'b) Das Buch ist nicht im Katalog.', 'c) Er hat keinen Bibliotheksausweis.'], correctAnswer: 'a) Er kann das Buch im Regal nicht finden.' },
                { id: 'g-b2h1q2_3', text: 'Text 1: Was ist die Lösung?', options: ['a) Er muss das Buch kaufen.', 'b) Er kann es als E-Book online nutzen.', 'c) Er muss bis morgen warten.'], correctAnswer: 'b) Er kann es als E-Book online nutzen.' },
                { id: 'g-b2h1q3_3', text: 'Text 2: Was fand die Personalleiterin gut?', options: ['a) Sein souveränes Auftreten.', 'b) Sein technisches Wissen.', 'c) Seine Nervosität.'], correctAnswer: 'b) Sein technisches Wissen.' },
                { id: 'g-b2h1q4_3', text: 'Text 2: Was kritisiert sie?', options: ['a) Dass er zu wenig Fachwissen hat.', 'b) Dass er zu spät war.', 'c) Dass er sehr nervös wirkte.'], correctAnswer: 'c) Dass er sehr nervös wirkte.' },
                { id: 'g-b2h1q5_3', text: 'Text 3: Was ist das Problem des Mannes?', options: ['a) Sein Zug ist ausgefallen.', 'b) Er hat ein Ticket für den falschen Tag.', 'c) Er hat sein Ticket verloren.'], correctAnswer: 'b) Er hat ein Ticket für den falschen Tag.' },
                { id: 'g-b2h1q6_3', text: 'Text 3: Was bietet die Beamtin an?', options: ['a) Eine kostenlose Stornierung.', 'b) Eine Umbuchung gegen eine Gebühr.', 'c) Er muss ein komplett neues Ticket kaufen.'], correctAnswer: 'b) Eine Umbuchung gegen eine Gebühr.' },
                { id: 'g-b2h1q7_3', text: 'Text 4: Wie wird das Wetter im Süden?', options: ['a) Sonnig und warm', 'b) Kalt und stürmisch', 'c) Starkregen'], correctAnswer: 'a) Sonnig und warm' },
                { id: 'g-b2h1q8_3', text: 'Text 4: Wovor wird gewarnt?', options: ['a) Vor Hitze im Süden.', 'b) Vor dem Sport.', 'c) Vor Sturm an der Küste.'], correctAnswer: 'c) Vor Sturm an der Küste.' },
              ]
            },
            {
              id: 'g-b2-l3-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Vortrag (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Rednerin', line: 'Guten Abend. Mein Thema heute ist "Der Wald als Medizin". Wir alle kennen das Gefühl: Nach einem Spaziergang im Wald fühlen wir uns erholter. Aber steckt da mehr dahinter? In Japan ist "Shinrin-yoku", also "Waldbaden", eine anerkannte Therapieform.' },
                { speaker: 'Rednerin', line: 'Die Wissenschaft gibt ihnen Recht. Studien belegen: Ein Aufenthalt im Wald senkt den Blutdruck und reduziert Stresshormone wie Cortisol. Aber warum? Der Hauptgrund sind sogenannte Terpene. Das sind chemische Stoffe, die die Bäume an die Luft abgeben, um sich selbst vor Schädlingen zu schützen.' },
                { speaker: 'Rednerin', line: 'Wenn wir diese Terpene einatmen, hat das einen messbaren Effekt auf unser Immunsystem. Die Anzahl unserer natürlichen "Killerzellen", also die Zellen, die Viren und sogar Tumore bekämpfen, steigt nach einem Waldaufenthalt signifikant an. Dieser Effekt kann bis zu sieben Tage anhalten.' },
                { speaker: 'Rednerin', line: 'Es geht also nicht nur um die Ruhe oder die saubere Luft. Es ist die komplexe Chemie des Waldes, die auf uns wirkt. Man muss dafür nicht joggen. Langsames, bewusstes Gehen und tiefes Einatmen reichen völlig aus. Zwei Stunden pro Woche sind ein gutes Ziel.' },
              ],
              questions: [
                { id: 'g-b2h2q1_3', text: '"Waldbaden" ist eine Therapieform aus China.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q2_3', text: 'Ein Waldspaziergang kann den Blutdruck senken.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q3_3', text: 'Terpene sind Stresshormone im Körper.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q4_3', text: 'Bäume nutzen Terpene zum Schutz vor Schädlingen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q5_3', text: 'Das Einatmen von Terpenen stärkt das Immunsystem.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q6_3', text: '"Killerzellen" bekämpfen Viren im Körper.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q7_3', text: 'Der positive Effekt hält nur eine Stunde an.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q8_3', text: 'Nur die Ruhe im Wald ist medizinisch wirksam.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q9_3', text: 'Man muss im Wald joggen, damit es wirkt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q10_3', text: 'Zwei Stunden Wald pro Woche werden empfohlen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-b2-l3-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen zu "Stadtleben". Bei mir sind Anna und Tom, die ein "Unverpackt"-Geschäft eröffnet haben. Was ist das genau?' },
                { speaker: 'Anna', line: 'Hallo. Ein Unverpackt-Laden ist ein Supermarkt ohne Einwegverpackungen. Die Kunden bringen ihre eigenen Behälter mit – Gläser, Dosen, Stoffbeutel – und füllen sich Nudeln, Reis, Müsli, Öl oder sogar Shampoo selbst ab.' },
                { speaker: 'Moderatorin', line: 'Tom, wie kamen Sie auf die Idee?' },
                { speaker: 'Tom', line: 'Wir waren frustriert von dem ganzen Plastikmüll. Wir wollten eine Alternative anbieten. Es geht darum, bewusster einzukaufen und Müll zu vermeiden, bevor er überhaupt entsteht.' },
                { speaker: 'Moderatorin', line: 'Ist das nicht teurer für die Kunden?' },
                { speaker: 'Anna', line: 'Nicht unbedingt. Man kauft ja nur die Menge, die man wirklich braucht, und nicht die festgelegte Packungsgröße. Man zahlt nicht für die teure Verpackung und das Marketing. Viele unserer Produkte sind Bio und regional, aber im Preis oft vergleichbar mit Bio-Ware im normalen Supermarkt.' },
                { speaker: 'Moderatorin', line: 'Ist es nicht auch unhygienisch?' },
                { speaker: 'Tom', line: 'Überhaupt nicht. Wir haben sehr strenge Hygienevorschriften. Die Behälter werden regelmäßig gereinigt und die Kunden dürfen die Lebensmittel nicht direkt berühren. Das Abfüllen ist sehr sauber.' },
              ],
              questions: [
                { id: 'g-b2h3q1_3', text: 'Was ist das Besondere an einem "Unverpackt"-Laden?', options: ['a) Es gibt nur Bio-Produkte.', 'b) Es gibt keine Einwegverpackungen.', 'c) Es gibt nur Nudeln und Reis.'], correctAnswer: 'b) Es gibt keine Einwegverpackungen.' },
                { id: 'g-b2h3q2_3', text: 'Wie transportieren die Kunden die Waren?', options: ['a) In Papiertüten vom Laden.', 'b) In mitgebrachten Behältern.', 'c) In Plastiktüten.'], correctAnswer: 'b) In mitgebrachten Behältern.' },
                { id: 'g-b2h3q3_3', text: 'Was war die Motivation von Tom und Anna?', options: ['a) Sie wollten reich werden.', 'b) Sie waren frustriert vom Plastikmüll.', 'c) Sie wollten einen Supermarkt besitzen.'], correctAnswer: 'b) Sie waren frustriert vom Plastikmüll.' },
                { id: 'g-b2h3q4_3', text: 'Warum sind die Produkte nicht unbedingt teurer?', options: ['a) Weil man die Verpackung nicht mitzahlt.', 'b) Weil die Qualität schlechter ist.', 'c) Weil alles importiert wird.'], correctAnswer: 'a) Weil man die Verpackung nicht mitzahlt.' },
                { id: 'g-b2h3q5_3', text: 'Was ist ein Vorteil beim Abfüllen?', options: ['a) Man muss immer 1kg kaufen.', 'b) Man kann genau die Menge kaufen, die man braucht.', 'c) Man darf alles probieren.'], correctAnswer: 'b) Man kann genau die Menge kaufen, die man braucht.' },
                { id: 'g-b2h3q6_3', text: 'Was sagt Tom zum Thema Hygiene?', options: ['a) Es ist ein Problem.', 'b) Es ist unhygienisch.', 'c) Sie haben strenge Vorschriften und es ist sauber.'], correctAnswer: 'c) Sie haben strenge Vorschriften und es ist sauber.' },
              ]
            },
            {
              id: 'g-b2-l3-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (6 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Kontrovers". Thema heute: Gendersprache. Sternchen, Doppelpunkt, Binnen-I. Herr Dr. Eichner, Sie sind Sprachwissenschaftler. Ist das die Zukunft?' },
                { speaker: 'Dr. Eichner', line: 'Es ist zumindest die Gegenwart. Sprache entwickelt sich. Sprache schafft Realität. Wenn wir immer nur "die Ärzte" oder "die Lehrer" sagen, meinen wir im Kopf oft nur Männer mit. Das "generische Maskulinum" schließt Frauen und diverse Personen sprachlich aus. Gendern macht diese Gruppen sichtbar. Das ist eine Frage der Gerechtigkeit.' },
                { speaker: 'Moderator', line: 'Frau Fels, Sie sind Journalistin und sehen das anders.' },
                { speaker: 'Frau Fels', line: 'Ich sehe nicht die Gerechtigkeit anders, sondern den Weg. Diese Sonderzeichen wie der Gender-Stern sind künstlich und zerstören den Lesefluss und die Ästhetik der Sprache. Sprache muss verständlich bleiben. Außerdem: Ändert ein Sternchen die Realität? Ich glaube nicht. Wir sollten für gleiche Bezahlung kämpfen, nicht für Satzzeichen.' },
                { speaker: 'Dr. Eichner', line: 'Das eine schließt das andere nicht aus! Indem wir die Sprache ändern, ändern wir das Denken. Und das ist der erste Schritt zur echten Gleichberechtigung.' },
              ],
              questions: [
                { id: 'g-b2h4q1_3', text: 'Was ist das "generische Maskulinum"?', options: ['a) Eine neue Form des Genderns.', 'b) Die Nutzung der männlichen Form für alle Geschlechter.', 'c) Eine Sprache für Männer.'], correctAnswer: 'b) Die Nutzung der männlichen Form für alle Geschlechter.' },
                { id: 'g-b2h4q2_3', text: 'Was ist Dr. Eichners Hauptargument DAFÜR?', options: ['a) Gendern macht Frauen und diverse Personen sichtbar.', 'b) Gendern ist einfacher zu lesen.', 'c) Gendern ist ein Wunsch der Regierung.'], correctAnswer: 'a) Gendern macht Frauen und diverse Personen sichtbar.' },
                { id: 'g-b2h4q3_3', text: 'Was ist Frau Fels\' Hauptargument DAGEGEN?', options: ['a) Es schließt Männer aus.', 'b) Es zerstört den Lesefluss und die Ästhetik.', 'c) Es ist zu teuer.'], correctAnswer: 'b) Es zerstört den Lesefluss und die Ästhetik.' },
                { id: 'g-b2h4q4_3', text: 'Wofür sollte man laut Frau Fels stattdessen kämpfen?', options: ['a) Für neue Satzzeichen', 'b) Für gleiche Bezahlung', 'c) Für ein Verbot des Genderns'], correctAnswer: 'b) Für gleiche Bezahlung' },
                { id: 'g-b2h4q5_3', text: 'Wie sieht Dr. Eichner die Beziehung zwischen Sprache und Denken?', options: ['a) Sie haben nichts miteinander zu tun.', 'b) Das Denken ändert die Sprache.', 'c) Das Ändern der Sprache ändert das Denken.'], correctAnswer: 'c) Das Ändern der Sprache ändert das Denken.' },
                { id: 'g-b2h4q6_3', text: 'Worin sind sich beide einig?', options: ['a) Dass Gendern wichtiger ist als gleiche Bezahlung.', 'b) Dass die Sprache sich nicht entwickelt.', 'c) Dass Gleichberechtigung ein wichtiges Ziel ist.'], correctAnswer: 'c) Dass Gleichberechtigung ein wichtiges Ziel ist.' },
              ]
            },

            // --- LESEN (4 Parts, 30 Questions) ---
            {
              id: 'g-b2-l3-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (9 Fragen)',
              content: 'Lesen Sie die 4 Texte. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1: E-Mail eines Professors**\nBetreff: Klausurergebnisse "Statistik I"\nLiebe Studierende, die Ergebnisse der Klausur vom 15.07. sind nun online. Sie finden sie im Portal unter "Prüfungen". Die Klausureinsicht findet am 05.08. von 10-12 Uhr in meinem Büro (Raum A-304) statt. Bitte beachten Sie: Eine Anmeldung per E-Mail ist hierfür zwingend erforderlich.\n\n**Text 2: Buch-Rezension "Der Alchimist"**\nPaulo Coelhos weltberühmter Roman ist eine Parabel über das Leben und das Verfolgen von Träumen. Die Sprache ist bewusst einfach, fast märchenhaft gehalten. Darin liegt die Stärke, aber auch die Schwäche. Kritiker werfen dem Buch oft Banalität vor. Wer jedoch eine inspirierende Geschichte sucht und sich auf die spirituelle Ebene einlässt, wird dieses Buch lieben.\n\n**Text 3: Zeitungsnotiz "Neues Gesetz"**\nDer Bundestag hat heute das neue "Lieferkettengesetz" beschlossen. Es verpflichtet große deutsche Unternehmen dazu, die Einhaltung von Menschenrechten bei ihren Zulieferern im Ausland zu kontrollieren. Firmen müssen nachweisen, dass in den Fabriken, die ihre T-Shirts oder Handys produzieren, keine Kinderarbeit oder Hungerlöhne an der Tagesordnung sind. Bei Verstößen drohen hohe Geldstrafen.\n\n**Text 4: Interne Mitteilung "Betriebsratswahl"**\nLiebe Belegschaft, vom 10. bis 12. Mai findet die Wahl zum neuen Betriebsrat statt. Der Betriebsrat vertritt die Interessen der Arbeitnehmer gegenüber der Geschäftsleitung. Jede Stimme ist wichtig! Die Wahlurne befindet sich in der Kantine. Wahlberechtigt sind alle Mitarbeiter, die länger als 6 Monate im Unternehmen sind. Gehen Sie hin und stärken Sie unsere Gemeinschaft!',
              questions: [
                { id: 'g-b2r1q1_3', text: 'Text 1: Was müssen Studierende für die Klausureinsicht tun?', options: ['a) Einfach vorbeikommen.', 'b) Sich online im Portal anmelden.', 'c) Dem Professor eine E-Mail schreiben.'], correctAnswer: 'c) Dem Professor eine E-Mail schreiben.' },
                { id: 'g-b2r1q2_3', text: 'Text 1: Wo sind die Ergebnisse?', options: ['a) Im Büro A-304', 'b) Im Online-Portal', 'c) Noch nicht verfügbar'], correctAnswer: 'b) Im Online-Portal' },
                { id: 'g-b2r1q3_3', text: 'Text 2: Was kritisieren manche am Buch "Der Alchimist"?', options: ['a) Die komplexe Handlung', 'b) Die zu einfache, banale Sprache', 'c) Dass es nicht spirituell ist'], correctAnswer: 'b) Die zu einfache, banale Sprache' },
                { id: 'g-b2r1q4_3', text: 'Text 2: Der Rezensent findet das Buch...', options: ['a) nur schlecht.', 'b) nur für Kritiker.', 'c) inspirierend für offene Leser.'], correctAnswer: 'c) inspirierend für offene Leser.' },
                { id: 'g-b2r1q5_3', text: 'Text 3: Wozu verpflichtet das neue Gesetz die Firmen?', options: ['a) Mehr Geld zu verdienen.', 'b) Die Menschenrechte bei Zulieferern zu kontrollieren.', 'c) Nur noch in Deutschland zu produzieren.'], correctAnswer: 'b) Die Menschenrechte bei Zulieferern zu kontrollieren.' },
                { id: 'g-b2r1q6_3', text: 'Text 3: Was passiert bei Verstößen?', options: ['a) Die Firma muss schließen.', 'b) Es drohen Geldstrafen.', 'c) Nichts.'], correctAnswer: 'b) Es drohen Geldstrafen.' },
                { id: 'g-b2r1q7_3', text: 'Text 4: Wer darf wählen?', options: ['a) Alle Mitarbeiter.', 'b) Nur die Geschäftsleitung.', 'c) Mitarbeiter, die länger als 6 Monate dabei sind.'], correctAnswer: 'c) Mitarbeiter, die länger als 6 Monate dabei sind.' },
                { id: 'g-b2r1q8_3', text: 'Text 4: Wessen Interessen vertritt der Betriebsrat?', options: ['a) Die der Geschäftsleitung.', 'b) Die der Arbeitnehmer.', 'c) Die der Kantine.'], correctAnswer: 'b) Die der Arbeitnehmer.' },
                { id: 'g-b2r1q9_3', text: 'Welcher Text ist ein Appell/Aufruf?', options: ['a) Text 1', 'b) Text 2', 'c) Text 4'], correctAnswer: 'c) Text 4' },
              ]
            },
            {
              id: 'g-b2-l3-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (8 Fragen)',
              content: 'Lesen Sie den Artikel. Füllen Sie die Lücken (1-8) mit den Sätzen (a-h).\n\n**Die Macht der Gewohnheiten**\n\nWarum fällt es uns so schwer, uns zu ändern? Wir nehmen uns vor, mehr Sport zu treiben oder gesünder zu essen, (1) ___. Der Grund dafür liegt in unserem Gehirn. Es liebt Routinen. (2) ___. Das spart Energie. Wenn Sie Auto fahren, denken Sie nicht über das Schalten oder Blinken nach – es passiert automatisch. \n\n(3) ___. Will man eine neue Gewohnheit etablieren, z.B. täglich 10 Minuten joggen, ist das anfangs ein Kampf. (4) ___. Es muss sich erst eine neue neuronale Verknüpfung bilden. Experten sagen, dies dauert im Schnitt 66 Tage. (5) ___. \n\nWie kann man es schaffen? (6) ___. Starten Sie nicht mit einem Marathon, sondern mit 5 Minuten Laufen. Zweitens: Koppeln Sie die neue Gewohnheit an eine alte. (7) ___. Drittens: Belohnen Sie sich. (8) ___. So lernt das Gehirn, dass sich die Anstrengung lohnt.\n\n**Sätze:**\n(a) Das Gehirn muss gegen seine Automatismen ankämpfen.\n(b) Nach dem Zähneputzen machen Sie 5 Kniebeugen.\n(c) Gewohnheiten sind automatisierte Verhaltensweisen, die tief im Gehirn verankert sind.\n(d) aber nach drei Tagen siegt der innere Schweinehund.\n(e) Das Wichtigste ist, klein anzufangen.\n(f) Erst danach wird die neue Tätigkeit zur Routine und kostet weniger Überwindung.\n(g) Dieser Automatismus ist extrem effizient.\n(h) Nach dem Sport hören Sie Ihre Lieblingsmusik.',
              questions: [
                { id: 'g-b2r2q1_3', text: 'Lücke (1)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'd' },
                { id: 'g-b2r2q2_3', text: 'Lücke (2)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'g' },
                { id: 'g-b2r2q3_3', text: 'Lücke (3)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'c' },
                { id: 'g-b2r2q4_3', text: 'Lücke (4)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'a' },
                { id: 'g-b2r2q5_3', text: 'Lücke (5)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'f' },
                { id: 'g-b2r2q6_3', text: 'Lücke (6)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'e' },
                { id: 'g-b2r2q7_3', text: 'Lücke (7)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'b' },
                { id: 'g-b2r2q8_3', text: 'Lücke (8)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'h' },
              ]
            },
            {
              id: 'g-b2-l3-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten mit Ihrer Freundin einen romantischen Abend verbringen und suchen ein hochwertiges Restaurant.\n2. Sie suchen einen Job als Programmierer, haben aber erst 1 Jahr Berufserfahrung.\n3. Sie möchten sich einen Hund anschaffen und suchen einen seriösen Züchter.\n4. Sie möchten am Wochenende etwas Kulturelles machen und interessieren sich für Fotografie.\n5. Sie möchten eine neue Sprache lernen, am liebsten eine asiatische, z.B. Japanisch.\n6. Sie haben Probleme mit Ihrem Laptop und brauchen einen Reparaturservice.\n\n**Anzeigen:**\n**a) "IT-Academy":** Werden Sie Web-Entwickler! Abendkurs "HTML, CSS & JavaScript" (6 Monate). Vorkenntnisse nicht erforderlich. Start: 01.09.\n\n**b) "PC-Hilfe Schnell":** Laptop kaputt? Virus? Wir reparieren alle Marken. Schneller Service, faire Preise. Rufen Sie uns an! 030-12345\n\n**c) "Asia-Sprachzentrum":** Lernen Sie die Sprachen Asiens! Abendkurse für Chinesisch (Mandarin) und Koreanisch. Anfänger & Fortgeschrittene. Japanisch leider erst nächstes Semester.\n\n**d) Galerie "Lichtblick":** Ausstellung: "Straßenfotografie aus New York". Berühmte Fotografen der 1980er Jahre. Nur noch dieses Wochenende! Sa/So 11-19 Uhr.\n\n**e) Restaurant "Über den Wolken":** Exklusive Gourmet-Küche mit Panoramablick über die Stadt. Perfekt für besondere Anlässe. Pianomusik live am Abend. Reservierung erforderlich. (Gehobene Preisklasse)\n\n**f) Stellenanzeige: "TechSolutions GmbH":** Suchen Software-Entwickler (m/w/d) für Java. Anforderungen: Abgeschlossenes Studium der Informatik und mind. 3-5 Jahre Berufserfahrung. jobs@techsolutions.de\n\n**g) "Hunde-Nothilfe e.V.":** Geben Sie einem Tier ein Zuhause! Wir vermitteln Hunde jeden Alters aus dem Tierschutz. Alle Tiere sind geimpft und gechipt. Besuchen Sie uns im Tierheim.\n\n**h) "Sterne-Küche":** Lernen Sie kochen wie ein Profi. Kurs "Französische Patisserie" am Wochenende. Noch 2 Plätze frei!',
              questions: [
                { id: 'g-b2r3q1_3', text: 'Situation 1: Romantisches, teures Restaurant', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'e' },
                { id: 'g-b2r3q2_3', text: 'Situation 2: Job als Programmierer (1 Jahr Erfahrung)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'f' requires 3-5 years
                { id: 'g-b2r3q3_3', text: 'Situation 3: Hund anschaffen', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'g' }, // 'g' is Tierschutz, not Züchter, but the only one
                { id: 'g-b2r3q4_3', text: 'Situation 4: Foto-Ausstellung', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'd' },
                { id: 'g-b2r3q5_3', text: 'Situation 5: Japanisch-Kurs', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'c' offers it only next semester
                { id: 'g-b2r3q6_3', text: 'Situation 6: Laptop-Reparatur', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'b' },
              ]
            },
            {
              id: 'g-b2-l3-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Meinungsbeitrag. Kreuzen Sie an: Ja oder Nein.\n\n**Titel: "Work-Life-Balance" – Eine Lüge?**\n\nDer Begriff "Work-Life-Balance" ist in aller Munde. Er verspricht eine perfekte Harmonie zwischen Beruf und Privatleben. Aber existiert das wirklich? Ich glaube, es ist eine Illusion, die uns nur noch mehr stresst.\n\nDas Problem ist die Trennung. "Work" ist die schlechte, anstrengende Zeit, "Life" ist die gute, freie Zeit. Dieses Denken ist falsch. Arbeit ist ein Teil des Lebens! \n\nStatt "Balance" brauchen wir "Work-Life-Integration". Ich möchte einen Job, der mir Spaß macht und den ich als sinnvoll empfinde. Ich möchte flexible Arbeitszeiten, damit ich morgens Sport machen oder nachmittags mein Kind abholen kann. Dafür lese ich auch mal am Sonntagabend E-Mails, wenn es nötig ist. Es geht nicht um eine 50:50-Balance, sondern um eine flexible Mischung, die zu meinem Leben passt. Starre 9-to-5-Jobs sind ein Modell von gestern.',
              questions: [
                { id: 'g-b2r4q1_3', text: 'Der Autor findet den Begriff "Work-Life-Balance" hilfreich.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q2_3', text: 'Er findet die Trennung von Arbeit und Leben problematisch.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q3_3', text: 'Der Autor schlägt "Work-Life-Integration" vor.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q4_3', text: 'Er möchte einen Job, der ihm Spaß macht.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q5_3', text: 'Er ist strikt dagegen, am Wochenende E-Mails zu lesen.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q6_3', text: 'Er findet, es geht um eine genaue 50:50-Balance.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q7_3', text: 'Er hält 9-to-5-Jobs für veraltet.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-b2-l3-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Forumsbeitrag (ca. 150 Wörter)',
              content: 'Sie haben in einem Online-Magazin einen Artikel zum Thema "Ist ein Studium der einzige Weg zum Erfolg?" gelesen. Im Forum finden Sie folgende Meinung:\n\n**Meinung von "Master-Mind":**\n"Ohne Studium geht heute nichts mehr. Handwerk hat keinen goldenen Boden mehr. Wer Karriere machen und gut verdienen will, MUSS an die Universität. Eine Ausbildung ist nur etwas für Leute, die nicht gut genug für die Uni sind."\n\n**Aufgabe:** Schreiben Sie einen Forumsbeitrag (ca. 150 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe für Ihre Haltung.\n- Beschreiben Sie die Situation in Ihrem Heimatland.\n- Nennen Sie Alternativen zum Studium (z.B. Ausbildung).',
            },
            {
              id: 'g-b2-l3-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (ca. 100 Wörter)',
              content: 'Sie haben sich bei einer Wohnungsbaugesellschaft um eine 3-Zimmer-Wohnung beworben, die Sie besichtigt haben. Sie haben aber seit zwei Wochen keine Antwort erhalten.\n\n**Aufgabe:** Schreiben Sie eine E-Mail (ca. 100 Wörter) an die zuständige Mitarbeiterin, Frau Schulze.\n- Erinnern Sie daran, um welche Wohnung Sie sich beworben haben (Adresse, Datum der Besichtigung).\n- Bekräftigen Sie Ihr großes Interesse an der Wohnung.\n- Fragen Sie höflich nach dem Stand des Auswahlverfahrens.\n- Bitten Sie um eine kurze Rückmeldung.',
            },

            // --- SPRECHEN (2 Parts) ---
            {
              id: 'g-b2-l3-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Präsentation (Vortrag)',
              content: 'Sie sollen eine kurze Präsentation (ca. 4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Tourismus in meiner Heimat" oder "Bedeutung von Freundschaft im digitalen Zeitalter").\n**Aufgabe:** Bereiten Sie eine Präsentation vor.\n- Stellen Sie das Thema und die Struktur vor.\n- Berichten Sie von persönlichen Erfahrungen oder der Situation in Ihrem Land.\n- Nennen Sie Vor- und Nachteile und Ihre eigene Meinung.\n- Beenden Sie die Präsentation mit einem Fazit.\nStarten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b2-l3-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Diskussion (Debatte)',
              content: 'Nach Ihrer Präsentation (Teil 1) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback zu seinem Vortrag und beginnen Sie eine Diskussion. Stellen Sie Fragen, äußern Sie Ihre eigene Meinung und reagieren Sie auf die Argumente des Bots.'
            },
            
            // --- B2 WÖRTSCHATZ (Reusing from g-b2-l1-v1) ---
            {
              id: 'g-b2-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B2',
              content: 'Wichtige Wörter für die B2-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-b2-l1
              ]
            },

            // --- B2 GRAMMATIK (Reusing from g-b2-l1-g1) ---
            {
              id: 'g-b2-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B2',
              content: 'Testen Sie Ihr Grammatikwissen für die B2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-b2-l1
              ]
            }
          ],
        },
//
// --- END OF g-b2-l3 ---
        {
          id: 'g-b2-l4',
          title: 'Modelltest 4: Übungssatz',
          estimatedTime: 190,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts) ---
            {
              id: 'g-b2-l4-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören 4 kurze Gespräche (einmal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Frau', line: 'Guten Tag, Herr Professor Nolte. Ich wollte wegen meiner Masterarbeit mit Ihnen sprechen. Ich habe Schwierigkeiten, die passende Literatur zu finden.' },
                { speaker: 'Prof. Nolte', line: 'Guten Tag, Frau Chen. Welches Thema bearbeiten Sie denn genau?' },
                { speaker: 'Frau', line: 'Den Einfluss von "Gamification" auf die Lernmotivation. In den Standard-Datenbanken finde ich wenig.' },
                { speaker: 'Prof. Nolte', line: 'Versuchen Sie es mal mit interdisziplinären Datenbanken, etwa aus der Psychologie. Und haben Sie schon die "graue Literatur" durchsucht? Oft gibt es unveröffentlichte Konferenzpapiere, die sehr aktuell sind.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Mann 1', line: 'Ich habe gestern den neuen Vertrag von der Personalabteilung bekommen. Sie bieten mir 3.000 Euro brutto.' },
                { speaker: 'Mann 2', line: '3.000? Das ist aber nicht viel. Für deine Qualifikation und Berufserfahrung ist das unterdurchschnittlich.' },
                { speaker: 'Mann 1', line: 'Dachte ich auch. Sie argumentieren mit den vielen "Soft Benefits" wie Home-Office und Jobticket.' },
                { speaker: 'Mann 2', line: 'Davon kannst du aber keine Miete bezahlen. Ich an deiner Stelle würde nachverhandeln. 3.500 sollten es mindestens sein.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Frau', line: 'Guten Tag, ich möchte meine Autoversicherung kündigen.' },
                { speaker: 'Versicherung', line: 'Guten Tag. Darf ich nach dem Grund fragen? Sind Sie unzufrieden?' },
                { speaker: 'Frau', line: 'Nicht direkt, aber ich habe mein Auto verkauft. Ich brauche es in der Stadt nicht mehr, ich fahre nur noch Car-Sharing oder Fahrrad.' },
                { speaker: 'Versicherung', line: 'Verstehe. Dann brauche ich bitte die Abmeldebestätigung von der Zulassungsstelle, dann wird der Vertrag sofort aufgelöst.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Mann', line: 'Du, Anna, was hältst du von dem Vorschlag, dass die Kantine nur noch vegetarisches Essen anbietet?' },
                { speaker: 'Anna', line: 'Puh. Ich finde Klimaschutz ja wichtig, und weniger Fleisch ist gut. Aber ein komplettes Verbot? Das finde ich bevormundend.' },
                { speaker: 'Mann', line: 'Ich sehe das als Chance. Viele würden mal was Neues probieren. Und die Qualität des vegetarischen Essens würde sicher steigen.' },
                { speaker: 'Anna', line: 'Vielleicht. Aber ich möchte die Wahl haben. Man könnte ja einfach das vegetarische Angebot verbessern und teureres Fleisch anbieten.' },
              ],
              questions: [
                { id: 'g-b2h1q1_4', text: 'Text 1: Was ist das Problem der Frau?', options: ['a) Sie findet keine Literatur für ihre Masterarbeit.', 'b) Sie hat ihre Masterarbeit nicht bestanden.', 'c) Sie mag ihr Thema "Gamification" nicht.'], correctAnswer: 'a) Sie findet keine Literatur für ihre Masterarbeit.' },
                { id: 'g-b2h1q2_4', text: 'Text 1: Was rät der Professor?', options: ['a) Das Thema zu wechseln.', 'b) Nur in Standard-Datenbanken zu suchen.', 'c) Auch in Psychologie-Datenbanken zu suchen.'], correctAnswer: 'c) Auch in Psychologie-Datenbanken zu suchen.' },
                { id: 'g-b2h1q3_4', text: 'Text 2: Was hält Mann 2 von dem Gehaltsangebot?', options: ['a) Er findet es sehr gut.', 'b) Er findet es angemessen.', 'c) Er findet es zu niedrig.'], correctAnswer: 'c) Er findet es zu niedrig.' },
                { id: 'g-b2h1q4_4', text: 'Text 2: Was rät Mann 2?', options: ['a) Den Job anzunehmen.', 'b) Mehr Home-Office zu verlangen.', 'c) Ein höheres Gehalt auszuhandeln.'], correctAnswer: 'c) Ein höheres Gehalt auszuhandeln.' },
                { id: 'g-b2h1q5_4', text: 'Text 3: Warum kündigt die Frau die Versicherung?', options: ['a) Weil sie zu teuer ist.', 'b) Weil sie kein Auto mehr besitzt.', 'c) Weil sie unzufrieden war.'], correctAnswer: 'b) Weil sie kein Auto mehr besitzt.' },
                { id: 'g-b2h1q6_4', text: 'Text 3: Was braucht die Versicherung von der Frau?', options: ['a) Ihre neue Adresse.', 'b) Die Abmeldebestätigung des Autos.', 'c) Die Nummer ihres Fahrrads.'], correctAnswer: 'b) Die Abmeldebestätigung des Autos.' },
                { id: 'g-b2h1q7_4', text: 'Text 4: Anna findet den Vorschlag...', options: ['a) sehr gut.', 'b) bevormundend.', 'c) gut für die Qualität.'], correctAnswer: 'b) bevormundend.' },
                { id: 'g-b2h1q8_4', text: 'Text 4: Was ist Annas Gegenvorschlag?', options: ['a) Das vegetarische Angebot zu verbessern.', 'b) Nur noch Fleisch anzubieten.', 'c) Nichts zu ändern.'], correctAnswer: 'a) Das vegetarische Angebot zu verbessern.' },
              ]
            },
            {
              id: 'g-b2-l4-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Vortrag (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Redner', line: 'Guten Abend, meine Damen und Herren. Mein Thema ist "Die Zukunft der Arbeit", speziell die "4-Tage-Woche". Ist das ein realistisches Modell oder eine Utopie?' },
                { speaker: 'Redner', line: 'Verschiedene Pilotprojekte, zum Beispiel in Island oder Schweden, haben Erstaunliches gezeigt: Bei gleichem Lohn, aber reduzierter Arbeitszeit – also 32 statt 40 Stunden – stieg die Produktivität der Mitarbeiter. Gleichzeitig sanken die Krankheitstage signifikant.' },
                { speaker: 'Redner', line: 'Wie kann das sein? Weniger Zeit bedeutet mehr Fokus. Die Menschen verschwenden weniger Zeit in unnötigen Meetings oder mit Kaffeepausen. Die Arbeit wird verdichtet. Außerdem steigt die Motivation und die Loyalität zur Firma, weil die Angestellten einen zusätzlichen freien Tag haben – mehr Zeit für Familie, Hobbys, Erholung.' },
                { speaker: 'Redner', line: 'Kritiker wenden ein, dass dieses Modell nicht in allen Branchen funktioniert. In der Pflege, im Handwerk oder in der Produktion kann man nicht einfach einen Tag die Arbeit weglassen. Das stimmt. Es ist kein Allheilmittel. Aber in der digitalisierten Bürowelt, wo die Arbeit projektbasiert ist, ist es eine sehr überlegenswerte Alternative zum starren 40-Stunden-Modell, das noch aus dem letzten Jahrhundert stammt.' },
              ],
              questions: [
                { id: 'g-b2h2q1_4', text: 'Das Thema des Vortrags ist die 5-Tage-Woche.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q2_4', text: 'Pilotprojekte fanden z.B. in Island und Schweden statt.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q3_4', text: 'Bei den Projekten bekamen die Mitarbeiter weniger Lohn.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q4_4', text: 'Die Produktivität der Mitarbeiter sank.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q5_4', text: 'Die Anzahl der Krankheitstage ging zurück.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q6_4', text: 'Ein Grund für die höhere Produktivität ist, dass die Arbeit verdichtet wird.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q7_4', text: 'Ein zusätzlicher freier Tag senkt die Motivation.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q8_4', text: 'Kritiker sagen, das Modell funktioniert in allen Branchen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q9_4', text: 'Im Handwerk ist das Modell schwer umzusetzen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q10_4', text: 'Der Redner hält das 40-Stunden-Modell für modern.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
              ]
            },
            {
              id: 'g-b2-l4-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Medienfokus". Bei mir ist die Journalistin Sarah Kessler. Frau Kessler, Sie haben ein Buch über "Fake News" geschrieben. Was ist die größte Gefahr?' },
                { speaker: 'Sarah Kessler', line: 'Guten Tag. Die größte Gefahr ist nicht die einzelne Falschmeldung, sondern die systematische Verbreitung. Es geht darum, das Vertrauen in klassische Medien wie Zeitungen oder den öffentlich-rechtlichen Rundfunk zu zerstören.' },
                { speaker: 'Moderator', line: 'Wie erkennt man "Fake News"?' },
                { speaker: 'Sarah Kessler', line: 'Das ist oft schwer. Ein Warnsignal ist eine extrem emotionale Überschrift. Wenn etwas zu unglaublich klingt, um wahr zu sein, ist es das oft auch. Man sollte immer das Impressum einer Webseite prüfen. Wer steckt dahinter? Gibt es eine Adresse, einen verantwortlichen Redakteur?' },
                { speaker: 'Moderator', line: 'Was hilft noch?' },
                { speaker: 'Sarah Kessler', line: 'Quellen prüfen! Wird diese Nachricht auch von anderen, seriösen Medien gemeldet? Oder nur auf einer unbekannten Blog-Seite? Wir müssen Medienkompetenz lernen: Nicht alles, was online steht, ist wahr. Und vor allem: Nicht alles sofort teilen.' },
              ],
              questions: [
                { id: 'g-b2h3q1_4', text: 'Was ist laut Frau Kessler die größte Gefahr bei "Fake News"?', options: ['a) Die einzelne Falschmeldung', 'b) Die Zerstörung des Vertrauens in klassische Medien', 'c) Dass Journalisten arbeitslos werden'], correctAnswer: 'b) Die Zerstörung des Vertrauens in klassische Medien' },
                { id: 'g-b2h3q2_4', text: 'Was ist ein typisches Warnsignal für "Fake News"?', options: ['a) Eine langweilige Überschrift', 'b) Eine sehr emotionale Überschrift', 'c) Ein fehlendes Datum'], correctAnswer: 'b) Eine sehr emotionale Überschrift' },
                { id: 'g-b2h3q3_4', text: 'Was sollte man auf einer Webseite immer prüfen?', options: ['a) Die Werbung', 'b) Die Anzahl der Klicks', 'c) Das Impressum'], correctAnswer: 'c) Das Impressum' },
                { id: 'g-b2h3q4_4', text: 'Was versteht man unter "Quellen prüfen"?', options: ['a) Nachsehen, ob auch seriöse Medien berichten.', 'b) Den Autor anzurufen.', 'c) Die Überschrift zu lesen.'], correctAnswer: 'a) Nachsehen, ob auch seriöse Medien berichten.' },
                { id: 'g-b2h3q5_4', text: 'Was bedeutet "Medienkompetenz"?', options: ['a) Zu wissen, wie man einen Computer benutzt.', 'b) Zu wissen, dass nicht alles online wahr ist.', 'c) Zu wissen, wie man "Fake News" programmiert.'], correctAnswer: 'b) Zu wissen, dass nicht alles online wahr ist.' },
                { id: 'g-b2h3q6_4', text: 'Was sollte man laut Frau Kessler nicht tun?', options: ['a) Seriösen Medien vertrauen.', 'b) Nachrichten sofort teilen.', 'c) Das Impressum lesen.'], correctAnswer: 'b) Nachrichten sofort teilen.' },
              ]
            },
            {
              id: 'g-b2-l4-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (6 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Kontrovers". Thema: "Digitale Nomaden" – der Traumjob? Frau Weigel, Sie leben so. Sie sind Grafikdesignerin und arbeiten mal von Thailand, mal von Portugal aus.' },
                { speaker: 'Frau Weigel', line: 'Ja, für mich ist es perfekt. Ich war noch nie ein Typ für ein 9-to-5-Büro. Ich liebe die Freiheit, meine Zeit selbst einzuteilen und neue Kulturen zu entdecken. Die Inspiration, die ich vom Reisen bekomme, ist auch super für meine Kreativität.' },
                { speaker: 'Moderator', line: 'Herr Dr. Koch, Sie sind Arbeitssoziologe. Sie sehen den Trend kritisch.' },
                { speaker: 'Dr. Koch', line: 'Ja, ich sehe die "Schattenseiten". Erstens: die soziale Isolation. Echte, tiefe Bindungen zu Kollegen oder an einem Wohnort sind kaum möglich. Zweitens: die Selbstausbeutung. Wer im Paradies am Strand sitzt, macht oft keine Pause. Die Grenze zwischen Arbeit und Freizeit verschwimmt total. Drittens: die Scheinselbstständigkeit. Viele sind "frei", aber arbeiten in Wahrheit nur für einen einzigen Auftraggeber, ohne soziale Absicherung wie Renten- oder Krankenversicherung.' },
                { speaker: 'Frau Weigel', line: 'Das ist eine Frage der Organisation. Ich bin ordentlich krankenversichert und achte auf meine Pausen. Man braucht Disziplin, das ist klar.' },
              ],
              questions: [
                { id: 'g-b2h4q1_4', text: 'Warum mag Frau Weigel ihren Lebensstil?', options: ['a) Weil sie einen 9-to-5-Job hat.', 'b) Weil sie die Freiheit und Inspiration schätzt.', 'c) Weil sie viel Geld verdient.'], correctAnswer: 'b) Weil sie die Freiheit und Inspiration schätzt.' },
                { id: 'g-b2h4q2_4', text: 'Was ist Herr Dr. Koch von Beruf?', options: ['a) Digitaler Nomade', 'b) Arbeitssoziologe', 'c) Grafiker'], correctAnswer: 'b) Arbeitssoziologe' },
                { id: 'g-b2h4q3_4', text: 'Was ist laut Dr. Koch ein Nachteil?', options: ['a) Die soziale Isolation.', 'b) Die schlechte Bezahlung.', 'c) Das viele Reisen.'], correctAnswer: 'a) Die soziale Isolation.' },
                { id: 'g-b2h4q4_4', text: 'Was meint Dr. Koch mit "Selbstausbeutung"?', options: ['a) Man arbeitet zu wenig.', 'b) Man macht zu viele Pausen.', 'c) Man arbeitet zu viel, ohne klare Grenzen.'], correctAnswer: 'c) Man arbeitet zu viel, ohne klare Grenzen.' },
                { id: 'g-b2h4q5_4', text: 'Was ist das Problem der "Scheinselbstständigkeit"?', options: ['a) Fehlende soziale Absicherung.', 'b) Man hat zu viele Auftraggeber.', 'c) Man ist nicht diszipliniert.'], correctAnswer: 'a) Fehlende soziale Absicherung.' },
                { id: 'g-b2h4q6_4', text: 'Was sagt Frau Weigel zu den Nachteilen?', options: ['a) Dass es sie nicht gibt.', 'b) Dass sie eine Frage der Disziplin und Organisation sind.', 'c) Dass sie wichtiger sind als die Vorteile.'], correctAnswer: 'b) Dass sie eine Frage der Disziplin und Organisation sind.' },
              ]
            },

            // --- LESEN (4 Parts, 30 Questions) ---
            {
              id: 'g-b2-l4-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (9 Fragen)',
              content: 'Lesen Sie die 4 Texte. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1: E-Mail vom Vermieter**\nBetreff: Modernisierungsankündigung\nSehr geehrte Frau Nowak, wie bereits mündlich besprochen, beginnen wir am 01.08. mit der energetischen Sanierung des Gebäudes. Es werden die Fassade gedämmt und neue Fenster eingesetzt. Dies führt zu einer Reduzierung Ihrer zukünftigen Heizkosten. Wir müssen Sie darauf hinweisen, dass es in den nächsten 6-8 Wochen zu Baulärm kommen wird. Des Weiteren müssen wir die Miete nach Abschluss der Arbeiten gemäß § 559 BGB anpassen.\n\n**Text 2: Buch-Rezension "Die Vermessung der Welt"**\nDaniel Kehlmanns Roman ist ein Geniestreich. Er erzählt parallel die Biografien der beiden Forscher Gauß und Humboldt. Der eine bereist die Welt, der andere bleibt zu Hause und berechnet sie. Kehlmanns Stil ist ironisch, witzig und intellektuell brillant. Ein Buch, das man zweimal liest: Einmal wegen der Geschichte und einmal wegen der Sprache.\n\n**Text 3: Zeitungsnotiz "Bürgerentscheid"**\nDie Bürger der Stadt Neustadt haben gestern in einem Bürgerentscheid gegen den Bau des neuen Einkaufszentrums auf der "Grünen Wiese" gestimmt. Die Initiative "Rettet die Wiese" feierte den Sieg. Sie hatten argumentiert, dass die Innenstadt-Geschäfte sterben würden und wertvolle Natur zerstört wird. Die Stadtverwaltung muss die Pläne nun stoppen.\n\n**Text 4: Interne Mitteilung "Datenschutz"**\nAus aktuellem Anlass (Phishing-Versuche) weisen wir alle Mitarbeiter an, ihre Passwörter zu ändern. Das neue Passwort muss mind. 12 Zeichen, Groß- und Kleinschreibung, Zahlen und Sonderzeichen enthalten. Ignorieren Sie E-Mails, die Sie zur Eingabe Ihres Passworts auffordern. Die IT-Abteilung wird Sie niemals per E-Mail nach Ihrem Passwort fragen.',
              questions: [
                { id: 'g-b2r1q1_4', text: 'Text 1: Was ist der Hauptgrund der E-Mail?', options: ['a) Eine Mieterhöhung', 'b) Eine Kündigung', 'c) Die Ankündigung von Bauarbeiten'], correctAnswer: 'c) Die Ankündigung von Bauarbeiten' },
                { id: 'g-b2r1q2_4', text: 'Text 1: Was ist eine Folge der Sanierung?', options: ['a) Niedrigere Heizkosten und höhere Miete', 'b) Nur niedrigere Heizkosten', 'c) Nur höhere Miete'], correctAnswer: 'a) Niedrigere Heizkosten und höhere Miete' },
                { id: 'g-b2r1q3_4', text: 'Text 2: Wie ist der Stil des Buches?', options: ['a) Nur ernst und wissenschaftlich', 'b) Ironisch und witzig', 'c) Langweilig und kompliziert'], correctAnswer: 'b) Ironisch und witzig' },
                { id: 'g-b2r1q4_4', text: 'Text 2: Der Rezensent empfiehlt...', options: ['a) das Buch nicht zu lesen.', 'b) das Buch nur einmal zu lesen.', 'c) das Buch zweimal zu lesen.'], correctAnswer: 'c) das Buch zweimal zu lesen.' },
                { id: 'g-b2r1q5_4', text: 'Text 3: Was war das Ergebnis des Bürgerentscheids?', options: ['a) Das Einkaufszentrum wird gebaut.', 'b) Das Einkaufszentrum wird nicht gebaut.', 'c) Die Innenstadt-Geschäfte müssen schließen.'], correctAnswer: 'b) Das Einkaufszentrum wird nicht gebaut.' },
                { id: 'g-b2r1q6_4', text: 'Text 3: Was war ein Argument der Initiative?', options: ['a) Die Zerstörung der Natur.', 'b) Zu hohe Kosten.', 'c) Zu wenig Parkplätze.'], correctAnswer: 'a) Die Zerstörung der Natur.' },
                { id: 'g-b2r1q7_4', text: 'Text 4: Was ist der Anlass der Mitteilung?', options: ['a) Neue Computer', 'b) Phishing-Versuche', 'c) Eine neue IT-Abteilung'], correctAnswer: 'b) Phishing-Versuche' },
                { id: 'g-b2r1q8_4', text: 'Text 4: Was soll man tun?', options: ['a) Der IT das Passwort mailen.', 'b) Auf Phishing-Mails antworten.', 'c) Das eigene Passwort ändern.'], correctAnswer: 'c) Das eigene Passwort ändern.' },
                { id: 'g-b2r1q9_4', text: 'Welcher Text beschreibt einen politischen/rechtlichen Prozess?', options: ['a) Text 1', 'b) Text 3', 'c) Text 2'], correctAnswer: 'b) Text 3' },
              ]
            },
            {
              id: 'g-b2-l4-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (8 Fragen)',
              content: 'Lesen Sie den Artikel. Füllen Sie die Lücken (1-8) mit den Sätzen (a-h).\n\n**Generation Z – Anders als gedacht**\n\nWenn man über die "Generation Z" spricht (geboren ca. 1997-2012), denken viele an "Digital Natives", (1) ___. Doch Studien zeichnen ein differenzierteres Bild. Diese Generation ist zwar mit dem Internet aufgewachsen, (2) ___. \n\nWas ist dieser Generation wirklich wichtig? Überraschenderweise: Sicherheit. (3) ___. Sie haben die Finanzkrise 2008 und die Unsicherheiten der Klimakrise miterlebt. (4) ___. Ein fester Job mit gutem Gehalt ist ihnen oft wichtiger als die "Selbstverwirklichung" im Job, (5) ___.\n\nAuch die Trennung von Arbeit und Freizeit ist ihnen heilig. (6) ___. Sie wollen nicht abends um 22 Uhr noch E-Mails beantworten. Wenn Feierabend ist, ist Feierabend. (7) ___. \n\nUnternehmen, die diese jungen Fachkräfte gewinnen wollen, müssen sich darauf einstellen. (8) ___. Sie müssen klare Strukturen, Sicherheit und eine echte Trennung von Beruf und Privatleben bieten.\n\n**Sätze:**\n(a) Das unterscheidet sie stark von den "Millennials" davor.\n(b) die ständig online sind und nicht mehr "normal" kommunizieren können.\n(c) Deswegen ist ihnen finanzielle Stabilität extrem wichtig.\n(d) Das "Work-Life-Blending" (Vermischung) der Millennials lehnen sie ab.\n(e) die für die Millennials davor so typisch war.\n(f) sie ist aber auch sehr kritisch gegenüber den negativen Seiten wie "Fake News" und "Cybermobbing".\n(g) Mit Tischkicker und Obstkorb allein kann man sie nicht mehr locken.\n(h) Im Gegensatz zu ihren Vorgängern, den "Millennials".',
              questions: [
                { id: 'g-b2r2q1_4', text: 'Lücke (1)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'b' },
                { id: 'g-b2r2q2_4', text: 'Lücke (2)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'f' },
                { id: 'g-b2r2q3_4', text: 'Lücke (3)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'h' },
                { id: 'g-b2r2q4_4', text: 'Lücke (4)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'c' },
                { id: 'g-b2r2q5_4', text: 'Lücke (5)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'e' },
                { id: 'g-b2r2q6_4', text: 'Lücke (6)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'd' },
                { id: 'g-b2r2q7_4', text: 'Lücke (7)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'a' },
                { id: 'g-b2r2q8_4', text: 'Lücke (8)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'g' },
              ]
            },
            {
              id: 'g-b2-l4-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten am Wochenende mit Freunden feiern und suchen eine Bar mit Live-Musik.\n2. Ihre Waschmaschine ist kaputt. Sie suchen eine günstige, gebrauchte als Ersatz.\n3. Sie interessieren sich für moderne Kunst und möchten eine Ausstellung besuchen.\n4. Sie suchen einen Job als Kellner am Wochenende.\n5. Sie möchten Spanisch lernen, haben aber nur vormittags Zeit.\n6. Sie wollen umziehen und suchen eine 4-Zimmer-Wohnung.\n\n**Anzeigen:**\n**a) Kunsthalle "ModernArt":** Neue Ausstellung: "Farben der Zukunft". Digitale Kunst und Installationen. Geöffnet: Di-So 10-18 Uhr. Eintritt: 12 €.\n\n**b) Sprachschule "Lingua":** Spanisch, Französisch, Englisch. Abendkurse (A1-B2): Mo/Mi 18-20 Uhr. Intensivkurse am Wochenende.\n\n**c) Café "Sonnenschein":** Wir suchen Verstärkung! Nette Kollegin für Service (Bedienung) gesucht. Arbeitszeit: Sa & So, 10-17 Uhr. Erfahrung nicht nötig. info@cafe-sonne.de\n\n**d) "Jazzkeller":** Der Treffpunkt für Musikfans. Jeden Freitag und Samstag ab 21 Uhr Live-Jazz. Cocktails & kleine Snacks. Freier Eintritt am Freitag!\n\n**e) Gebrauchtwaren-Hof:** Alles, was das Herz begehrt. Möbel, Kleidung, Elektrogeräte. Wir haben 5 geprüfte Waschmaschinen ab 80 €. Lieferung möglich.\n\n**f) Immobilien "Traumhaus":** Aktuell im Angebot: 3-Zimmer-Wohnung, Balkon, 80qm. 2-Zimmer-Appartement, zentral, 45qm. Rufen Sie uns an!\n\n**g) Restaurant "Bella Notte":** Wir suchen eine Küchenhilfe (m/w/d) für Abwasch und Vorbereitung. Arbeitszeit: Mo-Fr, 17-22 Uhr.\n\n**h) Fitness-Studio "Puls":** Trainieren rund um die Uhr. 24/7 geöffnet. Kurse: Yoga, Spinning, Boxen. Jetzt Probetraining vereinbaren!',
              questions: [
                { id: 'g-b2r3q1_4', text: 'Situation 1: Bar mit Live-Musik', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'd' },
                { id: 'g-b2r3q2_4', text: 'Situation 2: Gebrauchte Waschmaschine', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'e' },
                { id: 'g-b2r3q3_4', text: 'Situation 3: Ausstellung moderne Kunst', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'a' },
                { id: 'g-b2r3q4_4', text: 'Situation 4: Job als Kellner', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'c' },
                { id: 'g-b2r3q5_4', text: 'Situation 5: Spanischkurs am Vormittag', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'b' offers only evening/weekend courses
                { id: 'g-b2r3q6_4', text: 'Situation 6: 4-Zimmer-Wohnung', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'f' offers 2 and 3 rooms
              ]
            },
            {
              id: 'g-b2-l4-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Meinungsbeitrag. Kreuzen Sie an: Ja oder Nein.\n\n**Titel: E-Books oder gedruckte Bücher?**\n\nAls leidenschaftliche Leserin werde ich oft gefragt, was ich bevorzuge. Meine Antwort ist: beides! Ein E-Book-Reader ist auf Reisen unschlagbar. Hunderte Bücher in einem leichten Gerät – fantastisch. Ich kann die Schriftgröße anpassen und im Dunkeln lesen.\n\nAber wenn ich zu Hause bin, liebe ich das Gefühl eines echten Buches. Das Papier, der Geruch, das Umblättern. Es ist ein sinnliches Erlebnis, das kein Bildschirm ersetzen kann. Mein Bücherregal ist ein Teil meiner Identität.\n\nIch glaube nicht, dass das E-Book das gedruckte Buch ersetzen wird, so wie es manche vorhersagen. Ich glaube, sie werden parallel existieren. Es sind unterschiedliche Werkzeuge für unterschiedliche Situationen. Das E-Book für die schnelle Information und den Urlaub, das gedruckte Buch für den tiefen Genuss am Wochenende.',
              questions: [
                { id: 'g-b2r4q1_4', text: 'Die Autorin liest nicht gern.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q2_4', text: 'Sie findet E-Book-Reader auf Reisen sehr praktisch.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q3_4', text: 'Sie liest zu Hause lieber E-Books.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q4_4', text: 'Sie findet, ein E-Book-Reader bietet ein sinnliches Erlebnis.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q5_4', text: 'Sie glaubt, dass E-Books gedruckte Bücher ersetzen werden.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q6_4', text: 'Sie sieht E-Books und gedruckte Bücher als Konkurrenten.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' }, // Sie sagt "parallel existieren"
                { id: 'g-b2r4q7_4', text: 'Sie nutzt E-Books eher für den Urlaub.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-b2-l4-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Forumsbeitrag (ca. 150 Wörter)',
              content: 'Sie haben in einem Online-Magazin einen Artikel zum Thema "Sollte der öffentliche Nahverkehr (Bus & Bahn) kostenlos sein?" gelesen. Im Forum finden Sie folgende Meinung:\n\n**Meinung von "Umwelt-Fan":**\n"Ein kostenloser Nahverkehr wäre die beste Lösung für unsere Umweltprobleme. Alle würden das Auto stehen lassen, die Luft wäre sauberer und die Staus weg. Das kostet zwar viel Geld, aber die gesundheitlichen und ökologischen Vorteile sind viel größer."\n\n**Aufgabe:** Schreiben Sie einen Forumsbeitrag (ca. 150 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe für Ihre Haltung.\n- Beschreiben Sie die Situation in Ihrem Heimatland.\n- Nennen Sie Bedenken oder andere Möglichkeiten.',
            },
            {
              id: 'g-b2-l4-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (ca. 100 Wörter)',
              content: 'Sie haben vor zwei Wochen in einem Online-Shop ("Media-Welt") einen Laptop bestellt und bezahlt. Er ist aber immer noch nicht angekommen. Auf Ihre letzte E-Mail hat niemand geantwortet.\n\n**Aufgabe:** Schreiben Sie eine E-Mail (ca. 100 Wörter) an den Kundenservice.\n- Nennen Sie den Grund für Ihr Schreiben (Bestellnummer, Datum).\n- Beschreiben Sie das Problem (keine Lieferung, keine Antwort).\n- Setzen Sie eine Frist (z.B. 7 Tage) für die Lieferung.\n- Fordern Sie Ihr Geld zurück, falls die Frist nicht eingehalten wird.',
            },

            // --- SPRECHEN (2 Parts) ---
            {
              id: 'g-b2-l4-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Präsentation (Vortrag)',
              content: 'Sie sollen eine kurze Präsentation (ca. 4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Vor- und Nachteile der Globalisierung" oder "Bedeutung von Sport im modernen Leben").\n**Aufgabe:** Bereiten Sie eine Präsentation vor.\n- Stellen Sie das Thema und die Struktur vor.\n- Berichten Sie von persönlichen Erfahrungen oder der Situation in Ihrem Land.\n- Nennen Sie Vor- und Nachteile und Ihre eigene Meinung.\n- Beenden Sie die Präsentation mit einem Fazit.\nStarten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b2-l4-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Diskussion (Debatte)',
              content: 'Nach Ihrer Präsentation (Teil 1) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback zu seinem Vortrag und beginnen Sie eine Diskussion. Stellen Sie Fragen, äußern Sie Ihre eigene Meinung und reagieren Sie auf die Argumente des Bots.'
            },
            
            // --- B2 WÖRTSCHATZ (Reusing from g-b2-l1-v1) ---
            {
              id: 'g-b2-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B2',
              content: 'Wichtige Wörter für die B2-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-b2-l1
              ]
            },

            // --- B2 GRAMMATIK (Reusing from g-b2-l1-g1) ---
            {
              id: 'g-b2-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B2',
              content: 'Testen Sie Ihr Grammatikwissen für die B2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-b2-l1
              ]
            }
          ],
        },
//
// --- END OF g-b2-l4 ---
        {
          id: 'g-b2-l5',
          title: 'Modelltest 5: Übungssatz',
          estimatedTime: 190,
          isCompleted: false,
          activities: [
            // --- HÖREN (4 Parts) ---
            {
              id: 'g-b2-l5-h1',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 1 (8 Fragen)',
              content: 'Sie hören 4 kurze Gespräche (einmal). Zu jedem Gespräch gibt es zwei Aufgaben. Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Ansage', line: 'Text 1.' },
                { speaker: 'Frau', line: 'Guten Tag, ich rufe wegen Ihrer Wohnungsanzeige an. Die 3-Zimmer-Wohnung in der Schillerstraße.' },
                { speaker: 'Vermieter', line: 'Ah ja, guten Tag. Die ist noch zu haben.' },
                { speaker: 'Frau', line: 'Ich hätte eine Frage: Ist die Küche bereits mit Geräten ausgestattet, also Herd und Kühlschrank?' },
                { speaker: 'Vermieter', line: 'Nein, die Wohnung hat eine leere Einbauküche, aber ohne Geräte. Die müssten Sie selbst mitbringen. Dafür ist die Miete relativ günstig.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 2.' },
                { speaker: 'Mann 1', line: 'Also, ich weiß nicht, ob wir dieses Projekt wirklich annehmen sollten. Die Timeline ist extrem eng.' },
                { speaker: 'Mann 2', line: 'Ich sehe das auch als Herausforderung. Aber der Kunde ist strategisch wichtig. Wenn wir das schaffen, öffnet uns das Türen.' },
                { speaker: 'Mann 1', line: 'Aber wenn wir scheitern, weil die Zeit nicht reicht, schadet das unserem Ruf. Ich bin für ablehnen.' },
                { speaker: 'Mann 2', line: 'Lass uns einen Kompromiss finden: Wir nehmen es an, verhandeln aber über eine Verlängerung der Frist um zwei Wochen.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 3.' },
                { speaker: 'Patientin', line: 'Guten Tag, ich bin Frau Scheck. Ich habe morgen um 9 Uhr einen Termin zur Zahnreinigung, muss den aber leider absagen.' },
                { speaker: 'Praxis', line: 'Guten Tag, Frau Scheck. Schade. Bitte beachten Sie, dass wir Termine, die nicht 24 Stunden vorher abgesagt werden, privat in Rechnung stellen müssen.' },
                { speaker: 'Patientin', line: 'Oh, wirklich? Auch wenn ich krank bin? Ich habe eine starke Grippe.' },
                { speaker: 'Praxis', line: 'In dem Fall... schicken Sie uns bitte eine Kopie der Krankschreibung vom Arzt, dann machen wir natürlich eine Ausnahme.' },
                { speaker: 'Ansage', line: '---'},
                { speaker: 'Ansage', line: 'Text 4.' },
                { speaker: 'Moderator', line: 'Herr Dr. Lindner, Sie sind Zukunftsforscher. Wie werden wir in 20 Jahren reisen?' },
                { speaker: 'Dr. Lindner', line: 'Ich bin überzeugt, das individuelle Fliegen wird stark abnehmen. Es wird zu teuer und ist ökologisch nicht mehr vertretbar.' },
                { speaker: 'Moderator', line: 'Also gar kein Urlaub mehr?' },
                { speaker: 'Dr. Lindner', line: 'Doch, aber anders. Ich prognostiziere eine Renaissance der innereuropäischen Nachtzüge. Bequem über Nacht von Berlin nach Rom. Und für den Alltag werden autonome, elektrische "Shared-Taxis" das Privatauto in den Städten ersetzen.' },
              ],
              questions: [
                { id: 'g-b2h1q1_5', text: 'Text 1: Was ist das Problem mit der Küche?', options: ['a) Sie ist alt.', 'b) Sie hat keine Elektrogeräte.', 'c) Sie ist zu klein.'], correctAnswer: 'b) Sie hat keine Elektrogeräte.' },
                { id: 'g-b2h1q2_5', text: 'Text 1: Die Frau muss...', options: ['a) einen Herd und Kühlschrank kaufen.', 'b) eine höhere Miete zahlen.', 'c) eine andere Wohnung suchen.'], correctAnswer: 'a) einen Herd und Kühlschrank kaufen.' },
                { id: 'g-b2h1q3_5', text: 'Text 2: Mann 1 möchte das Projekt...', options: ['a) sofort annehmen.', 'b) nicht annehmen.', 'c) um zwei Wochen verlängern.'], correctAnswer: 'b) nicht annehmen.' },
                { id: 'g-b2h1q4_5', text: 'Text 2: Was ist der Kompromiss von Mann 2?', options: ['a) Das Projekt ablehnen.', 'b) Das Projekt annehmen, aber die Frist verlängern.', 'c) Das Projekt ohne Bezahlung machen.'], correctAnswer: 'b) Das Projekt annehmen, aber die Frist verlängern.' },
                { id: 'g-b2h1q5_5', text: 'Text 3: Was ist das Problem der Patientin?', options: ['a) Sie ist krank und muss den Termin absagen.', 'b) Sie will 24 Stunden vorher anrufen.', 'c) Sie hat kein Geld für die Rechnung.'], correctAnswer: 'a) Sie ist krank und muss den Termin absagen.' },
                { id: 'g-b2h1q6_5', text: 'Text 3: Die Patientin muss nicht bezahlen, wenn sie...', options: ['a) einen neuen Termin macht.', 'b) 24 Euro bezahlt.', 'c) eine Krankschreibung schickt.'], correctAnswer: 'c) eine Krankschreibung schickt.' },
                { id: 'g-b2h1q7_5', text: 'Text 4: Dr. Lindner glaubt, dass Fliegen...', options: ['a) billiger wird.', 'b) zunehmen wird.', 'c) abnehmen wird.'], correctAnswer: 'c) abnehmen wird.' },
                { id: 'g-b2h1q8_5', text: 'Text 4: Was wird laut Dr. Lindner das Privatauto ersetzen?', options: ['a) Nachtzüge', 'b) Mehr Flugzeuge', 'c) Geteilte autonome Taxis'], correctAnswer: 'c) Geteilte autonome Taxis' },
              ]
            },
            {
              id: 'g-b2-l5-h2',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 2 (10 Fragen)',
              content: 'Sie hören einen Vortrag (einmal). Kreuzen Sie an: Richtig oder Falsch.',
              dialogue: [
                { speaker: 'Rednerin', line: 'Guten Abend. Ich spreche heute über ein Thema, das uns alle betrifft: Lärm. Wir leben in einer unglaublich lauten Welt. Straßenverkehr, Baustellen, ständige Musik... Diese Dauerbeschallung ist nicht nur nervig, sie ist ein ernsthaftes Gesundheitsrisiko.' },
                { speaker: 'Rednerin', line: 'Was passiert bei Lärm? Der Körper reagiert mit Stress. Er schüttet Adrenalin aus. Der Blutdruck steigt, das Herz schlägt schneller. Das ist eine uralte Reaktion, die uns früher bei Gefahr geholfen hat. Heute ist der Lärm aber permanent.' },
                { speaker: 'Rednerin', line: 'Die Weltgesundheitsorganisation (WHO) warnt, dass Lärm nach der Luftverschmutzung das zweitgrößte umweltbedingte Gesundheitsrisiko in Europa ist. Chronischer Lärm kann zu Schlafstörungen, Lernschwierigkeiten bei Kindern und einem erhöhten Herzinfarkt-Risiko führen.' },
                { speaker: 'Rednerin', line: 'Besonders problematisch ist nächtlicher Lärm, zum Beispiel durch Flugzeuge oder Güterzüge. Wenn der Schlaf gestört wird, kann sich der Körper nicht regenerieren. Wir brauchen dringend leisere Technologien, aber auch mehr "Oasen der Ruhe" in unseren Städten – Parks, in denen man dem Lärm entfliehen kann. Und wir brauchen ein persönliches Bewusstsein: Muss die Musik so laut sein? Muss ich im Zug laut telefonieren?' },
              ],
              questions: [
                { id: 'g-b2h2q1_5', text: 'Die Rednerin findet Lärm nur nervig, aber nicht gefährlich.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q2_5', text: 'Bei Lärm reagiert der Körper mit Stress.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q3_5', text: 'Lärm senkt den Blutdruck.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q4_5', text: 'Laut WHO ist Lärm ein geringes Gesundheitsrisiko.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q5_5', text: 'Lärm kann zu Schlafstörungen führen.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q6_5', text: 'Lärm in der Nacht ist besonders problematisch.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q7_5', text: 'Nächtlicher Lärm hilft dem Körper bei der Regeneration.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q8_5', text: 'Die Rednerin fordert "Oasen der Ruhe" in Städten.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
                { id: 'g-b2h2q9_5', text: 'Die Rednerin findet lautes Telefonieren im Zug gut.', options: ['Richtig', 'Falsch'], correctAnswer: 'Falsch' },
                { id: 'g-b2h2q10_5', text: 'Luftverschmutzung ist laut WHO ein größeres Risiko als Lärm.', options: ['Richtig', 'Falsch'], correctAnswer: 'Richtig' },
              ]
            },
            {
              id: 'g-b2-l5-h3',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 3 (6 Fragen)',
              content: 'Sie hören ein Gespräch (einmal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderator', line: 'Willkommen zu "Wirtschaftswelt". Gast ist Frau Dr. Hanna Gerlach, Expertin für den Arbeitsmarkt. Frau Gerlach, wir erleben einen massiven Fachkräftemangel. Woran liegt das?' },
                { speaker: 'Dr. Gerlach', line: 'Das hat primär demografische Gründe. Die "Babyboomer"-Generation, also die geburtenstarken Jahrgänge, geht jetzt in Rente. Es rücken aber viel weniger junge Menschen nach. Es gibt also rein rechnerisch nicht genug Arbeitskräfte.' },
                { speaker: 'Moderator', line: 'In welchen Branchen ist es am schlimmsten?' },
                { speaker: 'Dr. Gerlach', line: 'Überall dort, wo eine spezielle Ausbildung nötig ist. Ganz akut im Handwerk – es fehlen Elektriker, Installateure. Aber auch in der IT und ganz dramatisch in der Pflege. Wir finden kaum noch qualifizierte Pflegekräfte.' },
                { speaker: 'Moderator', line: 'Was sind die Lösungen? Mehr Zuwanderung?' },
                { speaker: 'Dr. Gerlach', line: 'Geregelte Zuwanderung von Fachkräften ist ein wichtiger Baustein, ja. Aber wir müssen auch im Inland mehr tun. Wir müssen die "stille Reserve" heben. Das heißt, mehr Frauen den Einstieg in Vollzeit erleichtern, z.B. durch bessere Kinderbetreuung. Und wir müssen ältere Arbeitnehmer länger im Beruf halten, z.B. durch flexiblere Rentenmodelle.' },
              ],
              questions: [
                { id: 'g-b2h3q1_5', text: 'Was ist der Hauptgrund für den Fachkräftemangel?', options: ['a) Die Leute wollen nicht mehr arbeiten.', 'b) Die "Babyboomer" gehen in Rente.', 'c) Die Löhne sind zu hoch.'], correctAnswer: 'b) Die "Babyboomer" gehen in Rente.' },
                { id: 'g-b2h3q2_5', text: 'Was bedeutet "demografische Gründe"?', options: ['a) Gründe, die mit der Wirtschaft zu tun haben.', 'b) Gründe, die mit der Bevölkerungsstruktur zu tun haben.', 'c) Gründe, die mit der Zuwanderung zu tun haben.'], correctAnswer: 'b) Gründe, die mit der Bevölkerungsstruktur zu tun haben.' },
                { id: 'g-b2h3q3_5', text: 'Wo ist der Mangel laut Frau Gerlach NICHT akut?', options: ['a) Im Handwerk', 'b) In der IT', 'c) Im Marketing'], correctAnswer: 'c) Im Marketing' }, // Implizit, da IT und Handwerk genannt werden
                { id: 'g-b2h3q4_5', text: 'Was ist ein Baustein der Lösung?', options: ['a) Weniger Zuwanderung', 'b) Geregelte Zuwanderung', 'c) Rente mit 60'], correctAnswer: 'b) Geregelte Zuwanderung' },
                { id: 'g-b2h3q5_5', text: 'Was versteht man unter der "stillen Reserve"?', options: ['a) Ältere Arbeitnehmer', 'b) Frauen, die nicht Vollzeit arbeiten.', 'c) Ausländische Fachkräfte.'], correctAnswer: 'b) Frauen, die nicht Vollzeit arbeiten.' },
                { id: 'g-b2h3q6_5', text: 'Was könnte älteren Arbeitnehmern helfen?', options: ['a) Bessere Kinderbetreuung', 'b) Flexiblere Rentenmodelle', 'c) Eine höhere Rente'], correctAnswer: 'b) Flexiblere Rentenmodelle' },
              ]
            },
            {
              id: 'g-b2-l5-h4',
              type: ActivityType.Listening,
              title: 'HÖREN - Teil 4 (6 Fragen)',
              content: 'Sie hören eine Diskussion im Radio (zweimal). Kreuzen Sie die richtige Antwort (a, b oder c) an.',
              dialogue: [
                { speaker: 'Moderatorin', line: 'Willkommen zu "Klartext". Thema: "Tiere im Zirkus". Ist das noch zeitgemäß? Herr Krone, Sie sind Zirkusdirektor.' },
                { speaker: 'Herr Krone', line: 'Guten Tag. Ein Zirkus ohne Tiere ist kein Zirkus. Unsere Elefanten und Pferde sind Familienmitglieder. Sie werden bei uns geboren, wir trainieren sie mit Respekt. Unsere Tiere haben große Ställe und werden tierärztlich bestens versorgt. Den Tieren geht es gut.' },
                { speaker: 'Moderatorin', line: 'Frau Dr. Haas, Sie sind Tierschützerin und sehen das anders.' },
                { speaker: 'Frau Dr. Haas', line: 'Absolut. Ein Wildtier wie ein Elefant gehört nicht in einen LKW und in eine Manege. Das ständige Reisen ist purer Stress. Die Dressur funktioniert oft nur mit Zwang. Ein "artgerechtes" Leben ist im Zirkus unmöglich. Wir fordern ein komplettes Wildtierverbot im Zirkus. Akrobatik und Clowns sind tolle Kunst, aber Wildtiere sind es nicht.' },
                { speaker: 'Herr Krone', line: 'Das ist ein Vorurteil! Unsere Tiere machen die Tricks gern. Kommen Sie vorbei und schauen Sie sich unsere Haltung an.' },
                { speaker: 'Frau Dr. Haas', line: 'Ein Löwe, der durch einen Reifen springt, tut das nicht "gern". Er tut es, weil er muss. Das ist nicht mehr zeitgemäß.' },
              ],
              questions: [
                { id: 'g-b2h4q1_5', text: 'Was ist Herrn Krones Meinung?', options: ['a) Tiere gehören nicht in den Zirkus.', 'b) Nur Clowns sind wichtig.', 'c) Ein Zirkus braucht Tiere.'], correctAnswer: 'c) Ein Zirkus braucht Tiere.' },
                { id: 'g-b2h4q2_5', text: 'Wie werden die Tiere laut Herrn Krone behandelt?', options: ['a) Schlecht und mit Zwang.', 'b) Gut und mit Respekt.', 'c) Sie sind nur für die Show da.'], correctAnswer: 'b) Gut und mit Respekt.' },
                { id: 'g-b2h4q3_5', text: 'Was ist Frau Dr. Haas\' Hauptargument GEGEN Tiere im Zirkus?', options: ['a) Die Tiere sind zu teuer.', 'b) Das ständige Reisen und die Dressur sind Stress.', 'c) Die Clowns sind nicht lustig.'], correctAnswer: 'b) Das ständige Reisen und die Dressur sind Stress.' },
                { id: 'g-b2h4q4_5', text: 'Was fordert Frau Dr. Haas?', options: ['a) Ein Verbot von Wildtieren im Zirkus.', 'b) Ein Verbot aller Tiere, auch Pferde.', 'c) Ein Verbot von Akrobatik.'], correctAnswer: 'a) Ein Verbot von Wildtieren im Zirkus.' },
                { id: 'g-b2h4q5_5', text: 'Was sagt Herr Krone über die Tricks?', options: ['a) Die Tiere machen sie gern.', 'b) Es ist Zwang.', 'c) Es ist gefährlich.'], correctAnswer: 'a) Die Tiere machen sie gern.' },
                { id: 'g-b2h4q6_5', text: 'Was ist Frau Dr. Haas\' Meinung zu einem springenden Löwen?', options: ['a) Er tut es gern.', 'b) Er tut es aus Zwang.', 'c) Er ist ein Familienmitglied.'], correctAnswer: 'b) Er tut es aus Zwang.' },
              ]
            },

            // --- LESEN (4 Parts, 30 Questions) ---
            {
              id: 'g-b2-l5-r1',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 1 (9 Fragen)',
              content: 'Lesen Sie die 4 Texte. Kreuzen Sie die richtige Antwort (a, b oder c) an.\n\n**Text 1: Job-Anzeige "Start-Up GmbH"**\nWir suchen ab sofort eine/n "Feel-Good-Manager/in". Ja, richtig gelesen. Deine Aufgabe: Du sorgst für die gute Stimmung im Team. Du organisierst Team-Events, kümmerst dich um gesunde Snacks, hast ein offenes Ohr für Probleme und machst unser Büro zu einem Ort, an dem man gern arbeitet. Kreativität und Empathie sind wichtiger als ein formeller Abschluss.\n\n**Text 2: Buch-Rezension "Der Dativ ist dem Genitiv sein Tod"**\nBastian Sicks humorvolle Bücher über Grammatikfehler sind Bestseller. Sie sind unterhaltsam und man lernt nebenbei viel über die deutsche Sprache. Sprachwissenschaftler kritisieren die Bücher jedoch oft. Sie sagen, Sick sei zu normativ. Er behandle Sprache wie eine starre Regel, dabei sei sie lebendig und müsse sich verändern dürfen (z.B. der Genitiv stirbt aus). Wer aber einfach Spaß an der Sprache hat, wird die Bücher lieben.\n\n**Text 3: Zeitungsnotiz "Klimakleber"**\nDie Aktionen der "Letzten Generation" polarisieren stark. Während die Aktivisten sagen, der zivile Ungehorsam (z.B. Festkleben auf Straßen) sei nötig, um auf die Klimakrise aufmerksam zu machen, ist die Mehrheit der Bevölkerung genervt. Eine aktuelle Umfrage zeigt: 85% der Deutschen lehnen diese Form des Protests ab. Sie finden, es schade dem Anliegen mehr, als es nützt, weil es die Autofahrer gegen den Klimaschutz aufbringt.\n\n**Text 4: Interne Mitteilung "Dienstreisen"**\nAn: Alle Abteilungsleiter\nBetreff: Genehmigung von Dienstreisen\nAus Kostengründen und im Sinne der Nachhaltigkeit müssen wir die Richtlinien für Dienstreisen verschärfen. Ab sofort gilt: Reisen unter 500 km (einfache Strecke) sind zwingend mit der Bahn durchzuführen. Flüge sind hier nicht mehr gestattet. Für jede Reise muss vorab ein digitaler Antrag gestellt werden, der den ökonomischen und ökologischen Nutzen begründet.',
              questions: [
                { id: 'g-b2r1q1_5', text: 'Text 1: Was ist die Hauptaufgabe des "Feel-Good-Managers"?', options: ['a) Die Buchhaltung machen.', 'b) Für gute Stimmung im Team sorgen.', 'c) Snacks einkaufen.'], correctAnswer: 'b) Für gute Stimmung im Team sorgen.' },
                { id: 'g-b2r1q2_5', text: 'Text 1: Was ist die wichtigste Qualifikation?', options: ['a) Ein Master-Abschluss', 'b) Empathie und Kreativität', 'c) Pünktlichkeit'], correctAnswer: 'b) Empathie und Kreativität' },
                { id: 'g-b2r1q3_5', text: 'Text 2: Was ist die Kritik der Sprachwissenschaftler?', options: ['a) Das Buch sei zu langweilig.', 'b) Das Buch sei zu wissenschaftlich.', 'c) Der Autor sei zu streng mit den Regeln.'], correctAnswer: 'c) Der Autor sei zu streng mit den Regeln.' },
                { id: 'g-b2r1q4_5', text: 'Text 2: Wie ist die Sprache laut Kritikern?', options: ['a) Lebendig und flexibel', 'b) Tot und altmodisch', 'c) Der Genitiv ist wichtiger als der Dativ'], correctAnswer: 'a) Lebendig und flexibel' },
                { id: 'g-b2r1q5_5', text: 'Text 3: Was ist "ziviler Ungehorsam" in diesem Text?', options: ['a) Eine Demonstration', 'b) Das Festkleben auf Straßen', 'c) Eine Umfrage'], correctAnswer: 'b) Das Festkleben auf Straßen' },
                { id: 'g-b2r1q6_5', text: 'Text 3: Wie ist die Meinung der Mehrheit der Deutschen?', options: ['a) Sie unterstützen den Protest.', 'b) Sie lehnen diese Protestform ab.', 'c) Sie sind neutral.'], correctAnswer: 'b) Sie lehnen diese Protestform ab.' },
                { id: 'g-b2r1q7_5', text: 'Text 4: Was ist der Grund für die neuen Regeln?', options: ['a) Kosten und Nachhaltigkeit', 'b) Die Bahn ist schneller.', 'c) Die Mitarbeiter reisen zu viel.'], correctAnswer: 'a) Kosten und Nachhaltigkeit' },
                { id: 'g-b2r1q8_5', text: 'Text 4: Welche Regel gilt für Reisen unter 500 km?', options: ['a) Man muss fliegen.', 'b) Man muss die Bahn nehmen.', 'c) Sie sind verboten.'], correctAnswer: 'b) Man muss die Bahn nehmen.' },
                { id: 'g-b2r1q9_5', text: 'Welcher Text kritisiert eine Form des Protests?', options: ['a) Text 1', 'b) Text 3', 'c) Text 4'], correctAnswer: 'b) Text 3' },
              ]
            },
            {
              id: 'g-b2-l5-r2',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 2 (8 Fragen)',
              content: 'Lesen Sie den Artikel. Füllen Sie die Lücken (1-8) mit den Sätzen (a-h).\n\n**Das "Duale Studium" – Der perfekte Karrierestart?**\n\nFür viele Abiturienten ist die Wahl schwer: Direkt Geld verdienen mit einer Ausbildung? (1) ___. Das "Duale Studium" verspricht, beides zu verbinden. Doch was ist das genau?\n\nDas Modell ist eine Kombination aus praktischer Arbeit in einem Unternehmen und theoretischem Studium an einer Hochschule. (2) ___. Man wechselt alle paar Monate zwischen Betrieb und Hörsaal. (3) ___. Sie erhalten vom Unternehmen eine Vergütung, die oft ausreicht, um die Lebenshaltungskosten zu decken. \n\nDie Vorteile sind klar: (4) ___. Und die Übernahmechancen nach dem Studium sind extrem hoch, (5) ___.\n\n(6) ___. Die Belastung ist enorm. Während "normale" Studenten in den Semesterferien frei haben, (7) ___. Für ein Privatleben bleibt da oft wenig Zeit. (8) ___. Wer aber Disziplin und Ehrgeiz mitbringt, hat mit dem Dualen Studium einen exzellenten Start ins Berufsleben.\n\n**Sätze:**\n(a) weil die Firmen ihre eigenen Leute ausbilden.\n(b) Die Studenten sind also finanziell unabhängig.\n(c) arbeiten die dualen Studenten im Unternehmen weiter.\n(d) Der größte Vorteil ist die wertvolle Praxiserfahrung.\n(e) Es ist kein Modell für jeden.\n(f) Oder doch lieber ein theoretisches Studium an der Uni?\n(g) Man ist also gleichzeitig Angestellter und Student.\n(h) Aber es gibt auch Schattenseiten.',
              questions: [
                { id: 'g-b2r2q1_5', text: 'Lücke (1)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'f' },
                { id: 'g-b2r2q2_5', text: 'Lücke (2)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'g' },
                { id: 'g-b2r2q3_5', text: 'Lücke (3)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'b' },
                { id: 'g-b2r2q4_5', text: 'Lücke (4)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'd' },
                { id: 'g-b2r2q5_5', text: 'Lücke (5)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'a' },
                { id: 'g-b2r2q6_5', text: 'Lücke (6)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'h' },
                { id: 'g-b2r2q7_5', text: 'Lücke (7)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'c' },
                { id: 'g-b2r2q8_5', text: 'Lücke (8)', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], correctAnswer: 'e' },
              ]
            },
            {
              id: 'g-b2-l5-r3',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 3 (6 Fragen)',
              content: 'Lesen Sie die Situationen und die Anzeigen. Welche Anzeige passt zu welcher Situation? Es gibt nicht für jede Situation eine passende Anzeige.\n\n**Situationen:**\n1. Sie möchten sich einen Hund anschaffen und suchen einen seriösen Züchter für Golden Retriever.\n2. Sie suchen einen Kurs, in dem Sie lernen, wie man professionell kocht (französische Küche).\n3. Sie interessieren sich für die Geschichte des 20. Jahrhunderts in Deutschland, besonders für die Zeit der DDR.\n4. Sie suchen eine neue, anspruchsvolle Sportart und möchten gern Klettern ausprobieren.\n5. Sie möchten am Wochenende einen Ausflug machen und suchen eine Mitfahrgelegenheit nach Hamburg.\n6. Sie haben einen Hund und suchen einen Park, in dem dieser frei laufen darf.\n\n**Anzeigen:**\n**a) "IT-Academy":** Werden Sie Web-Entwickler! Abendkurs "HTML, CSS & JavaScript" (6 Monate). Vorkenntnisse nicht erforderlich. Start: 01.09.\n\n**b) "Boulder-Welt":** Klettern ohne Seil! Entdecke den Trendsport Bouldern. Einführungskurse jeden Samstag um 14 Uhr. Kein Partner nötig. Einfach vorbeikommen!\n\n**c) "Mitfahrzentrale.de":** Biete Fahrt: Fr, 17 Uhr, Berlin -> Hamburg, 2 Plätze frei, 20 €. Suche Fahrt: So, ab 18 Uhr, Hamburg -> Berlin. \n\n**d) "DDR Museum":** Erleben Sie den Alltag in der DDR! Fahren Sie Trabi, sitzen Sie in einer Plattenbau-Wohnung. Interaktiv und spannend. Leider ist unser Museum nicht barrierefrei (kein Aufzug).\n\n**e) "Naturhistorisches Museum":** Entdecken Sie Dinosaurier und die Evolution! Ein Erlebnis für die ganze Familie. Unser Haus ist vollständig barrierefrei zugänglich (Rampen, Aufzüge).\n\n**f) Grünflächenamt informiert:** Neuer Hundelaufplatz eröffnet! Im Volkspark West gibt es ab sofort eine 3000qm große, eingezäunte Wiese, auf der Hunde ohne Leine spielen dürfen.\n\n**g) "Hunde-Nothilfe e.V.":** Geben Sie einem Tier ein Zuhause! Wir vermitteln Hunde jeden Alters aus dem Tierschutz (keine Zucht!). Alle Tiere sind geimpft. Besuchen Sie uns im Tierheim.\n\n**h) "Sterne-Küche":** Lernen Sie kochen wie ein Profi. Kurs "Französische Patisserie" am Wochenende. Noch 2 Plätze frei!',
              questions: [
                { id: 'g-b2r3q1_5', text: 'Situation 1: Hundezüchter', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'X' }, // 'g' is Tierschutz, not Züchter
                { id: 'g-b2r3q2_5', text: 'Situation 2: Kochkurs Französisch', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'h' },
                { id: 'g-b2r3q3_5', text: 'Situation 3: DDR-Geschichte', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'd' },
                { id: 'g-b2r3q4_5', text: 'Situation 4: Klettern ausprobieren', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'b' },
                { id: 'g-b2r3q5_5', text: 'Situation 5: Mitfahrgelegenheit nach Hamburg', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'c' },
                { id: 'g-b2r3q6_5', text: 'Situation 6: Hund ohne Leine', options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'X'], correctAnswer: 'f' },
              ]
            },
            {
              id: 'g-b2-l5-r4',
              type: ActivityType.Reading,
              title: 'LESEN - Teil 4 (7 Fragen)',
              content: 'Lesen Sie den Meinungsbeitrag. Kreuzen Sie an: Ja oder Nein.\n\n**Titel: Sollen alle Studenten BAföG (Staatliche Studienhilfe) bekommen?**\n\n**Beitrag von "StudentinA":**\nIch bin klar dafür, dass BAföG elternunabhängig gezahlt wird. Es kann nicht sein, dass mein Recht auf Bildung vom Gehalt meiner Eltern abhängt. Meine Eltern verdienen "zu gut", also bekomme ich kein BAföG. Sie wollen mich aber nicht voll unterstützen. Ergebnis: Ich muss 30 Stunden pro Woche neben dem Studium jobben. Darunter leidet mein Studium enorm. Bildung muss für jeden zugänglich sein, nicht nur für reiche Kinder.\n\n**Beitrag von "Steuerzahler":**\nIch bin dagegen. Warum soll die Allgemeinheit für Studenten aufkommen, deren Eltern gut verdienen? Das ist ungerecht. Ein Studium ist eine private Investition in die eigene Zukunft, die sich später durch ein hohes Gehalt auszahlt. Wer studieren will, kann einen Studienkredit aufnehmen. Das Geld des Staates sollte lieber in Schulen und Kindergärten fließen, wo es alle erreicht, nicht nur die 10% Akademiker.',
              questions: [
                { id: 'g-b2r4q1_5', text: 'Bekommt "StudentinA" BAföG?', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q2_5', text: 'Sie muss viel arbeiten, weil ihre Eltern sie nicht unterstützen wollen.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q3_5', text: 'Sie findet, BAföG sollte vom Gehalt der Eltern abhängen.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q4_5', text: 'Ist "Steuerzahler" für elternunabhängiges BAföG?', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
                { id: 'g-b2r4q5_5', text: 'Er findet ein Studium eine private Investition.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q6_5', text: 'Er schlägt vor, dass Studenten Kredite aufnehmen.', options: ['Ja', 'Nein'], correctAnswer: 'Ja' },
                { id: 'g-b2r4q7_5', text: 'Er findet, der Staat sollte das Geld besser in Universitäten investieren.', options: ['Ja', 'Nein'], correctAnswer: 'Nein' },
              ]
            },

            // --- SCHREIBEN (2 Parts) ---
            {
              id: 'g-b2-l5-w1',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 1: Forumsbeitrag (ca. 150 Wörter)',
              content: 'Sie haben in einem Online-Magazin einen Artikel zum Thema "Home-Office – Fluch oder Segen?" gelesen. Im Forum finden Sie folgende Meinung:\n\n**Meinung von "Büro-Fan":**\n"Ich hasse Home-Office. Man vereinsamt total. Der schnelle Austausch mit Kollegen fehlt, die Ideenfindung leidet. Außerdem verschwimmt die Grenze zur Freizeit. Ich arbeite lieber im Büro, wo ich nach Feierabend die Tür zumachen kann und wirklich frei habe."\n\n**Aufgabe:** Schreiben Sie einen Forumsbeitrag (ca. 150 Wörter).\n- Äußern Sie Ihre Meinung (zustimmen/ablehnen).\n- Nennen Sie Gründe für Ihre Haltung.\n- Beschreiben Sie Ihre eigenen Erfahrungen oder die Situation in Ihrem Land.\n- Nennen Sie Vorteile/Nachteile der jeweils anderen Arbeitsform.',
            },
            {
              id: 'g-b2-l5-w2',
              type: ActivityType.Writing,
              title: 'SCHREIBEN - Teil 2: Formelle E-Mail (ca. 100 Wörter)',
              content: 'Sie haben sich an einer Universität für einen Masterstudiengang beworben. Sie haben nun eine Zusage erhalten, müssen sich aber bis zum 15.08. immatrikulieren (einschreiben). Sie sind jedoch bis zum 20.08. im Ausland und können nicht persönlich vorbeikommen.\n\n**Aufgabe:** Schreiben Sie eine E-Mail (ca. 100 Wörter) an das Studierendensekretariat.\n- Bedanken Sie sich für die Zusage.\n- Erklären Sie das Problem (im Ausland, Frist).\n- Fragen Sie, ob eine Immatrikulation per Post möglich ist.\n- Bitten Sie um eine schnelle Antwort.',
            },

            // --- SPRECHEN (2 Parts) ---
            {
              id: 'g-b2-l5-s1',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 1: Präsentation (Vortrag)',
              content: 'Sie sollen eine kurze Präsentation (ca. 4 Minuten) zu einem Thema halten. Wählen Sie ein Thema aus (z.B. "Extremsport – Faszination oder Wahnsinn?" oder "Bedeutung von lebenslangem Lernen").\n**Aufgabe:** Bereiten Sie eine Präsentation vor.\n- Stellen Sie das Thema und die Struktur vor.\n- Berichten Sie von persönlichen Erfahrungen oder der Situation in Ihrem Land.\n- Nennen Sie Vor- und Nachteile und Ihre eigene Meinung.\n- Beenden Sie die Präsentation mit einem Fazit.\nStarten Sie die Konversation, um Ihre Präsentation zu halten.'
            },
            {
              id: 'g-b2-l5-s2',
              type: ActivityType.Conversation,
              title: 'SPRECHEN - Teil 2: Diskussion (Debatte)',
              content: 'Nach Ihrer Präsentation (Teil 1) stellt der Bot Ihnen eine Frage dazu. Antworten Sie darauf.\nDanach hält der Bot eine (kurze) Präsentation zu einem anderen Thema.\n**Aufgabe:** Hören Sie zu, geben Sie dem Bot Feedback zu seinem Vortrag und beginnen Sie eine Diskussion. Stellen Sie Fragen, äußern Sie Ihre eigene Meinung und reagieren Sie auf die Argumente des Bots.'
            },
            
            // --- B2 WÖRTSCHATZ (Reusing from g-b2-l1-v1) ---
            {
              id: 'g-b2-l1-v1', // Reusing the same ID so progress is shared
              type: ActivityType.Vocabulary,
              title: 'Prüfungsrelevanter Wortschatz B2',
              content: 'Wichtige Wörter für die B2-Prüfung, sortiert nach Themen.',
              vocabulary: [ 
                // Vocabulary list is defined in g-b2-l1
              ]
            },

            // --- B2 GRAMMATIK (Reusing from g-b2-l1-g1) ---
            {
              id: 'g-b2-l1-g1', // Reusing the same ID so progress is shared
              type: ActivityType.Grammar,
              title: 'Prüfungsrelevante Grammatik B2',
              content: 'Testen Sie Ihr Grammatikwissen für die B2-Prüfung. Wählen Sie die richtige Antwort.',
              questions: [
                // Grammar questions are defined in g-b2-l1
              ]
            }
          ],
        },
//
// --- END OF g-b2-l5 ---
      ]
    }
  ]
};
//
// --- MERGE GOETHE DATA INTO MOCK_COURSES ---
// This code automatically converts the GOETHE_DATA into the Course[] format
// and adds it to the MOCK_COURSES list.
//

const goetheCourses: Course[] = GOETHE_DATA.levels.map((levelData) => ({
  id: `goethe-${levelData.level.toLowerCase()}`,
  level: levelData.level,
  title: levelData.title,
  description: levelData.description,
  progress: 0, // Default progress
  modules: [
    {
      id: `${levelData.level.toLowerCase()}-m1`,
      title: 'Modelltests',
      progress: 0,
      lessons: levelData.lessons,
    },
  ],
}));

// Add the new Goethe courses to the existing MOCK_COURSES
MOCK_COURSES.push(...goetheCourses);