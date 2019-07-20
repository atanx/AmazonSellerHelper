$("body").append(
    "<div id='sentenceBox' style='width:400px; padding:20px; border-radius: 10px; background-color:rgba(3, 169, 244, 0.13); position:fixed;top:20px; right:20px; z-index: 9999;  '></div>"
);

var splitLines = function (fn) {
    return fn.toString().split('\n').slice(1, -1);
};
var sentences = splitLines(function () {/*
 1. I see． 我明白了。
 2. I quit! 我不干了!
 3. Let go! 放手!
 4. Me too． 我也是。
 5. My god! 天哪!
 6. No way! 不行!
 7. Come on． 来吧(赶快)
 8. Hold on． 等一等。
 9. I agree。 我同意。
 10. Not bad． 还不错。
 11. Not yet． 还没。
 12. See you． 再见。
 13. Shut up! 闭嘴!
 14. So long． 再见。
 15. Why not? 好呀! (为什么不呢?)
 16. Allow me． 让我来。
 17. Be quiet! 安静点!
 18. Cheer up! 振作起来!
 19. Good job! 做得好!
 20. Have fun! 玩得开心!
 21. How much? 多少钱?
 22. I'm full． 我饱了。
 23. I'm home． 我回来了。
 24. I'm lost． 我迷路了。
 25. My treat． 我请客。
 26. So do I． 我也一样。
 27. This way。 这边请。
 28. After you． 您先。
 29. Bless you! 祝福你!
 30. Follow me． 跟我来。
 31. Forget it! 休想! (算了!)
 32. Good luck! 祝好运!
 33. I decline! 我拒绝!
 34. I promise． 我保证。
 35. Of course! 当然了!
 36. Slow down! 慢点!
 37. Take care! 保重!
 38. They hurt． (伤口)疼。
 39. Try again． 再试试。
 40. Watch out! 当心。
 41. What's up? 有什么事吗?
 42. Be careful! 注意!
 43. Bottoms up! 干杯(见底)!
 44. Don't move! 不许动!
 45. Guess what? 猜猜看?
 46. I doubt it 我怀疑。
 47. I think so． 我也这么想。
 48. I'm single． 我是单身贵族。
 49. Keep it up! 坚持下去!
 50. Let me see．让我想想。
 51. Never mind．不要紧。
 52. No problem! 没问题!
 53. That's all! 就这样!
 54. Time is up． 时间快到了。
 55. What's new? 有什么新鲜事吗?
 56. Count me on 算上我。
 57. Don't worry． 别担心。
 58. Feel better? 好点了吗?
 59. I love you! 我爱你!
 60. I'm his fan。 我是他的影迷。
 61. Is it yours? 这是你的吗?
 62. That's neat． 这很好。
 63. Are you sure? 你肯定吗?
 64. Do l have to 非做不可吗?
 65. He is my age． 他和我同岁。
 66. Here you are． 给你。
 67. No one knows . 没有人知道。
 68. Take it easy． 别紧张。
 69. What a pity! 太遗憾了!
 70. Any thing else? 还要别的吗?
 71. To be careful! 一定要小心!
 72. Do me a favor? 帮个忙，好吗?
 73. Help yourself． 别客气。
 74. I'm on a diet． 我在节食。
 75. Keep in Touch． 保持联络。
 76. Time is money． 时间就是金钱。
 77. Who's calling? 是哪一位?
 78. You did right． 你做得对。
 79. You set me up! 你出卖我!
 80. Can I help you? 我能帮你吗?
 81. Enjoy yourself! 祝你玩得开心!
 82. Excuse me,Sir． 先生，对不起。
 83. Give me a hand! 帮帮我!
 84. How's it going? 怎么样?
 85. I have no idea． 我没有头绪。
 86. I just made it! 我做到了!
 87. I'll see to it 我会留意的。
 88. I'm in a hurry! 我在赶时间!
 89. It's her field． 这是她的本行。
 90. It's up to you． 由你决定。
 91. Just wonderful! 简直太棒了!
 92. What about you? 你呢?
 93. You owe me one．你欠我一个人情。
 94. You're welcome． 不客气。
 95. Any day will do． 哪一天都行。
 96. Are you kidding? 你在开玩笑吧!
 97. Congratulations! 祝贺你!
 98. T can't help it. 我情不自禁。
 99. I don't mean it. 我不是故意的。
 100. I'll fix you up． 我会帮你打点的。

 101. It sounds great!． 听起来很不错。
 102. It's a fine day。 今天是个好天。
 103. So far, so good． 目前还不错。
 104. What time is it? 几点了?
 105. You can make it! 你能做到!
 106. Control yourself! 克制一下!
 107. He came by train． 他乘火车来。
 108. He is ill in bed． 他卧病在床。
 109. He lacks courage． 他缺乏勇气。
 110. How's everything? 一切还好吧?
 111. I have no choice． 我别无选择。
 112. I like ice-cream． 我喜欢吃冰淇淋。
 113. I love this game． 我钟爱这项运动。
 114. I'll try my best． 我尽力而为。
 115. I'm On your side． 我全力支持你。
 116. Long time no see! 好久不见!
 117. No pain,no gain． 不劳无获。
 118. Well,it depends. 噢，这得看情况。
 119. We're all for it． 我们全都同意。
 120. What a good deal! 真便宜!
 121. What should I do? 我该怎么办？
 122. You asked for it! 你自讨苦吃!
 123. You have my word． 我保证。
 124. Believe it or not! 信不信由你!
 125. Don't count on me．别指望我。
 126. Don't fall for it! 别上当!
 127. Don't let me down． 别让我失望。
 128. Easy come easy go． 来得容易，去得快。
 129. I beg your pardon． 请你原谅。
 130. I beg your pardon? 请您再说一遍(我没有听清)。
 131. I'll be back soon． 我马上回来。
 132. I'll check it out． 我去查查看。
 133. It’s a long story． 说来话长。
 134. It’s Sunday today． 今天是星期天。
 135. Just wait and see! 等着瞧!
 136. Make up your mind． 做个决定吧。
 137. That's all I need． 我就要这些。
 138. The view is great． 景色多么漂亮!
 139. The wall has ears． 隔墙有耳。
 140. There comes a bus． 汽车来了。
 141. What day is today? 今天星期几?
 142. What do you think? 你怎么认为？
 143. Who told you that? 谁告诉你的?
 144. Who's kicking off? 现在是谁在开球?
 145. Yes,I suppose So． 是的，我也这么认为。
 146. You can't miss it 你一定能找到的。
 147. Any messages for me? 有我的留言吗?
 148. Don't be so modest． 别谦虚了。
 149. Don't give me that! 少来这套!
 150. He is a smart boy． 他是个小机灵鬼。
 151. He is just a child． 他只是个孩子。
 152. I can't follow you． 我不懂你说的。
 153. I felt sort of ill. 我感觉有点不适。
 154. I have a good idea! 我有一个好主意。
 155. It is growing cool． 天气渐渐凉爽起来。
 156. It seems all right． 看来这没问题。
 157. It's going too far． 太离谱了。
 158. May I use your pen? 我可以用你的笔吗?
 159. She had a bad cold． 她患了重感冒。
 160. That's a good idea． 这个主意真不错。
 161. The answer is zero． 白忙了。
 162. What does she like? 她喜欢什么?
 163. As soon as possible! 越快越好!
 164. He can hardly speak． 他几乎说不出话来。
 165. He always talks big． 他总是吹牛。
 166. He won an election． 他在选举中获胜。
 167. I am a football fan． 我是个足球迷。
 168. If only I could fly． 要是我能飞就好了。
 169. I'll be right there． 我马上就到。
 170. I'll see you at six． 我六点钟见你。
 171. IS it true or false? 这是对的还是错的?
 172. Just read it for me． 就读给我听好了。
 173. Knowledge is power． 知识就是力量。
 174. Move out of my way! 让开!
 175. Time is running out． 没时间了。
 176. We are good friends． 我们是好朋友。
 177. What's your trouble? 你哪儿不舒服?
 178. You did fairly well! 你干得相当不错1
 179. Clothes make the man． 人要衣装。
 180. Did you miss the bus? 你错过公共汽车了?
 181. Don't lose your head。 不要惊慌失措。
 182. He can't take a joke． 他开不得玩笑。
 183. He owes my uncle $100．他欠我叔叔100美元。
 184. How are things going? 事情进展得怎样?
 185. How are you recently? 最近怎么样?
 186. I know all about it． 我知道有关它的一切。
 187. It really takes time． 这样太耽误时间了。
 188. It's against the law． 这是违法的。
 189. Love me,love my dog． (谚语)爱屋及乌。
 190. My mouth is watering． 我要流口水了。
 191. Speak louder,please． 说话请大声点儿。
 192. This boy has no job． 这个男孩没有工作。
 193. This house is my own． 这所房子是我自己的。
 194. What happened to you? 你怎么了?
 195. You are just in time. 你来得正是时候。
 196. You need to work out． 你需要去运动锻炼一下。
 197. Your hand feels cold． 你的手摸起来很冷。
 198. Don't be so childish. 别这么孩子气。
 199. Don't trust to chance! 不要碰运气。
 200. Fasten your seat belt． 系好你的安全带。
 201. He has a large income. 他有很高的收入。
 202. He looks very healthy． 他看来很健康。
 203. He paused for a reply． 他停下来等着·回答。
 204. He repaired his house． 他修理了他的房子。
 205. He suggested a picnic. 他建议搞一次野餐。
 206. Here's a gift for you． 这里有个礼物送给你。
 207. How much does it cost? 多少钱?
 208. I caught the last bus. 我赶上了最后一班车。
 209. I could hardly speak． 我简直说不出话来。
 210. I'll have to try that． 我得试试这么做。
 211. I'm very proud of you． 我为你感到非常骄傲。
 212. It doesn't make sense. 这没有意义(不合常理)。
 213. Make yourself at home． 请不要拘礼。
 214. My car needs washing． 我的车需要洗一洗。
 215. None of your business! 与你无关!
 216. Not a sound was heard. 一点声音也没有。
 217. That's always the case． 习以为常了。
 218. The road divides here. 这条路在这里分岔。
 219. Those are watermelons． 那些是西瓜。
 220. What a nice day it is! 今天天气真好!
 221. What's wrong with you? 你哪里不对劲?
 222. You are a chicken． 你是个胆小鬼。
 223. A lovely day,isn't it? 好天气，是吗?
 224. He is collecting money． 他在筹集资金。
 225. He was born in New York． 他出生在纽约。
 226. He was not a bit tired． 他一点也不累。
 227. I will be more careful． 我会小心一些的，
 228. I will never forget it． 我会记着的。
 229. It is Just what I need． 这正是我所需要的。
 230. It rather surprised me． 那事使我颇感惊讶。
 231. Just around the comer． 就在附近。
 232. Just for entertainment． 只是为了消遣一下。
 233. Let bygones be bygones． 过去的，就让它过去吧。
 234. Mother doesn't make up． 妈妈不化妆。
 235. Oh,you are kidding me． 哦，你别拿我开玩笑了。
 236. She has been to school. 她上学去了。
 237. Skating is interesting． 滑冰很有趣。
 238. Supper is ready at six． 晚餐六点钟就好了。
 239. That's a terrific idea! 真是好主意!
 240. What horrible weather! 这鬼天气!
 241. Which would you prefer? 你要选哪个?
 242. Does she like ice-cream? 她喜欢吃冰淇淋吗?
 243. First come first served． 先到先得。
 244. Great minds think alike． 英雄所见略同。
 245. He has a sense of humor． 他有幽默感。
 246. He is acting an old man． 他正扮演一个老人。
 247. He is looking for a job． 他正在找工作。
 248. He doesn't care about me． 他并不在乎我。
 249. I develop films myself． 我自己冲洗照片。
 250. I felt no regret for it． 对这件事我不觉得后悔。
 251. I get up at six o'clock． 我六点起床。
 252. I meet the boss himself． 我见到了老板本人。
 253. I owe you for my dinner. 我欠你晚餐的钱。
 254. I really enjoyed myself． 我玩得很开心。
 255. I'm fed up with my work! 我对工作烦死了!
 256. It's no use complaining. 发牢骚没什么用。
 257. She's under the weather． 她心情·不好。
 258. The child sobbed sadly． 小孩伤心地抽泣着。
 259. The rumor had no basis． 那谣言没有·根据。
 260. They praised him highly． 他们大大地表扬了他。
 261. Winter is a cold season. 冬天是一个，寒冷的季节。
 262. You can call me any time． 你可以随时打电话给我。
 263. 15 divided by3 equals 5． 15除以3等于5。
 264. All for one， one for all． 我为人人，人人为我。
 265. East, west， home is best． 金窝，银窝，不如自己的草窝。
 266. He grasped both my hands. 他紧握住我的双手。
 267. He is physically mature． 他身体己发育成熟。
 268. I am so sorry about this. 对此我非常抱歉(遗憾)。
 269. I can't afford a new car． 我买不起一部新车。
 270. I do want to see him now． 我现在确实很想去见他。
 271. I have the right to know. 我有权知道。
 272. I heard some one laughing. 我听见有人在笑。
 273. I suppose you dance much． 我想你常常跳舞吧。
 274. I walked across the park． 我穿过了公园。
 275. I'll just play it by ear． 我到时随机应变。
 276. I'm not sure I can do it． 恐怕这事我干不了。
 277. I'm not used to drinking． 我不习惯喝酒。
 278. Is the cut still painful? 伤口还在痛吗?
 279. It's too good to be true! 好得难以置信。
 280. Jean is a blue-eyed girl． 珍是个蓝眼睛的女孩。
 281. Let's not waste our time． 咱们别浪费时间了。
 282. May I ask some questions? 我可以问几个问题吗?
 283. Money is not everything． 金钱不是一切。
 284. Neither of the men spoke． 两个人都没说过话。
 285. Stop making such a noise． 别吵了。
 286. That makes no difference． 没什么区别。
 287. The price is reasonable． 价格还算合理。
 288. They crowned him king． 他们拥立他为国王。
 289. They're in red and white. 他们穿着红白相间的衣服。
 290. We all desire happiness. 我们都想要幸福。
 291. We just caught the plane 我们刚好赶上了飞机。
 292. What shall we do tonight? 我们今天晚上去干点儿什么呢?
 293. What's your goal in life 你的人生目标是什么?
 294. When was the house built? 这幢房子是什么时候建造的?
 295. Why did you stay at home? 为什么呆在家里?
 296. Would you like some help? 今天真漂亮!
 297. You mustn't aim too high 你不可好高骛远。
 298. You're really killing me! 真是笑死我了!
 299. You've got a point there． 你说得挺有道理的。
 300. Being criticized is awful! 被人批评真是痛苦!
 301. Did you enter the contest? 你参加比赛了吗?
 302. Do you accept credit cards? 你们收信用卡吗?
 303. Don't cry over spilt milk． 不要做无益的后悔。
 304. Don't let chances pass by． 不要让机遇从我们身边溜走。
 305. He owned himself defeated． 他承认自己失败了。
 306. He seems at little nervous． 他显得有点紧张。
 307. He strolls about the town． 他在镇上四处遛达。
 308. Her tooth ached all night. 她牙疼了一整夜。
 309. How about a drink tonight? 今晚喝一杯怎样?
 310. I can do nothing but that. 我只会做那件事。
 311. I get hold of you at last． 我终于找到你了。
 312. I have a surprise for you． 我有一个意想不到的东西给你看。
 313. I like all kinds of fruit． 我喜欢各种各样的水果。
 314. I saw it with my own eyes． 我亲眼所见。
 315. I will arrange everything． 我会安排一切的。
 316. I wish I knew my neighbor． 我很想认识我的邻居。
 317. I would like to check out． 我想结帐。
 318. It has be come much cooler． 天气变得凉爽多了。
 319. It's time you went to bed． 你早就该睡觉了。
 320. No spitting on the street． 禁止在大街上吐痰。
 321. She was totally exhausted． 她累垮了。
 322. Show your tickets,please． 请出示你的票。
 323. Thank you for your advice． 谢谢你的建议。
 324. That's the latest fashion． 这是最流行的款式。
 325. The train arrived on time． 火车准时到达。
 326. There go the house lights． 剧院的灯光灭了。
 327. They are paid by the hour． 他们按时取酬。
 328. Things are getting better． 情况正在好转。
 329. Wake me up at five thirty． 请在五点半叫醒我。
 330. We are all busy with work． 我们都忙于工作。
 331. Where do you want to meet? 你想在哪儿见面?
 332. You can get what you want． 你能得到你想要的。
 333. A barking dog doesn't bite! 吠犬不咬人。
 334. Are you free this Saturday? 你这个星期六有空吗?
 335. Be careful not to fall ill． 注意不要生病了。
 336. Being a mother is not easy． 做一个母亲是不容易的。
 337. Brevity is the soul of wit． 简洁是智慧的精华。
 338. Cancer is a deadly disease． 癌症是一种致命的疾病。
 339. Did you fight with others? 你又和别人打架了吗?
 340. Don't dream away your time． 不要虚度光阴。
 341. Don't keep me waiting long． 不要让我等得太久。
 342. He has a remarkable memory． 他有惊人的记忆力。
 343. He has completed the task． 他完成了这个任务。
 344. He has quite a few friends． 他有不少的朋友。
 345. He is capable of any crime． 他什么样的坏事都能干得出来。
 346. He walks with a quick pace． 他快步走路。
 347. He was not a little tired． 他很累。
 348. His looks are always funny． 他的样子总是滑稽可笑。
 349. How about going to a movie? 去看场电影怎么样?
 350. I think I've caught a cold． 我想我得了感冒。
 351. I was taking care of Sally. 我在照顾萨莉。
 352. I wish I lived in New York． 我希望住在纽约。
 353. I'm very glad to hear that． 很高兴听你这样说。
 354. I'm your lucky fellow then. 我就是你的幸运舞伴啦!
 355. It's none of your business! 这不关你的事儿!
 356. No littering on the campus． 在校园内不准乱丢废物。
 357. She is a good-looking girl. 她是一个漂亮女孩。
 358. She mended the broken doll． 她修补了破了的洋娃娃。
 359. So I just take what I want． 那么我只拿我所需要的东西。
 360. Spring is a pretty season， 春天是一个好季节。
 361. The figure seems all Right． 数目看起来是对的。
 362. The stars are too far away． 星星太遥远了。
 363. The whole world knows that． 全世界都知道。
 364. Tomorrow will be a holiday． 明天放假。
 365. We walk on the garden path． 我们走在花园小径上。
 366. What you need is just rest． 你需要的就是休息。
 367. What's your favorite steps? 你最喜欢跳什么舞?
 368. You'd better let her alone． 你们最好是让她一个人呆会儿。
 369. A lost chance never returns． 错过的机会永不再来。
 370. Don't let this get you down． 不要为此灰心丧气。
 371. He shot the lion with a gun. 他用枪把狮子打死了。
 372. I don't think you are right． 我认为你是不对的。
 373. I have never seen the movie． 我从未看过那部电影。
 374. I haven't seen you for ages． 我好久没见到你了。
 375. I was alone,but not lonely． 我独自一人，但并不觉得寂寞。
 376. I went there three days ago． 我三天前去过那儿。
 377. It's a friendly competition． 这是一场友谊赛。
 378. It's very thoughtful of you． 你想得真周到。
 379. May I speak to Lora,please? 我能和劳拉说话吗?
 380. Mr.Wang is fixing his bike． 王先生在修他的自行车。
 381. My brother is see king a job． 我弟弟正在找工作。
 382. Nancy will retire next year． 南希明年就退休了。
 383. Neither you nor he is wrong． 你没错，他也没错。
 384. Opportunity knocks but once． 机不可失，时不再来。
 385. She dressed herself hastily． 她匆忙穿上衣服。
 386. She hired a car by the hour． 她租了一辆按钟点计费的汽车。
 387. Someone is ringing the bell． 有人在按门铃。
 388. The Smiths are my neighbors. 史密斯一家是我的邻居。
 389. These shoes don't fit right． 这双鞋不太合适。
 390. This is only the first half． 这才是上半场呢。
 391. This pen doesn't write well． 这钢笔不好写。
 392. Would you like a cup of tea? 你想喝杯茶吗?
 393. You really look sharp today． 你今天真漂亮。
 394. Another cat came to my house． 又有一只猫来到我家了。
 395. Check your answers with mine． 把你的答案跟我的核对一下。
 396. Don't keep the truth from me． 别瞒着我事实真相。
 397. Everything has its beginning． 凡事都有开端。
 398. He came to the point at once． 他一下子就说到了点子上。
 399. He fell behind with his work． 他工作落后了。
 400. He is the happiest man alive. 他是世界上最快乐的人。
 401. He neither smokes nor drinks． 他既不抽烟也不喝酒。
 402. He ran his horse up the hill． 他策马跑上小山。
 403. He reminds me of his brother. 他使我想起了他的弟弟。
 404. He was efficient in his work． 他工作效率高。
 405. He will do anything but work． 只要不是干活，他干什么都行。
 406. His father runs a restaurant． 他的父亲经营一家餐馆。
 407. I have something to tell you． 我有事要告诉你。
 408. I smelled a smell of cooking． 我闻到了烧菜做饭的味道。
 409. I want to see the film again． 我真想再看一遍。
 410. I've got too much work to do． 我要做的工作太多了。
 411. Let's go for a walk,shall we? 咱们出去走走，好吗?
 412. Please let me check the bill． 请让我核对一下帐单。
 413. Plenty of sleep is healthful． 充足的睡眠有益于健康。
 414. The sun comes up in the east． 太阳从东方升起。
 415. This is because we feel pain． 这是因为我们能感到疼痛。
 416. What do you desire me to do? 你想要我做什么?
 417. What you said was quite true. 你所说的完全符合事实。
 418. You can either stay or leave． 你或者留下或者离开。
 419. Your life is your own affair． 你的生活是你自己的事。
 420. All that glitters is not gold． 发闪光的不全是黄金。
 421. Are you going to have a party? 你要举行聚会吗?
 422. Aren't you concerned about it? 难道你不担心吗?
 423. Don't forget to keep in touch． 别忘了保持联系。
 424. He broke his words once again. 他又一次违背了诺言。
 425. He is in his everyday clothes． 他穿着平常的衣服。
 426. He is taller than I by ahead． 他比我高一头。
 427. He led them down the mountain． 他带他们下山。
 428. He was trained to be a lawyer． 他被培养成一名律师。
 429. I am afraid that l have to go． 我要走了。
 430. I don't have any cash with me． 我身上没带现金。
 431. I have been putting on weight． 我开始发胖了。
 432. I have just finished the book． 我刚刚读完这本书。
 433. I was late for work yesterday， 我昨天上班迟到了。
 434. It appears to be a true story． 这故事似乎是真的。
 435. I've got to start working out． 我必须开始做健身运动了。
 436. Japan is to the east of China． 日本在中国的东部。
 437. John asked Grace to marry him， 约翰向格雷斯求婚。
 438. My watch is faster than yours． 我的表比你的表快。
 439. New China was founded in l949． 1949年新中国成立。
 440. Thanks for your flattering me． 多谢你的夸奖。
 441. They charged the fault on him． 他们把过失归咎于他。
 442. This car is in good condition． 这车性能很好。
 443. This work itself is very easy． 这件工作本身很容易。
 444. Truth is the daughter of time． 时间见真理。
 445. We look forward to your visit． 期待您的光临。
 446. What do you think of this one? 您觉得这个怎么样子
 447. What's the weather like to day? 今天天气怎么样?
 448. A red tie will match that suit． 红领带会配那件衣服。
 449. A wet road is usually slippery． 潮湿的路往往是滑的。
 450. Example is better than precept。 身教胜于言传。
 451. Go right back to the beginning． 直接回到起始位置。
 452. He does everything without aim． 他做事都漫无目标。
 453. He is respectful to his elders． 他对长辈很恭敬。
 454. He knows English better than I． 他比我懂英语。
 455. He resolved to give up smoking． 他决心戒烟。
 456. His talk covered many subjects． 他的报告涉及很多课题。
 457. I fear that he drinks too much． 我担心他喝的酒太多了。
 458. I have my hair cut every month． 我每个月都理发。
 459. I want to have a part-time job． 我想有一份兼职工作。
 460. I'm sorry to have bothered you． 对不起，打扰你了。
 461. It is not so easy as you think． 这事没有你想象的那么简单。
 462. Keep your temper under control． 不要发脾气。 ．
 463. Lying and stealing are immoral． 说谎和偷窃都是不道德的。
 464. My efforts resulted in nothing． 我的努力毫无结果。
 465. My false teeth are stuck to it． 我的假牙还在上边呢!
 466. She is a composer for the harp． 她是位写竖琴曲的作曲家
 467. Take me to the airport,please． 请送我去机场。
 468. Talking with you is a pleasure. 和你谈话很愉快
 469. The eggs are sold by the dozen． 鸡蛋按打卖。
 470. The price just covers the cost． 这个价格正好抵消成本。
 471. The sweater is of good quality. 这件毛衣质地很好。
 472. The teacher got a little angry． 老师有点生气了。
 473. Think carefully before you act． 三思而后行。
 474. Walt invented the steam engine． 瓦特发明了蒸汽机。
 475. We are divided in our opinions． 我们意见分歧。
 476. What ever I said,he'd disagree． 不论我说什么他都不同意。
 477. Who ever comes will be welcomed． 来的人我们都欢迎。
 478. You look as if you didn't care． 你看上去好像满不在乎。
 479. You should look at it yourself． 你应该亲自看看它。
 480. Draw your chair up to the table． 把你的椅子拉到桌子旁边来。
 481. He covered himself with a quilt． 他给自己盖上一条被。
 482. He found my lecture interesting． 他觉得我讲课有趣。
 483. He had a good many friends here． 他在这儿有很多朋友。
 484. He is only about five feet high. 他大概只有五英尺高。
 485. Her family are all music lovers． 她全家人都是音乐爱好者。
 486. I am busy.How is your business? 我很忙。你的生意做得怎样?
 487. I don't think much of the movie． 我认为那电影不怎么样。
 488. I feel like eating an ice-cream． 我想吃一个冰淇淋。
 489. I found him seated on the bench． 我发现他在椅子上坐着。
 490. I gave much time to the old car． 我在这辆破车上花了不少时间。
 491. I lost the door key about here. 我在这附近掉了门钥匙。
 492. I'm not guessing,I really know． 我不是在猜想，我真的知道。
 493. It's time to tell her the truth． 是该告诉她真相的时候了。
 494. Let's watch TV with a candle on． 咱们点上蜡烛看电视吧。
 495. Most games cost about that much． 大部分游戏差不多都是这个价钱。
 496. My parents want me to go abroad． 我父母想让我出国。
 497. She has been collecting stamps． 她一直收集邮票。
 498. There are many stars in the sky． 天上有很多星星。
 499. We get to London this afternoon． 我们是今天下午到达伦敦的。
 500. What about having a pizza first? 先吃点比萨饼怎么样?

 501. You'd better look before you leap． 你最好三思而后行。
 502. You know what I'm talking about. 我想你知道我在说什么。
 503. He has been sick for three weeks． 他已经病了几周了。
 504. He inspected the car for defects． 他详细检查车子有无效障。
 505. I count you as one of my friends 我把你算作我的一个朋友。
 506. I go to school by bike every day. 我每天骑自行车上学。
 507. I have a large collection of CDs. 我收集了很多唱片。

 508. I won't be able to see him today. 今天我不可能去看他。
 509. I'll call a taxi in case of need． 如果需要的话，我会叫出租车的。
 510. Is there any sugar in the bottle? 瓶子里还有糖吗?
 511. It's a secret between you and me. 这是你我之间的秘密。
 512. It's very kind of you to help me． 你帮助我真是太好了。
 513. Let's divide the cake into three． 我们将蛋糕分成三份吧。
 514. Patience is a mark of confidence. 耐心是自信心的一种表现。
 515. Susan is going to finish college． 苏珊将完成大学学业。
 516. That is my idea about friendship． 这是我关于友谊的看法。
 517. The book you ask for is sold out． 你要的那本书已经售完了。
 518. The boy was too nervous to speak． 那男孩紧张得说不出话来。
 519. The play may begin at any moment． 戏随时都有可能开始。
 520. The salve will heal slight burns． 这种药膏能治疗轻微烧伤。
 521. The sea sparkled in the sunlight． 阳光下，大海波光粼粼。
 522. The teacher tested us in English． 老师用英文考我们。
 523. There is a bridge over the river. 河上有一座桥。
 524. They rode their respective bikes． 他们各自骑着自己的自行车。
 525. They will arrive in half an hour． 他们将于半小时之内到达。
 526. Time is more valuable than money. 时间比金钱宝贵。
 527. We are all in favor of this plan． 我们都赞同这项计划。
 528. We reached London this afternoon． 我们是今天下午到达伦敦的。
 529. We two finished a bottle of wine． 我俩喝完了一瓶酒。
 530. what a lovely little girl she is! 她是一个多么可爱的小女孩耶!
 531. Will you pick me up at my place? 你能到我的住处来接我吗?
 532. You may choose whatever you like． 你可以喜欢什么就选什么。
 533. You're suffering from an allergy? 你过敏吗?
 534. Beyond all questions you are right. 毫无疑问，你是对的。
 535. But I plan to weed the yard today. 我计划今天除院子里的草。
 536. But who will do all the house work? 但是这些家务活谁来做呢?
 537. Close the door after you,please． 请随手关门。
 538. Come to see me whenever you like。 你可以随时来见我。
 539. Don't pull the chairs about,boys! 不要把椅子拖来拖去，孩子们!
 540. He drives more carefully than you． 他开车比你小心。
 541. He invited me to dinner yesterday． 他昨天请我吃晚饭了。
 542. He struck his attacker on the ear． 他打了那个攻击者一耳光。
 543. He suddenly appeared in the party． 他突然在晚会上出现了。
 544. Her handbag goes with her clothes. 她的手袋和她的衣服很搭配。
 545. Here we are.Row M, seats l and 3． 哦，到了。M排，l号和3号。
 546. His boss might get angry with him． 他的老板也许会生他的气。
 547. I expect to be there this evening． 我打算今天晚上到那儿去。
 548. I really need to lose some weight． 我真的需要减肥了。
 549. I think you have the Wrong number． 我想你打错号码了。
 550. I would rather stay at home alone． 我宁愿独自呆在家。
 551. I'd like to look at some sweaters． 我想看看毛衣。
 552. Its origin is still a mystery now． 它的起源至今仍是个谜。
 553. Money is no more than our servant． 金钱不过是我们的仆人。
 554. Once you begin,you must continue． 一旦开始，你就得继续。
 555. She is poor but quite respectable． 她虽穷，人品却很端正。
 556. She spent a lot of money on books． 她花了很多钱来买书。
 557. The girl in red is his girlfriend． 穿红衣服的那个女孩是他的女朋友。
 558. There is a chair below the window． 窗户下面有一把椅子。
 559. They employed him as a consultant． 他们雇用他为顾问。
 560. To be honest with you,I'm twenty． 老实说，我20岁。
 561. We often call him by his nickname． 我们经常叫他的绰号。
 562. Will you be free tomorrow evening? 你明晚有空吗?
 563. Would you like to leave a message? 你要留话吗?
 564. You can never turn the clock back． 时光不能倒流。
 565. You may as well tell me the truth． 你还是把事实告诉我为好。
 566. Are your grandparents still living? 你的祖父母还在么?
 567. Can you recognize that woman,Mary? 你能认出那个女人是谁了吗，玛丽?
 568. Do you have any suggestions for me? 你对我有什么建议么?
 569. He is tough,but I am even tougher. 他是一个硬汉子，不过我要比他更硬。
 570. He made his way through the forest． 他设法穿过了森林。
 571. He suggests you leave here at once． 他建议你立刻离开这儿。
 572. He was married to a friend of mine． 他和我的一个朋友结了婚。
 573. He will blame you for carelessness． 他会责备你的粗心大意。
 574. I can give you a number of excuses． 我可以给你说出很多韵理由。
 575. I don't doubt that he will help me． 我不怀疑他会援助我。
 576. I hope you enjoy your stay with us． 希望您在这儿过的愉快。
 577. I'd like to-repair our differences． 我愿意消除一下我们之间的分歧。
 578. It's nothing to be surprised about． 这事不值得大惊小怪。
 579. It's rude to stare at other people. 盯着别人看是不礼貌的。
 580. Bob has always had a crush on Lucy． 鲍伯一直在爱着露茜。
 581. Let's take a short break for lunch． 让我们休息一会儿，去吃午饭。
 582. Linda speaks as if she were a boss． 琳达说话总好象她是老板。
 583. She became more and more beautiful． 她变得越来越漂亮了。
 584. Suppose it rains,what shall we do? 万一下雨，我们该怎么办?
 585. The book is protected by copyright． 该书受版权保护。
 586. The ice is hard enough to skate on． 冰已经厚得可以划冰了。
 587. The price includes postage charges. 价格包括邮资在内。
 588. This is a little something for you． 这是我给你们的一点心意。
 589. What he likes best is making jokes． 他最喜欢开玩笑。
 590. Who but Jack would do such a thing? 除了杰克谁会做这种事呢?
 591. You should have a mind of your own． 你必须有自己的主见。
 592. You will soon get used to the work． 你很快就会习惯于这项工作的。
 593. Columbus discovered America in l492． 哥伦布于1492年发现了美洲。
 594. God helps those who he1p themselves． 上帝帮助那些自己帮自己的人。
 595. He has a nice sum of money put away． 他存了一大笔钱。
 596. He is heavily insured against death． 他给自己投了巨额的人身保险。
 597. He used to learn everything by rote． 他过去总是死记硬背。
 598. He's a terrible man when he's angry． 他生气的时候很可怕。
 599. I am on my way to the grocery store． 我正在去杂货店的路上。
 600. I am sick of always waiting

 601. I appreciate John's helping in time． 我感谢约翰的及时帮助。
 602. I bought it the day it was released. 它发行的当天我就买了。
 603. I doubted whether the story is true． 我怀疑那故事是不是真的。
 604. I learnt that I had passed the test． 我获悉我测验及格了。
 605. I will seek from my doctor's advice． 我将请教医生的意见。
 606. Ice cream is popular among children． 冰淇淋深受孩子们的欢迎。
 607. I'd like to get this film developed． 我要冲洗这卷胶卷。
 608. In a word,I am tired of everything． 总之，我对一切都很厌倦。
 609. Let us do it by ourselves,will you? 我们自己做这件事，可以吗?
 610. May I know the quantity you require? 请问你们需要多少数量的货物?
 611. Nobody has ever solved this problem． 没有人曾解决过这个问题。
 612. Our school covers 100 square meters． 我们学校占地面积平方米。
 613. People enjoyed the stamps very much． 人们非常喜爱这些邮票。
 614. The editor over looked a print error． 这位编辑漏掉了一个印刷错误。
 615. The sudden barking frightened Clara． 突然的狗叫声吓坏了克拉拉。
 616. The teams are coming onto the field． 队员们都进场了。
 617. There is a mark of ink on his shirt． 他的衬衣上有一块墨迹。
 618. There isn't any water in the bottle． 瓶子里一点水也没有。
 619. This joke has gone a little too far． 这个玩笑开得有点-过分了。
 620. We arrived in London this afternoon。 我们是今天下午到达伦敦的。
 621. We can't go out because of the rain． 我们不能出去因为下雨了。
 622. We should make good use of our time． 我们应该充分利用我们的时间。
 623. We should save unnecessary expenses.我们应节省不必要的开支。
 624. You may have heard of Birth Control.你们也许听说过控制人口出生的措施。
 625. After a pause he continued his story.停顿一下之后他继续说他的。
 626. As you know, I am a very kind person. 你知道，我是个很和善的人。
 627. He dare not tell us his evil conduct.他不敢告诉我们他的恶行。
 628. I can express myself in good English. 我可以用很好的英语来表达自己的观
 点。
 629. I'll furnish my house with furniture. 我要为我的房子置办家具。
 630. It seemed as if there was no way out. 看情形似乎没有出路了。
 631. It's the hottest day I've had so far. 这是迄今为止我经历的最热的一天。
 632. Mr. Smith is in charge of this class. 史密斯老师负责该班。
 633. Mr. Smith taught English at a school. 史密斯先生在一所学校教英语。
 634. None of us is afraid of difficulties.我们当中没有一个人害怕困难。
 635. Our school is in the east of Beijing. 我们学校在北京的东部。
 636. She really wishes her clock had rung. 她真希望今天早上她的闹钟响了。
 637. She teaches foreign students Chinese. 她教外国学生汉语。
 638. The question will be settled tonight. 这个问题将在今晚解决。
 639. The weight is too much for my height. 相对于我的身高来说，体重太重了!
 640. There are mice in Mrs. Lee's kitchen! 李太太的厨房里有老鼠!
 641. There is no one but hopes to be rich. 没有人不想发财。
 642. There'll be some sport reviews on TV. 电视上会有一些体育评论。
 643. This company is our regular customer. 这家公司是我们的老客户。
 644. This is a good example of his poetry. 这是他诗作的一个好例子。
 645. What we read influences our thinking. 我们所阅读的书本会影响我们的思想。
 646. Words can't express what I felt then. 无法用语言形容我当时的感受。
 647. You really have an ear for pop music. 你确实对流行音乐很有欣赏力。
 648. A bad workman quarrels with his tools.手艺差的工人总是抱怨工具不好使。
 649. Can you adapt yourself to the new job? 你能适应新的工作吗?
 650. Does the computer ever make a mistake.? 计算机出错吗?
 651. Don't be uneasy about the consequence.不必为后果忧虑不安。
 652. Even a child can answer this question.即使小孩儿都能回答这个问题。
 653. He has many strange ideas in his mind. 他脑子里尽足奇思怪想。
 654. He is commonly supposed to be foolish.他是公认的傻瓜。
 655. He sat with his arms across the chest. 他双臂交*于胸前的坐在那里。
 656. He set up a fine example to all of us. 他为我们树立了一个好榜样。
 657. His cake is four times as big as mine. 他的蛋糕是我的四倍大。
 658. I do not care whether it rains or not. 我不管天会不会下雨。
 659. I have a lot in common with my sister. 我和我姐姐有很多相同之处。
 660. I haven't even touched your tooth yet. 我还没有碰到你的牙齿呢。
 661. I'm looking forward to a prompt reply.盼迅速答复。
 662. It is an excellent novel in every way. 无论从哪方面来看，这都是一本优秀的小说。
 663. It is clear that the cat has eaten it!很明显，是猫偷吃的!
 664. Nothing but death can part the couple.除了死之外，什么也拆不散这一对。
 665. Now she looks pale as if she were ill.现在她脸色难看，好像病了一样。
 666. She was injured badly in the accident.她在这次意外中受到重伤。
 667. The secret was spread among the crowd.秘密在人群当中传播开来。
 668. The two brothers look very much alike. 这兄弟俩看上去很相像。
 669. Their interest is listening to others. 他们的兴趣是听别人说话。
 670. There was a notice in the supermarket. 超市里有一个布告。
 671. This one cannot compare with that one. 这个与那个无法比较。
 672. To know everything is to know nothing. 样样通，样样松。
 673. To tell the truth, I don't like disco. 说实话，我不喜欢迪斯科。
 674. True and False have opposite meanings. 真与假含义完全相反。
 675. What's the point of going to college? 上大学有何用?
 676. Where can we make the insurance claim? 我们可以在哪里提出保险赔偿?这个无法与那个比较。
 677. Why don't I pick you up at your house? 为什么不让我去接你呢?
 678. Why don't you attend an aerobic class? 你为什么不去参加一个有氧健身班呢?
 679. You can kill two birds with one stone.一举两得。
 680. You can't go in no matter who you are. 不管你是谁，都不能进去。
 681. You should learn these words by heart. 你应该把这些词背熟。
 682. Could I have those two tickets, please?这两张票给我行不行?
 683. He has to take care of his sick mother. 他得照顾他生病的母亲。
 684. He hired a workman to repair the fence.他雇用了一个工人修理围墙。
 685. I can't make this machine run properly.我无法使这部机器正常运转。
 686. I don't know if I'll have the patience.我不知道我有没有耐心。
 687. I don't like what you are saying.我不喜欢你说的话。
 688. I fell in love with her at first sight.我第一眼见到她就爱上了她。
 689. I have just heard from my sister, Mary.我刚收到我妹妹玛丽的一封信。
 690. If you would only try, you could do it.只要你肯尝试，你一定能做这件事。
 691. It is no use learning without thinking.学而不思则惘。
 692. It was a lazy, breezy autumn afternoon.这是一个懒散的，起风的秋日下午。
 693. Jack is the strongest boy in the class.杰克是全班最强壮的男孩。
 694. Please fetch a chair from another room.请到别的房间取一把椅子。
 695. The doctor began to operate on the boy.医生开始给那个男孩动手术。
 696. The doctor is taking my blood pressure.医生正给我量血压。
 697. The machines will not operate properly.那些机器不能正常运转。
 698. The students declared against cheating.学生们表示反对作弊。
 699. There is hope so long as he is with us. 只要他在就有希望。
 700. He talks as if he were the head of the office.他说话的口气像办公室主任似的。
 701. His cake is three times bigger than mine.他的蛋糕比我的大三倍。
 702. I am looking forward to your early reply. 希望早日得到你的答复。
 703. I could say nothing but that I was sorry.我除了说“对不起”之外，什么也说不出来。
 704. I don't know how to express my gratitude. 我不知道怎样来表达我的感激之情。我要赶飞机
 705. I have to catch a plane. Could you hurry?你能快点吗?我好久没有她的消息了。
 706. I haven't heard from her for a long time.我好久没有她的消息了。
 707. I would like to wash the clothes for you. 我愿意帮你洗这些衣服。
 708. Let me see your driver's license, please. 请让我看看你的驾驶执照。
 709. She goes to work every day except Sunday. 除星期天外，他每天去上班。
 710. Take a seat please, make yourself at home.请坐，随便一点。
 711. The damage was caused by external forces. 损害是由外力引起的。
 712. The doctor advised me to give up smoking.医生建议我戒烟。
 713. The flowers make the room more beautiful.花使房间变得更加美了。
 714. There is a good restaurant on the street.那条大街上有一个很好的餐馆。
 715. They covered 120 miles in a single night.他们仅一夜就走了120英里路。
 716. Try to look on the bright side of things.尽量从好的方面看。
 717. What's your plan for the summer vacation?你暑假打算干什么?
 718. You may pick whichever one you like best.你可以挑你最喜欢的。
 719. You're welcome to stay with us next time.欢迎您下次再光临我们的饭店。
 720. There was a murder in London yesterday. 昨天伦敦发生了一起谋杀案。
 721. They stared at the huge tiger with awe. 他们敬畏地看着那头巨虎。
 722. He never misses a chance to see a movie.他从不错过看电影的机会。
 723. I cannot put up with my noisy roommates.我受不了我那些吵闹的室友了。
 724. I will be back by the end of next month.我下个月底会回来。
 725. I'm good at freestyle and breast stroke.我擅长自由泳和蛙泳。
 726. It was your turn to wash them yesterday. 昨天轮到你把它们洗干净。
 727. Let's go out to have a dinner, shall we?咱们出去吃饭吧，好吗?
 728. Please push the ladder against the wall.请把梯子*在墙壁上。
 729. She is standing in the front of the bus.她站在公共汽车的前部。
 730. The doctor asked me to watch what I eat.医生要我注意饮食。
 731. The grass is moist early in the morning.清晨的草地湿漉漉的。
 732. The test finished. We began our holiday.考试结束了，我们开始放假。
 733. This question is too complicated for me.这个问题对我说来太复杂了。
 734. Tony speaks English and he plays tennis.托尼会说英语，打网球。
 735. What is worth doing is worth doing well.只要你觉得某事值得去做，就一定要把它做好。
 736. Would you like to go to a party with me?你想不想和我一起去参加一个聚会?
 737. All at once, a rabbit came out of a hole.突然，一只兔子从一个洞中跑了出来。
 738. All characters in the book are imaginary.书中所有的人物都是虚构的。
 739. Do you feel like going to that new disco? 你想去那个新开的迪厅
 740. Ducks know how to swim when they are born.鸭子天生会游泳
 741. He spent most of his life gathering money.他一生大部分时间用来积聚钱财。
 742. He usually stays at home with his pet dog.他通常跟他的爱犬待在家里。
 743. How peaceful and beautiful the country is!多么平静美丽的国家呀!
 744. I am told that you dance wonderfully well.我听说你的舞跳得特棒。
 745. I have had several conversations with him.我已经和他谈过几次了。
 746. It is the best film that I have ever seen.这是我所看过的最好的电影。
 747. It's only a party in honor of my birthday.这只是为了庆祝我的生日而举行的晚会。
 748. Learning English is like building a house.学英语象盖房子。
 749. Listening with your heart is good for you.专心聆听别人说话对你有好处。
 750. My grandpa died of hunger in the old days. 我爷爷在旧社会死于饥饿。
 751. She feared staying alone in the farmhouse. 她害怕一个人留在农舍里。
 752. She guided the tourists around the castle.她引导旅游者参观了这座城堡。
 753. She runs everyday in order to lose weight.她每天都跑步是为了减肥。
 754. She sang perfectly in the hall last night.她昨晚在大厅唱得非常好。
 755. Somebody is always complaining to others.有人总是向别人抱怨。
 756. They don't often have a bad day this year.他们今年的运气还不错。
 757. We regard the matter as nothing important. 我们认为这件事情不重要。
 758. We'll take our holiday sometime in August. 我们将在八月份的某个时候休假。
 759. Could you direct me to the station, please?请问到车站怎么走?
 760. Have you cleared your luggage with customs ?你的行李通关了吗?
 761. He bothered me with a great many questions.他对我提了一大堆问题，真烦!
 762. He does exercises every day in the morning.他每天早上锻练身体。
 763. How do I control myself? I can't calm down.我怎能控制我自己?我无法冷静下来。
 764. I dig songs and I like pop music very much.我特别喜欢歌曲和流行音乐。
 765. I'd like to cash a traveler's check please.我想兑换旅行支票。
 766. I'd like to pick sea shells this afternoon.今天下午我想去捡贝壳。
 767. It's odd that they didn't reply our letter.他们没有给我们回信，这真奇怪。
 768. John seldom gets together with his friends.约翰很少与朋友聚在一起。
 769. Many people have been out of work recently.最近有许多人失业。
 770. Please give my best regards to your family.请代我向你们全家致以最诚挚的问候。
 771. Some people have compared books to friends.有些人把书比作朋友。
 772. The bat together with the balls was stolen.球拍和球全被偷了。
 773. The color of her dress suits her very well.她衣服的颜色很适合她。
 774. The days get longer and the nights get shorter.白天变长了，黑夜变短了。
 775. The dress doesn't fit her. She is too thin.这件衣服不适合她，她太瘦了。
 776. The examination put a lot of stress on him.那次考试给了他很大的压力。
 777. The mother sat the child at a little table.母亲安排孩子坐到小桌旁。
 778. There is some difference between the twins.这对双胞胎有点儿不一样。
 779. They insisted on staying rather than going.他们坚持留下来，而不愿意走
 780. Trust me, the game is really worth playing.相信我，这游戏确实值得一玩。
 781. Unlike her friends, she never gave up hope.与她的朋友的不同之处是，她从不放弃希望。
 782. Well done! You are always doing a good job!干得不错!你总是干得很出色!
 783. We're planning a tour to Italy this summer.我们计划今年夏天到意大利去旅行。
 784. Were there any letters for me this morning?今天早上有我的信吗?
 785. Why isn't Mrs. Lee's cat catching the mice?李太太的猫为何不在抓这些老鼠呢?
 786. Your English is improving little by little.你的英语正在渐渐提高。
 787. Could you tell me where I can wash my hands?请问洗手间怎么走?
 788. Do you have any plans for the long weekend?你有办法打发这个漫长的周末吗?
 789. He decided to bring a suit against his boss.他决定起诉他的老板。
 790. He devoted his life to the study of science.他把毕生献给科学研究。
 791. He had to choose between death and dishonor.他不得不在死亡和耻辱之间选择。
 792. His previous attempts had been unsuccessful.他以前的尝试没有成功。
 793. I determined that nothing should be changed.我决定什么都不改变。
 794. I don't think it will lead to a good result.我认为这事不会有什么好结果。
 795. I have 4 books and 2 magazines to check out.我有4本书和2本杂志要借。
 796. I think I've filled in everything correctly.我想各项都填对了。
 797. I'm not sure whether I have locked the door.我没把握是否锁了门。
 798. It took him a little time to fix that watch.他很快就把表修理好了。
 799. My father is at home looking for the ticket.我爸爸正在家里找票呢!
 800. Not until last week did I get a work permit.直到上周我才拿到工作许可证

 801. She intends to make teaching her profession.她想以教书为职业。
 802. The letter "x" stands for an unknown number.字母x代表未知数。
 803. The sight of the dead body scared him stiff.看到尸体把他吓僵了。
 804. There are lots of huge buildings in Beijing.在北京有许多高大的建筑物。
 805. There is an interesting film on Channel one.在一频道有一部有趣的电影。
 806. They plan to immigrate to Finland next year.他们计划明年移居芬兰。
 807. We enjoyed driving along the new expressway.我们喜欢沿着新建的高速公路开车。
 808. We need to cooperate perfectly to win the game.要想赢得比赛，我们需要密切配合。
 809. We need more than listening. We need action!我们需要的不光是听得进意见，我们要的是行动。
 810. Yes. I wouldn't go home early if I were you.是的，如果我是你，我不会早回家。
 811. Your answer is satisfying. I feel satisfied.你的答案是令人满意的。我感到很满意。
 812. Betty and Susan are talking on the telephone.贝蒂和苏珊正在通电话。
 813. Great efforts ensure the success of our work.巨大的努力确保了我们工作的成功。
 814. He has tasted the sweets and bitters of life.他已尝遍了人生的甜酸苦辣。
 815. He said he was educated in the United States.他说他是在美国受的教育。
 816. How do you like our English literature Prof.?你觉得我们的英国文学课的教授怎么样?
 817. I am looking forward to your visit next week.我期待着你下周来访。
 818. I feel I am the happiest person in the world.我觉得自己是世界上最幸福的人了。
 819. I had to sit up all night writing the report.我不得不熬通宵写报告。
 820. I hope we can see each other again some time.希望还能有相见的机会。
 821. I saw him playing football on the playground.我看见他在操场上踢足球。
 822. It is tomorrow that they will have a meeting.就在明天(而不是在别的某一天)他们要开会。
 823. Let me tell you some details about clearance.让我告诉你一些通关的细节。
 824. The brain needs a continuous supply of blood.大脑需要连续不断地供血。
 825. The doctor's words made him feel comfortable.医生的话让他感觉很舒服。
 826. The truth is quite other than what you think.事实真相和你所想的完全不同。
 827. They stopped talking when their boss came in.当老板进来的时候；他们停止了交谈。
 828. They were glad of the examination being over.他们为考试结束了而高兴。
 829. This is by far the largest cake in the world.这是目前世界上最大的蛋糕了。
 830. Whichever you choose, you won't be satisfied.不论你选择哪一个，你都不会满意。
 831. Will you connect this wire to the television ?你把这根电线和电视机连上好吗?
 832. His words are strongly impressed on my memory.他的话深深地铭记在我的心头。
 833. Is this the fight bus for the Capital Library?这辆车到首都图书馆吗?
 834. One third of this area is covered with forest.这一地区三分之一的地方都是森林。
 835. They are arguing over who should pay the bill.他们为谁应该付款而争论不休。
 836. Wait a moment, I'll be with you in an instant.等一下，我立刻就来。
 837. You'll save time not waiting for the elevator.你可以节省等电梯的时间。
 838. A clear conscience laughs at false accusation.只要问心无愧，无端的指责可以一笑置之。
 839. I have a headache, and she has a stomachache.我头疼，她胃疼。
 840. He glared at Bill, ready to teach him a lesson.他怒视着比尔，准备教训他一顿。
 841. I assure you that you will feel no pain at all.我保证你根本不会觉得疼的。
 842. I can't afford to go to a restaurant every day.每天都去餐馆吃饭，我真是支付不起。
 843. I left at 6:00 so that I could catch the train.我六点钟出门，以便赶上火车。
 844. I'm afraid I have some rather bad news for you.我恐怕有些很坏的消息要告诉你。
 845. Learn to say the fight thing at the fight time.学会在适当的时候说适当的话。
 846. No wonder you can't sleep when you eat so much.你吃这么多难怪睡不着。
 847. Please ask her to call me back when she's back.她回来时请让她给我回个电话。
 848. There are a lot of people in the swimming pool.游泳池里挤满了人。
 849. They have to work hard to support their family.他们必须努力工作来支持他们的家。
 850. This way, he can kill two birds with one stone.这样他就能两全其美。
 851. We are all taking medicine against the disease.我们都服药治疗疾病。
 852. Would you please go to a dancing party with me?请你跟我一起去参加一个舞会好吗?
 853. He usually drops in at my place on his way home.他常常在回家的路上顺便来看看我。
 854. His vanity was hurt by their talking so frankly.他们坦率的谈话伤害了他的虚荣心。
 855. How would you go to Beijing, by air or by train?你怎样去北京，是乘飞机还是坐火车?
 856. I cannot express how glad I am to hear from him.我无法表达我接到他的信时有多高兴。
 857. If Tom cannot keep his promise, he'll lose face.如果汤姆不能信守诺言，他就会丢面子。
 858. I'll still love her even if she doesn't love me.即使她不爱我，我还仍然爱她。
 859. I received an invitation, but I did not accept it.我收到-份请帖，但没有接受。
 860. If I were you, I would not be bothered by English.如果我是你，就不会为英语烦恼了。
 861. If you don't work, you will fail to pass the exam.如果你不学习，你考试就会不及格。
 862. I'm thinking of hanging the lamp from the ceiling.我打算把灯吊在天花板上。
 863. It is more important to be healthy than bony slim.健康永远比皮包骨头好。
 864. Long ago, people believed that the world was flat.很久以前人们相信地球是平的。
 865. Old tunes are sweetest and old friends are surest.老调最甜美，老友最可*。
 866. She makes it clear that she doesn't like swimming.她明确地表示她不喜欢游泳。
 867. The constitution guards the liberty of the people.宪法保护人民的自由。
 868. The doctor examined the soldier's wound carefully.大夫仔细检查了战士的伤口。
 869. The harder I study, the better my English will be.我越努力，我的英语就会越好。
 870. The sun was shining and the sky was crystal clear.阳光闪烁，天空湛蓝。
 871. This cellar room is very damp in the rainy season.这间地下室在雨季非常潮湿。
 872. Computers are becoming a part of our everyday life.电子计算机正渐渐成为我们日常生活的一部分。
 873. Every man is fool sometimes, but none at all times.每个人都有愚蠢的时候，但是没有一个人永远愚蠢。
 874. He dreamed of traveling to remote South Sea Islands.他曾梦想到遥远的南海诸岛去旅游。
 875. How can I climb up that wall! I wish I were a bird!我怎么能够爬得上那堵墙?我要是一只鸟就好了!
 876. However, Susan has not really made up her mind yet.然而，苏珊却还没有决定。
 877. I really think a little exercise would do you good.我真的觉得做点运动对你有好处。
 878. I will never forget the days that I spent with you.我永远都不会忘记和你一起度过的日子。
 879. we got a bad headache, and my nose is running.我头痛得厉害，还流鼻涕。
 880. Many young girls dream of being a fashion model.许多年轻女孩梦想成为时装模特儿。
 881. Most of the earth's surface is covered by water.大部分的地球表面被水覆盖着。
 882. Somebody's knocking at the door. I'll answer it.有人在敲门，我去开。
 883. The number 13 bus will take you to the hospital.13路车会带你去医院。
 884. They celebrated his birthday with a dance party.也们举办舞会来祝贺他的生日。
 885. They misplaced this book under other categories.他们把它错放到另一个类别去了。
 886. They played a shameful part in the whole affair.他们在这一事件中扮演了可耻的角色。
 887. As a matter of fact, he was pretending to be ill.实际上，他是在装病。
 888. I will speak against anything I know to be wrong.我会对所有我认为不对的事情直言不讳。
 889. In spite of the heavy rain, she went to the shop.尽管下着大雨，她还是去了商店。
 890. No matter what happened, he would not say a word.不管发生什么事，他也不会说一句话。
 891. No one knows the location of the hidden treasure.谁也不知道藏宝地点在哪里。
 892. The old lady enjoys a quiet life with her family.老太太和她的家人安享宁静的生活。
 893. The population of the city is close to a million.这个城市的人口接近一百万。
 894. We are prohibited from smoking on school grounds.我们被禁止在校园内抽烟。
 895. Growth, however, brings new problems and concerns.不过，发展也带来了新的问题和顾虑。
 896. He appears to be your friend but I doubt if he is.他看上去像是你的朋友，但我怀疑他是否是真心的。
 897. I am so full that I would burst with another bite.我吃得如此之饱，我感觉我再吃一口肚子就要胀破了。
 898. I have two cats. One is white, the other is black.我有两只猫，一只是白猫，另一只是黑猫。
 899. I'm sorry, these 2 books are 3 days overdue.小姐，对不起，这两本书已经过期3天了。
 900. J alu has forgotten falling off his bicycle.詹露早忘掉他从白行车上摔下来这件事了
 */
});

var i = $.cookie('i') || 0;
$(function () {
    $("#sentenceBox").draggable();
    setInterval(function () {
        if (i >= sentences.length) {
            i = 0;
        }
        $("#sentenceBox").html(sentences[i]);
        i++;
        $.cookie('i', i);
    }, 2000);
});
