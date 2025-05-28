import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  onBack: () => void
}

const previousSightings = [
  { label: 'montreal — sottterranea', url: 'https://thepointofsale.com/tickets/freak-heat-waves-jack-j-montreal-tickets-may-2-la-sotterenea' },
  { label: 'kingston — tubby’s', url: 'https://dice.fm/partner/dice/event/7dnen6-freak-heat-waves-jack-j-3rd-may-tubbys-kingston-kingston-tickets' },
  { label: 'brooklyn — baby’s all right', url: 'https://wl.seetickets.us/event/freak-heat-waves/637387?afflky=BabysAllRightBrooklyn' },
  { label: 'philadelphia — ortlieb’s', url: 'https://dice.fm/partner/dice/event/yolgqv-freak-heat-waves-jack-j-and-gripper-5th-may-ortliebs-philadelphia-tickets' },
  { label: 'toronto — dance cave', url: 'https://www.ticketweb.ca/event/freak-heat-waves-jack-the-dance-cave-tickets/13670164?pl=MODO-LIVE' },
  { label: 'detroit — moondog cafe', url: 'https://www.eventbrite.com/e/jack-j-freak-heat-waves-jay-sound-moondog-cafe-tickets-1292844114549' },
  { label: 'milwaukee — cactus club', url: 'https://tickets.venuepilot.com/e/freak-heat-waves-jack-j-2025-05-09-cactus-club-milwaukee-d5df8b' },
  { label: 'chicago — hideout', url: 'https://www.etix.com/ticket/p/32154051/freak-heat-waves-and-jack-j-chicago-hideout-chicago' },
  { label: 'kansas city — no vacancy', url: 'https://ra.co/events/2122030' },
  { label: 'san diego — whistle stop', url: 'https://restlessnites.com/events' },
  { label: 'denver — hi-dive', url: 'https://dice.fm/partner/dice/event/g5nryp-freak-heat-waves-jack-j-pink-lady-monster-french-kettle-station-12th-may-hi-dive-denver-tickets' },
  { label: 'los angeles — zebulon', url: 'https://dice.fm/partner/freak-heat-waves-jack-j/event/eovb5w-jack-j-freak-heat-waves-16th-may-zebulon-los-angeles-tickets' },
  { label: 'oakland — thee stork club', url: 'https://www.seetickets.us/event/freak-heat-waves-jack-j/638033' },
  { label: 'reno — holland project', url: 'https://tickets.venuepilot.com/e/freak-heat-waves-jack-j-2025-05-18-the-holland-project-reno-0b2caa' },
  { label: 'portland — polaris', url: 'https://www.etix.com/ticket/p/59807965/jack-j-freak-heat-waves-portland-polaris-hall' },
  { label: 'seattle — black lodge', url: 'https://dice.fm/partner/dice/event/92oldn-freak-heat-waves-jack-j-22nd-may-the-black-lodge-seattle-tickets' },
  { label: 'vancouver — rickshaw', url: 'https://www.eventbrite.ca/e/jack-j-and-freak-heat-waves-with-puzzlehead-tickets-1238146281859' },
  { label: 'victoria — lucky bar', url: 'https://www.showpass.com/freakheatwaves2/' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

const Live = ({ onBack }: Props) => {
  return (
    <div className="channel-float text-white relative">
      <h2 className="mb-4 opacity-60 text-sm tracking-wide">previous sightings</h2>
      
      <motion.ul
        className="space-y-2 text-sm tracking-wider leading-relaxed opacity-80"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {previousSightings.map((show, i) => (
          <motion.li key={i} variants={item}>
            <a
              href={show.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blur-[0.5px] hover:blur-0 hover:text-glow transition duration-300"
            >
              • {show.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-8">
        <a className="cursor-pointer text-glow" onClick={onBack}>
          back
        </a>
      </div>
    </div>
  )
}

export default Live
