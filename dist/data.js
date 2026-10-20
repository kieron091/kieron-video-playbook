const videos = [
{id:'reveal-explain',title:'You’re Buying the Wrong Thing',format:'Reveal & Explain',product:'d’Alba spray',duration:'47 seconds',summary:'Challenge their choice, reveal the alternative, then explain and demonstrate why someone would want it.',sequence:['Challenge the choice','Tease the alternative','Reveal the product','Show the benefit','Answer doubts','Deal + CTA'],lesson:'Revealing the product only answers “What is it?” The body can still answer “Why this one?”, “What does it look like?” and “Does it last?”',rows:[
[0,2,'Text: “Koreans are laughing at us rn”, alongside “I hope you know that all of the Korean skincare…”','Why are they laughing? What have we got wrong?','open','OPENS the main curiosity gap.'],
[2,5,'“…these influencers and celebrities have convinced you to buy…”','Have I been fooled? What’s wrong with what they’re recommending?','hold','EXTENDS the same loop. She delays the answer while making it personal.'],
[5,6,'“…are full on American products.”','Oh—that’s what she says we’ve got wrong. So what should we be buying?','both','CLOSES the initial accusation and OPENS an implied alternative question. This is her claim, not something the video establishes.'],
[6,11,'“But when the Korean moms sell out this truffle glass skin spray…” Inserts footage of a mother and daughter, then the spray.','Is this the one they actually use? Why is it selling out?','both','PARTLY CLOSES the alternative question by showing the spray. OPENS curiosity about why it’s desirable.'],
[11,13,'“…on literally every platform… you freaking run.”','What’s so good about it?','hold','KEEPS THAT LOOP OPEN. The popularity claim adds pressure without explaining the benefit yet.'],
[13,16,'Holds the bottle close and identifies d’Alba, describing it as anti-ageing.','Okay, that’s the product, and that’s what she says it’s for.','close','CLOSES product identification and PARTLY ANSWERS why people want it.'],
[17,19,'“That’s why all of the moms are like damn…” with the “40 yr old baddie” image.','That’s the appearance she’s connecting it with.','proof','VISUAL PAYOFF to desirability. The image suggests a connection; it doesn’t prove the product caused it.'],
[19,25,'“…you are going to be walking around looking like glass.” Turns her face to show the shine.','What does glass skin look like? Oh—like that.','close','CLOSES the result question visually. Benefit and demonstration, rather than a fresh mystery.'],
[25,28,'“And it doesn’t rub off? I put this on once in the morning.” Touches her forehead.','Wait—does that finish actually stay? How long?','both','OPENS AND STARTS ANSWERING a small durability loop. Anticipates a buying objection.'],
[28,31,'“It’s been like four or five hours,” while showing her face.','She says this is how it looks several hours later.','close','CLOSES the duration question with her personal account.'],
[31,37,'Reaction, then “This is what it looks like,” showing the bottle and box.','Now I know which one to look for.','proof','IDENTIFICATION REINFORCEMENT. No clear new curiosity loop in the captions here.'],
[37,39,'Cut to products on a shop shelf with price labels.','What does it cost? Where should I get it?','hold','POSSIBLE VISUAL BRIDGE into buying questions, rather than a definite spoken loop.'],
[39,43,'New setting: “Run! Update just found out it’s the brand day for this brand on TikTok.”','What’s the update? Oh—there’s a shopping event. Is there a deal?','both','OPENS AND QUICKLY CLOSES the update question, then OPENS deal curiosity.'],
[43,44,'“Don’t buy anywhere else.”','Why? How much better is the offer here?','hold','STRENGTHENS the deal loop without giving the exact saving.'],
[44,47,'“I’m gonna add the link if you can still see the sale price. Run!”','What’s the price—and is it still available?','open','LEAVES THE FINAL LOOP OPEN. The intended answer is behind the product click.']
]},
{id:'test-prove',title:'Watch What Happens',format:'Test & Prove',product:'Korean lip plumper',duration:'57 seconds',summary:'Set up a visible problem, promise a test, show the result, then answer doubts with further demonstrations.',sequence:['Show the problem','Introduce the product','Promise a test','Show the result','Test an objection','Later update + CTA'],lesson:'The strongest callback is the smile: she shows her lips disappearing when she smiles, then repeats the same action later. The payoff answers the exact comparison she set up.',rows:[
[1,4,'Text: “Canceled my lip flip after this.”','What did she use? Was the result that good?','open','OPENS two questions: what the product is and what result it gave her.'],
[5,8,'“Video is only for white people. So if you’re not white…”','Why only white people? Where’s she going with this?','open','OPENS curiosity through a provocative callout. The next line connects it to small lips, but doesn’t establish the racial claim.'],
[9,11,'“If you have small lips and are considering filler…”','Okay, I want fuller lips. What’s the alternative?','hold','EXTENDS the alternative-product loop and identifies the problem.'],
[11,14,'“…because this is a Korean lip plumper,” then applies it.','Oh, it’s a lip plumper. But does this one actually work?','close','CLOSES “What did she use?” The result question stays OPEN.'],
[14,18,'“…infused with spicules. And if you don’t know what spicules are, you’re about to find out in about four to five minutes.”','What are spicules? What are they going to do to her lips?','open','OPENS an ingredient mystery and promises a result to answer it.'],
[19,20,'Smiles and points: “You see how my lips disappear?”','Yeah, I can see that. Will they still disappear when she smiles afterwards?','open','OPENS a specific visual comparison. Sets up something she can demonstrate again later.'],
[21,22,'“Give it literally five seconds.”','Something’s about to happen—let me see.','hold','KEEPS the result loop OPEN. Refreshes the promise rather than starting a separate loop.'],
[23,26,'Cuts to her reaction and a close-up: “Oh, my God…”','They look fuller here. Is that just the shiny gloss, though?','close','CLOSES the first result loop visually. A possible objection about gloss remains. The edit does not establish exact elapsed time.'],
[26,30,'“I tried five lip plumpers because of the influencers on this app…” then singles this one out.','She’s tried others—but what makes this one different?','both','OPENS a comparison, gives her verdict, and carries the explanation into the next section.'],
[31,33,'“You wipe it away, the plump still stays there,” while wiping her lips.','Oh, it stays after she wipes it. So how does that work—and how long does it last?','proof','ANSWERS the gloss objection with a demonstration. Explanation and duration remain unanswered.'],
[34,41,'Explains what she says the spicules do, contrasting the effect with a brief burning sensation.','So that’s why she says this works differently from the others.','close','CLOSES the ingredient-explanation loop opened at 14–18s, using her account of how it works.'],
[41,43,'“Let this be your freaking sign,” with another close-up.','It looks convincing, but will it last beyond this video?','cta','CTA + result reinforcement. No clear new loop; a possible duration objection remains.'],
[44,47,'New setting: “It’s been two hours, and they’re still freaking huge.”','Two hours later? Okay, she’s showing it hasn’t disappeared straight away.','close','ANSWERS the duration objection with a claimed later update.'],
[48,51,'“And when I smile…” then “…they stay there even from the top.”','At the start they disappeared when she smiled—now I can still see them.','close','CLOSES the specific smile loop from 19–20s. Repeats the original action to deliver the comparison.'],
[52,55,'“If this isn’t your sign to freaking run…”','I’ve seen the result and the later update. Where do I get it?','cta','FINAL CTA. Uses the completed demonstrations to encourage action, rather than opening another result mystery.']
]}
];
videos.push({id:'bad-experience',title:'This Went Wrong—Here’s What Helped',format:'Bad Experience → Better Discovery',product:'SKIN1004 azelaic acid serum',duration:'40 seconds',summary:'Start with a bad experience, introduce a possible solution, show why it interests people, then reveal your preferred version and the result.',sequence:['Complaint + personal stakes','Show the starting problem','Introduce the popular ingredient','Explain the appeal','Name your preferred product','Show the result + buying prompt'],lesson:'She delays different answers: the ingredient is named around 15s, her preferred brand around 25s, and the result is reinforced around 29–33s. The opening callout is not fully resolved: she never clearly names the influencer or offending product. A clearer version would explain what went wrong before introducing what helped.',rows:[
[0,1,'Recording begins with “I couldn’t leave my freaking house for like two months,” before moving into the callout.','What happened that made her feel unable to go out?','open','OPENS a personal-story question. This short opening fragment repeats a line heard again at 5–8s.'],
[1,4,'Text: “I HOPE SHE SEES THIS.” Says: “To the influencers that made me buy this Korean skincare…” while holding products.','Who is she talking about? What did they get her to buy—and what happened?','open','OPENS a callout/story loop. The unnamed person and unfinished complaint create curiosity.'],
[4,8,'“…and wrecked my skin. I couldn’t leave my freaking house for like two months.” Shows earlier footage of her skin.','Oh, she says it affected her skin badly. What caused it—and what helped afterwards?','both','PARTLY CLOSES “What happened?” by showing the problem. OPENS an implied recovery question. The culprit remains unclear.'],
[8,15,'“If you didn’t know, this is viral serum that all of the dermatologists… all of the influencers and their mothers are talking about.” Adds clips of creators and dermatologist-labelled content.','Which serum is she talking about? Why is everyone discussing it? Is this what helped her?','open','OPENS product/ingredient curiosity and builds social proof. The montage delays her clear spoken ingredient reveal; it does not establish endorsement of this exact product.'],
[15,16,'“This is azelaic acid,” showing the bottle and dropper.','Okay, azelaic acid. What does it actually do?','both','CLOSES the spoken ingredient-identification gap. OPENS the benefit question. The bottle was visible earlier, so this is naming rather than first showing.'],
[16,19,'“This is the stuff that has everybody ditching their skincare routines…”','Why would people replace their routines with it? What makes it so useful?','hold','EXTENDS the benefit loop with a broad claim, before giving her reasons.'],
[19,23.5,'“…because it literally does everything,” followed by a list of skin concerns and an explanatory text overlay.','Those are some of the issues I care about. But which version did she actually use?','close','ANSWERS why she says it is useful through claimed benefits. This is her sales explanation, not verification that one product addresses every listed concern.'],
[23.5,25,'“I tested the most viral ones,” with footage of several alternatives.','Which one came out best for her?','open','OPENS a short comparison loop by introducing several candidates without immediately naming her preference.'],
[25,29,'Names SKIN1004 as the one that “gave me my freaking life back,” and holds it close.','That’s the one she chose. What difference is she saying it made?','close','CLOSES the comparison and identifies her claimed solution to the earlier problem. The emotional testimonial prepares the visual payoff.'],
[29,32,'“So when I say I’m never going back… like, are we joking?” Inserts application footage and shots of her skin.','Her skin looks different in these shots. Is this the result she was talking about?','proof','VISUAL PAYOFF to the recovery story. The edit presents a result, but does not establish cause or a precise treatment timeline.'],
[32,34.5,'“For my girls who want glass skin but can’t wait six months…”','How soon is she suggesting I could see a result?','open','OPENS a speed expectation. She does not give a clear, supported result timeline within this recording, so this stays unresolved.'],
[34.5,36.5,'“These are normally like crazy expensive.”','How expensive? Has she found a cheaper way to get them?','open','OPENS the price/deal question and sets an expensive reference point without stating a normal price aloud.'],
[36.5,40,'“I’m gonna add the link… cause I got mine crazy discounted on TikTok Shop. When I say run…” Shows an order screenshot.','What did she pay? Can I get that price too—and where’s the link?','both','PARTLY ANSWERS where she bought it and adds purchase evidence. Leaves the viewer’s current price/availability question for the product click.']
]});
videos.push({id:'discovery-proof',title:'I Found This—Here’s My Pick',format:'Discovery → Proof → My Pick',product:'SKIN1004 azelaic acid serum · discovery version',duration:'57 seconds',summary:'Lead with enthusiastic gratitude, show the earlier problem and result, explain the appeal, then compare options and identify your preferred brand.',sequence:['Gratitude + ingredient reveal','Show why it mattered','Popularity + result footage','Explain the benefits','Compare options + reveal your pick','Show the finish + offer'],lesson:'Unlike the complaint video, she names azelaic acid immediately. Curiosity shifts to why she loves it and which version she chose. The brand decision is delayed until roughly 37 seconds. Her comparison points to another video rather than showing the full test here.',basis:'Speech was automatically transcribed and checked against sampled visuals; wording and timestamps may be approximate. Viewer thoughts are possible reactions, and product claims are the creator’s statements.',rows:[
[0,5.5,'Text: “someone find her @”. Says she could “literally kiss the dermatologist” who introduced everyone to azelaic acid. Earlier skin footage appears.','What did this dermatologist recommend that made her so grateful? What happened to her skin?','open','OPENS the reason-for-gratitude story. Names azelaic acid immediately, so the ingredient is not withheld. The identity of “her” remains unspecified.'],
[5.5,7.8,'Says she could not leave her house, while showing more earlier skin footage.','Oh, this mattered to her. What changed afterwards?','both','PARTLY ANSWERS why the discovery mattered by showing the starting problem. Keeps the outcome question open.'],
[7.8,12.1,'Calls azelaic acid the “most viral serum on the internet right now” and brings the bottle into view.','Why is everyone interested in it? Is it actually worth the hype?','hold','BUILDS interest through a popularity claim. Reinforces ingredient identification without yet explaining its appeal.'],
[12.1,16.4,'Says people are throwing away their skincare routines for it. Inserts a creator clip and footage of her own skin.','What makes it useful enough to replace a routine? Is that the result she got?','both','OPENS the benefit question and provides an early visual payoff to the skin story. The edited footage does not establish causation or a treatment timeline.'],
[16.4,21,'“I wouldn’t go as far as to call this magic in a bottle, but…” then begins explaining what it targets.','What is she about to say it does?','hold','EXTENDS the benefit question using a dramatic phrase before the specifics. No separate new loop is needed.'],
[21,26.8,'Lists skin concerns including redness, pimples, pigmentation, dark spots, wrinkles and pores, with an explanatory text overlay.','Does that include the problem I care about?','close','ANSWERS the benefit question through a list of claimed uses. This analysis does not verify those product claims.'],
[26.8,30.4,'Compares it to “an 8 in 1 shampoo” and says that is why it keeps selling out. Shows several bottles and applies serum.','So she’s saying it does several jobs. Which one should I choose?','hold','SUMMARISES her benefit pitch and adds scarcity. Application supplies a visual change; it is not a separate promised test result.'],
[30.4,36.5,'“I can’t trust the internet, so I bought all of the most viral ones…” Shows footage of several alternatives.','Which did she prefer? Is this recommendation based on comparing them?','open','OPENS a clear choice/comparison loop and positions herself as a sceptical buyer.'],
[36.5,40.5,'Points viewers to another video, then identifies this as the SKIN1004 one and brings the label close.','That’s her pick—but why that brand?','both','CLOSES which product she chose. OPENS why that choice; the detailed comparison evidence is deferred to another video.'],
[40.5,46.6,'Says Koreans rave about it because it gives a “reflective filter looking forehead,” and shows her face.','That’s the finish she likes. Would I want that look?','close','ANSWERS why she recommends it using a claimed benefit and visible finish. Reinforces the outcome rather than introducing a new test.'],
[46.6,50.6,'“If you don’t want to wait a year” for “shining glass skin…”','How soon is she suggesting I could see a result?','open','OPENS a speed expectation but gives no clear supported timeline in this clip. Leave this marked unresolved.'],
[50.6,54.5,'Says she will add a link, that it sells quickly, and that she got hers discounted on TikTok Shop.','Where is the link? Can I get the discount too?','both','ANSWERS where to look and OPENS current-price curiosity. The urgency is her claim, not a verified live stock condition.'],
[54.5,56.6,'Shows an order screenshot near the end.','Is that what she paid? Is that price available to me?','proof','ADDS purchase evidence and a price reference. A past order does not establish today’s offer; that question remains for the link.']
]});

videos.push({"id": "mistakes-shortcut", "title": "I Made the Mistakes—Here’s Your Shortcut", "format": "Mistakes → Shortcut → Value", "product": "SKIN1004 azelaic acid serum · shortcut version", "duration": "50s", "summary": "She opens with the cost of trying recommendations, shows an early outcome, then offers the viewer a shortcut. The middle explains the ingredient and builds trust; the finish answers price and where to buy.", "sequence": ["Mistake + warning", "Early outcome", "Cost of trial and error", "Promise a shortcut", "Ingredient + benefits", "Used-product detail", "Authority + desired outcome", "Price + link"], "lesson": "The result is partly paid off early. What keeps moving is the question: “Which product gets me there without your wasted time and money?” The final under-$20 claim pays off the expensive-trial-and-error setup.", "basis": "Speech was automatically transcribed and checked against sampled visuals; wording and timestamps may be approximate. Viewer thoughts are possible reactions, and product claims are the creator’s statements.", "rows": [[0, 2, "Text: “never do this😭”. “I ruined my skin so you don’t have to…”", "What did you do? Am I making that mistake?", "open", "Opens the mistake story and promises a lesson for the viewer."], [2, 5.4, "Says she bought influencer recommendations; inserts earlier skin footage.", "Was buying all those recommendations the mistake? What should I use instead?", "both", "Partly answers what she did. Opens the alternative question; it does not establish what caused her skin condition."], [5.4, 11.2, "Says she tested them and now looks “like a princess”; shows product-testing footage and her current face.", "Something changed—but which product actually helped?", "both", "Early claimed outcome pays off some result curiosity. The chosen solution remains unclear."], [11.2, 15.5, "Says finding it took hundreds of dollars and months; shows bottle and dropper.", "Can I avoid spending that much and going through all of that?", "hold", "Raises the personal cost and strengthens the existing shortcut question. The bottle is shown before it is explained."], [15.5, 17.6, "“I’m going to save you all of the freaking time,” with earlier product and application clips.", "Okay, tell me what I should look for.", "hold", "Explicitly renews the promise of a shortcut. No separate mystery is necessary."], [17.6, 22, "Names azelaic acid and calls it the most viral serum; inserts skin/application footage.", "So that’s the ingredient. What does it do?", "both", "Closes ingredient identity and opens benefit curiosity. The popularity statement is her claim."], [22, 26, "Lists pimples, hyperpigmentation, dark spots and big pores while handling the serum.", "Does it address the particular problem I have?", "close", "Starts answering the benefit question with claimed uses, rather than opening a separate loop for every concern."], [26, 31, "Continues the benefit list; adds an explanatory text screenshot about biological pathways.", "Why would one ingredient do so many things? Is that the explanation?", "proof", "The screenshot acts as explanation and authority support. Its appearance does not independently verify the claims."], [31, 34.4, "Compares it to an “8-in-1 shampoo”; brings the labelled bottle close to the camera.", "One product for several concerns—and that’s the bottle to look for.", "close", "Summarises the benefit and clarifies the exact product visually. This is not a new product test."], [34.4, 36.5, "“I know mine’s busted, I freaking use it, okay?” Shows worn packaging.", "Oh, she says it looks like that because she actually uses it.", "proof", "Answers a possible authenticity doubt. Packaging wear is a usage cue, not proof of effectiveness."], [36.5, 42.4, "Says dermatologists recommend the ingredient; inserts a dermatologist clip and describes a reflective forehead.", "Is this something professionals recommend? Is that the finish I want?", "proof", "Adds claimed professional authority and returns to the desired outcome; no new clear delayed loop."], [42.4, 46, "Finishes the “glass skin” benefit “without dropping a band”; inserts an outdoor lifestyle clip.", "So how much does it actually cost?", "open", "Opens a specific price question and returns to the earlier expensive trial-and-error setup."], [46, 48, "“I’m going to add the link… I paid not even 20 bucks…”", "Under $20? Where can I get that one?", "close", "Answers her purchase price and where to find the product. This is the value payoff."], [48, 50.4, "Shows an order screenshot displaying $19.20; “don’t get scammed… I’m going to add the link.”", "That’s what she paid. Is that still the price through the link?", "cta", "Reinforces her purchase-price statement. Current price remains a click-through question; the screenshot records a past order."]]});

videos.push({"id": "failed-upgrade", "title": "The Old One Failed—This Does More", "format": "Failed Product → Extra Benefit → Sensory Sell", "product": "Medicube vanilla deodorant", "duration": "65s", "summary": "An audience callout leads into a failed 24-hour deodorant. She introduces a replacement, adds an underarm-appearance benefit, then makes the scent desirable through compliments and a holiday image. A claimed sale deadline drives the final action.", "sequence": ["Audience curiosity", "Old product fails", "Replacement reveal", "Extra benefit + comparison", "Compliments + longevity claim", "Describe the scent", "Price anchor + sale deadline"], "lesson": "She changes the reason to want the product: first avoid odour, then feel confident lifting your arms, then smell desirable. The original wear-time question gets a personal claim, but no timed test. The current sale price stays behind the click.", "basis": "Speech was automatically transcribed and checked against sampled visuals; wording and timestamps may be approximate. Viewer thoughts are possible reactions. Product, celebrity, sales and timing statements are the creator’s claims, not independently verified facts.", "rows": [[0, 2.8, "Text: “why their sweat never stinks”. “I’m gonna need my Pilates girls to scroll on this one.”", "Why should they scroll? What do they know about smelling good that I don’t?", "open", "The text opens a scent-secret question. The spoken exclusion is an attention device; it is not clearly explained later."], [2.8, 8.5, "Shows a different deodorant; says it is the fourth 24-hour deodorant TikTok influenced her to buy.", "Another one that didn’t work? What happened with this one?", "open", "Opens a specific performance question about the old product. The new hero product has not been revealed yet."], [8.5, 10.5, "“I’m smelling like onions by the second hour.”", "So it didn’t last. What actually keeps you smelling good?", "both", "Closes what went wrong with the old product. Opens the replacement question and sets up a wear-time expectation."], [10.5, 16, "“I’m not saying to run…” Introduces it through a celebrity-brand association and sold-out claim while opening yellow packaging.", "Which brand? What have they made that’s different?", "hold", "Teases the alternative and adds claimed social proof. The delay lasts only a few seconds."], [16, 19.5, "Reveals the yellow Medicube stick: a “24-hour vanilla deodorant”.", "That’s the replacement. Will this one actually last—and what makes it better?", "both", "Closes replacement identity. Its label/claim does not yet resolve the performance question."], [19.5, 22.6, "Says it sold out on day four. Opens the stick and raises her arm.", "Why did everyone want it so quickly?", "open", "Opens a short why-this-is-desirable question. Popularity alone has not answered it."], [22.6, 25.3, "Says it contains a “lightening agent” while applying it.", "Wait, it does something for underarm appearance too? Does she show a difference?", "both", "Answers her sell-out explanation with a claimed extra benefit. Opens a visible-result question."], [25.3, 31, "“Look at my… armpits.” Close-up, then an earlier underarm image; says she used to feel embarrassed at the gym.", "Is that the change she means? Would I feel more comfortable lifting my arms?", "close", "Visual payoff to the appearance question plus an emotional benefit. The comparison does not establish cause, timeframe or comparable conditions."], [31, 36.2, "Asks viewers to preserve it; says it gets her compliments whenever she goes out.", "People notice the smell? What does it smell like?", "open", "Introduces a social reward and opens scent curiosity. This is testimony rather than visible proof of compliments."], [36.2, 39, "Says it lasts a long time and she does not need perfume.", "So does it stay noticeable? Could it replace fragrance for me?", "close", "Partly answers longevity through her personal account. No 24-hour test or later update closes the original performance question with a demonstration."], [39, 47.4, "Smells the stick; describes a “vanilla girl” just off a holiday boat in Bora Bora.", "What kind of vanilla? Oh—a rich holiday sort of smell. Would I like that?", "close", "Answers scent curiosity using an imagined scene. The viewer cannot smell the video; the description supplies that missing sense."], [47.4, 51.5, "Calls it rich vanilla with hints of pistachio.", "Vanilla and pistachio—does that sound like my kind of scent?", "close", "Makes the earlier scent description more specific. No separate delayed loop is necessary."], [51.5, 54.2, "“If you don’t wanna be stuck paying 30 bucks…”", "Is it cheaper now? How much cheaper?", "open", "Opens the deal question with a $30 price anchor. She has not given the sale price."], [54.2, 61.5, "Says it is the last chance for a brand-day sale and thinks a few hours remain.", "How long have I got? Is the sale still on?", "both", "Gives a claimed deadline, partly answering why act now. Exact saving and current availability remain open."], [61.5, 65, "“I don’t wanna jinx it… when I say run.” Brings the product close again.", "Let me check the price before I miss it.", "cta", "Final action prompt. Current price and availability are left for the shopping click; no exact sale price is stated in the clip."]]});

videos.push({"id": "not-this-reveal", "title": "Not This, Not That—Here’s the Real Reason", "format": "Rule Out → Delay → Value Reveal", "product": "Dr. Groot scalp / hair serum pen", "duration": "47s", "summary": "She promises something unusual, then rules out two impressive-sounding explanations while still selling them. A suspicious-brand tease delays the answer until packaging close-ups and a price/value comparison. Scarcity and a link finish the video.", "sequence": ["Unusual claim", "Not the visible result", "Not the popularity", "Renew the mystery", "Packaging reveal", "Value comparison", "Scarcity + link"], "lesson": "“No, not that” keeps one main question open while adding benefits. The product is visible early; the delayed reveal is her reason to buy. The packaging/value explanation partly pays off the mystery, but the “sued” text is never substantiated and the actual sale price remains unknown.", "basis": "Speech was automatically transcribed and checked against sampled visuals; wording and timestamps may be approximate. Viewer thoughts are possible reactions. Results, rankings, ingredients, prices and scarcity are claims shown or made in the recording, not independently verified facts.", "rows": [[0, 5.1, "Text: “how has nobody sued yet?” Says no hair-growth pen has done “this” before; shows hairline and purple pens.", "What have they done? Why would anyone sue over it?", "open", "Opens one main unusual-action mystery. The legal-sounding text intensifies it; the video does not establish wrongdoing."], [5.1, 10.4, "“I’m not talking about…” her baby hairs; shows her current hairline and an earlier clip.", "I thought the surprise was her hair. If it’s not that, what is it?", "hold", "Rules out the first guess while delivering an early claimed-result payoff. The main mystery remains open."], [10.4, 16, "Says she is not talking about Dr. Groot being number one in Korea; inserts a ranking claim screenshot.", "It’s not the result or the popularity? Then what is the big thing?", "hold", "Rules out a second guess while adding claimed authority. This extends the same loop rather than opening a fresh one."], [16, 19.3, "“They did something that I do not think you’re supposed to do as a brand.” Moves closer.", "What did they do that brands aren’t supposed to do? Show me.", "hold", "Refreshes the original mystery with a stronger tease. No answer yet."], [19.3, 24, "“The real reason…” and “this on the front”; close-up shows a hair-thickness claim with “1 use”.", "That’s what they printed? Is that the surprising claim she means?", "close", "Starts paying off the mystery by showing the front-label claim. Showing a label is evidence of wording, not evidence that the result occurs."], [24, 26, "“This on the back…” Shows wording including “Results in 2 weeks.”", "There’s another result claim on the back? What’s the catch?", "hold", "Adds the second part of the reveal. The full reason this matters is still being assembled."], [26, 27.9, "Says they did not price it at $80.", "So her point is those claims without a high price? What does it actually cost?", "both", "Completes her implied value reveal, partly resolving the opening mystery. Opens actual-price curiosity; the “sued” implication remains unsupported."], [27.9, 31.5, "Says other hair-growth pens are around $30 for rosemary or biotin.", "What am I getting with this one compared with those?", "open", "Opens a short comparison question using her market-price and ingredient claims. No independent comparison test is shown."], [31.5, 35.8, "Says the Dr. Groot one has “dozens”; ingredient text overlays list examples.", "She’s saying it includes more ingredients for the money. Is that the difference?", "close", "Answers her formula-comparison question. Ingredient count alone does not establish better performance."], [35.8, 40.2, "Says it is always sold out and refers to a creator’s fanbase.", "Can I still get it, or has it sold out again?", "open", "Shifts from product value to claimed scarcity and current availability."], [40.2, 43.4, "“I’m gonna add the link if you can still see it.” Holds both pens.", "Where do I check whether it’s available?", "cta", "Answers where to check. Availability remains open for the shopping click."], [43.4, 47, "“Run… you do not want to be paying full price.” Text: “Results may vary!”", "Is there a discount? What’s the current price before it changes?", "cta", "Refreshes price curiosity and ends on action. Exact price, saving and deadline are never supplied; the results qualifier is not another loop."]]});

videos.push({"id": "secret-bundle", "title": "Their Secret—Then the Better Deal", "format": "Insider Hook → Early Result → Bundle Value", "product": "Medicube kojic acid + turmeric serum and pads", "duration": "60s", "summary": "She raises curiosity about influencers’ beach skin, names the ingredients early and shows her claimed result. The middle explains the face duo and who it is for. The ending changes the buying decision from a serum alone to a two-product offer.", "sequence": ["Insider-style hook", "Ingredient clue + early result", "Explain the ingredients", "Reveal the duo", "Problem callout + demonstration", "Extra benefit", "Repeat purchase + price anchor", "Bundle reveal + CTA"], "lesson": "There are two main questions: “What are they using for that look?” and later “What do I get for my money?” The ingredient answer arrives early; the exact duo follows. The final offer has its own payoff: both products for the claimed price of one serum. The hook’s makeup implication and the promised speed are not clearly resolved.", "basis": "Speech was automatically transcribed and checked against sampled visuals; wording and timestamps may be approximate. Viewer thoughts are possible reactions. Skin results, ingredient uses, application frequency and offers are the creator’s claims, not independently verified guidance.", "rows": [[0, 5.5, "Text: “why they don’t need makeup”. Says Miami influencers are not going to the beach bare-faced; wipes her face with a pad.", "What are they putting on their faces? How do they get that look?", "open", "Opens an insider-secret question. The spoken line suggests something on the skin while the text suggests no makeup; this tension is not explicitly explained later."], [5.5, 9, "Names kojic acid and turmeric while showing earlier skin footage.", "Are those ingredients the secret? What changed for her?", "both", "Partly closes the secret by naming ingredients. Opens the personal-result question and establishes a comparison."], [9, 14.5, "“I’m never buying another… skin tint.” Shows her current face close-up.", "That’s the result she’s showing? Is she saying she no longer needs coverage?", "close", "Early visual payoff and claimed makeup-replacement benefit. The footage does not establish makeup status, cause or matched comparison conditions."], [14.5, 20, "Introduces an explanation of kojic acid and turmeric; shows serum and dropper close-up.", "What are those ingredients meant to do? Which product is that?", "open", "Opens the explanation question and starts revealing product identity visually."], [20, 24.6, "Describes their use for darker areas, inserts other creators’ clips, then shows the face duo.", "Oh, that’s the use she’s connecting them with—and now there’s a face version?", "close", "Answers the claimed ingredient purpose and reveals serum plus pads. Other creators’ clips add social proof rather than independent verification."], [24.6, 30, "Calls out dark spots, hyperpigmentation and melasma; inserts earlier skin footage.", "That sounds like my concern. What difference is she saying this duo makes?", "hold", "Makes the result question relevant to a specific viewer. This is audience targeting, not a new mystery for each concern."], [30, 34, "Shows the pad tub, describes weekly pad use, and begins the even/airbrushed-skin promise.", "How do the pads fit in? What finish am I supposed to see?", "close", "Partly answers routine/use and transitions to the promised result. Her stated frequency is not independently verified usage guidance."], [34, 38, "Wipes her cheek, shows her skin and inserts other creators’ result/application clips.", "Is that the even-looking finish she means? Have others shown it too?", "proof", "Reinforces the result payoff and adds social proof. It does not establish an immediate transformation from the application shown."], [38, 41, "Mentions glycolic acid and points to her cheek while making a pore-related claim.", "Does it help with texture as well as uneven colour?", "close", "Adds a claimed secondary benefit and a visual reference. No separate delayed loop is required."], [41, 46, "Calls out people unhappy without makeup, shows the serum, then addresses impatient viewers.", "Could I feel better without coverage? How quickly would I see anything?", "open", "Returns to the opening desire. The impatience callout can raise a speed question, but no clear result timeframe follows."], [46, 50, "Shows a new serum and says she paid the full $30.", "She bought it again? Is there a cheaper way to get it now?", "open", "Repeat purchase acts as a trust cue. The $30 purchase price anchors a new offer question."], [50, 55, "Directs viewers to the TikTok link and holds up the pads and serum together.", "What do I get through that link—both products?", "hold", "Starts revealing the bundle while holding the price comparison until the next line."], [55, 59.8, "Says both cost the price of one serum; ends with “run” and “Results may vary!” text.", "Both for what she paid for just the serum? Is that deal still available?", "both", "Closes the bundle-value question with her offer claim. CTA leaves current price, terms and availability for the shopping click. No verified deadline is given."]]});

videos.push({"id": "story-discovery", "title": "I Noticed It on Someone Else", "format": "Encounter → Mystery → Product Discovery", "product": "Breath spray · brand not clearly identifiable", "duration": "74s", "summary": "A bar encounter makes the viewer curious about someone’s unusually fresh breath. She contrasts it with the familiar gum-and-dinner problem, delays the product reveal until around 37 seconds, then demonstrates the spray, gives her result and explains why she prefers it. A casual link offer closes.", "sequence": ["Attraction hook", "Set the scene", "Unexpected sensory detail", "Contrast with the usual problem", "Ask what he uses", "Reveal + demonstrate", "Personal outcome", "Comparison + everyday uses", "Flavours + casual link"], "lesson": "The story creates product demand before product identity: “What made his breath smell like that?” The gum detour both delays the answer and sets up the later comparison. The payoff is product discovery, not the romantic ending; she never needs to tell us whether the encounter went further.", "basis": "Speech was automatically transcribed and checked against sampled visuals; wording and timestamps may be approximate. Viewer thoughts are possible reactions. The encounter, duration, origin and oral-health explanations are the creator’s account or claims, not independently verified facts.", "rows": [[0, 3.5, "Text: “The sexiest thing about a man”. Says it is when he tastes and smells good.", "What does she mean? What happened that made her say that?", "both", "Quickly answers the text-hook question, then creates an implied request for the story behind the opinion."], [3.5, 6.6, "Starts telling a story about being in a packed bar last weekend.", "Okay, what happened at the bar?", "open", "Opens the encounter story and establishes a setting where people get close. No product visible yet."], [6.6, 11.3, "Describes a man walking past, eye contact and him saying hello; acts out the movement.", "What stood out about him? What happened when he spoke?", "hold", "Builds the scene and holds the encounter question open. Gestures help the viewer picture it."], [11.3, 17, "Says he smelled good, then clarifies the smell came from his breath.", "His breath, not his fragrance? What was he using?", "both", "Closes what caught her attention. Opens the main product mystery by shifting the source from body scent to breath."], [17, 22.2, "Describes it as candy-like but refreshing.", "How do you get breath that smells like that?", "hold", "Makes the desired result specific while keeping its source hidden."], [22.2, 30.5, "Contrasts it with beer, dinner and gum smells mixed together.", "I know that problem. How was his different if it wasn’t just gum?", "hold", "Delays the reveal while making a familiar alternative seem inadequate. Sets up a comparison she returns to after the reveal."], [30.5, 36.5, "Returns to the encounter and says she complimented how good he smelled.", "Did she ask him? What did he say he uses?", "hold", "Brings the story back to the unanswered source question and signals the answer is approaching."], [36.5, 40, "Says he pulled them from his pocket and offered her a spray; brings small bottles into view.", "Those little bottles? What are they—and did she try one?", "both", "First visual product payoff. Opens the try-it question; exact product category is still explained later."], [40, 43.5, "Recreates the moment and sprays into her own mouth.", "That’s how you use it. Did she get the same effect?", "both", "Closes whether/how she tried it through a present-day demonstration. Opens her result question."], [43.5, 48, "Says she tasted and smelled good for the rest of the night.", "So she says it worked for her too—and lasted the evening?", "close", "Personal-outcome payoff to the trial question. Smell, taste and duration cannot be verified visually by this demonstration."], [48, 55, "Calls it a Japanese probiotic breath spray and says it is better than gum because of an antibacterial mechanism.", "Now I know what it is. Why would it work differently from gum?", "close", "Names the category and supplies her mechanism explanation. The broad bacteria claim is not established by the recording."], [55, 59.4, "Says gum only covers the smell rather than getting rid of it.", "That’s why she brought up the beer-and-gum mixture earlier.", "close", "Explicit callback to the comparison at 22–30s. Answers her proposed difference, but does not independently prove it."], [59.4, 65, "Says she keeps sprays in her purse, car and vanity; introduces bedtime and morning-breath use.", "I could keep one handy. Would it help in the morning too?", "proof", "Broadens everyday uses and gives a usage testimony. The morning-breath claim has no later test or payoff."], [65, 69, "Lists flavours including lemon, apple and mint; calls them affordable.", "Which flavour would I choose? How much are they?", "both", "Answers variety and opens price curiosity. “Affordable” does not give the actual price."], [69, 73.6, "Says she will try to find the exact link and place it below. Shows the bottles.", "Where can I find the same ones and check the price?", "cta", "Casual discovery-style CTA. Exact brand, price and current availability remain for the listing; no sale deadline is claimed."]]});

videos.push({"id": "wrong-advice", "title": "I Took the Wrong Advice—Here’s What I Switched To", "format": "Reject Advice → Early Result → Ingredient Pair → Bundle", "product": "Medicube rosemary + PDRN haircare bundle", "duration": "35s", "summary": "She opens with regret about hair advice, rejects familiar alternatives and shows an early claimed transformation. A simple ingredient pairing leads into the Medicube bundle. Existing brand familiarity, a sell-out claim and a price-drop tease drive the close.", "sequence": ["Regret + attention hook", "Reject familiar alternatives", "Before + claimed result", "Ingredient A + ingredient B", "Reveal the bundle", "Brand familiarity + demand", "Price drop + cart"], "lesson": "The result arrives before the explanation: “What changed?” becomes “What ingredients?” and then “Which bundle?” The final price-drop line starts a new buying loop that only the cart can answer. The opening allegation and seasonal promise are not fully explained.", "basis": "Speech was automatically transcribed and checked against sampled visuals; wording and timestamps may be approximate. Viewer thoughts are possible reactions. Hair outcomes, ingredient benefits, treatment comparisons and sales claims are the creator’s statements, not verified guidance.", "rows": [[0, 4, "Says to stop her taking hair advice from a white woman again. Text asks about extension allegations by Christmas; removes her roller cap.", "What advice went wrong? What did she do differently to get that hair?", "open", "The provocative group callout grabs attention. Opens the bad-advice/alternative question; the video never identifies the exact original advice. Removing the cap also delivers an early hair reveal."], [4, 9, "Says to put down minoxidil, extensions and biotin; inserts images of the alternatives.", "If she’s dismissing those, what does she want me to use instead?", "hold", "Makes the replacement question explicit while withholding her answer. This is her positioning, not an established treatment comparison."], [9, 11.7, "“My hair was looking like this a few months ago.” Shows an earlier photo.", "That was her starting point? What changed since then?", "open", "Sets up a specific before/after question and personal stakes."], [11.7, 14.5, "“Now I’m getting wig accusations.” Shows current styled hair and a “That’s a wig” comment.", "Is that the difference she means? What did she use?", "both", "Early claimed-result payoff. The comment adds a social reaction; neither it nor the styled comparison establishes the cause of the change. Solution identity remains open."], [14.5, 16.5, "Says rosemary is for longer hair while handling/applying a scalp product.", "Rosemary is one part of her answer—what’s the other part?", "close", "Begins answering the alternative question through a claimed ingredient benefit. Product application adds a use cue."], [16.5, 20.7, "Adds PDRN for stronger hair and combines the pair; starts holding several products.", "So she’s saying I need the combination. Which products contain both?", "both", "Completes her ingredient explanation and moves curiosity towards the exact product combination. The benefit claims are not verified by the clip."], [20.7, 24.2, "Names Medicube and says it put rosemary and PDRN in a bundle; shows the items together.", "That’s the bundle she’s talking about. Is it worth trying?", "close", "Closes exact-brand/bundle identity. The bundle is visible before the spoken reveal is complete."], [24.2, 28.1, "“We all know how good Medicube skincare is.” Connects that reputation to its haircare launch.", "I know that brand—would I trust its haircare too?", "proof", "Transfers existing brand familiarity to a new category. Persuasion/trust cue, not a fresh delayed mystery or proof of hair outcomes."], [28.1, 30.6, "Says people wanting Rapunzel-like hair are selling it out; inserts a long-haired doll image.", "Is this the look people want it for? Will it still be available?", "open", "Reinforces the desired look and introduces availability concern through claimed demand. The image is aspirational, not a measured result."], [30.6, 32.5, "Says Medicube has finally dropped the bundle price.", "How much is it now? How much would I save?", "open", "Opens a clear deal loop without supplying a price or saving."], [32.5, 35, "Points viewers to the orange cart and says to run. “Results may vary” remains on screen.", "Let me check the cart for the price and stock.", "cta", "Directs the buying action. Current price and availability stay open for the click; no specific deadline is stated."]]});

videos.push({"id": "react-correct", "title": "React, Correct—Then Recommend", "format": "Reaction → Myth Breakdown → Product Recommendation", "product": "Wellgard Peach Perfect supplement blend", "duration": "91s", "summary": "He reacts to another creator’s supplement claims, promises an explanation and works through the ingredients. Around 52 seconds the correction becomes a recommendation: a multi-ingredient blend. He then explains its claimed benefits, gives personal preference cues and directs viewers to the basket.", "sequence": ["React to claims", "Challenge their accuracy", "Promise a breakdown", "Explain and dispute", "Introduce a concern", "Pivot to recommended blend", "Ingredient-by-benefit pitch", "Value + taste + testimonial", "Basket + deal"], "lesson": "The main bridge is “If that advice is wrong, what should I choose?” Each correction builds demand for a replacement answer. The product pitch begins around 52 seconds. A factual-sounding presentation is still persuasion: one spoken BCAA/water claim conflicts with the text shown in the same video.", "basis": "Speech was automatically transcribed and checked against captions and sampled visuals; wording and timestamps may be approximate. Viewer thoughts are possible reactions. Credentials, supplement benefits, dosage, safety and deal claims have not been independently verified. This is an analysis of persuasion, not supplement advice.", "rows": [[0, 3.5, "Inset creator links creatine to a larger bum; main presenter reacts. Text: “Creatine For Girls Myths” and “doctor reacts”.", "Is that advice wrong? What is he going to correct?", "open", "Reaction format and myth label open a truth/correction loop. Scrubs, stethoscope and the doctor label are authority cues; credentials are not established here."], [3.5, 7.4, "Inset creator links BCAAs to growing the bum without growing the waist; presenter facepalms.", "Why does he disagree? Is the waist claim the problem?", "hold", "Adds a second claim to the correction queue while reaction gestures signal disagreement before an explanation."], [7.4, 10.4, "Inset creator recommends maca root for going from “pancake to peach”.", "Can it really do that? What will he say about this one?", "hold", "Adds a third specific claim for the promised breakdown to address."], [10.4, 15.6, "Says internet advice makes him want to throw his phone away; asks where people get information.", "Okay, what is inaccurate? Tell me what is right.", "hold", "Strengthens doubt and positions the presenter as the corrective voice. The rhetorical question does not supply evidence."], [15.6, 18.5, "“Let’s break down… these ingredients so you know what they actually do.”", "He’s going to explain each one—what should I understand?", "open", "Explicitly promises an organised explanation of the opening claims."], [18.5, 27.2, "Discusses creatine beyond bum growth; gives an energy explanation and shows text about muscle energy.", "So what does creatine actually do beyond the appearance claim?", "close", "Starts paying off the explanation promise. The text supports an authority impression; this entry records his account without verifying it."], [27.2, 30.6, "Describes water entering muscle and a fuller appearance, with another text insert.", "Is that the fuller look people are talking about?", "close", "Continues his explanation of the original creatine claim and its proposed mechanism."], [30.6, 35.6, "Says creatine without BCAAs leads to puffiness; on-screen text says BCAAs do not alter creatine water retention.", "Wait—will plain creatine make me puffy? Do I need BCAAs with it?", "open", "Introduces a new concern and implied selection criterion. Spoken claim and visible text conflict. A concern being raised is not evidence that it is valid."], [35.6, 42.1, "Rejects the idea of growing only the bum while everything else stays the same; gives his explanation.", "So the shape-specific promise is what he disputes?", "close", "Returns to and rejects the targeted-growth promise from the inset. His replacement explanation is also a claim requiring evidence."], [42.1, 47.8, "Says maca root will not turn a “pancake into a peach”; shows text saying it does not directly build muscle.", "So maca is not the shortcut promised in that clip? What is it for, then?", "close", "Closes the specific transformation claim by rejecting it. Does not give a full positive explanation of maca’s role."], [47.8, 52, "Calls many supplement ingredients pointless and the marketing scam-like.", "Then what should I look for? Which product would he recommend?", "open", "Opens the replacement-choice question and creates the bridge from correction to selling."], [52, 57.8, "Brings out a Wellgard tub and recommends a creatine blend with more than creatine.", "This is his pick—but what does it add, and why would I need that?", "both", "Closes the visual product-choice question. Opens why-this-formula curiosity; the same ingredients discussed earlier now become selling points."], [57.8, 65.7, "Connects the blend to beauty goals; says it contains 5g creatine and 5g collagen and gives a skin-related benefit.", "What do those extras do for me? Does this cover more than my workout?", "close", "Begins answering the formula question with quantities and claimed benefits. Figures make the pitch specific but are not checked here."], [65.7, 71.3, "Mentions BCAAs for recovery and L-citrulline for a workout pump.", "Are these the reasons he prefers the blend?", "close", "Continues the feature-to-benefit pitch. BCAAs recall the earlier concern, but the recovery claim does not resolve the water-retention contradiction."], [71.3, 74.2, "Mentions added magnesium for cramps and sleep.", "Would one tub cover those needs too?", "close", "Adds another claimed use and reinforces the all-in-one value argument; no fresh delayed loop is necessary."], [74.2, 81.9, "Says it gives value for money, identifies Wellgard, and praises affordability and quality.", "Is buying this blend worth it? How much is it?", "open", "Gives a value verdict and reinforces identity. Exact price and evidence for the quality assessment remain unstated."], [81.9, 85.2, "Says it tastes like peach and his girlfriend likes it before the gym.", "Does it taste okay? Would I actually want to take it?", "close", "Answers a taste/use objection with personal testimony. It is not evidence of supplement effectiveness."], [85.2, 90.6, "Points to the orange basket and mentions a TikTok Shop deal.", "What is the price and deal in the basket?", "cta", "Ends with a buying prompt. Current price, saving and terms stay open for the click; no clear deadline is provided."]]});

// Uploaded reference: download (21).mp4
videos.push({
  "id": "advice-bundle",
  "title": "Teach First, Reveal the Bundle",
  "format": "Advice → Curated Bundle",
  "product": "Five-book self-development bundle",
  "duration": "58 seconds",
  "summary": "Give three useful actions, make the final one lead into five books, match each book to a need, then reveal the bundle price.",
  "sequence": [
    "Promise three changes",
    "Deliver the list",
    "Explain the first two",
    "Make reading the bridge",
    "Reveal five books",
    "Match books to needs",
    "Price anchor + offer",
    "Urgency + share"
  ],
  "lesson": "The three-action loop closes at about 6 seconds. A new five-book loop opens at about 25 seconds and closes one title at a time. The final spoken CTA asks for a share, after the product-link prompt.",
  "basis": "Approximate timestamps from automated audio transcription and sampled visual frames; book titles checked against the visible covers. Viewer thoughts are plausible reactions, not measured responses. Outcome and price statements are the creator’s claims, not verified current offers.",
  "rows": [
    [
      0,
      3.6,
      "Text: “Change your life”. Says: “If you want to completely change your life in 2026, there’s three things you need to do.”",
      "What are the three things? Am I missing something obvious?",
      "open",
      "OPENS a numbered promise: identify three actions. The big life-change claim gives the list stakes; the list itself has not arrived yet."
    ],
    [
      3.6,
      6.2,
      "Counts off: “Start working out, stop eating junk food, and start reading.”",
      "Okay, those are the three. Why these—and what is he going to say about reading?",
      "both",
      "CLOSES the promised three-item list immediately. The explanation is still to come; do not mistake the later book reveal for the payoff to this first question."
    ],
    [
      6.2,
      11,
      "Connects working on your body with self-love, then says other people start respecting you more. Gestures directly to camera.",
      "What do I get from working out beyond changing how I look? Is that the personal reward he means?",
      "close",
      "ANSWERS the implied “Why work on my body?” with an identity and social-reward explanation. This is his reasoning, not a demonstrated outcome."
    ],
    [
      11,
      16,
      "Says cleaning up your diet means you look better, feel better and think more clearly.",
      "How would changing my food affect my everyday life? Those are the benefits he is promising.",
      "close",
      "ANSWERS why the second recommendation matters by listing everyday benefits. This is an explanation, not a new delayed mystery or a product demonstration."
    ],
    [
      16,
      18.1,
      "“Just try it out for 30 days and see if I’m lying.”",
      "Would I notice a difference if I tried it for a month?",
      "cta",
      "INVITES a personal trial of the advice. It introduces an expectation outside the video, but does not show a 30-day result."
    ],
    [
      18.1,
      24.5,
      "“Reading is going to bring everything full circle.” Lists thinking, finances, feelings about yourself and treatment of other people.",
      "What should I read if I want help with those parts of my life?",
      "both",
      "ANSWERS why he included reading, then creates an implied selection question: which books would he choose? The advice is becoming a bridge to the product."
    ],
    [
      24.5,
      27.1,
      "“There’s literally five books that I swear by that changed my life.” Reaches for a stack and brings it into view near 27s.",
      "Which five books? Which one would be useful for me?",
      "open",
      "OPENS a second numbered promise: five specific books. The personal endorsement adds interest; showing a stack only starts identification."
    ],
    [
      27.1,
      30.7,
      "Holds the stack and says he guarantees any problem will be solved in one of the books.",
      "Is there a book here for the thing I’m struggling with? Which one?",
      "hold",
      "KEEPS the selection loop open while expanding the promise. The sweeping guarantee is his sales claim and is not established by the recording."
    ],
    [
      30.7,
      34.5,
      "“Money issues, relationships, confidence, you name it. In here.” Counts off problems while holding the books.",
      "Money, relationships, confidence—which book goes with which problem?",
      "hold",
      "REFINES the question from “Which books?” to “Which book is for my need?” The matching explanations are still to come."
    ],
    [
      34.5,
      36.4,
      "Shows The Psychology of Money and says: “This one will solve your money issues.”",
      "That’s the money book. What are the other four for?",
      "both",
      "PARTLY CLOSES the five-book identification loop with the first title and intended use. The cover confirms identity; it does not prove the promised financial result."
    ],
    [
      36.4,
      39.2,
      "Shows The Courage to Be Disliked and describes it as being for confidence and your authentic self.",
      "Is this the one for confidence and worrying about how I come across?",
      "close",
      "DELIVERS the second title-to-need match. The overall five-book list remains unfinished."
    ],
    [
      39.2,
      41.7,
      "Shows The Let Them Theory: “This one’s to stop people pleasing.”",
      "That sounds like the one for always trying to keep other people happy.",
      "close",
      "DELIVERS the third match in plain problem language. It is a recommendation and identification beat, not evidence of a personal transformation."
    ],
    [
      41.7,
      44.6,
      "Shows Don’t Believe Everything You Think and describes it as being for your brain and overthinking.",
      "Would this be the one for getting stuck in my own thoughts?",
      "close",
      "DELIVERS the fourth match. The repeated “This one…” pattern makes the bundle easy to follow."
    ],
    [
      44.6,
      46.8,
      "Shows Atomic Habits: “This one is for all your bad habits.”",
      "Now I know what all five are for. What would the whole stack cost?",
      "both",
      "COMPLETES the five-book identification and use-case list. Once the contents are clear, value becomes the next buying question."
    ],
    [
      46.8,
      48.9,
      "Brings the books together: “Usually, all of this will cost over 100 pounds.”",
      "Over £100? Is he about to show me a cheaper way to get them?",
      "open",
      "OPENS a price-comparison loop using a claimed usual total. The recording does not independently verify the usual price or editions."
    ],
    [
      48.9,
      52.3,
      "“I’m going to leave a link down there where you can get all of these for like 20 pounds.” Holds the stack together.",
      "All five for about £20? Where is that link—and is that really the current offer?",
      "both",
      "CLOSES the claimed price comparison and gives the route to buy. The current price, contents and availability still need checking in the listing."
    ],
    [
      52.3,
      54.4,
      "“I have no idea how long it’s going to last for.”",
      "Is that price still available now? Should I check?",
      "hold",
      "KEEPS availability uncertain to encourage action. He gives no verified deadline; do not turn this wording into a countdown when adapting it."
    ],
    [
      54.4,
      58.03,
      "“Pass this on to somebody else that needs to see it. Peace and love.” Holds the books and ends with a hand gesture.",
      "Who do I know who would find this useful?",
      "cta",
      "ENDS with a sharing request, after the earlier buying link. No further content payoff is promised; the current offer remains a listing question."
    ]
  ]
});

videos.push({
  "id": "compare-empathise",
  "title": "Show the Difference, Then the Resource",
  "format": "Compare → Empathise → Reveal",
  "product": "Tiny Humans, Big Emotions",
  "duration": "41 seconds",
  "summary": "Teach through three wording comparisons, make the viewer feel understood, then reveal the resource and show what is inside.",
  "sequence": [
    "Ask which works",
    "Show three alternatives",
    "Build identification",
    "Tease the resource",
    "Reveal + explain",
    "Show inside",
    "Identity + invitation"
  ],
  "lesson": "The opening comparisons pay off immediately. The resource loop only opens around 19 seconds, after empathy. The ending is a gentle invitation, with no sale countdown.",
  "basis": "Approximate timestamps from automated audio transcription and sampled visual frames. One unclear phrase is paraphrased rather than quoted. Viewer thoughts are possible reactions. Parenting benefits and endorsements are creator claims; the clip does not demonstrate child outcomes.",
  "rows": [
    [
      0,
      2.4,
      "Text: “How to raise Emotionally Intelligent Children”. Asks which is a more effective way to talk to your child.",
      "Which way is better? Do I say the less helpful version?",
      "open",
      "OPENS a comparison question. The viewer is invited to judge familiar wording before a product appears."
    ],
    [
      2.4,
      5.3,
      "Contrasts “Stop yelling” with a request to match his voice level.",
      "Oh, he is showing what to say instead. Could I use that wording?",
      "close",
      "FIRST comparison payoff. The alternative demonstrates his suggested wording, not evidence of how a child responds."
    ],
    [
      5.3,
      9.5,
      "“No more snacks, we’re done eating” versus “Snack time’s over, shall we wash up now?”",
      "What could I say at snack time? That gives them a next step.",
      "close",
      "SECOND quick question-and-answer example. Repeats the same comparison pattern in another everyday situation."
    ],
    [
      9.5,
      12.3,
      "“Don’t climb on the table” versus “Feet on the floor, please.”",
      "What should I ask them to do instead of only saying don’t?",
      "close",
      "THIRD comparison payoff. Completes the opening demonstration with a short positive instruction; no delayed product loop yet."
    ],
    [
      12.3,
      17,
      "Says many of us did not grow up with this language, so talking this way can be hard.",
      "That is why it does not come naturally. He understands where I am starting.",
      "proof",
      "IDENTIFICATION and empathy. Addresses an emotional barrier rather than opening a new factual mystery. This is a trust cue, not proof of effectiveness."
    ],
    [
      17,
      19.4,
      "“So many of us are trying to do better and it’s never too late.”",
      "I can still learn this. I am not the only one trying.",
      "proof",
      "REASSURANCE sustains identification and makes learning feel possible. No new explicit loop."
    ],
    [
      19.4,
      23.4,
      "“I’m gonna show you something that’s been helping me” learn to raise emotionally intelligent children.",
      "What has been helping him learn these skills?",
      "open",
      "OPENS the product/resource loop explicitly. The earlier examples make the resource relevant before its reveal."
    ],
    [
      23.4,
      25.7,
      "Shows the cover and names Tiny Humans, Big Emotions.",
      "That is the book. What does it cover?",
      "both",
      "CLOSES resource identification. OPENS an implied fit question about what the book contains. The cover is visible slightly before the spoken title."
    ],
    [
      25.7,
      29.6,
      "Reads the subtitle about navigating tantrums, meltdowns and defiance.",
      "Does it deal with the difficult situations I face? Those are the topics he says it covers.",
      "close",
      "ANSWERS the fit question through the subtitle. This identifies the intended scope; it does not demonstrate outcomes."
    ],
    [
      29.6,
      31.3,
      "“Parents have been raving about this.” Opens the book to its contents page.",
      "Have other parents found it useful? What is actually inside?",
      "proof",
      "SOCIAL-PROOF CLAIM followed by an inside look. No reviews are shown, so the endorsement remains his report."
    ],
    [
      31.3,
      33.2,
      "“Look at all the chapters that they teach you about.” Shows the contents page.",
      "What will I learn? I can see the chapter topics now.",
      "close",
      "VISIBLE CONTENT PAYOFF answers what is inside. The contents page supports topic identification, not the effectiveness of the advice."
    ],
    [
      33.2,
      36.2,
      "Flips through the pages and says there are a good number, so you will learn a lot.",
      "Is there much material in it? It looks like a substantial book.",
      "proof",
      "TANGIBLE VALUE CUE: shows the pages and thickness. Length does not establish quality or how much a reader will learn."
    ],
    [
      36.2,
      38.7,
      "Holds the book and says he loves that parents are trying to do something different.",
      "That is the kind of parent I am trying to be.",
      "proof",
      "RETURNS to the shared identity from 12–19s. Emotional callback before the invitation to click."
    ],
    [
      38.7,
      40.53,
      "“I’ve linked it below if you wanna check it out.” Points down while holding the book.",
      "Where can I look at it, and what does it cost?",
      "cta",
      "SOFT CTA gives the next step. Price and purchase details remain behind the link; there is no explicit discount tease or urgency claim."
    ]
  ]
});
