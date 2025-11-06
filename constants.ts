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