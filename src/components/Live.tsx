import React from 'react'

interface Props {
  onBack: () => void
}

const shows = [
  { label: 'FRI 05/02 — MONTREAL, QC @ Sotterranea', url: 'https://thepointofsale.com/tickets/freak-heat-waves-jack-j-montreal-tickets-may-2-la-sotterenea' },
  { label: 'SAT 05/02 — KINGSTON, NY @ Tubbys', url: 'https://dice.fm/partner/dice/event/7dnen6-freak-heat-waves-jack-j-3rd-may-tubbys-kingston-kingston-tickets?dice_id=5175479&dice_channel=web&dice_tags=organic&dice_campaign=DICE&dice_feature=mio_marketing&_branch_match_id=1455955944272584703&utm_source=web&utm_campaign=DICE&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1Q%2BwNDYzSjEyMzI2TrOvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQDXYeFAOwAAAA%3D%3D' },
  { label: 'SUN 05/04 — BROOKLYN @ Babys Alright', url: 'https://wl.seetickets.us/event/freak-heat-waves/637387?afflky=BabysAllRightBrooklyn' },
  { label: 'MON 05/05 — PHILIDELPHIA @ Ortleibs', url: 'https://dice.fm/partner/dice/event/yolgqv-freak-heat-waves-jack-j-and-gripper-5th-may-ortliebs-philadelphia-tickets?dice_id=5183910&dice_channel=web&dice_tags=organic&dice_campaign=DICE&dice_feature=mio_marketing&_branch_match_id=1455955944272584703&utm_source=web&utm_campaign=DICE&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1U82S7Mws0xJTDJKSrWvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQBNqXelOwAAAA%3D%3D' },
  { label: 'WED 05/07 — TORONTO @ Dance Cave', url: 'https://www.ticketweb.ca/event/freak-heat-waves-jack-the-dance-cave-tickets/13670164?pl=MODO-LIVE' },
  { label: 'THU 05/08 — DETROIT @ Moondog Cafe', url: 'https://www.eventbrite.com/e/jack-j-freak-heat-waves-jay-sound-moondog-cafe-tickets-1292844114549?aff=oddtdtcreator' },
  { label: 'FRI 05/09 — MILWAUKEE @ Cactus Club', url: 'https://tickets.venuepilot.com/e/freak-heat-waves-jack-j-2025-05-09-cactus-club-milwaukee-d5df8b' },
  { label: 'SAT 05/10 — CHICAGO @ Hideout', url: 'https://www.etix.com/ticket/p/32154051/freak-heat-waves-and-jack-j-chicago-hideout-chicago' },
  { label: 'SUN 05/11 — KANSAS CITY @ No Vacancy', url: 'https://ra.co/events/2122030' },
  { label: 'THU 05/15 — SAN DIEGO @ Whistle Stop', url: 'https://restlessnites.com/events' },
  { label: 'MON 05/12 — DENVER @ Hi-Dive', url: 'https://dice.fm/partner/dice/event/g5nryp-freak-heat-waves-jack-j-pink-lady-monster-french-kettle-station-12th-may-hi-dive-denver-tickets?dice_id=5150232&dice_channel=web&dice_tags=organic&dice_campaign=DICE&dice_feature=mio_marketing&_branch_match_id=1455955944272584703&utm_source=web&utm_campaign=DICE&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1a9KtjAztky1TDQwSrSvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQBtx6DcOwAAAA%3D%3D' },
  { label: 'FRI 05/16 — LA @ Zebulon', url: 'https://dice.fm/partner/freak-heat-waves-jack-j/event/eovb5w-jack-j-freak-heat-waves-16th-may-zebulon-los-angeles-tickets?dice_id=5186241&dice_channel=web&dice_tags=organic&dice_campaign=Freak+Heat+Waves%2C+Jack+J&dice_feature=mio_marketing&_branch_match_id=1455955944272584703&utm_source=web&utm_campaign=Freak+Heat+Waves%2C+Jack+J&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAAwXBwQpAQBQF0C96JhsLJQslKWtlo4c7TMOM3gyy8e3O2WI8Q67UbpxNFjMj0YeqBWypAUfq%2BUaglmdLLQ2Yrt076vilNCs%2FgYaIces4iX8CpKg28Qd%2BVOpUblUAAAA%3D' },
  { label: 'SAT 05/17 — OAKLAND @ Thee Stork Club', url: 'https://www.seetickets.us/event/freak-heat-waves-jack-j/638033' },
  { label: 'SUN 05/18 — RENO @ Holland Project', url: 'https://tickets.venuepilot.com/e/freak-heat-waves-jack-j-2025-05-18-the-holland-project-reno-0b2caa' },
  { label: 'WED 05/21 — PORTLAND @ Polaris', url: 'https://www.etix.com/ticket/p/59807965/jack-j-freak-heat-waves-portland-polaris-hall' },
  { label: 'THU 05/22 — SEATTLE @ Black Lodge', url: 'https://dice.fm/partner/dice/event/92oldn-freak-heat-waves-jack-j-22nd-may-the-black-lodge-seattle-tickets?dice_id=5125474&dice_channel=web&dice_tags=organic&dice_campaign=DICE&dice_feature=mio_marketing&_branch_match_id=1455955944272584703&utm_source=web&utm_campaign=DICE&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1fdOs0g1TjUzNEhONrOvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQDHgQGrOwAAAA%3D%3D' },
  { label: 'FRI 05/23 — VANCOUVER @ Rickshaw', url: 'https://www.eventbrite.ca/e/jack-j-and-freak-heat-waves-with-puzzlehead-tickets-1238146281859?aff=oddtdtcreator' },
  { label: 'SAT 05/24 — VICTORIA @ Lucky Bar', url: 'https://www.showpass.com/freakheatwaves2/' },
]

const Live = ({ onBack }: Props) => {
  return (
    <div className="channel-float text-white">
      <ul>
        {shows.map((show, i) => (
          <li key={i}>
            <a
              href={show.url}
              target="_blank"
              rel="noopener noreferrer"
              className="line-through opacity-60 hover:opacity-100 hover:text-glow transition"
            >
              {show.label}
            </a>
          </li>
        ))}
        <li onClick={onBack}>
          <a className="cursor-pointer">back</a>
        </li>
      </ul>
    </div>
  )
}

export default Live
