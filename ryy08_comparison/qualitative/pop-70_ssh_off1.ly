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
        
        fis''4 fis''4. g''8 e''4~ | e''4 d''4. fis''8 cis''4 | b'4. b'8 cis''4 d''8 e''8 | d''2~ d''4. a'8 | a''2~ a''8 a'8 b'8 a'8~ | a'2. b'4~ | b'2~ b'8 d''4 cis''8~ | cis''2~ cis''4. d''8 | e''4. fis''4. e''4 | a'1
    }
}

>>

\version "2.18.2"