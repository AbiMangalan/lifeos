const scheduleData = [
  {
    phase: "Month 1: The Clay Ecosystem & MoveMates Partner Discovery",
    weeks: [
      {
        weekNumber: 1,
        title: "Deconstructing the GTM Framework & UK Local Data",
        days: [
          { day: "Monday", type: "Active Building", task: "Enroll in Clay 101. Define MoveMates ICP (60 mins).", description: "Start Clay 101. Shift your mindset to B2B Partnerships for MoveMates.", instructions: ["Intro to Clay 101: FETE & Jigsaw (10m)", "Define ICP: UK Estate Agents, Storage Facilities, Furniture Stores.", "Understand 'Signal-based selling' (e.g., an agency opening a new branch).", "Finding Companies & People in Clay (14m)"], resources: [{title: "Clay 101: GTM Automation Course", url: "https://university.clay.com"}] },
          { day: "Tuesday", type: "Active Building", task: "Continue Clay 101: MoveMates Google Maps Scraping (60 mins).", description: "Use Clay's native integrations to build a localized list of UK partners.", instructions: ["Watch Finding Businesses with Google Maps (7m).", "In Clay, run a Google Maps query for 'Estate Agents in Manchester, UK'.", "Run a query for 'Self Storage in Leeds, UK'.", "Enriching Company and People Data (16m)"], resources: [{title: "Functions & FETE Framework", url: "https://university.clay.com"}] },
          { day: "Wednesday", type: "Active Building", task: "Finish Clay 101: Transformations & AI Formulas (60 mins).", description: "Clean the UK data you extracted.", instructions: ["Watch Clean & Normalize Data (6m).", "Transforming with AI Formulas (7m).", "Use AI formulas to clean messy UK agency names (e.g., turning 'Foxtons Lettings Ltd.' into just 'Foxtons')."], resources: [{title: "Clay Transformations Guide", url: "https://university.clay.com"}] },
          { day: "Thursday", type: "Execution", task: "MoveMates Execution: Partner Triggers & Filtering (60 mins).", description: "Filter your list for high-value targets.", instructions: ["Filter out any businesses with low Google Maps review counts (focus on established agencies).", "Prompt Claygent to scan agency websites for keywords like 'student accommodation' or 'lettings'.", "Filter the list to find people with 'Branch Manager' or 'Director' in their titles."] },
          { day: "Friday", type: "Passive Absorption", task: "Watch Loom teardowns from Ritu Maurya's Starter Kit (30 mins).", description: "Observe how senior operators deconstruct workflows.", instructions: ["Watch Part 1: https://www.loom.com/share/c7616ee7ea3746f084233156b61e943f", "Watch Part 2: https://www.loom.com/share/816c17ea7c2547949fd1b80fd24f298d"], resources: [{title: "Loom Teardown Part 1", url: "https://www.loom.com/share/c7616ee7ea3746f084233156b61e943f"}, {title: "Loom Teardown Part 2", url: "https://www.loom.com/share/816c17ea7c2547949fd1b80fd24f298d"}] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Foundation Models", description: "Focus on your IITJ classes and Databricks Generative AI course.", instructions: ["Study foundation models and basic prompt engineering in Databricks.", "Mentally map how LLMs summarize complex CRM data or unstructured text."] }
        ]
      },
      {
        weekNumber: 2,
        title: "MoveMates Advanced Outbound & AI Scraping",
        days: [
          { day: "Monday", type: "Active Building", task: "Growth Engine X Course & Offer Creation (60 mins).", description: "Learn how to write B2B partnership emails.", instructions: ["Watch Eric Nowoslawski's Intro and strategy videos.", "Draft the MoveMates Offer: Why should an estate agent partner with you? (e.g., referral kickbacks, reliable tenant experience)."], resources: [{title: "Growth Engine X Outbound Course", url: "https://www.youtube.com/playlist?list=PLR-YIUoB3G0zzR3yIQWvzfNHWmxgQJMDE"}] },
          { day: "Tuesday", type: "Active Building", task: "Build a UK Email Waterfall in Clay (60 mins).", description: "Find the contact info for the Branch Managers.", instructions: ["Watch 'Enrich People (Waterfalls)' on Clay University.", "Build a 3-step waterfall (e.g., Dropcontact, Hunter, Prospeo).", "Test it on your list of Estate Agent Managers to find valid B2B emails."] },
          { day: "Wednesday", type: "Execution", task: "MoveMates Execution: Programmatic Partner Copy (90 mins).", description: "Use AI to write the outreach.", instructions: ["Add an AI Formula node to your Clay table.", "Prompt the LLM: 'Write a 2-sentence email opener mentioning their specific agency name and how many Google reviews they have, offering a reliable moving partner for their tenants.'"] },
          { day: "Thursday", type: "Execution", task: "Finalize MoveMates List & Record Loom (60 mins).", description: "Export the data and build your portfolio.", instructions: ["Set up a free Smartlead/Instantly trial and webhook.", "Push your enriched UK partners and AI copy via HTTP Request node to the email platform.", "Record a 3-5 min Loom explaining this MoveMates B2B architecture and post to LinkedIn."] },
          { day: "Friday", type: "Passive Absorption", task: "Watch Ritu's Loom Parts 3 & 4 (30 mins).", description: "Continue learning from expert teardowns.", instructions: ["Watch Part 3: https://www.loom.com/share/8720fdcad12047bdb91bc93963b95c21", "Watch Part 4: https://www.loom.com/share/fa366886598b4bafbb3079d199070ef1"], resources: [{title: "Loom Teardown Part 3", url: "https://www.loom.com/share/8720fdcad12047bdb91bc93963b95c21"}, {title: "Loom Teardown Part 4", url: "https://www.loom.com/share/fa366886598b4bafbb3079d199070ef1"}] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Advanced Prompt Design", description: "Integrate Databricks course with GTM context.", instructions: ["Focus on advanced prompt design and few-shot prompting.", "Create prompts that instruct an LLM to generate highly personalized B2B cold emails based on unstructured company data."] }
        ]
      },
      {
        weekNumber: 3,
        title: "n8n Foundations & MoveMates Inbound Routing",
        days: [
          { day: "Monday", type: "Active Building", task: "n8n Level 1: Beginner Course - Part 1 (60 mins).", description: "Go to docs.n8n.io/courses and start Level 1.", instructions: ["Complete 'Navigating the editor UI'.", "Complete 'Building a mini-workflow'."], resources: [{title: "n8n Academy", url: "https://learn.n8n.io"}] },
          { day: "Tuesday", type: "Active Building", task: "n8n Level 1: Beginner Course - Part 2 (60 mins).", description: "Continue n8n Level 1 with real-world use cases.", instructions: ["Get data from a warehouse.", "Insert data into Airtable.", "Filter orders based on conditions."], resources: [{title: "n8n Level One Introduction", url: "https://docs.n8n.io"}] },
          { day: "Wednesday", type: "Active Building", task: "n8n Level 1: Beginner Course - Part 3 (60 mins).", description: "Finish n8n Level 1.", instructions: ["Complete: Setting values, calculating booked orders.", "Complete: Notifying the team and scheduling.", "Take the Level 1 'Test your knowledge' quiz."], resources: [{title: "n8n Academy Courses", url: "https://docs.n8n.io"}] },
          { day: "Thursday", type: "Execution", task: "Build MoveMates Lead Receiver in n8n (90 mins).", description: "Bridge n8n with an inbound partner form.", instructions: ["Create a mock 'Partner Application Form' for MoveMates.", "Build a Webhook receiver in n8n to catch form submissions.", "Route the new partner data to a Google Sheet and trigger a Slack alert for the sales team."] },
          { day: "Friday", type: "Passive Absorption", task: "Nick Saraev's n8n Masterclass - First Half (45 mins).", description: "Watch industry-level n8n workflows.", instructions: ["Start the Masterclass: https://youtu.be/2GZ2SNXWK-c?si=OMzVEt4Ziz3S62al", "Watch the first 45 minutes (Foundations & Automation Logic)."], resources: [{title: "N8N FULL COURSE (Nick Saraev)", url: "https://youtu.be/2GZ2SNXWK-c?si=OMzVEt4Ziz3S62al"}] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: RAG Concepts", description: "Study Retrieval-Augmented Generation.", instructions: ["Think about how RAG could fetch previous MoveMates customer interactions from a database before sending an automated email."] }
        ]
      },
      {
        weekNumber: 4,
        title: "n8n Intermediate & MoveMates AI Labeling",
        days: [
          { day: "Monday", type: "Active Building", task: "n8n Level 2: Intermediate Course - Part 1 (60 mins).", description: "Advance your n8n skills.", instructions: ["Complete 'Understanding the data structure'.", "Complete 'Processing different data types' (focus on XML and binary data)."], resources: [{title: "n8n Academy", url: "https://learn.n8n.io"}] },
          { day: "Tuesday", type: "Active Building", task: "n8n Level 2: Intermediate Course - Part 2 (60 mins).", description: "Continue n8n Level 2.", instructions: ["Complete 'Merging and splitting data'.", "Complete 'Dealing with errors in workflows' (crucial for API rate limiting)."] },
          { day: "Wednesday", type: "Active Building", task: "n8n Level 2: Intermediate Course - Part 3 (60 mins).", description: "Finish n8n Level 2.", instructions: ["Complete the 3 business workflows.", "Take the Level 2 knowledge test."] },
          { day: "Thursday", type: "Execution", task: "MoveMates Intelligent Inbox Labeler (90 mins).", description: "Build an AI agent in n8n to sort incoming emails.", instructions: ["Set up a Gmail trigger for a mock MoveMates inbox.", "Pass the email payload to an AI Agent Node (Anthropic/OpenAI).", "Prompt the model to categorize the intent: 'B2C Quote Request', 'B2B Partner Inquiry', or 'Spam'.", "Use a Switch node to route them to different Slack channels."] },
          { day: "Friday", type: "Passive Absorption", task: "Nick Saraev's n8n Masterclass - Second Half (45 mins).", description: "Finish the masterclass.", instructions: ["Watch the next 45 minutes of Nick Saraev's n8n Masterclass: https://youtu.be/2GZ2SNXWK-c?si=OMzVEt4Ziz3S62al"], resources: [{title: "N8N FULL COURSE (Nick Saraev)", url: "https://youtu.be/2GZ2SNXWK-c?si=OMzVEt4Ziz3S62al"}] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Vector Databases", description: "Focus on vector databases and embeddings.", instructions: ["Conceptually map how Databricks Vector Search can serve as the memory backbone for the n8n AI Agents you built on Thursday."] }
        ]
      }
    ]
  },
  {
    phase: "Month 2: Terminal Orchestration & MoveMates CRM",
    weeks: [
      {
        weekNumber: 5,
        title: "Claude Code Basics & Context Engineering",
        days: [
          { day: "Monday", type: "Active Building", task: "Install Claude Code & Overview (45 mins).", description: "Set up your terminal environment.", instructions: ["Install Claude Code: `npm install -g @anthropic-ai/claude-code`.", "Watch 'Claude Code Clearly Explained': https://youtu.be/QoQBzR1Nlql?si=4fsyrFwKk3WxbeeF"], resources: [{title: "Claude Code Clearly Explained", url: "https://youtu.be/QoQBzR1Nlql?si=4fsyrFwKk3WxbeeF"}] },
          { day: "Tuesday", type: "Active Building", task: "Master Claude Code Part 1 & Context Files (45 mins).", description: "Watch Nate Herk's tutorial.", instructions: ["Watch 'Master 95% of Claude Code in 28 Mins': https://www.youtube.com/watch?v=zKBPwDpBfhs (0:00 to 17:00).", "Create a local directory named 'movemates-gtm'.", "Write your first CLAUDE.md context file detailing MoveMates' business logic."], resources: [{title: "Master 95% of Claude Code", url: "https://www.youtube.com/watch?v=zKBPwDpBfhs"}] },
          { day: "Wednesday", type: "Execution", task: "Master Claude Code Part 2 & 6-Step Framework (60 mins).", description: "Finish the tutorial and build skills.", instructions: ["Finish Nate Herk's video (17:13 onwards).", "Follow the 6-step skill-building framework (Name, Trigger, Outcome, Dependencies, Step-by-step, Edge cases)."] },
          { day: "Thursday", type: "Execution", task: "MoveMates Review Analysis via Terminal (90 mins).", description: "Execute a qualitative analysis task via AI.", instructions: ["Download 10 mock Google reviews of competing moving companies into a CSV.", "Command Claude Code in the terminal to parse the CSV.", "Instruct it to extract recurring pain points (e.g., 'hidden fees', 'late arrivals') and output a markdown scorecard for MoveMates marketing."] },
          { day: "Friday", type: "Passive Absorption", task: "Context Engineering Studies (30 mins).", description: "Understand the theoretical shift in AI IDEs.", instructions: ["Read/Listen to tutorials on 'Context Engineering'.", "Understand the difference between CLI interactions and heavy UI platforms."], resources: [{title: "Claude Code for GTM Teams: 30+ Use Cases", url: "https://gtmnow.com"}] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Agentic AI", description: "Study Agentic AI and multi-step reasoning models.", instructions: ["Claude Code is a live manifestation of these concepts.", "Correlate the course theory with your terminal practice."] }
        ]
      },
      {
        weekNumber: 6,
        title: "Model Context Protocol (MCP) & MoveMates CRM",
        days: [
          { day: "Monday", type: "Active Building", task: "Intro to MCP & Brave Search (60 mins).", description: "Give Claude Code web access.", instructions: ["Install the Brave Search MCP server.", "Command Claude Code to perform live web research on 3 major UK Estate Agencies (e.g., Foxtons, Savills).", "Format the output into a markdown table of recent news."], resources: [{title: "Connect Claude Code to tools via MCP", url: "https://code.claude.com"}] },
          { day: "Tuesday", type: "Execution", task: "MoveMates CRM Integration via HubSpot MCP (90 mins).", description: "Connect Claude to your CRM.", instructions: ["Set up a free HubSpot developer account (this is your mock MoveMates CRM).", "Go to Settings -> Integrations -> Private Apps to create a token.", "Set the env var: `export HUBSPOT_ACCESS_TOKEN=your_private_app_token`", "Configure the MCP."], resources: [{title: "Claude Code + HubSpot: AI-Powered CRM", url: "https://syncgtm.com"}] },
          { day: "Wednesday", type: "Execution", task: "Execute MoveMates CRM Hygiene via Claude (60 mins).", description: "Use natural language to clean a database.", instructions: ["Using Claude Code and the HubSpot MCP, prompt it to: 'Fetch the 5 most recent Estate Agent contacts, standardize their job titles, and update the CRM records.'", "Watch how it handles the APIs autonomously."] },
          { day: "Thursday", type: "Execution", task: "Autonomous MoveMates Prospecting (60 mins).", description: "Chain MCP tools together.", instructions: ["Command Claude: 'Pull Estate Agent partners in the Negotiation stage.'", "'Use Brave Search MCP to find recent news about their branches.'", "'Draft personalized follow-up emails pitching MoveMates services, saved locally.'"] },
          { day: "Friday", type: "Passive Absorption", task: "GTM Engineer School Podcast (45 mins).", description: "Listen to industry leaders.", instructions: ["Listen to an episode of the GTM Engineer School Podcast by Jared Waxman and Matteo Tittarelli."], resources: [{title: "GTM Engineer School Podcast", url: "https://gtmengineerschool.substack.com"}] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Enterprise Tools", description: "Explore secure external tool access.", instructions: ["Explore how enterprise LLMs securely access external tools and internal data lakes.", "Mirror the MCP architecture you practiced with HubSpot."] }
        ]
      },
      {
        weekNumber: 7,
        title: "Advanced Data Enrichment (Apollo.io & Hacks)",
        days: [
          { day: "Monday", type: "Active Building", task: "Apollo.io Advanced Tutorial - Part 1 (45 mins).", description: "Learn advanced list building.", instructions: ["Watch Jay's Apollo.io Advanced Tutorial: https://www.youtube.com/watch?v=PLFrC2QfnZA (0:00 to 12:30).", "Focus on Account Setup, Advanced Search Filters, and the 'Apollo Scraping Hack'."], resources: [{title: "Apollo.io Advanced Tutorial", url: "https://www.youtube.com/watch?v=PLFrC2QfnZA"}] },
          { day: "Tuesday", type: "Active Building", task: "Apollo.io Advanced Tutorial - Part 2 (45 mins).", description: "Finish the tutorial.", instructions: ["Finish Jay's Apollo tutorial (12:30 to 29:00).", "Focus on Building Targeted Lead Lists and Campaign Automation Features."], resources: [{title: "Apollo.io Advanced Tutorial", url: "https://www.youtube.com/watch?v=PLFrC2QfnZA"}] },
          { day: "Wednesday", type: "Execution", task: "Integrate Apollo with Clay for UK Targets (60 mins).", description: "Build a multi-provider waterfall.", instructions: ["Export a targeted list of 50 UK Property Managers from Apollo.", "Import into Clay.", "Build a waterfall that checks Apollo emails first, then uses Hunter or Dropcontact if missing."] },
          { day: "Thursday", type: "Execution", task: "Build an intent-based MoveMates workflow (60 mins).", description: "Connect n8n, Clay, and HubSpot.", instructions: ["Connect n8n to Clay.", "Trigger a workflow when an agency posts a job for a 'Lettings Negotiator' (indicating growth).", "Ping Clay to enrich the Director, and push to HubSpot as a warm lead."] },
          { day: "Friday", type: "Passive Absorption", task: "LinkedIn Teardowns Review (30 mins).", description: "Study Apollo/Clay workflows.", instructions: ["Review LinkedIn posts from KOLs: Jordan Crawford, Kellen Casebeer, and Tim Yakubson.", "Look specifically for teardowns of Apollo/Clay workflows."] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Model Serving", description: "Focus on deployment and scale.", instructions: ["Focus on Model Serving and how AI models are deployed into production to handle high volumes of requests."] }
        ]
      },
      {
        weekNumber: 8,
        title: "MoveMates Signal Processing Engine Blueprint",
        days: [
          { day: "Monday", type: "Active Building", task: "Blueprint a MoveMates signal engine (60 mins).", description: "Design the logic before writing code.", instructions: ["Define 3 specific B2B buying signals for MoveMates.", "Examples: 1. Agency hiring property managers. 2. A new student accommodation block being built. 3. A furniture store expanding to a new city."] },
          { day: "Tuesday", type: "Active Building", task: "Python/Scrapy Signal Scraper (90 mins).", description: "Leverage your backend skills.", instructions: ["Use Python/Scrapy to build a script that scrapes a UK job board (like Indeed UK) for 'Property Manager' or 'Lettings Negotiator' roles."] },
          { day: "Wednesday", type: "Execution", task: "Connect Scrapy to n8n (60 mins).", description: "Pipe data into your orchestrator.", instructions: ["Connect your Scrapy script to n8n via a webhook.", "Format the incoming JSON payload correctly so n8n can read the hiring companies."] },
          { day: "Thursday", type: "Execution", task: "LLM Scoring & Slack Routing (90 mins).", description: "Automate partner qualification.", instructions: ["Route the n8n payload to an LLM node (Anthropic).", "Prompt the LLM to score the signal relevance for MoveMates (0-100).", "Route scores >80 to a Slack channel for the MoveMates founders."] },
          { day: "Friday", type: "Passive Absorption", task: "Signal-Based Selling Teardowns (30 mins).", description: "Watch production-level signal routing.", instructions: ["Watch YouTube teardowns of 'Signal-Based Selling' (e.g., from the GTM Engineer School or Eric Nowoslawski)."], resources: [{title: "GTM Engineer School", url: "https://gtm-engineer-school.com"}] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Structured Streaming", description: "Scale up your architecture conceptually.", instructions: ["Study how Databricks handles real-time streaming data.", "Conceptually design how Structured Streaming could replace your Scrapy script to handle millions of postings."] }
        ]
      }
    ]
  },
  {
    phase: "Month 3: MoveMates Analytics, Reverse ETL & Capstone",
    weeks: [
      {
        weekNumber: 9,
        title: "Revenue Analytics & The Bowtie Model",
        days: [
          { day: "Monday", type: "Active Building", task: "HubSpot RevOps Cert: Strategy & Bowtie (60 mins).", description: "Understand the CRM data model.", instructions: ["Enroll in HubSpot Academy's Revenue Operations Certification.", "Complete the 'Implementing a Revenue Operations Strategy' module (44 mins).", "Focus on the Bowtie data model."], resources: [{title: "RevOps Bootcamp & Certifications", url: "https://academy.hubspot.com"}] },
          { day: "Tuesday", type: "Active Building", task: "MoveMates Funnel Analysis & Messy Data (60 mins).", description: "Prepare your testing environment.", instructions: ["Focus on funnel analysis (Cold Agency -> MQL -> Partner Agreement -> Active Referrer).", "Populate HubSpot dev account with intentionally messy Estate Agent data."] },
          { day: "Wednesday", type: "Execution", task: "Python/n8n CAC & LTV Script (90 mins).", description: "Calculate advanced metrics.", instructions: ["Write a Python script orchestrated by n8n.", "Calculate the LTV of a MoveMates B2B Partner (e.g., average 5 van referrals a month * avg revenue) from a mock CRM export."] },
          { day: "Thursday", type: "Execution", task: "Claude Code Data Standardization (60 mins).", description: "Clean data via terminal.", instructions: ["Build a data standardization workflow in Claude Code.", "Feed it a CSV of messy UK addresses/postcodes and use the CLI to standardize them."] },
          { day: "Friday", type: "Passive Absorption", task: "Finish Nick Saraev Masterclass (45 mins).", description: "Complete the n8n series.", instructions: ["Finish the remainder of Nick Saraev's n8n Masterclass."], resources: [{title: "N8N FULL COURSE 6 HOURS", url: "https://www.youtube.com/results?search_query=N8N+FULL+COURSE+6+HOURS"}] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: AI/BI Genie", description: "Explore natural language analytics.", instructions: ["Explore Databricks AI/BI Genie.", "Understand how GTM teams use natural language to query pipeline metrics directly from the lakehouse."] }
        ]
      },
      {
        weekNumber: 10,
        title: "The Marketing Lakehouse & Reverse ETL",
        days: [
          { day: "Monday", type: "Active Building", task: "Study Reverse ETL Concepts (60 mins).", description: "Flip the data pipeline.", instructions: ["Understand how tools like Census or Hightouch extract calculated insights from a data warehouse and push them back into Salesforce/HubSpot."], resources: [{title: "Reverse ETL with Lakebase", url: "https://databricks.com"}] },
          { day: "Tuesday", type: "Active Building", task: "Explore Databricks Lakebase (60 mins).", description: "Native reverse ETL solutions.", instructions: ["Explore Databricks Lakebase documentation.", "Understand how gold-layer data is synced directly into operational databases without custom pipelines."], resources: [{title: "Data Intelligence for Marketing", url: "https://databricks.com"}] },
          { day: "Wednesday", type: "Execution", task: "Map MoveMates Enterprise Architecture (90 mins).", description: "Design the full stack visually.", instructions: ["Use Lucidchart/Excalidraw to map the stack:", "Van Booking Telemetry -> Databricks -> Reverse ETL (Partner Score) -> HubSpot -> n8n -> Slack."] },
          { day: "Thursday", type: "Execution", task: "Define Capstone: The MoveMates Partner Pipeline (60 mins).", description: "Prepare for final execution.", instructions: ["Define your final project scope.", "Select the exact tools you will use to build an end-to-end B2B acquisition engine for MoveMates."] },
          { day: "Friday", type: "Passive Absorption", task: "Databricks Marketing Use Cases (30 mins).", description: "See enterprise scale applications.", instructions: ["Review official Databricks 'Data Intelligence for Marketing' use cases (Acxiom, Skechers, PetSmart)."], resources: [{title: "Data Intelligence in Action Use Cases", url: "https://databricks.com"}] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Predictive Lead Scoring", description: "Build theoretical models.", instructions: ["Apply your knowledge to build a theoretical predictive model that scores UK estate agents based on mock historical referral data in a Lakehouse."] }
        ]
      },
      {
        weekNumber: 11,
        title: "Capstone Execution & Testing (MoveMates Engine)",
        days: [
          { day: "Monday", type: "Execution", task: "Capstone Step 1 & 2: UK Ingestion/Enrichment (90 mins).", description: "Start the final build.", instructions: ["Use Clay to ingest a list of 20 targeted UK Estate Agents based on a hiring signal.", "Build the waterfall enrichment to find the Branch Manager for each."], resources: [{title: "Clay.com Beginner Walkthrough", url: "https://www.youtube.com/results?search_query=Clay.com+Beginner+Walkthrough+2026"}] },
          { day: "Tuesday", type: "Execution", task: "Capstone Step 3: Orchestration/Routing (90 mins).", description: "Move data intelligently.", instructions: ["Deploy an n8n workflow to capture enriched data via webhook.", "Intelligently route qualified records into your HubSpot developer account mapping custom properties like 'UK Postcode'."] },
          { day: "Wednesday", type: "Execution", task: "Capstone Step 4: Agentic Partner Pitch (90 mins).", description: "Automate outreach context.", instructions: ["Use Claude Code (via terminal with HubSpot MCP).", "Command it to read records, run Brave Search on the agency, and generate hyper-personalized partnership emails offering MoveMates' services."] },
          { day: "Thursday", type: "Execution", task: "End-to-End Testing (60 mins).", description: "Fix bugs and ensure stability.", instructions: ["Fix any rate-limiting errors, JSON payload mismatches, or prompt hallucinations.", "Ensure the system runs from start to finish smoothly."] },
          { day: "Friday", type: "Passive Absorption", task: "Script Capstone Presentation (30 mins).", description: "Prepare to present your work.", instructions: ["Script your presentation.", "Structure it like the teardowns: Problem (MoveMates B2B), Architecture, Execution, ROI."] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Finalize Projects", description: "Wrap up academic requirements.", instructions: ["Finalize any outstanding projects for your Databricks Generative AI course."] }
        ]
      },
      {
        weekNumber: 12,
        title: "Public Portfolio & Strategic Realignment",
        days: [
          { day: "Monday", type: "Execution", task: "Record MoveMates Capstone Loom (60 mins).", description: "Document your achievement.", instructions: ["Record your Capstone Loom presentation (5-10 minutes).", "Clearly articulate how this architecture drives revenue for a UK startup like MoveMates."] },
          { day: "Tuesday", type: "Execution", task: "Publish and Network (45 mins).", description: "Share your work with the community.", instructions: ["Publish the Loom video on LinkedIn.", "Tag Clay, n8n, Anthropic, and KOLs.", "Post it in the official Clay Slack community."] },
          { day: "Wednesday", type: "Execution", task: "Resume Overhaul (60 mins).", description: "Update professional positioning.", instructions: ["Translate 'Full Stack Developer' bullets into GTM lexicon.", "Highlight your MoveMates architecture as a proven B2B revenue engine.", "Highlight Clay, n8n, Claude Code, Reverse ETL, Databricks."] },
          { day: "Thursday", type: "Execution", task: "Job Applications & Cover Letters (60 mins).", description: "Apply your new profile.", instructions: ["Identify and apply to 5 'GTM Engineer', 'Revenue Systems Architect', or 'Growth Engineer' roles.", "Use Claude Code to analyze JDs and tailor cover letters."] },
          { day: "Friday", type: "Passive Absorption", task: "Celebrate & Review (30 mins).", description: "Acknowledge the effort.", instructions: ["Celebrate the completion of the 12-week intensive.", "Review your metrics and connections made on LinkedIn."] },
          { day: "Sat/Sun", type: "Academic Focus", task: "Databricks Gen AI: Course Completion", description: "Finish the dual-track.", instructions: ["Complete the Databricks Generative AI course.", "You are now uniquely positioned bridging front-line revenue automation and backend data infrastructure."] }
        ]
      }
    ]
  }
];
