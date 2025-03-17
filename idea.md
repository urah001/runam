# color 
gst color code : #BEBEC0 #B32821
color palette to use : #a5423d #f6e8e9 #a96f75

another idea : 
dark    |  little dark |    bright   | little bright 
#a5423d |  #bc827b     |    #fff6f4  | #f3eed9

60 30 10 

# to do 
remove category to remain only available product 

1. Grains & Cereals 🌾
    Rice
    Wheat
    Maize (Corn)
    Barley
    Millet
    Sorghum

2. Vegetables 🥦🥕
    Tomatoes
    Onions
    Carrots
    Spinach
    Cabbage
    Lettuce
    Bell Peppers
    Cucumbers
    Eggplants

3. Fruits 🍎🍌
    Apples
    Oranges
    Bananas
    Pineapples
    Mangoes
    Grapes
    Watermelon
    Strawberries

4. Tubers & Root Crops 🍠
    Cassava
    Yam
    Sweet Potatoes
    Irish Potatoes
    Ginger
    Garlic

5. Legumes & Nuts 🌰
    Beans (Black Beans, Kidney Beans, Soybeans)
    Peanuts
    Cashew Nuts
    Almonds

6. Herbs & Spices 🌿
    Basil
    Mint
    Thyme
    Oregano
    Turmeric
    Cinnamon

Where to Download Crop Images? 📸

    Unsplash (Free HD images) – https://unsplash.com/s/photos/farm-crops
    Pexels (Free images) – https://www.pexels.com/search/crops/
    Pixabay (No copyright restrictions) – https://pixabay.com/images/search/farm/



#   learning
 the featured product is the component that returns the product hook

    T-1 : 
    edit the productgrid.tsx and see if it works 






# testing
testing your api : 
http://localhost:1337/api/[name]?populate=*
http://localhost:1337/api/posts?populate=*




# working on git 

Step 1: Set Up GitHub Repositories

    You already have two separate repositories for frontend and backend. Ensure both are on GitHub.
    Add your friend as a collaborator to the respective repo(s):
        Go to the repo on GitHub.
        Click Settings > Manage access.
        Click Invite a collaborator and enter your friend’s GitHub username/email.

Step 2: Enforce Pull Request Reviews

To ensure that no code is merged without your approval:

    Go to the repository settings → Branches.
    Under Branch protection rules, click Add rule.
    Set Branch name pattern to main or develop (or whichever branch you want to protect).
    Enable:
        ✅ Require a pull request before merging
        ✅ Require approvals (set it to at least 1 review, which will be you)
        ✅ Dismiss stale approvals when new commits are pushed (optional)
        ✅ Include administrators (if you also want to be forced to review your own PRs)
    Save the settings.

Now, your friend cannot push directly to main—they must create a pull request (PR), which you will review and approve before merging.
Step 3: Notification on Changes

Whenever your friend pushes code and opens a Pull Request (PR):

    You will receive an email notification (if enabled).
    You can also get GitHub mobile app notifications.
    If you use Slack, Discord, or Telegram, you can set up a GitHub webhook to notify you.

Step 4: Workflow for Working Together

    Your friend clones the frontend repo and creates a new feature branch:

git checkout -b feature-new-ui

They make changes, commit, and push the branch:

    git add .
    git commit -m "Updated homepage UI"
    git push origin feature-new-ui

    On GitHub, they open a Pull Request (PR).
    You get notified and review the changes.
    If everything is good, you approve and merge the PR.
    Repeat for future updates.

Bonus: Automate with GitHub Actions

    You can set up a CI/CD pipeline to automatically test frontend or backend changes before merging.
    Use GitHub Actions to notify you on Discord/Slack whenever a PR is created.

Would you like help setting up GitHub Actions or webhooks for notifications? 🚀


1️⃣ Home → (Keep this as the landing page) : Home
2️⃣ Find Services → (For service seekers to browse & hire professionals) : Products
3️⃣ Offer Services → (For professionals to list their skills/services)
4️⃣ Categories → (Organized service listings based on type: Tech, Home, Business, etc.) : categories
5️⃣ How It Works → (Explains the process for both clients & service providers)
6️⃣ Support → (FAQs, Help Center, or Contact options for assistance)x