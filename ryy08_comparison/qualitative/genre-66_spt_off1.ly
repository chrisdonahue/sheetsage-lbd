#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*160
    }
}

\new Staff { 
    {
        \clef treble
        \key c \minor
        \time 4/4
        
        bes'16 c''8. b'16 b'16 r2~ r8~ | r2~ r8 a'16 r16 e''8 r16 ees''16~ | ees''16 r16 c''8. r2~ r8.~ | r8 bes'16 r16 c''16 r16 c''8 r16 ees''16 c''16 r16 b'8. a'16 | b'16 c''8. r16 bes'16 r2~ r8~ | r1 | ees''16 f''8 r16 f''8 ees''8 f''8 g''8. r8.~ | r4 b'8 b'16 r16 ees''8 b'16 r16 bes'8 c''8~ | c''8 r2~ r4.~ | r2. f''8. r16
    }
}

>>

\version "2.18.2"