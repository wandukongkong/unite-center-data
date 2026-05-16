const fs = require('fs');

const existingData = JSON.parse(fs.readFileSync('C:/workspace/unite-center-data/patch-notes.json', 'utf8'));

const newEntries = [
  // === BUFF ===
  {
    "id": "pn-048",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "78",
    "type": "buff",
    "types": ["buff"],
    "summary": {
      "ko": "HP·방어·특방 기본 능력치 상승, 급소율 상향",
      "en": "Base HP/Defense/Sp. Def increased, critical-hit rate buffed",
      "ja": "HP・ぼうぎょ・とくぼう基礎ステータス上昇、急所率上昇"
    },
    "changes": [
      {
        "ko": "[기본 능력치] HP·방어·특방 상승",
        "en": "[Base Stats] HP, Defense, and Sp. Def increased",
        "ja": "[基礎ステータス] HP・ぼうぎょ・とくぼう上昇"
      },
      {
        "ko": "[기본 능력치] 급소율 Lv5 5%→7.5%, Lv9 10%→15%",
        "en": "[Base Stats] Critical-hit rate: Lv5 5%→7.5%, Lv9 10%→15%",
        "ja": "[基礎ステータス] 急所率 Lv5 5%→7.5%、Lv9 10%→15%"
      }
    ]
  },
  {
    "id": "pn-049",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "70",
    "type": "buff",
    "types": ["buff"],
    "summary": {
      "ko": "특성 쿠다케루요로이 데미지 상승, 고스트다이브·무념의검 강화",
      "en": "Ability Weak Armor damage buff, Ghost Dive and Bitter Blade buffed",
      "ja": "特性くだけるよろいダメージ増加、ゴーストダイブ・むねんのつるぎ強化"
    },
    "changes": [
      {
        "ko": "[특성 쿠다케루요로이] 지속 데미지 33% 증가",
        "en": "[Ability: Weak Armor] Damage over time increased by 33%",
        "ja": "[特性くだけるよろい] 継続ダメージ 33% 増加"
      },
      {
        "ko": "[고스트다이브] 쿨타임 10s→9s, 데미지 8% 증가",
        "en": "[Ghost Dive] Cooldown 10s→9s, damage increased by 8%",
        "ja": "[ゴーストダイブ] まちじかん 10s→9s、ダメージ 8% 増加"
      },
      {
        "ko": "[무념의검] 데미지 10% 증가",
        "en": "[Bitter Blade] Damage increased by 10%",
        "ja": "[むねんのつるぎ] ダメージ 10% 増加"
      }
    ]
  },
  {
    "id": "pn-050",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "buff",
    "types": ["buff"],
    "summary": {
      "ko": "강화공격 회복량 상승, 아이스해머·내동댕이치기 강화, 유나이트기 데미지 증가",
      "en": "Boosted attack HP recovery increased, Ice Hammer and Pound buffed, Unite Move damage increased",
      "ja": "強化攻撃回復量増加、アイスハンマー・うちおとす強化、ユナイトわざダメージ増加"
    },
    "changes": [
      {
        "ko": "[강화공격] 회복량 20% 증가",
        "en": "[Boosted Attack] HP recovery increased by 20%",
        "ja": "[強化攻撃] 回復量 20% 増加"
      },
      {
        "ko": "[아이스해머] 데미지 25% 증가, 감속 효과 조정",
        "en": "[Ice Hammer] Damage increased by 25%, slow effect adjusted",
        "ja": "[アイスハンマー] ダメージ 25% 増加、減速効果調整"
      },
      {
        "ko": "[내동댕이치기] 이동속도 저하 50%→30%, 쿨타임 6.5s→6s",
        "en": "[Pound] Movement speed reduction 50%→30%, cooldown 6.5s→6s",
        "ja": "[うちおとす] 移動速度低下 50%→30%、まちじかん 6.5s→6s"
      },
      {
        "ko": "[유나이트기] 데미지 8% 증가",
        "en": "[Unite Move] Damage increased by 8%",
        "ja": "[ユナイトわざ] ダメージ 8% 増加"
      }
    ]
  },
  {
    "id": "pn-051",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "buff",
    "types": ["buff"],
    "summary": {
      "ko": "우드해머 쿨타임 단축 및 데미지 증가",
      "en": "Wood Hammer cooldown reduced and damage increased",
      "ja": "ウッドハンマーまちじかん短縮・ダメージ増加"
    },
    "changes": [
      {
        "ko": "[우드해머] 쿨타임 9s→8s, 데미지 10% 증가",
        "en": "[Wood Hammer] Cooldown 9s→8s, damage increased by 10%",
        "ja": "[ウッドハンマー] まちじかん 9s→8s、ダメージ 10% 増加"
      }
    ]
  },
  {
    "id": "pn-052",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "buff",
    "types": ["buff"],
    "summary": {
      "ko": "다크홀 쿨타임 단축, 나쁜음모 데미지 증가, 유나이트기 에너지 감소",
      "en": "Dark Void cooldown reduced, Nasty Plot damage increased, Unite Move energy cost reduced",
      "ja": "ダークホールまちじかん短縮、わるだくみダメージ増加、ユナイトわざ必要エネルギー減少"
    },
    "changes": [
      {
        "ko": "[다크홀] 쿨타임 6s→5s",
        "en": "[Dark Void] Cooldown 6s→5s",
        "ja": "[ダークホール] まちじかん 6s→5s"
      },
      {
        "ko": "[나쁜음모] 데미지 15% 증가",
        "en": "[Nasty Plot] Damage increased by 15%",
        "ja": "[わるだくみ] ダメージ 15% 増加"
      },
      {
        "ko": "[쉐도우클로] 악의파동 발동 중 데미지 10% 증가",
        "en": "[Shadow Claw] Damage during Dark Pulse increased by 10%",
        "ja": "[シャドークロー] あくのはどう中ダメージ 10% 増加"
      },
      {
        "ko": "[유나이트기] 필요 에너지 100000→90000",
        "en": "[Unite Move] Required energy 100000→90000",
        "ja": "[ユナイトわざ] 必要エネルギー 100000→90000"
      }
    ]
  },
  {
    "id": "pn-053",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "72",
    "type": "buff",
    "types": ["buff"],
    "summary": {
      "ko": "금속음 데미지·전파 횟수 증가, 사이코키네시스 쿨타임 단축, 유나이트기 데미지 경감",
      "en": "Disable damage and spread count increased, Psybeam cooldown reduced, Unite Move damage reduction added",
      "ja": "かなしばりダメージ・伝播回数増加、サイコキネシスまちじかん短縮、ユナイトわざダメージ軽減"
    },
    "changes": [
      {
        "ko": "[금속음] 데미지 15% 증가, 전파 횟수 1회→2회",
        "en": "[Disable] Damage increased by 15%, spread count 1→2",
        "ja": "[かなしばり] ダメージ 15% 増加、伝播回数 1回→2回"
      },
      {
        "ko": "[사이코키네시스] 쿨타임 7.5s→6.5s",
        "en": "[Psybeam] Cooldown 7.5s→6.5s",
        "ja": "[サイコキネシス] まちじかん 7.5s→6.5s"
      },
      {
        "ko": "[유나이트기] 받는 데미지 30% 경감",
        "en": "[Unite Move] Incoming damage reduced by 30%",
        "ja": "[ユナイトわざ] 受けるダメージ 30% 軽減"
      }
    ]
  },
  {
    "id": "pn-054",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "69",
    "type": "buff",
    "types": ["buff"],
    "summary": {
      "ko": "화염방사 데미지 증가, 유나이트기 비행 지속 시간 연장",
      "en": "Flamethrower damage increased, Unite Move flight duration extended",
      "ja": "かえんほうしゃダメージ増加、ユナイトわざ飛行持続時間延長"
    },
    "changes": [
      {
        "ko": "[화염방사] 데미지 12% 증가",
        "en": "[Flamethrower] Damage increased by 12%",
        "ja": "[かえんほうしゃ] ダメージ 12% 増加"
      },
      {
        "ko": "[유나이트기] 비행 상태 지속 시간 8s→10s",
        "en": "[Unite Move] Flight duration 8s→10s",
        "ja": "[ユナイトわざ] 飛行状態の持続時間 8s→10s"
      }
    ]
  },
  {
    "id": "pn-055",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "buff",
    "types": ["buff"],
    "summary": {
      "ko": "매지컬샤인 데미지 증가, 전광석화 이동속도 상승 하한값 개선",
      "en": "Dazzling Gleam damage increased, Agility movement speed minimum improved",
      "ja": "マジカルシャインダメージ増加、こうそくいどう移動速度上昇下限改善"
    },
    "changes": [
      {
        "ko": "[매지컬샤인] 데미지 7.5% 증가",
        "en": "[Dazzling Gleam] Damage increased by 7.5%",
        "ja": "[マジカルシャイン] ダメージ 7.5% 増加"
      },
      {
        "ko": "[전광석화] 이동속도 상승 5%~80%→20%~80%",
        "en": "[Agility] Movement speed increase 5%~80%→20%~80%",
        "ja": "[こうそくいどう] 移動速度上昇 5%~80%→20%~80%"
      }
    ]
  },
  {
    "id": "pn-056",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "buff",
    "types": ["buff"],
    "summary": {
      "ko": "플라워힐 회복량 증가, 매지컬리프 쿨타임 단축",
      "en": "Flower Heal recovery increased, Magical Leaf cooldown reduced",
      "ja": "フラワーヒール回復量増加、マジカルリーフまちじかん短縮"
    },
    "changes": [
      {
        "ko": "[플라워힐] 회복량 6%~14% 증가",
        "en": "[Flower Heal] Recovery amount increased by 6%~14%",
        "ja": "[フラワーヒール] 回復量 6%~14% 増加"
      },
      {
        "ko": "[매지컬리프] 쿨타임 10s→9s",
        "en": "[Magical Leaf] Cooldown 10s→9s",
        "ja": "[マジカルリーフ] まちじかん 10s→9s"
      }
    ]
  },
  // === NERF ===
  {
    "id": "pn-057",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "nerf",
    "types": ["nerf"],
    "summary": {
      "ko": "유나이트기 방해무효 → 방해저항으로 변경",
      "en": "Unite Move changed from unstoppable to CC resistance",
      "ja": "ユナイトわざのこうかなしから妨害耐性へ変更"
    },
    "changes": [
      {
        "ko": "[유나이트기] 방해무효 → 방해저항으로 변경",
        "en": "[Unite Move] Unstoppable changed to CC resistance",
        "ja": "[ユナイトわざ] こうかなしを妨害耐性へ変更"
      }
    ]
  },
  {
    "id": "pn-058",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "nerf",
    "types": ["nerf"],
    "summary": {
      "ko": "오버히트 방해무효 → 방해저항으로 변경",
      "en": "Overheat changed from unstoppable to CC resistance",
      "ja": "オーバーヒートのこうかなしから妨害耐性へ変更"
    },
    "changes": [
      {
        "ko": "[오버히트] 방해무효 → 방해저항으로 변경",
        "en": "[Overheat] Unstoppable changed to CC resistance",
        "ja": "[オーバーヒート] こうかなしを妨害耐性へ変更"
      }
    ]
  },
  {
    "id": "pn-059",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "86",
    "type": "nerf",
    "types": ["nerf"],
    "summary": {
      "ko": "특성 카타야부리 효과 대폭 하향, 드래곤브레스 메가진화 데미지 감소, 유나이트기 에너지 증가",
      "en": "Ability Mold Breaker effects significantly nerfed, Dragon Breath Mega Evolution damage reduced, Unite Move energy cost increased",
      "ja": "特性かたやぶり効果大幅弱体化、りゅうのいぶきメガシンカ中ダメージ減少、ユナイトわざ必要エネルギー増加"
    },
    "changes": [
      {
        "ko": "[특성 카타야부리] 공격 25%→10%, 방어·특방 30%→10%",
        "en": "[Ability: Mold Breaker] Attack 25%→10%, Defense/Sp. Def 30%→10%",
        "ja": "[特性かたやぶり] こうげき 25%→10%、ぼうぎょ・とくぼう 30%→10%"
      },
      {
        "ko": "[드래곤브레스] 메가진화 중 기본공격 데미지 15% 감소",
        "en": "[Dragon Breath] Basic attack damage during Mega Evolution decreased by 15%",
        "ja": "[りゅうのいぶき] メガシンカ中の通常攻撃ダメージ 15% 減少"
      },
      {
        "ko": "[유나이트기] 필요 에너지 80000→100000",
        "en": "[Unite Move] Required energy 80000→100000",
        "ja": "[ユナイトわざ] 必要エネルギー 80000→100000"
      }
    ]
  },
  {
    "id": "pn-060",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "81",
    "type": "nerf",
    "types": ["nerf"],
    "summary": {
      "ko": "화염방사 메가진화 중 이동속도 상승 하향, 유나이트기 에너지 증가 및 효과 감소",
      "en": "Flamethrower Mega Evolution speed buff nerfed, Unite Move energy cost increased and effects reduced",
      "ja": "かえんほうしゃメガシンカ中移動速度上昇弱体化、ユナイトわざ必要エネルギー増加・効果減少"
    },
    "changes": [
      {
        "ko": "[화염방사] 메가진화 중 이동속도 상승 15%→10%",
        "en": "[Flamethrower] Movement speed increase during Mega Evolution 15%→10%",
        "ja": "[かえんほうしゃ] メガシンカ中の移動速度上昇 15%→10%"
      },
      {
        "ko": "[유나이트기 어스크러셔] 필요 에너지 100000→110000, 실드 20%→10%, 이동속도 30%→10%",
        "en": "[Unite Move: Earth Crusher] Required energy 100000→110000, shield 20%→10%, movement speed 30%→10%",
        "ja": "[ユナイトわざアースクラッシャー] 必要エネルギー 100000→110000、シールド 20%→10%、移動速度 30%→10%"
      }
    ]
  },
  {
    "id": "pn-061",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "nerf",
    "types": ["nerf"],
    "summary": {
      "ko": "기본 공격 스탯 하향, 텔레포트 데미지 상승 효과 감소, 미래예지 받는 데미지 증가 감소",
      "en": "Base Attack stat reduced, Teleport damage boost reduced, Future Sight received damage amplification reduced",
      "ja": "基礎こうげきステータス低下、テレポートダメージ上昇効果減少、みらいよち受けるダメージ増加量減少"
    },
    "changes": [
      {
        "ko": "[기본 능력치] 공격 210~540→190~520",
        "en": "[Base Stats] Attack 210~540→190~520",
        "ja": "[基礎ステータス] こうげき 210~540→190~520"
      },
      {
        "ko": "[텔레포트] 데미지 상승 효과 20%→10%",
        "en": "[Teleport] Damage boost effect 20%→10%",
        "ja": "[テレポート] ダメージ上昇効果 20%→10%"
      },
      {
        "ko": "[텔레포트+] 데미지 상승 효과 30%→20%",
        "en": "[Teleport+] Damage boost effect 30%→20%",
        "ja": "[テレポート+] ダメージ上昇効果 30%→20%"
      },
      {
        "ko": "[미래예지] 받는 데미지 증가량 20%→10%, 쿨타임 9s→10s",
        "en": "[Future Sight] Received damage amplification 20%→10%, cooldown 9s→10s",
        "ja": "[みらいよち] 受けるダメージ増加量 20%→10%、まちじかん 9s→10s"
      },
      {
        "ko": "[미래예지+] 받는 데미지 증가량 30%→20%",
        "en": "[Future Sight+] Received damage amplification 30%→20%",
        "ja": "[みらいよち+] 受けるダメージ増加量 30%→20%"
      }
    ]
  },
  {
    "id": "pn-062",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "nerf",
    "types": ["nerf"],
    "summary": {
      "ko": "고드름침 쿨타임 증가 및 데미지 감소, 유나이트기 에너지 증가",
      "en": "Icicle Spear cooldown increased and damage reduced, Unite Move energy cost increased",
      "ja": "つららばりまちじかん増加・ダメージ減少、ユナイトわざ必要エネルギー増加"
    },
    "changes": [
      {
        "ko": "[고드름침] 쿨타임 5s→6s, 데미지 8% 감소",
        "en": "[Icicle Spear] Cooldown 5s→6s, damage decreased by 8%",
        "ja": "[つららばり] まちじかん 5s→6s、ダメージ 8% 減少"
      },
      {
        "ko": "[유나이트기] 필요 에너지 90000→100000",
        "en": "[Unite Move] Required energy 90000→100000",
        "ja": "[ユナイトわざ] 必要エネルギー 90000→100000"
      }
    ]
  },
  {
    "id": "pn-063",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "59",
    "type": "nerf",
    "types": ["nerf"],
    "summary": {
      "ko": "탁류 쿨타임 증가 및 데미지 감소, 퀵턴 데미지·실드 감소",
      "en": "Muddy Water cooldown increased and damage reduced, Quick Turn damage and shield reduced",
      "ja": "だくりゅうまちじかん増加・ダメージ減少、クイックターンダメージ・シールド減少"
    },
    "changes": [
      {
        "ko": "[탁류] 쿨타임 8.5s→9s, 데미지 15% 감소",
        "en": "[Muddy Water] Cooldown 8.5s→9s, damage decreased by 15%",
        "ja": "[だくりゅう] まちじかん 8.5s→9s、ダメージ 15% 減少"
      },
      {
        "ko": "[퀵턴] 데미지 15% 감소, 실드량 15% 감소",
        "en": "[Quick Turn] Damage decreased by 15%, shield amount decreased by 15%",
        "ja": "[クイックターン] ダメージ 15% 減少、シールド量 15% 減少"
      }
    ]
  },
  {
    "id": "pn-064",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "84",
    "type": "nerf",
    "types": ["nerf"],
    "summary": {
      "ko": "강화공격 방어 상승량 감소, 칼춤 공격 상승량 감소",
      "en": "Boosted attack Defense buff reduced, Swords Dance Attack buff reduced",
      "ja": "強化攻撃ぼうぎょ上昇量減少、つるぎのまいこうげき上昇量減少"
    },
    "changes": [
      {
        "ko": "[강화공격] 방어 상승량 50%→40%",
        "en": "[Boosted Attack] Defense increase 50%→40%",
        "ja": "[強化攻撃] ぼうぎょ上昇量 50%→40%"
      },
      {
        "ko": "[칼춤] 공격 상승량 20%→15%",
        "en": "[Swords Dance] Attack increase 20%→15%",
        "ja": "[つるぎのまい] こうげき上昇量 20%→15%"
      }
    ]
  },
  {
    "id": "pn-065",
    "version": "2026.01.22",
    "date": "2026-01-22",
    "pokemonId": "unknown",
    "type": "nerf",
    "types": ["nerf"],
    "summary": {
      "ko": "드래곤클로 쿨타임 증가 및 회복량 감소",
      "en": "Dragon Claw cooldown increased and recovery reduced",
      "ja": "りゅうのはどうまちじかん増加・回復量減少"
    },
    "changes": [
      {
        "ko": "[드래곤클로] 쿨타임 6s→6.5s, 회복량 10% 감소",
        "en": "[Dragon Claw] Cooldown 6s→6.5s, recovery decreased by 10%",
        "ja": "[りゅうのはどう] まちじかん 6s→6.5s、回復量 10% 減少"
      }
    ]
  }
];

const finalData = [...newEntries, ...existingData];
fs.writeFileSync('C:/workspace/unite-center-data/patch-notes.json', JSON.stringify(finalData, null, 2), 'utf8');
console.log('Done! Total entries:', finalData.length);
console.log('New entries added:', newEntries.length);
