#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*112
    }
}

\new Staff { 
    {
        \clef treble
        \key bes \major
        \time 4/4
        
        r4~ r16 g'8 ees''16 d''4 c''4 | f'1 | g'2 ges'8. g'8. a'8 | b'1~ | b'4~ b'16 bes'8 d''16 c''4 bes'4 | a'4~ a'16 c''16 d''16 f''4. d''8 aes'16 | f'8 f'4. c''4 bes'8. a'16
    }
}

>>

\version "2.18.2"