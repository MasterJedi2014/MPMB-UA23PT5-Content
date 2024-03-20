/*	-INFORMATION-
	Subject:	Feats
	Effect:		This script adds the Feats from the 2023 Unearthed Arcana "Player's Handbook Playtest 5" article.
				This file has been made by MasterJedi2014.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference, with help from TrackAtNite from the MPMB Discord
	Date:		2024-03-15 (sheet v13.1.0)
*/

var iFileName = "UA2023PT5 Content [by MasterJedi2014] V1.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/03/15",
};

SourceList["UA23PT5"] = {
	name : "Unearthed Arcana 2023: Player's Handbook Playtest 5",
	abbreviation : "UA23PT5",
	date : "2023/04/26",
	url : "https://media.dndbeyond.com/compendium-images/ua/ph-playtest5/owThVp1CESZ1c91y/UA-2023-PH-Playtest5.pdf",
};

// 4th Lvl Feats

FeatsList["weapon master ua23pt5"] = {
	name : "Weapon Master (UA23PT5)",
	source : [["UA23PT5", 14], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 4+",
	prereqeval : function(v) {
		return v.characterLevel >=4;
	},
	descriptionFull : "You gain the following benefits: \n \u2022 Ability Score Increase. Increase your Strength, or Dexterity score by 1, to a maximum of 20. \n \u2022 Mastery Property. Your training with weapons allows you to use the Mastery property of one kind of Simple or Martial weapon of your choice, provided you are proficient with it.\n   Whenever you finish a Long Rest, you can change the kind of weapon you chose to another eligible kind.",
	description : "My Strength or Dexterity increases by 1, to a max of 20. I can also use the Mastery property of one kind of Simple or Martial weapon of my choice that I am Proficient with. I can change the kind of Weapon I can the Mastery property of upon finishing a Long Rest.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scorestxt : "+1 Strength",
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scorestxt : "+1 Dexterity",
	},
};

// 20th Lvl (Epic Boon) Feats

FeatsList["epic boon of dimensional travel ua23pt5"] = {
	name : "Epic Boon of Dimensional Travel (UA23PT5)",
	source : [["UA23PT5", 13], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert or Mage Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.bard_ua22xc || classes.known.ranger || classes.known.ranger_ua23pt6 || classes.known.rogue || classes.known.rogue_ua23pt6 || classes.known.sorcerer || classes.known.sorcerer_ua23pt7 || classes.known.warlock || classes.known.warlock_ua23pt7 || classes.known.wizard || classes.known.wizard_ua23pt7);
	},
	descriptionFull : "You gain the following benefits: \n \u2022 Ability Score Increase. Increase your Dexterity, Intelligence, or Wisdom score by 1, to a maximum of 30. \n \u2022 Blink Steps. Immediately after you take the Attack action or the Magic action, you can teleport up to 30 feet to an unoccupied space you can see.",
	description : "My Dexterity, Intelligence, or Wisdom increases by 1, to a max of 30. Additionally, immediately after I take the Attack or Magic action, I can teleport up to 30 ft to an unoccupied space I can see.",
	choices : ['Dexterity +1', 'Intelligence +1', 'Wisdom +1'],
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Dexterity",
	},
	"intelligence +1" : {
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Wisdom",
	},
};
FeatsList["epic boon of energy resistance ua23pt5"] = {
	name : "Epic Boon of Energy Resistance (UA23PT5)",
	source : [["UA23PT5", 13], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert or Mage Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.bard_ua22xc || classes.known.ranger || classes.known.ranger_ua23pt6 || classes.known.rogue || classes.known.rogue_ua23pt6 || classes.known.sorcerer || classes.known.sorcerer_ua23pt7 || classes.known.warlock || classes.known.warlock_ua23pt7 || classes.known.wizard || classes.known.wizard_ua23pt7);
	},
	descriptionFull : "You gain the following benefits: \n \u2022 Ability Score Increase. Increase your Constitution, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30.\n \u2022 Energy Resistances. You gain Resistance to two of the following damage types of your choice: Acid, Cold, Fire, Lightning, Necrotic, Poison, Psychic, Radiant, or Thunder. Whenever you finish a Long Rest, you can meditate and change those choices.\n \u2022 Energy Redirection. When you take damage of a type to which you have Resistance, you can use your Reaction to direct damage of the same type toward another creature you can see within 60 feet of yourself that isn’t behind Total Cover. If you do so, that creature must succeed on a Dexterity saving throw (DC equals 8 + your Proficiency Bonus + the ability modifier of the score increased by this feat) or take damage equal to 2d12 + your Constitution modifier.",
	description : "My Constitution, Intelligence, Wisdom, or Charisma increases by 1, to a max of 30. I also gain resistance to 2 damage types per Long Rest; see \"Saving Throws\" section on pg 1 for more info. Additionally, when I take damage of a type to which I have Resistance, I can use my Reaction to direct damage of the same type at another creature I can see within 60 ft. If I do so, that creature must succeed a Dex save (DC = 8 + Prof Bonus + Ability Modifier increased by this Feat) or take damage equal to 2d12 + Con mod.",
	savetxt : {
		text : ["Resistance to 2 of the following per Long Rest: Acid, Cold, Fire, Lightning, Necrotic, Poison, Psychic, Radiant, or Thunder"],
	},
	action : [
		["reaction", "Energy Redirection [2d12 + Con mod dmg]"],
	],
	choices : ['Constitution +1', 'Intelligence +1', 'Wisdom +1', 'Charisma +1'],
	"constitution +1" : {
		scores : [0, 0, 1, 0, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Constitution",
	},
	"intelligence +1" : {
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Wisdom",
	},
	"charisma +1" : {
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Charisma",
	},
};
FeatsList["epic boon of irresistible offense ua23pt5"] = {
	name : "Epic Boon of Irresistible Offense (UA23PT5)",
	source : [["UA23PT5", 13], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert or Warrior Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.bard_ua22xc || classes.known.barbarian || classes.known.barbarian_ua23pt8 || classes.known.fighter || classes.known.fighter_ua23pt7 || classes.known.monk || classes.known.monk_ua23pt8 || classes.known.ranger || classes.known.ranger_ua23pt6 || classes.known.rogue || classes.known.rogue_ua23pt6);
	},
	descriptionFull : "You gain the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 30.\n \u2022 Overcome Defenses. The Bludgeoning, Piercing, and Slashing damage you deal always ignores Resistance.\n \u2022 Overwhelming Strike. When you roll a 20 on the d20 for an attack roll, you can deal extra damage to the target equal to the ability score increased by this feat. The extra damage’s type is the same as the attack’s type. You can use this benefit only once per turn.",
	description : "My Strength or Dexterity increases by 1, to a max of 30. Additionally, the Bludgeoning, Piercing, and Slashing damage I deal always ignores Resistance. Furthermore, once per turn, rolling a 20 on the d20 for a weapon attack roll increases the damage of that attack equal to the Ability Score that was increased by this Feat.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Strength",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.isWeapon) {
						fields.Description += (fields.Description ? '; ' : '') + 'Once per turn on Nat 20, +' + Number(What("Str")) + ' damage';
					}
				},
				"Once per turn, when I roll a Nat 20 on a weapon attack roll, I can do extra damage equal to my Str Score.",
			],
		},
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Dexterity",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.isWeapon) {
						fields.Description += (fields.Description ? '; ' : '') + 'Once per turn on Nat 20 +' + Number(What("Dex")) + ' damage';
					}
				},
				"Once per turn, when I roll a Nat 20 on a weapon attack roll, I can do extra damage equal to my Dex Score.",
			],
		},
	},
};
FeatsList["epic boon of recovery ua23pt5"] = {
	name : "Epic Boon of Recovery (UA23PT5)",
	source : [["UA23PT5", 14], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+",
	prereqeval : function(v) {
		return v.characterLevel >=20;
	},
	descriptionFull : "You gain the following benefits: \n \u2022 Ability Score Increase. Increase your Constitution score by 1, to a maximum of 30.\n \u2022 Last Stand. When you would be reduced to 0 Hit Points, you can drop to 1 Hit Point instead and regain a number of Hit Points equal to half your Hit Point Maximum. Once you use this benefit, you can’t use it again until you finish a Long Rest.\n \u2022 Death Defiant. When you take damage while you have 0 Hit Points, you can make a death saving throw instead of suffering a death saving throw failure.",
	description : "My Constitution increases by 1, to a max of 30. Additionally, once per Long Rest, when I would drop to 0 HP, I can instead drop to 1 HP and regain half of my max HP on top of that. Furthermore, when I take damage while at 0 HP, I can make a Death Save instead of automatically suffering a Death Save failure.",
	scores : [0, 0, 1, 0, 0, 0],
	scoresMaximum : [30, 30, 30, 30, 30, 30],
	scorestxt : "+1 Constitution",
	savetxt : {
		text : ["When hit at 0 HP, I roll a Death Save instead of auto failing a Death Save"],
	},
	limfeaname : "Last Stand [+.5*MaxHP]",
	usages : 1,
	recovery : "long rest",
};
FeatsList["epic boon of speed ua23pt5"] = {
	name : "Epic Boon of Speed (UA23PT5)",
	source : [["UA23PT5", 14], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert or Warrior Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.bard_ua22xc || classes.known.barbarian || classes.known.barbarian_ua23pt8 || classes.known.fighter || classes.known.fighter_ua23pt7 || classes.known.monk || classes.known.monk_ua23pt8 || classes.known.ranger || classes.known.ranger_ua23pt6 || classes.known.rogue || classes.known.rogue_ua23pt6);
	},
	speed : {
		allModes : "+30",
	},
	action : [
		["bonus action", "Disengage [ends Grappled \u0026 Restrained]"],
	],
	descriptionFull : "You gain the following benefits: \n \u2022 Ability Score Increase. Increase your Dexterity score by 1, to a maximum of 30.\n \u2022 Escape Artist. As a Bonus Action, you can take the Disengage Action, which also ends the Grappled and Restrained conditions on you.\n \u2022 Quickness. Your Speed increases by 30 feet.",
	description : "My Dexterity increases by 1, to a max of 30. Additionally, I can use a Bonus Action to Disengage, ending the Grappled \u0026 Restrained conditions on myself in the process. Furthermore, my Speed increases by 30 ft.",
	scores : [0, 1, 0, 0, 0, 0],
	scoresMaximum : [30, 30, 30, 30, 30, 30],
	scorestxt : "+1 Dexterity",
};
FeatsList["epic boon of the night spirit ua23pt5"] = {
	name : "Epic Boon of the Night Spirit (UA23PT5)",
	source : [["UA23PT5", 14], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert or Mage Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.bard_ua22xc || classes.known.ranger || classes.known.ranger_ua23pt6 || classes.known.rogue || classes.known.rogue_ua23pt6 || classes.known.sorcerer || classes.known.sorcerer_ua23pt7 || classes.known.warlock || classes.known.warlock_ua23pt7 || classes.known.wizard || classes.known.wizard_ua23pt7);
	},
	savetxt : {
		text : ["While in Dim Light or Darkness, Resist all damage except Force, Psychic, \u0026 Radiant"],
	},
	action : [
		["action", "In Dim Light/Darkness: Invisible condition"],
	],
	descriptionFull : "You gain the following benefits: \n \u2022 Ability Score Increase. Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 30.\n \u2022 Merge with Shadows. While entirely within Dim Light or Darkness, you can give yourself the Invisible condition as a Magic action. The condition ends on you immediately after you take an action, a Bonus Action, or a Reaction.\n \u2022 Shadowy Form. While entirely within Dim Light or Darkness, you have Resistance to all damage except Force, Psychic, and Radiant.",
	description : "My Dexterity, Intelligence, or Wisdom increases by 1, to a max of 30. Additionally, when entirely in Dim Light or Darkness, I can gain the Invisible condition as a Magic action. The condition ends immediately after taking an action, a Bonus Action, or a Reaction. Furthermore, while I am entirely in Dim Light or Darkness, I have Resistance to all damage except Force, Psychic, and Radiant.",
	choices : ['Dexterity +1', 'Intelligence +1', 'Wisdom +1'],
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Dexterity",
	},
	"intelligence +1" : {
		scores : [0, 0, 0, 1, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scores : [0, 0, 0, 0, 1, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Wisdom",
	},
	"charisma +1" : {
		scores : [0, 0, 0, 0, 0, 1],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Charisma",
	},
};
/*	-SCRIPT AUTHOR NOTE-
	Below is the "Epic Boon of Irresistible Offense" Feat as it is actually written in the UA article.
	This version is exluded by default because it is written in the original article in such a way that the bonus damage on a Nat 20 could be added to both weapon AND spell attacks, which seem unintended for a Feat that only increases Str or Dex.
	The version above has been coded such that it only adds the bonus damage to weapons.
*/
FeatsList["epic boon of irresistible offense raw ua23pt5"] = {
	name : "Epic Boon of Irresistible Offense (RAW) (UA23PT5)",
	source : [["UA23PT5", 13], ["MJ:HB", 0]],
	defaultExcluded : true,
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Expert or Warrior Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.artificer || classes.known.bard || classes.known.bard_ua22xc || classes.known.barbarian || classes.known.barbarian_ua23pt8 || classes.known.fighter || classes.known.fighter_ua23pt7 || classes.known.monk || classes.known.monk_ua23pt8 || classes.known.ranger || classes.known.ranger_ua23pt6 || classes.known.rogue || classes.known.rogue_ua23pt6);
	},
	descriptionFull : "You gain the following benefits: \n \u2022 Ability Score Increase. Increase your Strength or Dexterity score by 1, to a maximum of 30.\n \u2022 Overcome Defenses. The Bludgeoning, Piercing, and Slashing damage you deal always ignores Resistance.\n \u2022 Overwhelming Strike. When you roll a 20 on the d20 for an attack roll, you can deal extra damage to the target equal to the ability score increased by this feat. The extra damage’s type is the same as the attack’s type. You can use this benefit only once per turn.",
	description : "My Strength or Dexterity increases by 1, to a max of 30. Additionally, the Bludgeoning, Piercing, and Slashing damage I deal always ignores Resistance. Furthermore, once per turn, rolling a 20 on the d20 for an attack roll increases the damage of that attack equal to the Ability Score that was increased by this Feat.",
	choices : ['Strength +1', 'Dexterity +1'],
	"strength +1" : {
		scores : [1, 0, 0, 0, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Strength",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.isWeapon || v.isSpell) {
						fields.Description += (fields.Description ? '; ' : '') + 'Once per turn on Nat 20, +' + Number(What("Str")) + ' damage';
					}
				},
				"Once per turn, when I roll a Nat 20 on an attack roll, I can do extra damage equal to my Str Score.",
			],
		},
	},
	"dexterity +1" : {
		scores : [0, 1, 0, 0, 0, 0],
		scoresMaximum : [30, 30, 30, 30, 30, 30],
		scorestxt : "+1 Dexterity",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.isWeapon || v.isSpell) {
						fields.Description += (fields.Description ? '; ' : '') + 'Once per turn on Nat 20 +' + Number(What("Dex")) + ' damage';
					}
				},
				"Once per turn, when I roll a Nat 20 on an attack roll, I can do extra damage equal to my Dex Score.",
			],
		},
	},
};