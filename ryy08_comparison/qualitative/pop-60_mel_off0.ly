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
        
        a''2. gis''16 a''8. | gis''4 a''4~ a''16 b''8. c'''4~ | c'''1~ | c'''4 b'8 c''8 e''8 g''4. | g''8 a''2~ a''16 gis''8 a''8 gis''16~ | gis''4 e''4 d''4 c''4~ | c''1~ | c''16 gis2 a4. a16~ | a16 e''16 f''8 d'4. c''8. d'8. | d'8. cis'16 d'4. cis'8 b'4~ | b'8 f''8. d'16 e''8 d''2~ | d''4 c''4 cis''8 c''4. | c'4 cis'4 c'4. ais8 | gis8 cis'4 c'4~ c'16 cis'16 d'4
    }
}

>>

\version "2.18.2"