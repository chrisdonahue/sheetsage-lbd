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
        \key d \major
        \time 4/4
        
        d'4~ d'8. a''4. fis''8 ais16 | b8 d''8 a''8 e''16 fis''4~ fis''16 d''16 cis''8. | d'2 cis''4 d''8. e''16 | d''16 g'4~ g'16 d'2~ d'8 | d'4. a'4~ a'8. ais'16 a'8~ | a'2. b'8 cis''8 | d''2~ d''8 d''4.~ | d''1 | e''4 fis''8 fis''4. e''4~ | e''1
    }
}

>>

\version "2.18.2"