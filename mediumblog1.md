
# Now I Ride a Scooter



*If you missed my last post, you can find it [here](https://medium.com/dude-wheres-my-code/mountains-and-warriors-33d849eba0c9#.8g8i2ot1x). If you’re hungry for more, [here’s the next](https://medium.com/codewhale/time-to-stop-floating-around-bdce613fefe7).*

*After reading through a bunch of blogs by people learning how to code, I’ve noticed a theme: pretty quickly, every one of them becomes completely incomprehensible. Of course, that is to say the writing becomes incomprehensible to **me**, because I’m just starting out. Code-y people can understand it.*

*I’d like this to be understood by people who can’t code, because it’s so relevant a subject in today’s world and so many people hold the view that coding is too baffling to engage with. So from here on I’ll try and keep a habit of explaining everything as if you’re my mum. Hi mum.*

So it’s been 2 weeks since I was accepted to [Makers](http://www.makersacademy.com/) and some progress has been made. The pre-course is now 6 days away.

I’ve become hopelessly addicted to [TypingClub](https://www.typingclub.com/) and am spending a disproportionate amount of my time intensely tapping away at my keyboard, craving those sweet little gold stars. I’m now up to 42 wpm, which is great as I can just about type with correct technique and without getting frustrated at how slow I am.

According to them I am at scooter level.

![](https://cdn-images-1.medium.com/max/2340/1*WeM_M87JkbAcSnspR630aA.png)

My [Codewars](http://codewars.com) binges are slowly paying off, and I do really feel like they’re stretching my brain and making me a better coder. Reached 5 kyu about an hour ago which made me swell with pride. I celebrated by eating half a triangle of brie.

![my brand new badge for being such a clever boy](https://cdn-images-1.medium.com/max/2000/1*iFmo7kdXMhkmiUTU41Hh9w.png)*my brand new badge for being such a clever boy*

Whilst I love my little badge, it does feel a tad undeserved, seeming as I spent 45 mins on an (easier) 6 kyu to get there and nearly stabbed myself in the eye with a fork in the process.

Here’s my code for said 6 kyu problem. The aim was to write a programme that would turn any number into its expanded form (So that inputting the number 70430 returns “70000 + 400 + 30”):

    def expanded_form(num)
      result = ""
      div = 10**(num.to_s.length - 1)
      until div == 1
        if num.to_f/div >= 1
          write = num/div
          num = num - write*div
          num > 0 ? result << (write*div).to_s + " + " : result << (write*div).to_s
        end
        div /= 10
      end
      num > 0 ? result + num.to_s : result
    end

    #putting code into these grey boxes on Medium is pleasing as fuck

So I made a plan: for each digit, I would have to divide by the digit to the appropriate power of 10, round the result, and store the result somewhere (so I could get 70000 from 70430, 400 from 430 etc.). Then I needed to get the programme to move onto the next digit and stop when there were no digits left to compute. Additionally, my code had to work for any positive integer, meaning it had to first recognise the amount of digits in the inputted number (see lines 1 and 3: ‘num’ is the input, ‘div’ stands for divider).

Whilst my plan worked out nicely, the formatting turned out to be fiendishly difficult (at least it felt like it was). Getting outputs like “70000 + 0430 + 400 + 30 + 0” was maddening. But I got there in the end. And the little green “passed test” ticks were glorious.

The coding community really recognises the value of gold stars etc.

In other news, I made a baby dragon tamagotchi.

![exercise taken from the excellent [‘Learn to Programme’ by Chris Pine](https://pine.fm/LearnToProgram/)](https://cdn-images-1.medium.com/max/2000/1*IeJOrm976rbnMVlEZtv8vg.png)*exercise taken from the excellent [‘Learn to Programme’ by Chris Pine](https://pine.fm/LearnToProgram/)*

Other pre-pre-course work consisted of completing the [Codecademy course on the Command Line](https://www.codecademy.com/learn/learn-the-command-line). As usual with Codecademy the course was a breeze but left me baffled at the thought of practically using what I had learnt. Their teaching style is just way too passive, meaning you can complete things by just following instructions and not thinking a bit. Still, perhaps a useful introduction to a few concepts.

For the unenlightened, the Command Line is the important looking black screen that hackers in movies are always using. When my mum sees me using it, she thinks I’ve got *really* good at this stuff. In reality I’ve just been learning how to navigate around files and folders and programme it to say “Hi Naz” every time I open it.

![the super serious Command Line](https://cdn-images-1.medium.com/max/2000/1*Y2_IZlFRVLsT08_CgBI70g.png)*the super serious Command Line*

Whilst not learning, I’ve been trying to direct my procrastination towards stuff thats relevant to programming/tech/etc.

[This article](https://medium.freecodecamp.com/0-100-from-no-experience-to-a-6-figure-sf-design-job-in-12-months-cd7546034077) got me interested in User Experience Design (UX) (don’t be put off by the click-bait-y title). It’s all about making the way we interact with apps as frictionless and pleasurable as possible. That put me on to [this link](http://www.useronboard.com/), which was great for giving examples of the thought processes that UX people go through when designing an app. Hopefully it’ll come in useful for some of the projects at Makers.

And this thing below I can’t wait to try (not just because the thumbnail looks like an alien’s vagina):
[**How to get free wifi on public networks**
*This short tutorial describes a few methods for gaining access to the internet, a basic human right, from public…*medium.freecodecamp.com](https://medium.freecodecamp.com/free-wifi-on-public-networks-daf716cebc80)

*I just decided I’m gonna post a song every time I write a thing*

### **TODAY’S JAM**

I can’t stop listening to this Foxygen tune. It’s camp as hell, there’s swirling violins and horns and shit. Makes me shake my hips like a loon.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/_-tZ1gbc2pQ" frameborder="0" allowfullscreen></iframe></center>

![](https://cdn-images-1.medium.com/max/2000/1*tjJoW_Kmgc19RrnOcauZyg.png)

*If you read past the tapir, chances are you read the whole thing. If you enjoyed it, please click the little heart below. It’ll help others find this and enjoy it too.*
