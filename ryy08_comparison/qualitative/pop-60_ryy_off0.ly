#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*224
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        a''2. gis''8 a''8 | gis''4 a''4 b''4~ b''16 c'''8.~ | c'''1~ | c'''2~ c'''8 g''4. | g''8 a''2~ a''8 g''16 a''8. | gis''4 e''8 d''4. c''8 c''8~ | c''1~ | c''1 | f''16 e''16 f''4~ f''16 e''2~ e''16~ | e''2~ e''8 a'8 b'8 a'8~ | a'16 f''4~ f''16 e''8 d''2~ | d''4 c''4 d''8 c''4.~ | c''1~ | c''1
    }
}

>>

\version "2.18.2"