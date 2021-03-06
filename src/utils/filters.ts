export const GROUPS_MAPPINGS = {
    holopro: ["hololive", "hololiveid", "hololivecn", "hololiveen", "hololivejp", "holostars"],
    hololive: ["hololive", "hololiveid", "hololivecn", "hololiveen", "hololivejp"],
    hololivejp: ["hololive", "hololivejp"],
    hololiveid: ["hololiveid"],
    hololivecn: ["hololivecn"],
    hololiveen: ["hololiveen"],
    holostars: ["holostars"],
    nijisanji: [
        "nijisanji",
        "nijisanjijp",
        "nijisanjikr",
        "nijisanjiid",
        "nijisanjien",
        "nijisanjiin",
        "virtuareal",
    ],
    nijisanjikr: ["nijisanjikr"],
    nijisanjijp: ["nijisanjijp", "nijisanji"],
    nijisanjiin: ["nijisanjiin"],
    nijisanjien: ["nijisanjien"],
    nijisanjiid: ["nijisanjiid"],
    nijisanjiworld: ["nijisanjikr", "nijisanjiid", "nijisanjien", "nijisanjiin"],
    virtuareal: ["virtuareal"],
    vtuberesports: ["irisbg", "cattleyarg", "lupinusvg", "vspo"],
    vspo: ["vspo", "irisbg", "cattleyarg", "lupinusvg"],
    lupinusvg: ["lupinusvg"],
    irisblackgames: ["irisbg"],
    cattleyareginagames: ["cattleyarg"],
    nanashi: ["vapart", "animare", "honeystrap", "sugarlyric"],
    animare: ["animare"],
    vapart: ["vapart"],
    honeystrap: ["honeystrap"],
    sugarlyric: ["sugarlyric"],
    others: [
        "entum",
        "eilene",
        "solotuber",
        "solovtuber",
        "paryiproject",
        "vic",
        "dotlive",
        "vgaming",
        "vshojo",
        "upd8",
        "hanayori",
        "mahapanca",
        "veemusic",
        "axel-v",
        "tsunderia",
    ],
    axelv: ["axel-v"],
    "axel-v": ["axel-v"],
    kamitsubaki: ["kamitsubaki"],
    mahapanca: ["mahapanca"],
    eilene: ["eilene"],
    vivid: ["vivid"],
    noripro: ["noripro", "noriopro"],
    noriopro: ["noripro", "noriopro"],
    hanayori: ["hanayori"],
    voms: ["voms"],
    kizunaai: ["kizunaai"],
    dotlive: ["dotlive"],
    vic: ["vic"],
    vgaming: ["vgaming"],
    paryiproject: ["paryiproject"],
    solo: ["solotuber", "solovtuber"],
    solotuber: ["solotuber"],
    solovtuber: ["solovtuber"],
    entum: ["entum"],
    veemusic: ["veemusic"],
    vshojo: ["vshojo"],
    tsunderia: ["tsunderia"],
};

export function getGroup(group_name: string): string[] {
    // @ts-ignore
    return GROUPS_MAPPINGS[group_name] || [group_name];
}
