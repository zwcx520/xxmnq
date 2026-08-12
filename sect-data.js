// ============================================================
// 修仙宗门数据库 - 基于全网修仙小说宗门体系设计
// 共收录 20 个宗门，分为正道、魔道、佛门、中立、仙界五大势力
// 仙界宗门为真仙至大罗境界（realmIdx 9-13）可加入的高级宗门
// ============================================================

const SECT_DATA = {

  // ============================================================
  // 正道宗门（5个）
  // ============================================================
  zhengdao: [
    {
      id: 'sect_huangfeng',
      name: '黄枫谷',
      type: '正道',
      element: '木',
      desc: '越国七大修仙门派之一，擅长木属性功法和灵草培育，谷内灵药遍野，是炼丹师的天堂',
      joinReq: { realmIdx: 0, mindReq: 30, compReq: 30 },
      ranks: [
        { name: '外门弟子', contribution: 0, cultBonus: 0.05 },
        { name: '内门弟子', contribution: 500, cultBonus: 0.10 },
        { name: '核心弟子', contribution: 2000, cultBonus: 0.15 },
        { name: '真传弟子', contribution: 5000, cultBonus: 0.20 },
        { name: '长老', contribution: 15000, cultBonus: 0.25 },
        { name: '太上长老', contribution: 50000, cultBonus: 0.30 }
      ],
      techniques: ['gf_changchun', 'gf_mingshui', 'gf_qingyuan', 'gf_liushen'],
      tasks: [
        { id: 'task_hf1', name: '采灵草', desc: '前往灵药谷采集灵草', cultReq: 0, contribution: 20, stones: 10 },
        { id: 'task_hf2', name: '炼制丹药', desc: '为宗门炼制回气丹10枚', cultReq: 1, contribution: 50, stones: 30 },
        { id: 'task_hf3', name: '驱除妖兽', desc: '清除盘踞灵田的妖兽', cultReq: 1, contribution: 80, stones: 50 },
        { id: 'task_hf4', name: '护卫商队', desc: '护送宗门商队前往坊市', cultReq: 2, contribution: 150, stones: 100 },
        { id: 'task_hf5', name: '探索遗迹', desc: '探查古修士洞府遗迹', cultReq: 3, contribution: 500, stones: 500 }
      ],
      shopItems: [
        { id: 'lingcao', cost: 10, count: 5 },
        { id: 'lingzhi', cost: 50, count: 1 },
        { id: 'huolinguo', cost: 80, count: 1 },
        { id: 'zhuji_dan', cost: 300, count: 1 },
        { id: 'pojing_dan', cost: 500, count: 1 }
      ],
      benefit: '木属性功法修炼速度+10%，炼丹成功率+5%'
    },
    {
      id: 'sect_qingyun',
      name: '青云门',
      type: '正道',
      element: '雷',
      desc: '正道第一大宗，以剑修和雷法闻名天下，门内藏经阁浩如烟海，底蕴深厚',
      joinReq: { realmIdx: 0, mindReq: 50, compReq: 40 },
      ranks: [
        { name: '外门弟子', contribution: 0, cultBonus: 0.05 },
        { name: '内门弟子', contribution: 800, cultBonus: 0.12 },
        { name: '核心弟子', contribution: 3000, cultBonus: 0.18 },
        { name: '真传弟子', contribution: 8000, cultBonus: 0.25 },
        { name: '长老', contribution: 25000, cultBonus: 0.30 },
        { name: '太上长老', contribution: 80000, cultBonus: 0.35 }
      ],
      techniques: ['gf_yuhuo', 'gf_qingyuan', 'gf_baojian', 'gf_douzi', 'gf_dari'],
      tasks: [
        { id: 'task_qy1', name: '清扫山门', desc: '打扫青云峰山门石阶', cultReq: 0, contribution: 15, stones: 5 },
        { id: 'task_qy2', name: '剑道切磋', desc: '与同门师兄弟切磋剑法', cultReq: 1, contribution: 60, stones: 30 },
        { id: 'task_qy3', name: '巡逻护山', desc: '巡逻青云门周边地域', cultReq: 1, contribution: 100, stones: 60 },
        { id: 'task_qy4', name: '降妖除魔', desc: '受命前往妖兽出没之地除害', cultReq: 2, contribution: 200, stones: 150 },
        { id: 'task_qy5', name: '守护大阵', desc: '协助维护宗门护山大阵', cultReq: 3, contribution: 600, stones: 500 }
      ],
      shopItems: [
        { id: 'jingjinshi', cost: 30, count: 3 },
        { id: 'bingjing', cost: 40, count: 2 },
        { id: 'huxin_dan', cost: 100, count: 1 },
        { id: 'zhuji_dan', cost: 250, count: 1 },
        { id: 'tianleimu', cost: 200, count: 1 }
      ],
      benefit: '雷属性功法修炼速度+15%，攻击力+5，剑类法宝威力+10%'
    },
    {
      id: 'sect_shushan',
      name: '蜀山剑派',
      type: '正道',
      element: '金',
      desc: '天下剑修圣地，以万剑归宗闻名于世，门下弟子皆修剑道，剑气冲霄',
      joinReq: { realmIdx: 1, mindReq: 40, compReq: 50 },
      ranks: [
        { name: '记名弟子', contribution: 0, cultBonus: 0.08 },
        { name: '入门弟子', contribution: 600, cultBonus: 0.15 },
        { name: '剑道弟子', contribution: 2500, cultBonus: 0.22 },
        { name: '剑修真传', contribution: 7000, cultBonus: 0.28 },
        { name: '剑道长老', contribution: 20000, cultBonus: 0.35 },
        { name: '剑道宗师', contribution: 60000, cultBonus: 0.40 }
      ],
      techniques: ['gf_qingyuan', 'gf_baojian', 'gf_jiuzhuan', 'gf_douzi'],
      tasks: [
        { id: 'task_ss1', name: '磨剑试炼', desc: '在剑池中磨砺飞剑', cultReq: 1, contribution: 40, stones: 20 },
        { id: 'task_ss2', name: '御剑巡逻', desc: '御剑巡视蜀山周边', cultReq: 1, contribution: 80, stones: 50 },
        { id: 'task_ss3', name: '剑冢取剑', desc: '前往剑冢选取本命飞剑', cultReq: 2, contribution: 180, stones: 120 },
        { id: 'task_ss4', name: '斩妖除魔', desc: '奉师命斩杀为祸妖兽', cultReq: 2, contribution: 250, stones: 200 },
        { id: 'task_ss5', name: '守护剑阵', desc: '维持蜀山万剑大阵运转', cultReq: 3, contribution: 700, stones: 600 }
      ],
      shopItems: [
        { id: 'jingjinshi', cost: 25, count: 5 },
        { id: 'xuantie', cost: 5, count: 10 },
        { id: 'huxin_dan', cost: 80, count: 2 },
        { id: 'pojing_dan', cost: 400, count: 1 },
        { id: 'shenjin', cost: 3000, count: 1 }
      ],
      benefit: '金属性功法修炼速度+15%，攻击力+10，剑类法宝威力+20%'
    },
    {
      id: 'sect_taiyi',
      name: '太一门',
      type: '正道',
      element: '光',
      desc: '正道名门，修炼太一真法，门中弟子精通阵法和符箓，底蕴深厚',
      joinReq: { realmIdx: 0, mindReq: 40, compReq: 35 },
      ranks: [
        { name: '外门弟子', contribution: 0, cultBonus: 0.05 },
        { name: '内门弟子', contribution: 600, cultBonus: 0.12 },
        { name: '核心弟子', contribution: 2500, cultBonus: 0.18 },
        { name: '真传弟子', contribution: 7000, cultBonus: 0.25 },
        { name: '长老', contribution: 20000, cultBonus: 0.30 },
        { name: '太上长老', contribution: 60000, cultBonus: 0.35 }
      ],
      techniques: ['gf_yunshen', 'gf_taiji', 'gf_duren', 'gf_xukong'],
      tasks: [
        { id: 'task_ty1', name: '绘制符箓', desc: '为宗门绘制符纸', cultReq: 0, contribution: 25, stones: 10 },
        { id: 'task_ty2', name: '布阵维护', desc: '维护宗门防御阵法', cultReq: 1, contribution: 70, stones: 40 },
        { id: 'task_ty3', name: '巡查灵脉', desc: '巡查宗门灵脉走向', cultReq: 1, contribution: 100, stones: 60 },
        { id: 'task_ty4', name: '封印妖物', desc: '协助封印作乱妖物', cultReq: 2, contribution: 200, stones: 150 },
        { id: 'task_ty5', name: '阵法推演', desc: '推演上古大阵残片', cultReq: 3, contribution: 600, stones: 500 }
      ],
      shopItems: [
        { id: 'lingzhi_paper', cost: 2, count: 20 },
        { id: 'zhusha', cost: 2, count: 20 },
        { id: 'hunjing', cost: 150, count: 1 },
        { id: 'jingpo', cost: 60, count: 1 },
        { id: 'pojing_dan', cost: 450, count: 1 }
      ],
      benefit: '阵法效果+20%，符箓威力+10%，光属性功法修炼速度+10%'
    },
    {
      id: 'sect_tianyin',
      name: '天音寺',
      type: '正道',
      element: '音',
      desc: '佛门清净之地，以音波功法和心修之术闻名，寺内梵音不绝，心境提升极快',
      joinReq: { realmIdx: 0, mindReq: 60, compReq: 30 },
      ranks: [
        { name: '沙弥', contribution: 0, cultBonus: 0.05 },
        { name: '武僧', contribution: 500, cultBonus: 0.10 },
        { name: '护法', contribution: 2000, cultBonus: 0.15 },
        { name: '法师', contribution: 6000, cultBonus: 0.22 },
        { name: '长老', contribution: 18000, cultBonus: 0.28 },
        { name: '方丈', contribution: 55000, cultBonus: 0.35 }
      ],
      techniques: ['gf_yunshen', 'gf_biyin', 'gf_kongshen', 'gf_duren', 'gf_sanfo'],
      tasks: [
        { id: 'task_tys1', name: '诵经祈福', desc: '在佛前诵经祈福', cultReq: 0, contribution: 20, stones: 5 },
        { id: 'task_tys2', name: '扫地参禅', desc: '扫地参悟佛理', cultReq: 0, contribution: 30, stones: 10 },
        { id: 'task_tys3', name: '超度亡魂', desc: '为亡者超度往生', cultReq: 1, contribution: 80, stones: 40 },
        { id: 'task_tys4', name: '降魔卫道', desc: '降服为祸邪魔', cultReq: 2, contribution: 180, stones: 120 },
        { id: 'task_tys5', name: '闭关参悟', desc: '在达摩洞闭关参悟', cultReq: 3, contribution: 550, stones: 400 }
      ],
      shopItems: [
        { id: 'huiqi_dan_mid', cost: 50, count: 2 },
        { id: 'huxin_dan', cost: 80, count: 1 },
        { id: 'pojing_dan', cost: 350, count: 1 },
        { id: 'jingpo', cost: 50, count: 2 },
        { id: 'yaohun', cost: 400, count: 1 }
      ],
      benefit: '心境提升速度+20%，神识功法修炼速度+15%，抵御心魔+10%'
    },
    {
      id: 'sect_yuqing',
      name: '玉清宗',
      type: '正道',
      element: '空间',
      desc: '元始天尊道统所化之仙界正道魁首，执掌空间本源大道，门下弟子皆修空间法则，可挪移虚空、丈量天地，于诸天万界中地位尊崇',
      joinReq: { realmIdx: 9, mindReq: 200, compReq: 250 },
      ranks: [
        { name: '玉清外门仙徒', contribution: 0, cultBonus: 0.10 },
        { name: '玉清内门仙士', contribution: 10000, cultBonus: 0.18 },
        { name: '玉清真传仙君', contribution: 80000, cultBonus: 0.26 },
        { name: '玉清长老', contribution: 400000, cultBonus: 0.34 },
        { name: '玉清大能', contribution: 1500000, cultBonus: 0.42 },
        { name: '玉清天尊', contribution: 4000000, cultBonus: 0.50 }
      ],
      techniques: ['gf_yuanshizhenjing', 'gf_qiankundanuoyi', 'gf_zhutianwanjie', 'gf_taiji'],
      tasks: [
        { id: 'task_yq1', name: '丈量虚空', desc: '为宗门丈量新辟虚空疆域', cultReq: 0, contribution: 500, stones: 1000 },
        { id: 'task_yq2', name: '镇守界门', desc: '镇守通往诸天万界的界门', cultReq: 1, contribution: 2000, stones: 5000 },
        { id: 'task_yq3', name: '挪移天材', desc: '以空间之法挪移天材地宝回宗', cultReq: 2, contribution: 8000, stones: 20000 },
        { id: 'task_yq4', name: '平息界乱', desc: '平息跨界虚空乱流之祸', cultReq: 3, contribution: 20000, stones: 50000 },
        { id: 'task_yq5', name: '参悟空间大道', desc: '于玉虚秘境参悟空间本源大道', cultReq: 4, contribution: 50000, stones: 100000 }
      ],
      shopItems: [
        { id: 'shenjin', cost: 50000, count: 2 },
        { id: 'tiancaidibao', cost: 30000, count: 1 },
        { id: 'jiuyangshi', cost: 15000, count: 2 },
        { id: 'pojing_dan', cost: 20000, count: 1 },
        { id: 'huiqi_dan_high', cost: 10000, count: 3 }
      ],
      benefit: '空间属性功法威力+30%，修炼速度+20%，挪移阵法与传送效果+50%'
    }
  ],

  // ============================================================
  // 魔道宗门（4个）
  // ============================================================
  modao: [
    {
      id: 'sect_xueshen',
      name: '血神宗',
      type: '魔道',
      element: '血',
      desc: '魔道第一大宗，以血道秘术闻名，修炼需大量精血，功法霸道狠辣，令人闻风丧胆',
      joinReq: { realmIdx: 1, mindReq: 20, compReq: 40 },
      ranks: [
        { name: '血奴', contribution: 0, cultBonus: 0.08 },
        { name: '血侍', contribution: 600, cultBonus: 0.15 },
        { name: '血卫', contribution: 2500, cultBonus: 0.22 },
        { name: '血将', contribution: 7000, cultBonus: 0.30 },
        { name: '血尊', contribution: 20000, cultBonus: 0.38 },
        { name: '血神', contribution: 60000, cultBonus: 0.45 }
      ],
      techniques: ['gf_qisha', 'gf_qigui', 'gf_douzi'],
      tasks: [
        { id: 'task_xs1', name: '采集血药', desc: '前往血池采集血药', cultReq: 1, contribution: 50, stones: 20 },
        { id: 'task_xs2', name: '猎杀妖兽', desc: '猎杀妖兽取其精血', cultReq: 1, contribution: 100, stones: 60 },
        { id: 'task_xs3', name: '血祭法阵', desc: '以鲜血祭炼宗门法阵', cultReq: 2, contribution: 220, stones: 150 },
        { id: 'task_xs4', name: '掠夺修士', desc: '掠夺敌对修士资源', cultReq: 2, contribution: 300, stones: 250 },
        { id: 'task_xs5', name: '血神祭典', desc: '参与血神祭典获取赐福', cultReq: 3, contribution: 800, stones: 600 }
      ],
      shopItems: [
        { id: 'huxin_dan', cost: 50, count: 2 },
        { id: 'pojing_dan', cost: 300, count: 1 },
        { id: 'yaohun', cost: 300, count: 1 },
        { id: 'hunjing', cost: 150, count: 1 },
        { id: 'jiuyangshi', cost: 800, count: 1 }
      ],
      benefit: '攻击力+15，吸血效果+10%，但心境提升速度-10%'
    },
    {
      id: 'sect_wandu',
      name: '万毒门',
      type: '魔道',
      element: '毒',
      desc: '以毒术闻名天下的魔道宗门，门下弟子精通炼毒解毒之术，万蛇窟中奇毒无数',
      joinReq: { realmIdx: 0, mindReq: 25, compReq: 35 },
      ranks: [
        { name: '毒童', contribution: 0, cultBonus: 0.06 },
        { name: '毒徒', contribution: 500, cultBonus: 0.12 },
        { name: '毒师', contribution: 2000, cultBonus: 0.18 },
        { name: '毒将', contribution: 6000, cultBonus: 0.25 },
        { name: '毒尊', contribution: 18000, cultBonus: 0.32 },
        { name: '毒圣', contribution: 55000, cultBonus: 0.40 }
      ],
      techniques: ['gf_chiyuan', 'gf_qisha', 'gf_qigui'],
      tasks: [
        { id: 'task_wd1', name: '采集毒草', desc: '在万蛇窟采集毒草', cultReq: 0, contribution: 25, stones: 10 },
        { id: 'task_wd2', name: '驯养毒虫', desc: '驯养宗门毒虫', cultReq: 1, contribution: 70, stones: 40 },
        { id: 'task_wd3', name: '炼制毒丹', desc: '为宗门炼制毒丹', cultReq: 1, contribution: 110, stones: 70 },
        { id: 'task_wd4', name: '毒杀敌修', desc: '用毒术对付敌对修士', cultReq: 2, contribution: 220, stones: 180 },
        { id: 'task_wd5', name: '万毒大会', desc: '参加万毒大会展示毒术', cultReq: 3, contribution: 650, stones: 500 }
      ],
      shopItems: [
        { id: 'lingcao', cost: 5, count: 10 },
        { id: 'lingzhi', cost: 30, count: 2 },
        { id: 'binglingcao', cost: 40, count: 2 },
        { id: 'huxin_dan', cost: 60, count: 2 },
        { id: 'pojing_dan', cost: 400, count: 1 }
      ],
      benefit: '毒系功法威力+25%，炼丹成功率+5%，抗毒能力+50%'
    },
    {
      id: 'sect_hehuan',
      name: '合欢宗',
      type: '魔道',
      element: '魅',
      desc: '以双修之术闻名的魔道宗门，门下弟子容貌出众，擅长魅惑之术，令人防不胜防',
      joinReq: { realmIdx: 0, mindReq: 35, compReq: 30 },
      ranks: [
        { name: '侍女', contribution: 0, cultBonus: 0.06 },
        { name: '弟子', contribution: 500, cultBonus: 0.12 },
        { name: '护法', contribution: 2000, cultBonus: 0.18 },
        { name: '长老', contribution: 6000, cultBonus: 0.25 },
        { name: '太上长老', contribution: 18000, cultBonus: 0.32 },
        { name: '宗主', contribution: 55000, cultBonus: 0.40 }
      ],
      techniques: ['gf_snlh', 'gf_kongshen', 'gf_biyin'],
      tasks: [
        { id: 'task_hh1', name: '采集灵花', desc: '采集合欢花等灵材', cultReq: 0, contribution: 20, stones: 10 },
        { id: 'task_hh2', name: '修炼魅术', desc: '在幻境中修炼魅术', cultReq: 1, contribution: 75, stones: 40 },
        { id: 'task_hh3', name: '情报刺探', desc: '用魅术刺探情报', cultReq: 1, contribution: 100, stones: 60 },
        { id: 'task_hh4', name: '迷惑敌修', desc: '迷惑敌对修士为己所用', cultReq: 2, contribution: 200, stones: 150 },
        { id: 'task_hh5', name: '百花宴', desc: '参加宗门百花宴', cultReq: 3, contribution: 600, stones: 450 }
      ],
      shopItems: [
        { id: 'huiqi_dan_mid', cost: 40, count: 3 },
        { id: 'huxin_dan', cost: 70, count: 2 },
        { id: 'pojing_dan', cost: 380, count: 1 },
        { id: 'hunjing', cost: 120, count: 1 },
        { id: 'yaohun', cost: 350, count: 1 }
      ],
      benefit: '魅惑系功法威力+25%，闪避率+10%，修炼速度+8%'
    },
    {
      id: 'sect_moying',
      name: '魔影宗',
      type: '魔道',
      element: '暗',
      desc: '隐匿于暗影中的魔道宗门，门下弟子精通暗杀和隐匿之术，行踪诡秘莫测',
      joinReq: { realmIdx: 1, mindReq: 30, compReq: 40 },
      ranks: [
        { name: '影奴', contribution: 0, cultBonus: 0.08 },
        { name: '影卫', contribution: 600, cultBonus: 0.15 },
        { name: '影杀', contribution: 2500, cultBonus: 0.22 },
        { name: '影将', contribution: 7000, cultBonus: 0.30 },
        { name: '影尊', contribution: 20000, cultBonus: 0.38 },
        { name: '影帝', contribution: 60000, cultBonus: 0.45 }
      ],
      techniques: ['gf_qisha', 'gf_xukong', 'gf_qigui', 'gf_douzi'],
      tasks: [
        { id: 'task_my1', name: '暗影训练', desc: '在暗影阁训练隐匿之术', cultReq: 1, contribution: 50, stones: 25 },
        { id: 'task_my2', name: '刺杀任务', desc: '执行宗门刺杀任务', cultReq: 1, contribution: 120, stones: 70 },
        { id: 'task_my3', name: '潜入窃取', desc: '潜入敌对势力窃取情报', cultReq: 2, contribution: 250, stones: 180 },
        { id: 'task_my4', name: '暗杀强敌', desc: '暗杀指定目标', cultReq: 2, contribution: 350, stones: 280 },
        { id: 'task_my5', name: '影帝试炼', desc: '通过影帝试炼获取传承', cultReq: 3, contribution: 850, stones: 650 }
      ],
      shopItems: [
        { id: 'bingjing', cost: 30, count: 3 },
        { id: 'jingpo', cost: 50, count: 2 },
        { id: 'hunjing', cost: 130, count: 1 },
        { id: 'pojing_dan', cost: 350, count: 1 },
        { id: 'shenjin', cost: 3500, count: 1 }
      ],
      benefit: '暗属性功法威力+20%，暴击率+15%，速度+10'
    },
    {
      id: 'sect_xiuluo',
      name: '修罗宗',
      type: '魔道',
      element: '暗',
      desc: '阿修罗道统传承之仙界魔道巨擘，以杀戮战斗为道，门下弟子好战嗜血、战意滔天，可化修罗战身，于仙界魔道中威名赫赫',
      joinReq: { realmIdx: 9, mindReq: 150, compReq: 300 },
      ranks: [
        { name: '修罗战奴', contribution: 0, cultBonus: 0.12 },
        { name: '修罗战将', contribution: 12000, cultBonus: 0.20 },
        { name: '修罗战王', contribution: 100000, cultBonus: 0.28 },
        { name: '修罗魔尊', contribution: 450000, cultBonus: 0.36 },
        { name: '修罗魔帝', contribution: 1600000, cultBonus: 0.44 },
        { name: '修罗魔祖', contribution: 4200000, cultBonus: 0.50 }
      ],
      techniques: ['gf_xiuluo', 'gf_jiuzhuanxuangong_sage', 'gf_mosha', 'gf_qigui'],
      tasks: [
        { id: 'task_xl1', name: '血战试炼', desc: '于修罗血池中完成血战试炼', cultReq: 0, contribution: 500, stones: 1000 },
        { id: 'task_xl2', name: '屠戮妖仙', desc: '猎杀为祸仙界的妖仙取其道果', cultReq: 1, contribution: 2000, stones: 5000 },
        { id: 'task_xl3', name: '修罗战场', desc: '前往修罗古战场历练厮杀', cultReq: 2, contribution: 8000, stones: 20000 },
        { id: 'task_xl4', name: '攻伐仙域', desc: '率宗门修士攻伐敌对仙域', cultReq: 3, contribution: 20000, stones: 50000 },
        { id: 'task_xl5', name: '参悟修罗大道', desc: '于修罗道场参悟杀戮本源大道', cultReq: 4, contribution: 50000, stones: 100000 }
      ],
      shopItems: [
        { id: 'shenjin', cost: 50000, count: 2 },
        { id: 'jiuyangshi', cost: 15000, count: 2 },
        { id: 'yaohun', cost: 12000, count: 3 },
        { id: 'longxue', cost: 10000, count: 5 },
        { id: 'pojing_dan', cost: 20000, count: 1 }
      ],
      benefit: '攻击力+200，暴击伤害+50%，暗属性功法威力+30%，但心境提升速度-15%'
    }
  ],

  // ============================================================
  // 佛门（1个）
  // ============================================================
  fomen: [
    {
      id: 'sect_leiyin',
      name: '大雷音寺',
      type: '佛门',
      element: '光',
      desc: '佛门圣地，以佛法度化众生，寺内高僧如云，修炼佛门金身和度化之术，功德无量',
      joinReq: { realmIdx: 1, mindReq: 70, compReq: 40 },
      ranks: [
        { name: '小沙弥', contribution: 0, cultBonus: 0.08 },
        { name: '武僧', contribution: 700, cultBonus: 0.15 },
        { name: '罗汉', contribution: 3000, cultBonus: 0.22 },
        { name: '菩萨', contribution: 8000, cultBonus: 0.30 },
        { name: '佛陀', contribution: 25000, cultBonus: 0.38 },
        { name: '佛祖', contribution: 70000, cultBonus: 0.45 }
      ],
      techniques: ['gf_yunshen', 'gf_duren', 'gf_sanfo', 'gf_taiji', 'gf_xukong'],
      tasks: [
        { id: 'task_ly1', name: '抄写经文', desc: '在藏经阁抄写佛经', cultReq: 1, contribution: 40, stones: 15 },
        { id: 'task_ly2', name: '化缘布施', desc: '下山化缘布施众生', cultReq: 1, contribution: 90, stones: 50 },
        { id: 'task_ly3', name: '降魔护法', desc: '降除为祸妖魔', cultReq: 2, contribution: 200, stones: 130 },
        { id: 'task_ly4', name: '超度亡魂', desc: '超度战场亡魂', cultReq: 2, contribution: 280, stones: 200 },
        { id: 'task_ly5', name: '佛祖讲法', desc: '聆听佛祖讲法参悟', cultReq: 3, contribution: 750, stones: 550 }
      ],
      shopItems: [
        { id: 'huiqi_dan_mid', cost: 40, count: 3 },
        { id: 'huxin_dan', cost: 60, count: 2 },
        { id: 'pojing_dan', cost: 300, count: 1 },
        { id: 'jingpo', cost: 40, count: 3 },
        { id: 'tianleimu', cost: 200, count: 1 }
      ],
      benefit: '心境提升速度+30%，光属性功法威力+20%，防御力+10，抗心魔+20%'
    },
    {
      id: 'sect_xian_leiyin',
      name: '大雷音寺',
      type: '佛门',
      element: '光',
      desc: '如来道统所在之仙界佛门祖庭，万佛朝宗之地，寺内金光普照三千世界，佛法无边，可度化仙魔，为仙界佛门至高圣地',
      joinReq: { realmIdx: 9, mindReq: 300, compReq: 200 },
      ranks: [
        { name: '罗汉尊者', contribution: 0, cultBonus: 0.10 },
        { name: '菩萨果位', contribution: 15000, cultBonus: 0.20 },
        { name: '佛陀果位', contribution: 120000, cultBonus: 0.28 },
        { name: '古佛', contribution: 500000, cultBonus: 0.36 },
        { name: '世尊', contribution: 1800000, cultBonus: 0.44 },
        { name: '如来', contribution: 4500000, cultBonus: 0.50 }
      ],
      techniques: ['gf_rulai', 'gf_sanfo', 'gf_taiyang', 'gf_duren', 'gf_banruo'],
      tasks: [
        { id: 'task_xly1', name: '诵经度仙', desc: '于大雷音寺诵经度化下界飞升之仙', cultReq: 0, contribution: 500, stones: 1000 },
        { id: 'task_xly2', name: '镇守佛域', desc: '镇守仙界佛域不受魔侵', cultReq: 1, contribution: 2000, stones: 5000 },
        { id: 'task_xly3', name: '度化魔仙', desc: '以佛法度化为祸之魔仙', cultReq: 2, contribution: 8000, stones: 20000 },
        { id: 'task_xly4', name: '法会讲道', desc: '于盂兰盆法会讲道度众', cultReq: 3, contribution: 20000, stones: 50000 },
        { id: 'task_xly5', name: '参悟如来大道', desc: '于灵山参悟如来无上大道', cultReq: 4, contribution: 50000, stones: 100000 }
      ],
      shopItems: [
        { id: 'tiancaidibao', cost: 30000, count: 1 },
        { id: 'jiuyangshi', cost: 15000, count: 2 },
        { id: 'hunjing', cost: 12000, count: 3 },
        { id: 'pojing_dan', cost: 20000, count: 1 },
        { id: 'huiqi_dan_high', cost: 10000, count: 3 }
      ],
      benefit: '光属性功法威力+30%，心境提升速度+50%，抗心魔+40%，防御力+200'
    }
  ],

  // ============================================================
  // 中立宗门（2个）- 特殊宗门
  // ============================================================
  zhongli: [
    {
      id: 'sect_yaowang',
      name: '药王谷',
      type: '中立',
      element: '木',
      desc: '天下炼丹师圣地，谷内灵药万种，精通百草之性，加入者可获得顶级炼丹传承',
      joinReq: { realmIdx: 0, mindReq: 35, compReq: 50 },
      ranks: [
        { name: '药童', contribution: 0, cultBonus: 0.05 },
        { name: '药徒', contribution: 500, cultBonus: 0.10 },
        { name: '药士', contribution: 2000, cultBonus: 0.15 },
        { name: '药师', contribution: 6000, cultBonus: 0.22 },
        { name: '大药师', contribution: 18000, cultBonus: 0.28 },
        { name: '药王', contribution: 55000, cultBonus: 0.35 }
      ],
      techniques: ['gf_changchun', 'gf_liushen', 'gf_mingshui', 'gf_haixinyan'],
      tasks: [
        { id: 'task_yw1', name: '辨识灵药', desc: '在药园辨识灵药种类', cultReq: 0, contribution: 20, stones: 10 },
        { id: 'task_yw2', name: '培育灵草', desc: '在灵田培育灵草', cultReq: 0, contribution: 40, stones: 15 },
        { id: 'task_yw3', name: '炼制丹药', desc: '为谷中炼制指定丹药', cultReq: 1, contribution: 100, stones: 50 },
        { id: 'task_yw4', name: '采集天材', desc: '前往险地采集天材地宝', cultReq: 2, contribution: 250, stones: 180 },
        { id: 'task_yw5', name: '药典参悟', desc: '参悟药王留下的药典', cultReq: 3, contribution: 700, stones: 500 }
      ],
      shopItems: [
        { id: 'lingcao', cost: 3, count: 20 },
        { id: 'lingzhi', cost: 20, count: 5 },
        { id: 'huolinguo', cost: 40, count: 3 },
        { id: 'binglingcao', cost: 40, count: 3 },
        { id: 'zhuji_dan', cost: 200, count: 1 },
        { id: 'pojing_dan', cost: 350, count: 1 }
      ],
      benefit: '炼丹成功率+20%，木属性功法修炼速度+10%，丹药效果+15%'
    },
    {
      id: 'sect_qizong',
      name: '器宗',
      type: '中立',
      element: '金',
      desc: '天下炼器师圣地，宗内炉火通明，精通百炼之术，加入者可获得顶级炼器传承',
      joinReq: { realmIdx: 0, mindReq: 35, compReq: 50 },
      ranks: [
        { name: '器童', contribution: 0, cultBonus: 0.05 },
        { name: '器徒', contribution: 500, cultBonus: 0.10 },
        { name: '器士', contribution: 2000, cultBonus: 0.15 },
        { name: '器师', contribution: 6000, cultBonus: 0.22 },
        { name: '大器师', contribution: 18000, cultBonus: 0.28 },
        { name: '器圣', contribution: 55000, cultBonus: 0.35 }
      ],
      techniques: ['gf_jiuzhuan', 'gf_longwen', 'gf_dali', 'gf_baojian'],
      tasks: [
        { id: 'task_qz1', name: '分拣矿石', desc: '在矿库分拣灵矿', cultReq: 0, contribution: 20, stones: 10 },
        { id: 'task_qz2', name: '熔炼精铁', desc: '在熔炉熔炼精铁', cultReq: 0, contribution: 40, stones: 15 },
        { id: 'task_qz3', name: '锻造法器', desc: '为宗门锻造法器', cultReq: 1, contribution: 100, stones: 50 },
        { id: 'task_qz4', name: '采集灵矿', desc: '前往矿脉采集灵矿', cultReq: 2, contribution: 250, stones: 180 },
        { id: 'task_qz5', name: '器典参悟', desc: '参悟器圣留下的器典', cultReq: 3, contribution: 700, stones: 500 }
      ],
      shopItems: [
        { id: 'xuantie', cost: 3, count: 20 },
        { id: 'jingjinshi', cost: 25, count: 5 },
        { id: 'bingjing', cost: 30, count: 3 },
        { id: 'jingpo', cost: 50, count: 2 },
        { id: 'shenjin', cost: 3000, count: 1 }
      ],
      benefit: '炼器成功率+20%，金属性功法修炼速度+10%，法宝属性+15%'
    },
    {
      id: 'sect_tianting',
      name: '天庭',
      type: '中立',
      element: '雷',
      desc: '玉帝统辖之仙界中枢，执掌天规天条，雷部火部众神归位，可调动天罚天劫，统御万界，为仙界至高权柄所在',
      joinReq: { realmIdx: 9, mindReq: 250, compReq: 250 },
      ranks: [
        { name: '仙官', contribution: 0, cultBonus: 0.10 },
        { name: '仙将', contribution: 13000, cultBonus: 0.18 },
        { name: '仙君', contribution: 100000, cultBonus: 0.26 },
        { name: '天君', contribution: 480000, cultBonus: 0.34 },
        { name: '帝君', contribution: 1700000, cultBonus: 0.42 },
        { name: '玉帝', contribution: 4300000, cultBonus: 0.50 }
      ],
      techniques: ['gf_wanjiezhenjing', 'gf_liangjiejing', 'gf_taijidadao', 'gf_taiji'],
      tasks: [
        { id: 'task_tt1', name: '巡视天界', desc: '巡视天界三十三重天防患未然', cultReq: 0, contribution: 500, stones: 1000 },
        { id: 'task_tt2', name: '镇守天门', desc: '镇守南天门盘查出入仙魔', cultReq: 1, contribution: 2000, stones: 5000 },
        { id: 'task_tt3', name: '行云布雨', desc: '奉旨行云布雨泽被下界', cultReq: 2, contribution: 8000, stones: 20000 },
        { id: 'task_tt4', name: '代天行罚', desc: '代天行罚诛除逆天之徒', cultReq: 3, contribution: 20000, stones: 50000 },
        { id: 'task_tt5', name: '参悟天道', desc: '于凌霄宝殿参悟天道运转之理', cultReq: 4, contribution: 50000, stones: 100000 }
      ],
      shopItems: [
        { id: 'shenjin', cost: 50000, count: 2 },
        { id: 'tiancaidibao', cost: 30000, count: 1 },
        { id: 'jiuyangshi', cost: 15000, count: 2 },
        { id: 'tianleimu', cost: 12000, count: 3 },
        { id: 'pojing_dan', cost: 20000, count: 1 }
      ],
      benefit: '雷属性功法威力+30%，天劫抗性+50%，统御力+200，修炼速度+15%'
    }
  ],

  // ============================================================
  // 仙界宗门（4个）- 真仙至大罗境界（realmIdx 9-13）可加入的顶级宗门
  // 超脱凡界势力划分，汇聚诸天最顶尖道统
  // ============================================================
  xianjie: [
    {
      id: 'sect_taiqing',
      name: '太清宗',
      type: '仙界',
      element: '阴阳',
      desc: '太上老君道统所化之仙界道门至尊，执掌阴阳造化大道，一气化三清，门下弟子明悟阴阳轮转之理，于仙界道门中执牛耳者',
      joinReq: { realmIdx: 10, mindReq: 300, compReq: 300 },
      ranks: [
        { name: '太清道童', contribution: 0, cultBonus: 0.12 },
        { name: '太清道人', contribution: 25000, cultBonus: 0.20 },
        { name: '太清真人', contribution: 200000, cultBonus: 0.28 },
        { name: '太清上仙', contribution: 900000, cultBonus: 0.36 },
        { name: '太清天仙', contribution: 3000000, cultBonus: 0.44 },
        { name: '太清教主', contribution: 7500000, cultBonus: 0.50 }
      ],
      techniques: ['gf_hunyuandaode', 'gf_taijidadao', 'gf_zaohuabaodian', 'gf_zaozao', 'gf_taiji'],
      tasks: [
        { id: 'task_tq1', name: '参悟阴阳', desc: '于阴阳池参悟阴阳二气轮转', cultReq: 0, contribution: 1000, stones: 2000 },
        { id: 'task_tq2', name: '炼化两仪', desc: '炼化两仪之气以固宗门阵基', cultReq: 1, contribution: 5000, stones: 10000 },
        { id: 'task_tq3', name: '镇压界劫', desc: '镇压仙界涌动之劫乱', cultReq: 2, contribution: 15000, stones: 40000 },
        { id: 'task_tq4', name: '造化天地', desc: '以造化之力修补残破小世界', cultReq: 3, contribution: 35000, stones: 80000 },
        { id: 'task_tq5', name: '参悟太清大道', desc: '于兜率宫参悟太清无上大道', cultReq: 4, contribution: 50000, stones: 100000 }
      ],
      shopItems: [
        { id: 'shenjin', cost: 80000, count: 2 },
        { id: 'tiancaidibao', cost: 50000, count: 1 },
        { id: 'jiuyangshi', cost: 25000, count: 2 },
        { id: 'fengxueguo', cost: 30000, count: 2 },
        { id: 'pojing_dan', cost: 40000, count: 1 }
      ],
      benefit: '阴阳属性功法威力+40%，修炼速度+30%，造化类法宝威力+50%'
    },
    {
      id: 'sect_tianmo',
      name: '天魔宗',
      type: '仙界',
      element: '暗',
      desc: '天魔道统传承之仙界魔道至尊，执掌天魔乱道之法，门下弟子可化万千天魔，乱天动地，令仙界正道侧目，为魔道至高之地',
      joinReq: { realmIdx: 10, mindReq: 200, compReq: 350 },
      ranks: [
        { name: '天魔众', contribution: 0, cultBonus: 0.14 },
        { name: '天魔将', contribution: 28000, cultBonus: 0.22 },
        { name: '天魔王', contribution: 220000, cultBonus: 0.30 },
        { name: '天魔尊', contribution: 950000, cultBonus: 0.38 },
        { name: '天魔帝', contribution: 3200000, cultBonus: 0.46 },
        { name: '天魔祖', contribution: 8000000, cultBonus: 0.50 }
      ],
      techniques: ['gf_tianmo', 'gf_mosha', 'gf_xuwu', 'gf_qigui'],
      tasks: [
        { id: 'task_tm1', name: '天魔试炼', desc: '于天魔渊完成天魔试炼', cultReq: 0, contribution: 1000, stones: 2000 },
        { id: 'task_tm2', name: '乱魔仙域', desc: '以天魔之法扰乱敌对仙域', cultReq: 1, contribution: 5000, stones: 10000 },
        { id: 'task_tm3', name: '夺取仙缘', desc: '夺取散修仙人之仙缘机缘', cultReq: 2, contribution: 15000, stones: 40000 },
        { id: 'task_tm4', name: '天魔乱世', desc: '布天魔大阵乱一方天地', cultReq: 3, contribution: 35000, stones: 80000 },
        { id: 'task_tm5', name: '参悟天魔大道', desc: '于天魔殿参悟天魔乱道之本', cultReq: 4, contribution: 50000, stones: 100000 }
      ],
      shopItems: [
        { id: 'shenjin', cost: 80000, count: 2 },
        { id: 'yaohun', cost: 20000, count: 3 },
        { id: 'hunjing', cost: 20000, count: 3 },
        { id: 'jiuyangshi', cost: 25000, count: 2 },
        { id: 'pojing_dan', cost: 40000, count: 1 }
      ],
      benefit: '暗属性功法威力+40%，暴击率+30%，攻击力+500，但心境提升速度-20%'
    },
    {
      id: 'sect_wanfo',
      name: '万佛宗',
      type: '仙界',
      element: '光',
      desc: '仙界佛门巨擘，万佛齐聚之地，宗内佛光普照三千世界，门下弟子皆修万佛朝宗之法，功德无量，为仙界佛门之巅',
      joinReq: { realmIdx: 10, mindReq: 350, compReq: 250 },
      ranks: [
        { name: '佛子', contribution: 0, cultBonus: 0.12 },
        { name: '佛将', contribution: 26000, cultBonus: 0.20 },
        { name: '佛王', contribution: 210000, cultBonus: 0.28 },
        { name: '佛尊', contribution: 920000, cultBonus: 0.36 },
        { name: '佛帝', contribution: 3100000, cultBonus: 0.44 },
        { name: '万佛之主', contribution: 7800000, cultBonus: 0.50 }
      ],
      techniques: ['gf_wanfo', 'gf_sanfo', 'gf_taiyang', 'gf_duren'],
      tasks: [
        { id: 'task_wf1', name: '万佛朝宗', desc: '于万佛殿修万佛朝宗之法', cultReq: 0, contribution: 1000, stones: 2000 },
        { id: 'task_wf2', name: '普度众生', desc: '普度三千世界苦难众生', cultReq: 1, contribution: 5000, stones: 10000 },
        { id: 'task_wf3', name: '镇魔伏妖', desc: '镇伏为祸仙界之大魔', cultReq: 2, contribution: 15000, stones: 40000 },
        { id: 'task_wf4', name: '佛光普照', desc: '以佛光普照暗域净除魔气', cultReq: 3, contribution: 35000, stones: 80000 },
        { id: 'task_wf5', name: '参悟万佛大道', desc: '于万佛之巅参悟万佛大道', cultReq: 4, contribution: 50000, stones: 100000 }
      ],
      shopItems: [
        { id: 'tiancaidibao', cost: 50000, count: 1 },
        { id: 'jiuyangshi', cost: 25000, count: 2 },
        { id: 'hunjing', cost: 20000, count: 3 },
        { id: 'fengxueguo', cost: 30000, count: 2 },
        { id: 'pojing_dan', cost: 40000, count: 1 }
      ],
      benefit: '光属性功法威力+40%，心境提升速度+60%，抗心魔+50%，防御力+500'
    },
    {
      id: 'sect_hundun',
      name: '混沌宗',
      type: '仙界',
      element: '混沌',
      desc: '仙界最神秘之宗门，传承混沌大道，门下弟子修混沌法则，可开天辟地、回归洪荒，超脱于诸天之外，为仙界至高无上之地',
      joinReq: { realmIdx: 11, mindReq: 400, compReq: 400 },
      ranks: [
        { name: '混沌道徒', contribution: 0, cultBonus: 0.14 },
        { name: '混沌道人', contribution: 30000, cultBonus: 0.22 },
        { name: '混沌真人', contribution: 250000, cultBonus: 0.30 },
        { name: '混沌上仙', contribution: 1100000, cultBonus: 0.38 },
        { name: '混沌天尊', contribution: 3800000, cultBonus: 0.46 },
        { name: '混沌之主', contribution: 9000000, cultBonus: 0.50 }
      ],
      techniques: ['gf_hunyuandaluo', 'gf_zaohuabaodian', 'gf_zaozao', 'gf_zhutianwanjie', 'gf_kunpeng'],
      tasks: [
        { id: 'task_hd1', name: '参悟混沌', desc: '于混沌海参悟混沌之气', cultReq: 0, contribution: 1000, stones: 2000 },
        { id: 'task_hd2', name: '炼化混沌', desc: '炼化混沌之气以固道基', cultReq: 1, contribution: 5000, stones: 10000 },
        { id: 'task_hd3', name: '开天辟地', desc: '以混沌之力开辟一方小世界', cultReq: 2, contribution: 15000, stones: 40000 },
        { id: 'task_hd4', name: '镇压纪元', desc: '镇压纪元更迭之劫乱', cultReq: 3, contribution: 35000, stones: 80000 },
        { id: 'task_hd5', name: '参悟混沌大道', desc: '于混沌源眼参悟混沌本源大道', cultReq: 4, contribution: 50000, stones: 100000 }
      ],
      shopItems: [
        { id: 'shenjin', cost: 100000, count: 2 },
        { id: 'tiancaidibao', cost: 60000, count: 2 },
        { id: 'jiuyangshi', cost: 30000, count: 3 },
        { id: 'fengxueguo', cost: 40000, count: 2 },
        { id: 'pojing_dan', cost: 50000, count: 1 }
      ],
      benefit: '混沌属性功法威力+50%，全属性功法修炼速度+25%，超脱天道+30%，防御力+1000'
    }
  ]
};

// ============================================================
// 辅助函数
// 注意：引用 player/REALMS 的函数定义在 index.html 的模块脚本中，
// 因为 ES 模块的 let/const 变量不会暴露到全局作用域。
// 以下仅保留不依赖模块作用域变量的纯函数。
// ============================================================

// 获取所有宗门列表
function getAllSects(){
  return [
    ...SECT_DATA.zhengdao,
    ...SECT_DATA.modao,
    ...SECT_DATA.fomen,
    ...SECT_DATA.zhongli,
    ...SECT_DATA.xianjie
  ];
}

// 按ID获取宗门
function getSectById(sectId){
  return getAllSects().find(s=>s.id===sectId);
}

// 获取玩家当前宗门等级（纯函数，参数传入）
function getPlayerSectRank(sect,contribution){
  if(!sect) return null;
  let rank=sect.ranks[0];
  for(let i=sect.ranks.length-1;i>=0;i--){
    if(contribution>=sect.ranks[i].contribution){
      rank=sect.ranks[i];
      break;
    }
  }
  return rank;
}

// 获取宗门类型颜色
function getSectTypeColor(type){
  const colors={
    '正道':'#4fc3f7',
    '魔道':'#e57373',
    '佛门':'#ffd54f',
    '中立':'#81c784',
    '仙界':'#ce93d8'
  };
  return colors[type]||'var(--text-dim)';
}

// 获取宗门元素颜色
function getSectElementColor(element){
  const colors={
    '木':'#66bb6a','火':'#ff7043','水':'#42a5f5','金':'#ffca28',
    '土':'#8d6e63','雷':'#ab47bc','光':'#fff176','暗':'#5c5c5c',
    '血':'#e53935','毒':'#7cb342','魅':'#ec407a','音':'#26c6da',
    '空间':'#7e57c2','阴阳':'#9575cd','混沌':'#616161'
  };
  return colors[element]||'var(--text-dim)';
}
